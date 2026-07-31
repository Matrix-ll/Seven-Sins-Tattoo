import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { tattooStyles, styleComparisons, comparisonCriteria } from '../data/seed'

// ── helpers ──────────────────────────────────────────────────────────────────

const staggerItem = (i: number, reducedMotion: boolean | null) =>
  reducedMotion
    ? {}
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.1 + i * 0.08 } }

const fadeIn = (reducedMotion: boolean | null, delay = 0) =>
  reducedMotion
    ? {}
    : { initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.55, delay } }

// ── image component ──────────────────────────────────────────────────────────

const StyleImage: React.FC<{
  src: string
  alt: string
  className?: string
  priority?: boolean
  aspectClass?: string
}> = ({ src, alt, className = '', priority = false, aspectClass = 'aspect-[4/3]' }) => {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) { setInView(true); return }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: '300px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [priority])

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#1a1a1a] ${aspectClass} ${className}`}>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          width={800}
          height={600}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
    </div>
  )
}

// ── section components ───────────────────────────────────────────────────────

const StyleSectionImageLeft: React.FC<{ style: typeof tattooStyles[number] }> = ({ style }) => {
  const reducedMotion = useReducedMotion()
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-white/[0.04]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <StyleImage src={style.heroImage} alt={style.heroImageAlt} aspectClass="aspect-[4/5]" />
        <div>
          <motion.p
            {...fadeIn(reducedMotion)}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/25 font-light mb-3"
          >
            0{style.displayOrder} — Style
          </motion.p>
          <motion.h2
            {...fadeIn(reducedMotion, 0.05)}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.03em] italic mb-5"
          >
            {style.name}
          </motion.h2>
          <motion.p
            {...fadeIn(reducedMotion, 0.1)}
            className="text-white/50 text-sm md:text-base font-light leading-relaxed mb-8"
          >
            {style.fullDescription}
          </motion.p>
          <StyleAttributes style={style} reducedMotion={reducedMotion} />
        </div>
      </div>
    </section>
  )
}

const StyleSectionImageRight: React.FC<{ style: typeof tattooStyles[number] }> = ({ style }) => {
  const reducedMotion = useReducedMotion()
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-white/[0.04]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <motion.p
            {...fadeIn(reducedMotion)}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/25 font-light mb-3"
          >
            0{style.displayOrder} — Style
          </motion.p>
          <motion.h2
            {...fadeIn(reducedMotion, 0.05)}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.03em] italic mb-5"
          >
            {style.name}
          </motion.h2>
          <motion.p
            {...fadeIn(reducedMotion, 0.1)}
            className="text-white/50 text-sm md:text-base font-light leading-relaxed mb-8"
          >
            {style.fullDescription}
          </motion.p>
          <StyleAttributes style={style} reducedMotion={reducedMotion} />
        </div>
        <div className="order-1 lg:order-2">
          <StyleImage src={style.heroImage} alt={style.heroImageAlt} aspectClass="aspect-[4/5]" />
        </div>
      </div>
    </section>
  )
}

const StyleSectionFullImage: React.FC<{ style: typeof tattooStyles[number] }> = ({ style }) => {
  const reducedMotion = useReducedMotion()
  return (
    <section className="border-t border-white/[0.04]">
      <div className="relative">
        <StyleImage
          src={style.heroImage}
          alt={style.heroImageAlt}
          aspectClass="aspect-[16/7] md:aspect-[16/6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-24 pb-12 md:pb-16 max-w-7xl mx-auto">
          <motion.p
            {...fadeIn(reducedMotion)}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/35 font-light mb-3"
          >
            0{style.displayOrder} — Style
          </motion.p>
          <motion.h2
            {...fadeIn(reducedMotion, 0.05)}
            className="text-2xl md:text-4xl font-light tracking-[0.03em] italic mb-4"
          >
            {style.name}
          </motion.h2>
          <motion.p
            {...fadeIn(reducedMotion, 0.1)}
            className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-2xl"
          >
            {style.fullDescription}
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <StyleAttributes style={style} reducedMotion={reducedMotion} layout="wide" />
      </div>
    </section>
  )
}

