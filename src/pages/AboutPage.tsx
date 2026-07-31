import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'A quiet conversation. You tell us the story you want to carry. We listen about the imagery, the placement, the moment this piece belongs to.',
  },
  {
    number: '02',
    title: 'Concept Design',
    description: 'Research, reference, hand-drawn studies. Every proportion measured against the architecture of your body. A composition conceived for one person.',
  },
  {
    number: '03',
    title: 'Approval',
    description: 'You see the design in our private gallery. Adjustments are not just welcomed — they are the point. We do not proceed until it feels like yours.',
  },
  {
    number: '04',
    title: 'Tattoo Session',
    description: 'The door closes. Calibrated light, ambient sound, a suite designed for focus. Every stroke is deliberate. Time slows.',
  },
  {
    number: '05',
    title: 'Aftercare',
    description: 'A complete care kit and a guide written for your specific piece. We book your follow-up, document the healed work, and remain available.',
  },
]

const trustReasons = [
  {
    title: 'Original Artwork',
    description: 'Every piece is conceived, drawn, and executed for one person. Your tattoo exists nowhere else in the world.',
  },
  {
    title: 'Private Studio',
    description: 'No foot traffic. No onlookers. A calm, quiet suite devoted entirely to your session and your comfort.',
  },
  {
    title: 'Medical-Grade Sterilization',
    description: 'Hospital-grade autoclave sterilization. Single-use needles opened in front of you. Surfaces prepared fresh between every appointment.',
  },
  {
    title: 'Archival Materials',
    description: 'Dermatologically tested inks selected for longevity and purity. Premium equipment calibrated for permanence.',
  },
  {
    title: 'Appointment Only',
    description: 'Every session is prepared in advance. One client at a time. No rushing, no waiting, no compromise on focus.',
  },
  {
    title: 'Lifetime Support',
    description: 'Complimentary annual assessments. Touch-up guidance. We stand behind every piece for as long as it exists.',
  },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About — Seven Sins Tattoo | Private Atelier in Folkston, GA'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Seven Sins Tattoo is a private atelier for commissioned permanent body art in Folkston, Georgia. Custom tattoos, private suites, archival-quality materials.')
    }
    return () => {
      document.title = 'Seven Sins Tattoo — Private Atelier for Permanent Art'
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Seven Sins Tattoo is a private luxury atelier commissioning bespoke permanent body art in Folkston, Georgia. No flash. No walk-ins. No compromise.')
      }
    }
  }, [])

  return (
    <div data-component="src/pages/AboutPage.tsx">
      {/* 1. Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img src="https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531294218-5s7fv2k1ezi.png" alt="" className="w-full h-full object-cover opacity-30" loading="eager" width={1200} height={1800} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 py-32 sm:px-10 lg:px-12">
          <div className="h-px w-10 bg-[#C8B89A]/40 mb-6" />
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#C8B89A]/50">
            THE ATELIER
          </p>
          <h1 className="mt-8 font-[Playfair Display] text-5xl font-black uppercase leading-[1.02] text-white sm:text-7xl lg:text-8xl">
            ABOUT<br />SEVEN SINS
          </h1>
          <div className="mx-0 mt-8 h-px w-24 bg-[#C8B89A]/50" />
          <p className="mt-8 max-w-xl font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80 sm:text-2xl">
            A private atelier where permanent art is conceived, refined, and brought to life — one commission at a time.
          </p>
        </div>
      </section>

      {/* 2. A Commission, Not a Transaction */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
                OUR PHILOSOPHY
              </p>
              <h2 className="mt-6 font-[Playfair Display] text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
                A COMMISSION,<br />NOT A TRANSACTION
              </h2>
              <div className="mt-8 h-px w-16 bg-[#C8B89A]/40" />
            </div>
            <div className="space-y-6 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
              <p>
                No two bodies are the same. No two stories are the same. Every piece that leaves this atelier is drawn by hand for one person — and then the drawing is retired. The composition you wear will never appear on anyone else.
              </p>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {[
                  { label: 'PRIVATE APPOINTMENTS', desc: 'One client at a time. No distractions, no compromise.' },
                  { label: 'ORIGINAL COMMISSIONED WORK', desc: 'Every piece drawn for one person. Never repeated.' },
                  { label: 'FOLKSTON, GEORGIA', desc: 'A quiet atelier away from the noise.' },
                ].map((item) => (
                  <div key={item.label} className="border border-[#C8B89A]/10 p-6">
                    <div className="h-px w-6 bg-[#C8B89A]/30 mb-3" />
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/60 mb-2">
                      {item.label}
                    </p>
                    <p className="font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/50">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Five Deliberate Steps */}
      <section className="border-t border-[#C8B89A]/10 bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
            OUR PROCESS
          </p>
          <h2 className="mt-6 max-w-2xl font-[Playfair Display] text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
            FIVE DELIBERATE STEPS<br />TOWARD PERMANENCE
          </h2>

          <div className="mt-16">
            {processSteps.map((step, i) => (
              <div key={step.number}>
                <div className="group grid gap-8 pb-12 sm:grid-cols-[100px_1fr] sm:gap-16 sm:pb-16">
                  <div className="flex flex-col items-start gap-4 sm:items-center">
                    <span className="font-[Playfair Display] text-4xl font-black text-white/10 transition-colors duration-500 group-hover:text-[#C8B89A]/40 sm:text-5xl">
                      {step.number}
                    </span>
                    {i < processSteps.length - 1 && (
                      <div className="hidden sm:block">
                        <div className="h-20 w-px bg-[#C8B89A]/10 transition-colors duration-500 group-hover:bg-[#C8B89A]/20" />
                      </div>
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-[Playfair Display] text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#C8B89A] sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-2xl font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="mb-12 ml-0 sm:ml-[50px] sm:mb-16 sm:hidden">
                    <div className="h-px w-full bg-[#C8B89A]/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Six Reasons Collectors Trust Us (merged hygiene + trust) */}
      <section className="border-t border-[#C8B89A]/10 bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
            CONFIDENCE
          </p>
          <h2 className="mt-6 max-w-2xl font-[Playfair Display] text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
            SIX REASONS COLLECTORS<br />TRUST US
          </h2>
          <p className="mt-4 max-w-xl font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/70">
            Standards that exceed regulation — because permanent art has no room for anything less.
          </p>

          <div className="mt-16 grid gap-px overflow-hidden border border-[#C8B89A]/10 sm:grid-cols-2 lg:grid-cols-3">
            {trustReasons.map((item) => (
              <div
                key={item.title}
                className="group bg-black p-8 transition-colors duration-200 hover:bg-white/[0.02] sm:p-10"
              >
                <div className="mb-4 h-px w-8 bg-[#C8B89A]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[#C8B89A]/60" />
                <h3 className="font-[Playfair Display] text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Atelier */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-36">
        <div className="absolute inset-0">
          <img
            src="https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784777947984-rvotecqcqqj.png"
            alt="Seven Sins Tattoo studio interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
              THE STUDIO
            </p>
            <h2 className="mt-6 font-[Playfair Display] text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
              A SPACE THAT ASKS<br />NOTHING OF YOU BUT<br />YOUR PRESENCE
            </h2>
            <div className="mt-8 h-px w-16 bg-[#C8B89A]/40" />
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-5 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
              <p>
                Walk through the door and the world goes quiet. Seven Sins occupies a private suite — no retail frontage, no street signage, no passersby pressing their faces to the glass.
              </p>
              <p>
                Each artist works in a dedicated private room. Your session is the only thing happening in that room. No other clients. No background noise. Just you, your artist, and the work.
              </p>
              <p>
                This is what it feels like to commission art in a gallery that exists for one person at a time. Quiet. Private. Unhurried. The way permanent decisions deserve to be made.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-8 border-l border-[#C8B89A]/10 pl-10 lg:pl-14">
              {[
                { label: 'Quiet', desc: 'Ambient sound, conversation volume — a space designed for focus and calm.' },
                { label: 'Private', desc: 'Dedicated artist suites. Your session is the only one in the building.' },
                { label: 'Comfortable', desc: 'Controlled lighting, curated seating, refreshments. Your comfort shapes every decision.' },
                { label: 'Gallery-Inspired', desc: 'Original artwork on the walls. A space that feels more like a private collection than a studio.' },
                { label: 'Appointment Only', desc: 'One client at a time. The atelier is prepared for your arrival and yours alone.' },
              ].map((item) => (
                <div key={item.label} className="group">
                  <h4 className="font-[Playfair Display] text-lg font-bold text-white transition-colors duration-200 group-hover:text-[#C8B89A]">
                    {item.label}
                  </h4>
                  <p className="mt-1 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Quote */}
      <section className="border-t border-[#C8B89A]/10 bg-black py-32 sm:py-44">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="mx-auto mb-12 h-px w-20 bg-[#C8B89A]/30" />
          <blockquote className="text-center">
            <p className="font-[Playfair Display] text-3xl font-bold italic leading-relaxed text-white sm:text-5xl sm:leading-relaxed lg:text-6xl">
              EVERY TATTOO TELLS A STORY.
            </p>
            <p className="mt-6 font-[Playfair Display] text-3xl font-bold italic leading-relaxed text-[#C8B89A] sm:text-5xl sm:leading-relaxed lg:text-6xl">
              OURS BEGINS WITH YOURS.
            </p>
          </blockquote>
          <div className="mx-auto mt-12 h-px w-20 bg-[#C8B89A]/30" />
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="border-t border-[#C8B89A]/10 bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="font-[Playfair Display] text-4xl font-bold uppercase text-white sm:text-5xl">
            BEGIN YOUR JOURNEY
          </h2>
          <p className="mt-5 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
            Reserve your consultation with a 15% deposit. This is the first step toward a piece of art that will outlive you.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              to="/booking"
              className="inline-flex h-14 items-center justify-center gap-2 bg-[#C8B89A] px-10 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#C8B89A]/90"
            >
              BOOK APPOINTMENT
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/artists"
              className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 font-sans text-sm font-medium uppercase tracking-[0.18em] text-[#C8B89A] transition-colors duration-200 hover:border-[#C8B89A]"
            >
              MEET THE ARTISTS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
