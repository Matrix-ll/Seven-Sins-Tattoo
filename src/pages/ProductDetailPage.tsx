import { useParams, Link } from 'react-router-dom'
import { CATALOG_PRODUCTS } from '@/data/catalog'
import { Img } from '@/components/ui/Img'

export default function ProductDetailPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>()
  const product = CATALOG_PRODUCTS.find((p) => p.categorySlug === category && p.slug === slug)

  if (!product || product.pendingImage) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50 mb-6">PRODUCT</p>
          <p className="font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/60">
            {product ? 'Image pending. This product will be available when approved photography is supplied.' : 'Product not found.'}
          </p>
          <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-[#C8B89A] hover:text-[#C8B89A]/80 transition-colors">
            &larr; ALL SERVICES
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div data-component="src/pages/ProductDetailPage.tsx" className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 sm:pt-52 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
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

      {/* Detail Layout */}
      <section className="pb-32 sm:pb-40">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px] lg:gap-24">
            {/* Left: Image */}
            <div>
              {product.image ? (
                <Img
                  src={product.image}
                  alt={product.imageAlt}
                  fallbackSeed={product.slug}
                  className="w-full"
                />
              ) : null}
            </div>

            {/* Right: Details */}
            <div>
              <p className="font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="mt-10">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-1">PRICE</p>
                <p className="font-[Playfair Display] text-4xl font-bold text-[#C8B89A]">${product.amount.toLocaleString()}</p>
                <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.12em] text-[#C8B89A]/40">FULL PAYMENT</p>
              </div>

              <div className="mt-12 space-y-8">
                {/* Scale / Session */}
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-2">SCALE / SCOPE</p>
                  <p className="font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">{product.scaleOrSession}</p>
                </div>

                {/* Color */}
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-2">AVAILABLE IN</p>
                  <p className="font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">{product.colorType}</p>
                </div>

                {/* Suggested Placement */}
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-2">SUGGESTED PLACEMENT</p>
                  <ul className="space-y-1">
                    {product.suitablePlacements.map((p) => (
                      <li key={p} className="font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/60">{p}</li>
                    ))}
                  </ul>
                </div>

                {/* Included */}
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-2">WHAT IS INCLUDED</p>
                  <ul className="space-y-1">
                    {product.includedItems.map((item) => (
                      <li key={item} className="font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/60">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 mb-2">NOT INCLUDED</p>
                  <ul className="space-y-1">
                    {product.excludedItems.map((item) => (
                      <li key={item} className="font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/50">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Notices */}
              <div className="mt-12 space-y-4 pt-8 border-t border-[#C8B89A]/10">
                <p className="font-sans text-[10px] leading-relaxed text-[#C8B89A]/30">
                  SCOPE CHANGE NOTICE: Significant changes to the approved design after consultation may require a revised estimate. Your artist will discuss any adjustments before proceeding.
                </p>
                <p className="font-sans text-[10px] leading-relaxed text-[#C8B89A]/30">
                  PAYMENT POLICY: Full payment is required to reserve this project. Pricing represents the full tattoo fee. Gratuity is not included.
                </p>
              </div>

              {/* Policy Notice */}
              <div className="mt-12 pt-8 border-t border-[#C8B89A]/10 space-y-3">
                <p className="font-sans text-[11px] leading-relaxed text-[#C8B89A]/40">
                  Full payment reserves the selected project scope, not a specific appointment date. Placement, sizing, references, artist availability, and scheduling will be confirmed after payment. Changes outside the listed scope may require an additional charge.
                </p>
                <p className="font-sans text-[10px] leading-relaxed text-[#C8B89A]/30">
                  For questions before payment, use ASK ABOUT THIS PROJECT.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                {product.stripeUrl ? (
                  <a
                    href={product.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-full items-center justify-center text-sm font-semibold uppercase tracking-[0.18em] transition bg-[#C8B89A] text-black hover:bg-[#D4C8A8]"
                  >
                    PURCHASE & PAY IN FULL
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex h-14 w-full items-center justify-center border border-[#C8B89A]/20 text-sm font-semibold uppercase tracking-[0.18em] text-[#C8B89A]/30 cursor-not-allowed"
                  >
                    PAYMENT LINK COMING NEXT
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
