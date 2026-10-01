import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))

const esc = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'seven-sins-tattoo' })
})

app.post('/api/booking/notify', async (req, res) => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return res.status(500).json({ error: 'Email service not configured.' })

  const {
    full_name,
    email,
    phone,
    contact_method,
    placement,
    size,
    style,
    color_type,
    description,
    preferred_dates,
    artist_preference,
    budget,
  } = req.body ?? {}

  if (!full_name || !email || !placement || !description) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  const from = process.env.RESEND_FROM_EMAIL || 'Seven Sins Tattoo <notifications@send.sevensins.ing>'
  const notifyEmail = process.env.BOOKING_NOTIFY_EMAIL || 'hello@sevensins.ing'

  const details = [
    phone ? `Phone: ${phone}` : null,
    contact_method ? `Preferred contact: ${contact_method}` : null,
    placement ? `Placement: ${placement}` : null,
    size ? `Size: ${size}` : null,
    style ? `Style: ${style}` : null,
    color_type ? `Color type: ${color_type}` : null,
    preferred_dates ? `Preferred dates: ${preferred_dates}` : null,
    artist_preference ? `Artist preference: ${artist_preference}` : null,
    budget ? `Budget: ${budget}` : null,
  ].filter(Boolean).join('\n')

  const sendEmail = async (payload) => {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const body = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(body?.message || `Resend HTTP ${response.status}`)
    return body
  }

  const customer = {
    from,
    to: [email],
    subject: 'Your consultation request — Seven Sins Tattoo',
    html: `<div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:40px 20px;background:#0D0D0D;color:#C8B89A;line-height:1.6"><p style="font-size:11px;text-transform:uppercase;letter-spacing:.2em;opacity:.6">Consultation Received</p><h1 style="color:#fff">Thank You,<br/>${esc(full_name)}</h1><p>Your consultation request has been received. The studio will review your project details and contact you within 48 hours.</p><p style="opacity:.7">This confirms your inquiry — it does not confirm an appointment.</p><pre style="white-space:pre-wrap;color:#C8B89A">${esc(details)}</pre><p>Your idea:<br/>${esc(description)}</p><p style="opacity:.5">Seven Sins Tattoo · hello@sevensins.ing</p></div>`,
  }

  const admin = {
    from,
    to: [notifyEmail],
    subject: `New consultation — ${full_name}`,
    html: `<div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:40px 20px;background:#0D0D0D;color:#C8B89A;line-height:1.6"><p style="font-size:11px;text-transform:uppercase;letter-spacing:.2em;opacity:.6">New Consultation</p><h1 style="color:#fff">${esc(full_name)}</h1><pre style="white-space:pre-wrap;color:#C8B89A">Email: ${esc(email)}\n${esc(details)}</pre><p>Tattoo idea:<br/>${esc(description)}</p></div>`,
  }

  try {
    const [customerResult, adminResult] = await Promise.all([sendEmail(customer), sendEmail(admin)])
    return res.json({ ok: true, customer_email_id: customerResult.id, admin_email_id: adminResult.id })
  } catch (error) {
    console.error(error)
    return res.status(502).json({ error: 'Failed to send email.' })
  }
})

const dist = path.join(__dirname, 'dist')
app.use(express.static(dist))
app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')))

const port = Number(process.env.PORT || 3000)
app.listen(port, '0.0.0.0', () => {
  console.log(`Seven Sins Tattoo listening on port ${port}`)
})
