import { Link } from 'react-router-dom'

const TIERS = [
  { label: 'EMERGING ARTIST', range: '$100\u2013$150', desc: 'per hour' },
  { label: 'EXPERIENCED ARTIST', range: '$150\u2013$250', desc: 'per hour' },
  { label: 'RENOWNED ARTIST', range: '$300\u2013$500', desc: 'per hour' },
]

export default function PricingPage() {
  return (
    <div data-component="src/pages/PricingPage.tsx" className="bg-black min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-40 pb-20 sm:pt-52 sm:pb-28">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
            PRICING
          </p>
          <h1 className="mt-6 font-[Playfair Display] text-5xl font-black uppercase leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            THE VALUE<br />OF PERMANENCE
          </h1>
          <p className="mt-8 max-w-2xl font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/80">
            Every commissioned piece is priced individually. Rates reflect the artist's experience, the complexity of the design, and the time required to execute work that will last a lifetime.
          </p>
        </div>
      </section>

      {/* ── Artist Tiers ── */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <div key={tier.label} className="border border-[#C8B89A]/15 p-8 sm:p-10">
                <div className="h-px w-8 bg-[#C8B89A]/30 mb-6" />
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-4">
                  {tier.label}
                </p>
                <p className="font-[Playfair Display] text-4xl font-bold text-[#C8B89A]">
                  {tier.range}
                </p>
                <p className="mt-1 font-['Cormorant Garamond'] text-base text-[#C8B89A]/50">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Minimum ── */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="border border-[#C8B89A]/10 p-8 sm:p-10 text-center">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/40 mb-3">
              STUDIO MINIMUM
            </p>
            <p className="font-[Playfair Display] text-5xl font-bold text-[#C8B89A]">
              $100
            </p>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/40 mb-4">
              PRICING NOTES
            </p>
            <div className="space-y-2 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/50">
              <p>Final pricing depends on placement, scale, complexity, detail, artist selection, and estimated session length.</p>
              <p>Gratuity is not included.</p>
              <p>All prices shown are starting estimates. A detailed quote is provided during consultation before any commitment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTAs ── */}
      <section className="pb-32 sm:pb-40">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A]"
            >
              EXPLORE SERVICES
            </Link>
            <Link
              to="/booking"
              className="flex h-14 items-center justify-center bg-[#C8B89A] px-10 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#C8B89A]/90"
            >
              REQUEST A CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
