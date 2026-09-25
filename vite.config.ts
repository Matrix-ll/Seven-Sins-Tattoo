// fig-vite-config v8
import path from 'path'
import { createHmac, timingSafeEqual } from 'crypto'
import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Verifies the preview access token (HMAC-SHA256).
function verifyToken(secret: string, token: string): { exp: number } | null {
  const dot = token.indexOf('.')
  if (dot < 0) return null
  const body = token.slice(0, dot)
  const expected = createHmac('sha256', secret).update(body).digest('base64url')
  const got = Buffer.from(token.slice(dot + 1))
  const exp = Buffer.from(expected)
  if (got.length !== exp.length || !timingSafeEqual(got, exp)) return null
  try {
    const p = JSON.parse(Buffer.from(body, 'base64url').toString())
    if (typeof p.exp !== 'number' || p.exp < Math.floor(Date.now() / 1000)) return null
    return p
  } catch {
    return null
  }
}

// Dormant unless PREVIEW_URL_SECRET is injected into the dev server.
function previewAuthPlugin(): Plugin {
  const secret = process.env.PREVIEW_URL_SECRET
  return {
    name: 'fig-preview-auth',
    configureServer(server) {
      if (!secret) return
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url || '/', 'http://localhost')
        const cookie = (req.headers.cookie || '')
          .split(';')
          .map((c) => c.trim())
          .find((c) => c.startsWith('fig_preview='))
        const cookieToken = cookie ? decodeURIComponent(cookie.slice('fig_preview='.length)) : ''
        if (cookieToken && verifyToken(secret, cookieToken)) return next()
        const urlToken = url.searchParams.get('__fig_preview') || ''
        const payload = urlToken ? verifyToken(secret, urlToken) : null
        if (payload) {
          const maxAge = Math.max(0, payload.exp - Math.floor(Date.now() / 1000))
          url.searchParams.delete('__fig_preview')
          const clean = url.pathname + (url.searchParams.toString() ? `?${url.searchParams}` : '')
          res.writeHead(302, {
            Location: clean,
            'Set-Cookie': `fig_preview=${encodeURIComponent(urlToken)}; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=${maxAge}`,
          })
          res.end()
          return
        }
        res.statusCode = 401
        res.end('Unauthorized')
      })
    },
  }
}

// Visual edit (dev only): injects the fig-inspector bridge into the served HTML.
// apply:'serve' guarantees it never reaches a production build.
function figInspectorPlugin(): Plugin {
  return {
    name: 'fig-inspector',
    apply: 'serve',
    transformIndexHtml() {
      return [
        { tag: 'script', attrs: { type: 'module', src: '/.fig/inspector.js' }, injectTo: 'body' },
      ]
    },
  }
}

export default defineConfig(({ command }) => ({
  plugins: [
    previewAuthPlugin(),
    // Dev serves JSX through the fig-tagger jsx-dev-runtime shim (.fig/), which
    // stamps host elements with data-fig-loc for visual edit. Builds use the
    // default React runtime, so published output carries no tags.
    react(command === 'serve' ? { jsxImportSource: 'fig-tagger' } : {}),
    figInspectorPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'fig-tagger': path.resolve(__dirname, './.fig'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
    hmr: {
      clientPort: 443,
    },
    // Platform capabilities (/__fig/*) and the app's own backend Worker (/api/*)
    // are served by the project's platform origin, not this dev server. Prefix
    // rules, so new capabilities need no config change. The platform origin is a
    // preview host, so /api runs against the TEST-env Worker script. changeOrigin
    // is required: the platform resolves the project from the Host header.
    proxy: process.env.FIG_PLATFORM_ORIGIN
      ? {
          '/__fig': {
            target: process.env.FIG_PLATFORM_ORIGIN,
            changeOrigin: true,
          },
          '/api': {
            target: process.env.FIG_PLATFORM_ORIGIN,
            changeOrigin: true,
          },
        }
      : undefined,
  },
}))
