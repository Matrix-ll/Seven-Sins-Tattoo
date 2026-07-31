import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { GALLERY_ARTWORKS } from '@/data/galleryData'

export default function GalleryProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = GALLERY_ARTWORKS.find((a) => a.slug === slug)

  useEffect(() => {
    if (project) {
      document.title = `${project.title} \u2014 Seven Sins Tattoo | Gallery | Folkston, GA`
    }
    return () => {
      document.title = 'Seven Sins Tattoo \u2014 Private Atelier for Permanent Art'
    }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/40 mb-6">PROJECT</p>
          <h1 className="font-[Playfair Display] text-3xl font-bold text-white">Project Not Found</h1>
          <p className="mt-4 font-['Cormorant Garamond'] text-lg text-[#C8B89A]/50">This project has not been published yet.</p>
          <Link
            to="/gallery"
            className="mt-8 inline-flex h-12 items-center border border-[#C8B89A]/60 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A]"
          >
            VIEW ALL WORK
          </Link>
        </div>
      </div>
    )
  }

  const isFeatured = 'featured' in project && (project as any).featured
  const bookingQuery = 'bookingQuery' in project ? (project as any).bookingQuery : null
  const bookingUrl = bookingQuery ? `/booking?project=${bookingQuery}` : '/booking'

  return (
    <div className="min-h-screen bg-black">
      <section className="pt-40 pb-16 sm:pt-52 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — Image */}
            <div>
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-auto block"
              />
            </div>
            {/* Right — Text */}
            <div className="flex flex-col justify-center">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
                {project.category}
              </p>
              <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl">
                {project.title}
              </h1>
              <div className="mt-8 space-y-6 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/80">
                <p>{('longDescription' in project ? (project as any).longDescription : project.shortDescription) || project.shortDescription}</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#C8B89A]/10 pt-8">
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/50">Category</p>
                  <p className="mt-1 font-['Cormorant Garamond'] text-base text-[#C8B89A]/80">{project.category}</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/50">Placement</p>
                  <p className="mt-1 font-['Cormorant Garamond'] text-base text-[#C8B89A]/80">{project.placement}</p>
                </div>
                {'sessionFormat' in project && (
                  <div className="col-span-2">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/50">Session Format</p>
                    <p className="mt-1 font-['Cormorant Garamond'] text-base text-[#C8B89A]/80">{(project as any).sessionFormat}</p>
                  </div>
                )}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {isFeatured ? (
                  <Link
                    to={bookingUrl}
                    className="inline-flex h-14 items-center justify-center bg-[#C8B89A] px-10 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#C8B89A]/90"
                  >
                    START A PROJECT
                  </Link>
                ) : (
                  <Link
                    to="/booking"
                    className="inline-flex h-14 items-center justify-center bg-[#C8B89A] px-10 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#C8B89A]/90"
                  >
                    BOOK A CONSULTATION
                  </Link>
                )}
                <Link
                  to="/gallery"
                  className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-sm font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A]"
                >
                  VIEW ALL WORK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