const StyleSectionSplit: React.FC<{ style: typeof tattooStyles[number] }> = ({ style }) => {
  const reducedMotion = useReducedMotion()
  return (
    <section className="border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <motion.p
              {...fadeIn(reducedMotion)}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/25 font-light mb-3"
            >
              0{style.displayOrder} — Style
            </motion.p>
            <motion.h2
              {...fadeIn(reducedMotion, 0.05)}
              className="text-2xl md:text-3xl font-light tracking-[0.03em] italic mb-5"
            >
              {style.name}
            </motion.h2>
            <motion.p
              {...fadeIn(reducedMotion, 0.1)}
              className="text-white/50 text-sm md:text-base font-light leading-relaxed"
            >
              {style.fullDescription}
            </motion.p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 gap-3">
            <StyleImage src={style.heroImage} alt={style.heroImageAlt} aspectClass="aspect-square" />
            <StyleImage src={style.heroImage} alt={`${style.heroImageAlt} — detail`} aspectClass="aspect-square" />
          </div>
        </div>
        <div className="mt-10 lg:mt-14">
          <StyleAttributes style={style} reducedMotion={reducedMotion} layout="wide" />
        </div>
      </div>
    </section>
  )
}

// ── attributes ───────────────────────────────────────────────────────────────

const attrItem = (label: string, value: string, i: number, rm: boolean | null) => (
  <motion.div key={label} {...staggerItem(i, rm)} className="border-t border-white/[0.04] pt-4">
    <dt className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-medium mb-1">{label}</dt>
    <dd className="text-sm text-white/60 font-light leading-relaxed">{value}</dd>
  </motion.div>
)

const StyleAttributes: React.FC<{
  style: typeof tattooStyles[number]
  reducedMotion: boolean | null
  layout?: 'stack' | 'wide'
}> = ({ style, reducedMotion, layout = 'stack' }) => {
  const attrs = [
    { label: 'Visual characteristics', value: style.visualCharacteristics },
    { label: 'Best suited for', value: style.suitableSubjects },
    { label: 'Common placements', value: style.recommendedPlacements },
    { label: 'Scale guidance', value: style.scaleGuidance },
    { label: 'Aging & longevity', value: style.agingConsiderations },
    { label: 'Maintenance', value: style.maintenanceGuidance },
    { label: 'Session complexity', value: style.sessionComplexity },
  ]

  return (
    <div>
      <dl className={`grid ${layout === 'wide' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1' : 'grid-cols-1 gap-1'}`}>
        {attrs.map((a, i) => attrItem(a.label, a.value, i, reducedMotion))}
      </dl>
      <motion.div
        {...fadeIn(reducedMotion, 0.3)}
        className="mt-8 flex flex-wrap gap-3"
      >
        <Link
          to={style.galleryFilterUrl}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/50 text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:border-white/40 hover:text-white/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
        >
          View {style.name} in Gallery
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <Link
          to="/booking"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          Book Consultation
        </Link>
      </motion.div>
    </div>
  )
}

// ── comparison table ─────────────────────────────────────────────────────────

