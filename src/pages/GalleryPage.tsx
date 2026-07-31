import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GALLERY_ARTWORKS,
  GALLERY_GRID_ITEMS,
  FEATURED_PROJECTS,
  GALLERY_FILTERS,
  ATELIER_IMAGE,
} from '@/data/galleryData'

const slugFromStyle = (s: string) => (s === 'All' ? '' : s.toLowerCase().replace(/\s+/g, '-'))

export default function GalleryPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const styleParam = searchParams.get('style') || ''
  const activeStyle =
    GALLERY_FILTERS.find((s) => slugFromStyle(s) === styleParam) || 'All'

  const filtered =
    activeStyle === 'All'
      ? GALLERY_GRID_ITEMS
      : GALLERY_GRID_ITEMS.filter((a) => slugFromStyle(a.category) === slugFromStyle(activeStyle))

  useEffect(() => {
    document.title = 'Gallery \u2014 Seven Sins Tattoo | Portfolio | Folkston, GA'
  }, [])

  const setStyle = (style: string) => {
    const slug = slugFromStyle(style)
    setSearchParams(slug ? { style: slug } : {}, { replace: true })
  }

  return (
    <div className="min-h-screen bg-black">
      {/* ── Hero ── */}
      <section className="pt-40 pb-16 sm:pt-52 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12 text-center">
          <div className="mx-auto mb-8 h-px w-12 bg-[#C8B89A]/30" />
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
            THE COLLECTION
          </p>
          <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            A GALLERY FOR<br />
            <span className="italic">PERMANENT ART</span>
          </h1>
          <p className="mt-6 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/60 max-w-xl mx-auto">
            Curated tattoo work that reflects craftsmanship, intention, and devotion to the art of permanence.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <div className="border-b border-[#C8B89A]/5 sm:sticky sm:top-[72px] sm:z-40 sm:bg-black/90 sm:backdrop-blur-md">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-12 overflow-x-auto">
          <div className="flex gap-1 py-4 min-w-max">
            {GALLERY_FILTERS.map((style) => (
              <button
                key={style}
                onClick={() => setStyle(style)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 whitespace-nowrap ${
                  activeStyle === style
                    ? 'bg-[#C8B89A] text-black rounded-full'
                    : 'text-[#C8B89A]/40 hover:text-[#C8B89A]/70'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <section className="max-w-[90rem] mx-auto px-3 sm:px-4 md:px-6 lg:px-12 py-10 sm:py-14">
        {filtered.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            >
              {filtered.map((artwork) => (
                <Link
                  key={artwork.id}
                  to={`/gallery/${artwork.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-[#111]">
                    <img
                      src={artwork.image}
                      alt={artwork.imageAlt}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        artwork.aspectRatioClass || 'aspect-[3/4]'
                      }`}
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-end p-4 sm:p-5">
                      <div className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-75">
                        <p className="text-white/90 text-xs font-medium tracking-wider uppercase">
                          {artwork.title}
                        </p>
                        <p className="text-white/50 text-[10px] mt-0.5 uppercase">
                          {artwork.placement}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="py-20 text-center">
            <p className="font-['Cormorant Garamond'] text-xl text-[#C8B89A]/40">
              Artwork for this category is being curated.
            </p>
            <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.15em] text-[#C8B89A]/25">
              New work will be added to the collection soon.
            </p>
          </div>
        )}
      </section>

      {/* ── Featured Projects ── */}
      {FEATURED_PROJECTS.length > 0 && (
        <section className="border-t border-[#C8B89A]/10 bg-black py-20 sm:py-28">
          <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70 text-center mb-14">
              FEATURED PROJECTS
            </p>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {FEATURED_PROJECTS.map((project) => (
                <div key={project.id} className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10 bg-[#0a0a0a]">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover aspect-[3/4]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-6 pb-10 lg:px-0 lg:pb-0 lg:pr-8">
                    <h3 className="font-[Playfair Display] text-2xl font-bold uppercase text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.15em] text-[#C8B89A]/50">
                      {project.category} &middot; {project.placement}
                    </p>
                    <p className="mt-4 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/60">
                      {project.shortDescription}
                    </p>
                    <div className="mt-6">
                      <Link
                        to={`/gallery/${project.slug}`}
                        className="inline-flex h-11 items-center border border-[#C8B89A]/60 px-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A]"
                      >
                        VIEW PROJECT
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── The Atelier ── */}
      <section className="border-t border-[#C8B89A]/10 bg-black py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="overflow-hidden">
              <img
                src={ATELIER_IMAGE.image}
                alt={ATELIER_IMAGE.imageAlt}
                className="w-full h-auto aspect-[3/2] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
                BEHIND THE CRAFT
              </p>
              <h2 className="mt-6 font-[Playfair Display] text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
                THE ATELIER
              </h2>
              <p className="mt-6 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/70 max-w-lg">
                Every permanent work begins with preparation, privacy, and intention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#C8B89A]/10 bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="font-[Playfair Display] text-3xl font-bold uppercase text-white sm:text-4xl">
            READY TO BEGIN <span className="italic">YOUR PIECE</span>?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex h-14 items-center justify-center bg-[#C8B89A] px-10 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#C8B89A]/90"
            >
              BOOK APPOINTMENT
            </Link>
            <Link
              to="/services"
              className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-sm font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A]"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
