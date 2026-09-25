import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const ATELIER_IMG =
  'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531290177-kj9ijjlxjl8.png'

/* ══════════════════════════════════════════════════════════════
   Shared legal-page shell — hero, article column, closing CTA.
   Used by the Privacy Policy and Terms of Service pages so both
   stay visually identical to the rest of the site.
   ══════════════════════════════════════════════════════════════ */

export function PolicyLayout({
  eyebrow,
  title,
  titleItalic,
  intro,
  updated,
  children,
}: {
  eyebrow: string
  title: string
  titleItalic: string
  intro: string
  updated: string
  children: ReactNode
}) {
  return (
    <div data-component="src/components/PolicyLayout.tsx" className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden">
      {/* ═══ Hero ═══ */}
      <section className="relative flex items-center py-32 md:py-40">
        <div className="absolute inset-0">
          <img
            src={ATELIER_IMG}
            alt=""
            className="w-full h-full object-cover opacity-10"
            loading="eager"
            width={1800}
            height={1012}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/85 via-[#0d0d0d]/50 to-[#0d0d0d]" />
        </div>
        <div className="relative z-10 w-full max-w-3xl mx-auto px-3 sm:px-6 md:px-12">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C8B89A]/60 font-light mb-6">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.02em] leading-[1.08] mb-5">
            {title}
            <br />
            <span className="italic">{titleItalic}</span>
          </h1>
          <p className="text-white/35 text-sm md:text-base font-light leading-relaxed max-w-lg">
            {intro}
          </p>
          <p className="mt-7 text-[11px] uppercase tracking-[0.18em] text-white/20 font-light">
            Last updated {updated}
          </p>
        </div>
      </section>

      {/* ═══ Document body ═══ */}
      <article className="max-w-3xl mx-auto px-3 sm:px-6 md:px-12 pb-8">{children}</article>

      {/* ═══ Closing ═══ */}
      <section className="max-w-3xl mx-auto px-3 sm:px-6 md:px-12 py-20">
        <div className="border-t border-white/[0.06] pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-sm text-white/30 font-light leading-relaxed max-w-md">
            Questions about this document can be sent to the studio directly.
          </p>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center justify-center px-8 py-3.5 border border-white/12 text-white/40 text-xs uppercase tracking-[0.2em] font-medium hover:border-white/30 hover:text-white/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            Contact the Studio
          </Link>
        </div>
      </section>
    </div>
  )
}

/* ── A numbered policy section ── */
export function PolicySection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-white/[0.06] py-9">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-[11px] tabular-nums text-[#C8B89A]/40 font-light">{number}</span>
        <h2 className="text-lg md:text-xl font-light tracking-[0.01em] text-white/85">{title}</h2>
      </div>
      <div className="space-y-4 pl-0 md:pl-8">{children}</div>
    </section>
  )
}

/* ── Body paragraph ── */
export function PolicyText({ children }: { children: ReactNode }) {
  return (
    <p className="text-[14px] md:text-[15px] text-white/45 font-light leading-[1.85]">{children}</p>
  )
}

/* ── Bulleted list ── */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[14px] md:text-[15px] text-white/45 font-light leading-[1.8]">
          <span className="mt-[0.7em] h-px w-2.5 shrink-0 bg-[#C8B89A]/35" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ── Inline link ── */
export function PolicyLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="text-[#C8B89A]/70 underline decoration-[#C8B89A]/25 underline-offset-2 transition-colors hover:text-[#C8B89A]"
    >
      {children}
    </Link>
  )
}

/* ── External mail link ── */
export function PolicyMail({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="text-[#C8B89A]/70 underline decoration-[#C8B89A]/25 underline-offset-2 transition-colors hover:text-[#C8B89A]"
    >
      {address}
    </a>
  )
}

export const STUDIO_CONTACT = {
  email: 'hello@sevensins.ing',
  address: '152 Everett St, Folkston, GA 31537',
  name: 'Seven Sins Tattoo',
}