const ComparisonTable: React.FC = () => {
  const reducedMotion = useReducedMotion()
  const slugs = ['fine-line', 'blackwork', 'japanese', 'realism', 'geometric', 'color']

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 border-t border-white/[0.04]">
      <motion.p
        {...fadeIn(reducedMotion)}
        className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/25 font-light mb-3 text-center"
      >
        Compare
      </motion.p>
      <motion.h2
        {...fadeIn(reducedMotion, 0.05)}
        className="text-xl md:text-2xl font-light tracking-[0.03em] mb-10 text-center"
      >
        Styles at a Glance
      </motion.h2>

      <div className="overflow-x-auto scrollbar-none">
        <div className="min-w-[640px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="py-4 pr-4 text-[10px] uppercase tracking-[0.2em] text-white/25 font-medium w-32" />
                {slugs.map(slug => (
                  <th key={slug} className="py-4 px-3 text-center text-[10px] uppercase tracking-[0.15em] text-white/45 font-medium">
                    {tattooStyles.find(s => s.slug === slug)?.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonCriteria.map((crit) => (
                <tr key={crit.key} className="border-b border-white/[0.03] hover:bg-white/[0.01] transition-colors">
                  <td className="py-3 pr-4 text-[11px] text-white/35 font-light">
                    {crit.label}
                  </td>
                  {slugs.map(slug => (
                    <td key={slug} className="py-3 px-3 text-center text-[11px] text-white/50 font-light leading-snug">
                      {styleComparisons[slug]?.[crit.key] || '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <motion.p
        {...fadeIn(reducedMotion, 0.2)}
        className="mt-6 text-center text-[11px] text-white/20 font-light italic"
      >
        These are qualitative descriptions, not ratings. No style is inherently better — the right choice depends on your vision, body, and priorities.
      </motion.p>
    </section>
  )
}

// ── body placement ───────────────────────────────────────────────────────────

const placements = [
  { area: 'Arms', notes: 'Versatile canvas. Outer arm offers a flat, stable surface. Inner arm is softer and more sensitive. Full sleeves allow for narrative composition across the entire limb.' },
  { area: 'Legs', notes: 'Thighs provide generous flat space ideal for large-scale work. Calves offer rounded surfaces suited to vertical compositions. Lower leg healing can be slower due to circulation.' },
  { area: 'Chest', notes: 'Broad, relatively stable canvas. Works well for symmetrical compositions. The pectoral muscle moves significantly — designs should be evaluated in both relaxed and flexed positions.' },
  { area: 'Back', notes: 'The largest uninterrupted canvas on the body. Ideal for full-scale narrative work and large compositions. Relatively low sun exposure helps with long-term preservation.' },
  { area: 'Ribs', notes: 'A sensitive area with significant movement during breathing. Designs should account for the natural expansion and contraction of the ribcage. Fine detail may be challenging.' },
  { area: 'Hands & fingers', notes: 'High-friction, high-exposure areas. Tattoos here fade faster and require more frequent touch-ups. Fine detail is difficult to preserve. Bold, simple designs perform best.' },
  { area: 'Neck', notes: 'Highly visible and relatively thin-skinned. Healing requires care due to constant movement. Design should be evaluated from multiple angles as the neck is rarely seen straight-on.' },
  { area: 'Small placements', notes: 'Behind the ear, wrist, ankle, and similar small areas suit minimal work. Scale must be carefully considered — detail below a certain size will not age legibly.' },
]

const BodyPlacement: React.FC = () => {
  const reducedMotion = useReducedMotion()
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 border-t border-white/[0.04]">
      <motion.p
        {...fadeIn(reducedMotion)}
        className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/25 font-light mb-3"
      >
        Placement
      </motion.p>
      <motion.h2
        {...fadeIn(reducedMotion, 0.05)}
        className="text-xl md:text-2xl font-light tracking-[0.03em] mb-3"
      >
        Where the Art Lives
      </motion.h2>
      <motion.p
        {...fadeIn(reducedMotion, 0.08)}
        className="text-white/35 text-sm font-light leading-relaxed max-w-lg mb-10"
      >
        Placement shapes everything — composition, scale, detail level, and how the work ages.
        These are general observations, not medical guidance. Every consultation includes a
        placement discussion specific to your body and your piece.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.03]">
        {placements.map((p, i) => (
          <motion.div
            key={p.area}
            {...staggerItem(i, reducedMotion)}
            className="bg-[#0d0d0d] p-6 border border-white/[0.03]"
          >
            <h3 className="text-sm font-medium tracking-[0.1em] uppercase mb-2">{p.area}</h3>
            <p className="text-white/35 text-xs font-light leading-relaxed">{p.notes}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── page ─────────────────────────────────────────────────────────────────────

const StylesPage: React.FC = () => {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    document.title = 'Tattoo Styles — Seven Sins Tattoo | Artistic Disciplines & Techniques | Folkston, GA'
  }, [])

  // alternate layout pattern: left, right, full, left, split, right
  const sectionLayouts = ['left', 'right', 'full', 'left', 'split', 'right']

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* ═══ hero ═══ */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531303136-hyq1wt1he77.png"
            alt="Editorial placeholder — tattoo studio atmosphere"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            width={1800}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-[#0d0d0d]/30 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-16">
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C8B89A]/70 font-light mb-6"
          >
            Seven Sins Tattoo &middot; Folkston, Georgia
          </motion.p>

          <motion.h1
            initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.03em] leading-[1.1] mb-6"
          >
            The Art
            <br />
            <span className="italic">of Style</span>
          </motion.h1>

          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-sm md:text-lg font-light leading-relaxed max-w-lg"
          >
            A guide to the disciplines, techniques, and visual languages behind every permanent work of art.
          </motion.p>

          <motion.p
            initial={reducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/15 font-light"
          >
            Editorial placeholder — portfolio photography coming soon
          </motion.p>
        </div>
      </section>

      {/* ═══ introduction ═══ */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center border-t border-white/[0.04]">
        <motion.p
          {...fadeIn(reducedMotion)}
          className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/25 font-light mb-5"
        >
          Foundation
        </motion.p>
        <motion.h2
          {...fadeIn(reducedMotion, 0.05)}
          className="text-2xl md:text-4xl font-light tracking-[0.03em] italic mb-6"
        >
          Style Is a Language
        </motion.h2>
        <motion.p
          {...fadeIn(reducedMotion, 0.1)}
          className="text-white/35 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto"
        >
          A tattoo style is not something copied from a catalogue. It is a visual language
          shaped around the person who will carry it. Every line weight, every shadow, every
          decision about scale and placement responds to the individual — their body, their
          skin, their story. The styles below are starting points, not rigid categories.
          The best work often lives at the intersections.
        </motion.p>
      </section>

      {/* ═══ style sections ═══ */}
      {tattooStyles
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map((style, i) => {
          const layout = sectionLayouts[i % sectionLayouts.length]
          switch (layout) {
            case 'right':
              return <StyleSectionImageRight key={style.slug} style={style} />
            case 'full':
              return <StyleSectionFullImage key={style.slug} style={style} />
            case 'split':
              return <StyleSectionSplit key={style.slug} style={style} />
            default:
              return <StyleSectionImageLeft key={style.slug} style={style} />
          }
        })}

      {/* ═══ comparison ═══ */}
      <ComparisonTable />

      {/* ═══ choosing ═══ */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-20 text-center border-t border-white/[0.04]">
        <motion.p
          {...fadeIn(reducedMotion)}
          className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/25 font-light mb-5"
        >
          Guidance
        </motion.p>
        <motion.h2
          {...fadeIn(reducedMotion, 0.05)}
          className="text-2xl md:text-3xl font-light tracking-[0.03em] italic mb-6"
        >
          Choosing What Belongs to You
        </motion.h2>
        <motion.p
          {...fadeIn(reducedMotion, 0.1)}
          className="text-white/35 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto mb-10"
        >
          You do not need to know the exact name of the style you want before you reach out.
          The terminology is our language — yours is the vision. Bring what moves you and we
          will find the vocabulary together.
        </motion.p>

        <motion.div
          {...fadeIn(reducedMotion, 0.15)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto"
        >
          {[
            { label: 'Inspiration images', desc: 'References, not designs to copy. They communicate mood, palette, and direction.' },
            { label: 'Meaning or story', desc: 'What this piece represents to you. Even a single word or memory is a starting point.' },
            { label: 'Preferred placement', desc: 'Where on your body you envision the work. We will assess feasibility together.' },
            { label: 'Approximate size', desc: 'A rough idea helps — palm-sized, half-sleeve, full back. We refine in consultation.' },
            { label: 'Desired mood', desc: 'Quiet, bold, romantic, stark, warm, cold. Emotional vocabulary matters as much as visual.' },
            { label: 'What you do not like', desc: 'Equally valuable. Showing what you want to avoid sharpens the direction.' },
          ].map((item) => (
            <div key={item.label} className="border border-white/[0.04] p-4 rounded-sm">
              <p className="text-xs font-medium tracking-[0.1em] uppercase text-white/60 mb-1">{item.label}</p>
              <p className="text-xs text-white/30 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ═══ body placement ═══ */}
      <BodyPlacement />

      {/* ═══ consultation CTA ═══ */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-32 text-center border-t border-white/[0.04]">
        <motion.p
          {...fadeIn(reducedMotion)}
          className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C8B89A]/60 font-light mb-5"
        >
          Begin the Conversation
        </motion.p>
        <motion.h2
          {...fadeIn(reducedMotion, 0.05)}
          className="text-2xl md:text-4xl font-light tracking-[0.03em] leading-[1.25] mb-5"
        >
          Not Sure Which Style Fits?
        </motion.h2>
        <motion.p
          {...fadeIn(reducedMotion, 0.1)}
          className="text-white/35 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto mb-8"
        >
          You do not need to arrive with every answer. Bring the idea, the story, or even
          just the feeling. We will help shape the direction with you.
        </motion.p>
        <motion.div
          {...fadeIn(reducedMotion, 0.15)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/booking"
            className="px-8 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Book Consultation
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-3 border border-white/15 text-white/60 text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:border-white/40 hover:text-white/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            View the Collection
          </Link>
        </motion.div>
        <motion.p
          {...fadeIn(reducedMotion, 0.25)}
          className="mt-6 text-[11px] text-white/20 font-light"
        >
          A deposit is required to reserve a confirmed appointment.
        </motion.p>
      </section>
    </div>
  )
}

export default StylesPage
