import { useParams, Link } from 'react-router-dom'
import { CATEGORIES, PRODUCTS } from '@/data/services'

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>()
  const cat = CATEGORIES.find((c) => c.slug === category)

  if (!cat) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-[#C8B89A]/60 font-['Cormorant Garamond'] text-lg">Category not found.</p>
      </div>
    )
  }

  const products = PRODUCTS.filter((p) => p.categorySlug === cat.slug)

  return (
    <div data-component="src/pages/CategoryPage.tsx" className="bg-black min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-40 pb-16 sm:pt-52 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <Link to="/services" className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50 hover:text-[#C8B89A]/80 transition-colors">
            &larr; All Services
          </Link>
          <p className="mt-8 font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
            {cat.name}
          </p>
          <h1 className="mt-4 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {cat.name}
          </h1>
          <p className="mt-6 max-w-2xl font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/80">
            {cat.description}
          </p>
        </div>
      </section>

      {/* ── Product List ── */}
      <section className="pb-32 sm:pb-40">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="space-y-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/services/${product.categorySlug}/${product.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between border border-[#C8B89A]/10 p-6 sm:p-8 transition-colors hover:border-[#C8B89A]/25"
              >
                <div className="flex-1">
                  <h2 className="font-[Playfair Display] text-xl font-bold uppercase leading-[1.15] text-white sm:text-2xl">
                    {product.name}
                  </h2>
                  <p className="mt-2 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/60">
                    {product.shortDescription}
                  </p>
                  <p className="mt-3 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#C8B89A]/40">
                    {product.scaleOrSession}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-8 sm:text-right flex-shrink-0">
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#C8B89A]/50">
                    {product.priceLabel}
                  </p>
                  <p className="font-[Playfair Display] text-2xl font-bold text-[#C8B89A]">
                    ${product.amount.toLocaleString()}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.15em] text-[#C8B89A] group-hover:text-[#C8B89A]/80 transition-colors">
                    DETAILS <span className="text-sm">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
