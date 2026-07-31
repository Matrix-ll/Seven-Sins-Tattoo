import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MEMBERSHIPS } from '@/data/services'

const BENEFITS = [
  { title: 'One-time membership payment', desc: 'A single purchase, not a subscription.' },
  { title: 'Ongoing discount on eligible tattoo services', desc: 'Your discount applies to every qualifying session.' },
  { title: 'Valid across qualifying future appointments', desc: 'Use your benefit whenever you book eligible work.' },
  { title: 'No monthly subscription or recurring billing', desc: 'Pay once. No automatic charges.' },
]

function StripeButton({ url, label }: { url?: string; label: string }) {
  const [loading, setLoading] = useState(false)

  if (!url) {
    return (
      <Link
        to="/membership"
        className="mt-8 flex h-14 w-full items-center justify-center border border-[#C8B89A]/60 text-sm font-semibold uppercase tracking-[0.18em] text-[#C8B89A]/40 transition cursor-not-allowed"
      >
        COMING SOON
      </Link>
    )
  }

  const handleClick = (e: React.MouseEvent) => {
    if (loading) {
      e.preventDefault()
      return
    }
    setLoading(true)
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`mt-8 flex h-14 w-full items-center justify-center border text-sm font-semibold uppercase tracking-[0.18em] transition ${
        loading
          ? 'border-[#C8B89A]/30 text-[#C8B89A]/30 cursor-not-allowed'
          : 'border-[#C8B89A]/60 text-[#C8B89A] hover:border-[#C8B89A] hover:text-white'
      }`}
      aria-disabled={loading}
    >
      {loading ? 'REDIRECTING TO SECURE CHECKOUT' : label}
    </a>
  )
}

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-12 sm:pt-52 sm:pb-16">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <div className="h-px w-12 bg-[#C8B89A]/30 mb-8" />
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
            MEMBERSHIP
          </p>
          <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            COMMIT TO<br />THE CRAFT
          </h1>
          <p className="mt-6 max-w-2xl font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
            For those who collect permanent art as a practice. Membership provides ongoing benefits on eligible tattoo services at the studio.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERSHIPS.map((m) => (
              <div
                key={m.id}
                className="border border-[#C8B89A]/15 p-6 sm:p-10 flex flex-col hover:border-[#C8B89A]/30 transition-colors duration-300"
              >
                <div className="h-px w-8 bg-[#C8B89A]/30 mb-6" />
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50">
                  {m.name.toUpperCase()}
                </p>
                <p className="mt-3 font-[Playfair Display] text-5xl font-bold text-[#C8B89A]">
                  ${m.amount}
                </p>
                <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.15em] text-[#C8B89A]/50">
                  ONE-TIME PAYMENT
                </p>
                <p className="mt-5 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80 flex-1">
                  {m.benefit}
                </p>
                <p className="mt-2 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/40">
                  {m.bestFor}
                </p>
                <StripeButton url={m.stripeUrl} label={m.buttonLabel} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="border-t border-[#C8B89A]/5 py-14 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.20em] text-[#C8B89A]/40">
            MEMBERSHIP BENEFITS
          </p>
          <h2 className="mt-4 font-[Playfair Display] text-3xl font-bold uppercase leading-[1.15] text-white sm:text-4xl">
            Designed for<br />Returning Collectors
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="border border-[#C8B89A]/10 p-6">
                <h3 className="font-[Playfair Display] text-lg font-bold uppercase text-white">
                  {b.title}
                </h3>
                <p className="mt-2 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/60">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy */}
      <section className="border-t border-[#C8B89A]/5 py-14 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.20em] text-[#C8B89A]/40 mb-6">
            MEMBERSHIP POLICY
          </p>
          <div className="max-w-2xl space-y-2 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/50">
            <p>Benefits apply only to eligible tattoo services.</p>
            <p>Deposits, gratuity, merchandise, gift cards, taxes, and promotional offers are excluded unless explicitly stated.</p>
            <p>Memberships are non-transferable and non-refundable unless required by law.</p>
            <p>Membership discounts cannot be combined with other promotions.</p>
            <p>Final terms must be accepted before payment.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[#C8B89A]/5 py-20 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12 text-center">
          <h2 className="font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl">
            Choose Your<br />Membership
          </h2>
          <p className="mt-5 max-w-lg mx-auto font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
            Select the level that best matches how you plan to collect.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {MEMBERSHIPS.map((m) => (
              m.stripeUrl ? (
                <a
                  key={m.id}
                  href={m.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-sm font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A] hover:text-white"
                >
                  {m.buttonLabel}
                </a>
              ) : (
                <span
                  key={m.id}
                  className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/30 px-10 text-sm font-semibold uppercase tracking-[0.15em] text-[#C8B89A]/30"
                >
                  {m.buttonLabel}
                </span>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Individual membership detail pages — redirect to main membership with anchor
export function MembershipDetailPage() {
  return (
    <MembershipPage />
  )
}
