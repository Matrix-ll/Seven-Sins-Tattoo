import { useParams, Link } from 'react-router-dom'
import { CATEGORIES_V2, CATALOG_PRODUCTS } from '@/data/catalog'

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>()
  const cat = CATEGORIES_V2.find((c) => c.slug === category)

  if (!cat) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-[#C8B89A]/60 font-['Cormorant Garamond'] text-lg">Category not found.</p>
      </div>
    )
  }

  const products = CATALOG_PRODUCTS.filter((p) => p.categorySlug === cat.slug && !p.pendingImage)

  return (
    <div data-component="src/pages/CategoryPage.tsx" className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 sm:pt-52 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
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

      {/* Product Grid - 3 columns desktop, 1 column mobile */}
      <section className="pb-32 sm:pb-40">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/services/${product.categorySlug}/${product.slug}`}
                className="group block border border-[#C8B89A]/10 hover:border-[#C8B89A]/25 transition-colors"
              >
                {/* Image */}
                {product.image ? (
                  <div className="aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] flex items-center justify-center bg-[#0A0A0A]">
                    <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#C8B89A]/20">Image Pending</p>
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/40 mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-[Playfair Display] text-lg font-bold uppercase leading-[1.15] text-white group-hover:text-[#C8B89A] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#C8B89A]/50">
                    {product.scaleOrSession}
                  </p>
                  <div className="mt-4 flex items-end justify-between">
                    <p className="font-[Playfair Display] text-2xl font-bold text-[#C8B89A]">
                      ${product.amount.toLocaleString()}
                    </p>
                    <span className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/60 border border-[#C8B89A]/20 px-3 py-1.5 transition-colors group-hover:border-[#C8B89A]/50 group-hover:text-[#C8B89A]/90">
                      VIEW DETAILS
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
