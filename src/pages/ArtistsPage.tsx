import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PROCESS_IMAGE_1 =
  'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531290163-mwslizprx4r.png'
const PROCESS_IMAGE_2 =
  'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531290177-kj9ijjlxjl8.png'
const PROCESS_IMAGE_3 =
  'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531293143-ldwplijswd.png'

const DISCIPLINES = [
  {
    title: 'Precision',
    description: 'Fine line, lettering, ornamental work, and controlled detail.',
  },
  {
    title: 'Depth',
    description: 'Blackwork, realism, portraiture, texture, and tonal composition.',
  },
  {
    title: 'Scale',
    description: 'Japanese, traditional, color, sleeves, backpieces, and multi-session work.',
  },
]

const STEPS = [
  { num: '01', title: 'Share Your Direction', desc: 'Tell us the subject, placement, approximate size, and visual references.' },
  { num: '02', title: 'Artist Matching', desc: 'We review the project and connect it with the most suitable discipline.' },
  { num: '03', title: 'Consultation', desc: 'The artist develops the scale, flow, composition, and session plan.' },
  { num: '04', title: 'Creation', desc: 'Your project moves from concept to finished tattoo through a considered process.' },
]

const PRINCIPLES = [
  'Original composition',
  'Anatomy-led placement',
  'Clear consultation',
  'Work built for permanence',
]

export default function ArtistsPage() {
  useEffect(() => {
    document.title = 'Artists \u2014 Seven Sins Tattoo | Collective | Folkston, GA'
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* ── HERO ── */}
      <section className="pt-40 pb-10 sm:pt-52 sm:pb-16">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <div className="h-px w-12 bg-[#C8B89A]/30 mb-8" />
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
            ARTISTS
          </p>
          <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            THE ARTISTS
          </h1>
          <p className="mt-6 max-w-xl font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
            A private collective of tattoo artists united by disciplined craft, individual vision, and work designed to endure.
          </p>
          <p className="mt-3 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/50">
            Each project is matched by style, scale, placement, and the creative direction it requires.
          </p>
        </div>
      </section>

      {/* ── THE COLLECTIVE ── */}
      <section className="border-t border-[#C8B89A]/5 py-14 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.20em] text-[#C8B89A]/40">
            THE COLLECTIVE
          </p>
          <h2 className="mt-4 font-[Playfair Display] text-3xl font-bold uppercase leading-[1.15] text-white sm:text-4xl">
            Different Disciplines.<br />One Standard.
          </h2>
          <p className="mt-4 max-w-2xl font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
            Our artists work across distinct visual languages while sharing the same commitment to composition, precision, collaboration, and permanence.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {DISCIPLINES.map((d) => (
              <div key={d.title} className="border border-[#C8B89A]/10 p-6">
                <h3 className="font-[Playfair Display] text-xl font-bold uppercase text-white">
                  {d.title}
                </h3>
                <p className="mt-3 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS IMAGES ── */}
      <section className="border-t border-[#C8B89A]/5 py-14 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.20em] text-[#C8B89A]/40">
            THE WORK BEHIND THE WORK
          </p>
          <p className="mt-2 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/50 max-w-lg">
            Preparation, drawing, placement, and execution — every stage matters.
          </p>

          {/* Mobile: lead image full-width, two below side by side */}
          <div className="mt-8 lg:hidden space-y-3">
            <img
              src={PROCESS_IMAGE_1}
              alt="Tattoo preparation and drawing"
              loading="lazy"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="grid grid-cols-2 gap-3">
              <img
                src={PROCESS_IMAGE_2}
                alt="Tattoo studio workspace"
                loading="lazy"
                className="w-full h-auto object-cover aspect-square"
              />
              <img
                src={PROCESS_IMAGE_3}
                alt="Tattoo machine and ink"
                loading="lazy"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>

          {/* Desktop: asymmetrical editorial */}
          <div className="mt-10 hidden lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-2">
              <img
                src={PROCESS_IMAGE_1}
                alt="Tattoo preparation and drawing"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="space-y-6">
              <img
                src={PROCESS_IMAGE_2}
                alt="Tattoo studio workspace"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              <img
                src={PROCESS_IMAGE_3}
                alt="Tattoo machine and ink"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINDING THE RIGHT COLLABORATION ── */}
      <section className="border-t border-[#C8B89A]/5 py-14 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <h2 className="font-[Playfair Display] text-3xl font-bold uppercase leading-[1.15] text-white sm:text-4xl">
            Finding the Right Collaboration
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.num}>
                <p className="font-[Playfair Display] text-4xl font-black text-white/10">
                  {s.num}
                </p>
                <h3 className="mt-3 font-[Playfair Display] text-lg font-bold uppercase text-white">
                  {s.title}
                </h3>
                <p className="mt-2 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE STUDIO, INDIVIDUAL VISION ── */}
      <section className="border-t border-[#C8B89A]/5 py-14 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="font-[Playfair Display] text-3xl font-bold uppercase leading-[1.15] text-white sm:text-4xl">
                One Studio.<br />Individual Vision.
              </h2>
              <p className="mt-4 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80 max-w-md">
                Every artist brings an individual hand. Every project follows the same standard of care.
              </p>
            </div>
            <div className="space-y-5">
              {PRINCIPLES.map((p) => (
                <div key={p} className="flex items-center gap-4 border-b border-[#C8B89A]/10 pb-4">
                  <div className="h-px w-4 bg-[#C8B89A]/40 flex-shrink-0" />
                  <p className="font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-[#C8B89A]/5 py-20 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12 text-center">
          <h2 className="font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl">
            Begin With a<br />Conversation
          </h2>
          <p className="mt-5 max-w-lg mx-auto font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
            Share your idea, placement, scale, and references. We will guide you toward the right direction.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex h-14 items-center justify-center bg-[#C8B89A] px-10 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#C8B89A]/90"
            >
              START A CONSULTATION
            </Link>
            <Link
              to="/gallery"
              className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-sm font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A]"
            >
              EXPLORE THE WORK
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
