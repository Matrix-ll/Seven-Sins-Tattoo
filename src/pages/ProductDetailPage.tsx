import { useParams, Link } from 'react-router-dom'
import { PRODUCTS, PRICING_DISCLAIMER, DEPOSIT_DISCLAIMER } from '@/data/services'

export default function ProductDetailPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>()
  const product = PRODUCTS.find((p) => p.categorySlug === category && p.slug === slug)

  if (!product) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-[#C8B89A]/60 font-['Cormorant Garamond'] text-lg">Product not found.</p>
      </div>
    )
  }

  const isDeposit = product.pricingType === 'deposit'
  const actionLabel = isDeposit ? 'RESERVE THIS PROJECT' : 'REQUEST THIS SERVICE'

  return (
    <div data-component="src/pages/ProductDetailPage.tsx" className="bg-black min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-40 pb-16 sm:pt-52 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <Link
            to={`/services/${product.categorySlug}`}
            className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 hover:text-[#C8B89A]/80 transition-colors"
          >
            &larr; {product.category}
          </Link>
          <p className="mt-8 font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
            {product.category}
          </p>
          <h1 className="mt-4 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {product.name}
          </h1>
        </div>
      </section>

      {/* ── Detail Layout ── */}
      <section className="pb-32 sm:pb-40">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px] lg:gap-24">
            {/* Left ── Description & Details */}
            <div>
              <p className="font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
                {product.shortDescription}
              </p>

              <div className="mt-16 space-y-12">
                {/* Scale / Session */}
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-2">
                    SCALE / FORMAT
                  </p>
                  <p className="font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
                    {product.scaleOrSession}
                  </p>
                </div>

                {/* Included */}
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-3">
                    WHAT IS INCLUDED
                  </p>
                  <ul className="space-y-2">
                    {product.includedItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/70">
                        <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-[#C8B89A]/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-3">
                    NOT INCLUDED
                  </p>
                  <ul className="space-y-2">
                    {product.excludedItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/50">
                        <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-[#C8B89A]/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Placements */}
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-3">
                    SUITABLE PLACEMENTS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.suitablePlacements.map((p) => (
                      <span key={p} className="inline-block border border-[#C8B89A]/15 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-[#C8B89A]/50">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right ── Pricing & Actions */}
            <div className="lg:sticky lg:top-28 self-start">
              <div className="border border-[#C8B89A]/15 p-8 sm:p-10">
                {/* Price */}
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/50">
                  {product.priceLabel}
                </p>
                <p className="mt-1 font-[Playfair Display] text-4xl font-bold text-[#C8B89A]">
                  ${product.amount.toLocaleString()}
                </p>
                <p className="mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-[#C8B89A]/40">
                  {isDeposit ? 'RESERVATION DEPOSIT' : 'STARTING PRICE'}
                </p>

                {/* Disclaimers */}
                <p className="mt-6 font-['Cormorant Garamond'] text-sm leading-relaxed text-[#C8B89A]/50">
                  {PRICING_DISCLAIMER}
                </p>
                {isDeposit && (
                  <p className="mt-3 font-['Cormorant Garamond'] text-sm leading-relaxed text-[#C8B89A]/50">
                    {DEPOSIT_DISCLAIMER}
                  </p>
                )}

                {/* Actions */}
                <div className="mt-8 space-y-4">
                  <Link
                    to={`/booking?service=${product.bookingQueryValue}`}
                    className="flex h-14 w-full items-center justify-center border border-[#C8B89A]/60 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A] hover:text-[#C8B89A]"
                  >
                    {actionLabel}
                  </Link>
                  <Link
                    to="/booking"
                    className="flex h-12 w-full items-center justify-center font-sans text-xs font-medium uppercase tracking-[0.15em] text-[#C8B89A]/50 transition hover:text-[#C8B89A]/80"
                  >
                    BOOK A CONSULTATION
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
