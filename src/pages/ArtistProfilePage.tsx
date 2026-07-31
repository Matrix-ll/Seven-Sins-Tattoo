import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { artists } from '../data/seed'

const ArtistProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const reducedMotion = useReducedMotion()
  const artist = artists.find(a => a.slug === slug)

  useEffect(() => {
    if (artist?.seoTitle) {
      document.title = artist.seoTitle
    } else {
      document.title = 'Artist Profile — Seven Sins Tattoo | Folkston, GA'
    }
  }, [artist])

  // Real artist profile — renders when CMS has a matching artist record
  if (artist) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white">
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="aspect-[3/4] bg-[#1a1a1a] overflow-hidden">
              <img
                src={artist.image}
                alt={artist.imageAlt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/25 font-light mb-3">
                {artist.role}
              </p>
              <h1 className="text-3xl md:text-5xl font-light tracking-[0.03em] italic mb-3">
                {artist.name}
              </h1>
              {artist.pronouns && (
                <p className="text-xs text-white/30 font-light mb-6">{artist.pronouns}</p>
              )}
              {artist.artisticStatement && (
                <p className="text-white/50 text-sm md:text-base font-light leading-relaxed mb-6 italic">
                  {artist.artisticStatement}
                </p>
              )}
              <p className="text-white/35 text-sm font-light leading-relaxed mb-6">
                {artist.fullBio || artist.bio}
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  to="/booking"
                  className="inline-flex px-6 py-2.5 bg-white text-black text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-white/90 transition-colors"
                >
                  Book With This Artist
                </Link>
                <Link
                  to="/artists"
                  className="inline-flex px-6 py-2.5 border border-white/15 text-white/50 text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:border-white/40 hover:text-white/80 transition-all"
                >
                  All Artists
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Profile coming soon — graceful fallback when no artist matches the slug
  return (
    <div className="min-h-[80vh] bg-[#0d0d0d] text-white flex items-center justify-center">
      <div className="text-center px-6 max-w-md">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-px bg-white/10 mx-auto mb-6"
        />
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[10px] uppercase tracking-[0.28em] text-white/20 font-light mb-5"
        >
          Profile Coming Soon
        </motion.p>
        <motion.h1
          initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-light tracking-[0.03em] italic mb-5"
        >
          Artist Profile
        </motion.h1>
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/35 text-sm font-light leading-relaxed mb-8"
        >
          This artist profile will be available when the studio team is finalized
          and real artist information is published through the CMS.
        </motion.p>
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/artists"
            className="px-6 py-2.5 bg-white text-black text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Back to All Artists
          </Link>
          <Link
            to="/booking"
            className="px-6 py-2.5 border border-white/15 text-white/50 text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:border-white/40 hover:text-white/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ArtistProfilePage
