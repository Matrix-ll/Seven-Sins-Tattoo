import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CATALOG_PRODUCTS } from '@/data/catalog'

const FILTERS = ['ALL', 'FINE LINE', 'LETTERING', 'BLACKWORK', 'REALISM', 'TRADITIONAL', 'JAPANESE', 'COLOR', 'LARGE SCALE'] as const

const FILTER_TO_SLUG: Record<string, string> = {
  'FINE LINE': 'fine-line',
  'LETTERING': 'lettering',
  'BLACKWORK': 'blackwork',
  'REALISM': 'realism',
  'TRADITIONAL': 'traditional',
  'JAPANESE': 'japanese',
  'COLOR': 'color',
  'LARGE SCALE': 'large-scale-custom',
}

export default function ServicesPage() {
  const [active, setActive] = useState<string>('ALL')

  const filtered = active === 'ALL'
    ? CATALOG_PRODUCTS
    : CATALOG_PRODUCTS.filter((p) => p.categorySlug === FILTER_TO_SLUG[active])

  const standardProducts = filtered.filter((p) => p.id <= 25)
  const largeScaleProducts = filtered.filter((p) => p.id >= 26)

  return (
    <div data-component="src/pages/ServicesPage.tsx" className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-12 sm:pt-52 sm:pb-16">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <div className="mb-8 h-px w-12 bg-[#C8B89A]/30" />
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
            TATTOO COLLECTION
          </p>
          <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            CHOOSE YOUR PROJECT
          </h1>
          <p className="mt-6 max-w-2xl font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/60">
            Explore fixed-scope tattoo projects across eight disciplines. Each collection includes a defined starting scope and full upfront price. Placement, references, artist availability, and scheduling are finalized after purchase.
          </p>
        </div>
      </section>

      {/* Payment Notice */}
      <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12 pb-10 sm:pb-14">
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/40 mb-2">
          FULL PAYMENT POLICY
        </p>
        <p className="max-w-2xl font-['Cormorant Garamond'] text-sm leading-relaxed text-[#C8B89A]/35">
          Full payment secures the selected project scope, not a specific appointment date. Final placement, sizing, references, artist availability, and scheduling are confirmed after purchase. Changes outside the listed scope may require an additional charge.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12 pb-10 sm:pb-14">
        <div className="flex flex-wrap gap-2 sm:gap-3 scrollbar-none overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 font-sans text-xs font-medium uppercase tracking-[0.12em] px-4 py-2.5 transition border whitespace-nowrap ${
                active === f
                  ? 'border-[#C8B89A] text-[#C8B89A] bg-[#C8B89A]/5'
                  : 'border-[#C8B89A]/15 text-[#C8B89A]/50 hover:border-[#C8B89A]/40 hover:text-[#C8B89A]/70'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid — Standard (1-25), 3-column desktop */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standardProducts.map((product) => (
              <Link
                key={product.id}
                to={`/services/${product.categorySlug}/${product.slug}`}
                className="group block border border-[#C8B89A]/8 hover:border-[#C8B89A]/20 transition-colors"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/40 mb-1.5">
                    {product.category}
                  </p>
                  <h3 className="font-[Playfair Display] text-xl font-bold uppercase leading-[1.15] text-white group-hover:text-[#C8B89A] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 font-['Cormorant Garamond'] text-sm leading-relaxed text-[#C8B89A]/50">
                    {product.scaleOrSession}
                  </p>
                  <div className="mt-4 flex items-end justify-between">
                    <p className="font-[Playfair Display] text-2xl font-bold text-[#C8B89A]">
                      ${product.amount.toLocaleString()}
                    </p>
                    <span className="shrink-0 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/60 border border-[#C8B89A]/20 px-3 py-1.5 transition-colors group-hover:border-[#C8B89A]/50 group-hover:text-[#C8B89A]/90">
                      VIEW PROJECT
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Large Scale & Custom (26-35) — 2-column premium layout */}
      {largeScaleProducts.length > 0 && (
        <section className="pb-32 sm:pb-40 border-t border-[#C8B89A]/5 pt-16 sm:pt-20">
          <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
            <div className="mb-10 sm:mb-14">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
                LARGE SCALE &amp; CUSTOM
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {largeScaleProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/services/${product.categorySlug}/${product.slug}`}
                  className="group block border border-[#C8B89A]/8 hover:border-[#C8B89A]/15 transition-colors"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/40 mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-[Playfair Display] text-2xl font-bold uppercase leading-[1.1] text-white group-hover:text-[#C8B89A] transition-colors sm:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/50 max-w-lg">
                      {product.scaleOrSession}
                    </p>
                    <div className="mt-6 flex items-end justify-between">
                      <p className="font-[Playfair Display] text-3xl font-bold text-[#C8B89A] sm:text-4xl">
                        ${product.amount.toLocaleString()}
                      </p>
                      <span className="shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C8B89A]/60 border border-[#C8B89A]/20 px-4 py-2 transition-colors group-hover:border-[#C8B89A]/50 group-hover:text-[#C8B89A]/90">
                        VIEW PROJECT
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="border-t border-[#C8B89A]/5 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-3 sm:px-10 text-center">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/40">
            CUSTOM INQUIRY
          </p>
          <p className="mt-6 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/70">
            For a project outside the fixed-scope collection, begin a consultation and our studio will develop a proposal tailored to your vision.
          </p>
          <Link
            to="/booking"
            className="mt-8 inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-sm font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A] hover:text-white"
          >
            BEGIN A CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  )
}
