import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const CATEGORIES = [
  {
    slug: 'fine-line',
    name: 'Fine Line',
    description:
      'Refined linework and restrained detail, designed with precision around the natural movement of the body.',
    image:
      'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784813328974-5mpl0ewdv2v.jpg',
    imageAlt: 'Fine-line botanical tattoo on forearm',
    galleryFilter: 'fine-line',
  },
  {
    slug: 'lettering',
    name: 'Lettering',
    description:
      'Custom scripts, names, dates, and typographic compositions shaped for clarity, rhythm, and permanence.',
    image:
      'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784813330898-danpfd94nn.jpg',
    imageAlt: 'FORTUNE FAVORS THE BOLD lettering tattoo',
    galleryFilter: 'lettering',
  },
  {
    slug: 'blackwork',
    name: 'Blackwork',
    description:
      'Bold contrast, ornamental structure, and graphic compositions built through disciplined black ink.',
    image:
      'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784822032778-fncvsxeqdva.jpg',
    imageAlt: 'Elaborate blackwork floral filigree shoulder tattoo',
    galleryFilter: 'blackwork',
  },
  {
    slug: 'realism',
    name: 'Realism',
    description:
      'Highly rendered portraiture and imagery focused on depth, texture, atmosphere, and visual accuracy.',
    image:
      'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784822031759-nvot0qkbj0g.jpg',
    imageAlt: 'Realistic classical philosopher bust tattoo',
    galleryFilter: 'realism',
  },
  {
    slug: 'japanese',
    name: 'Japanese',
    description:
      'Large flowing compositions rooted in traditional Japanese imagery, movement, and anatomical placement.',
    image:
      'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784826752671-ekwobtr4rzb.jpg',
    imageAlt: 'Japanese koi fish tattoo with maple leaves and waves',
    galleryFilter: 'japanese',
  },
  {
    slug: 'traditional',
    name: 'Traditional',
    description:
      'Strong outlines, enduring symbolism, and timeless compositions developed through classic tattoo language.',
    image:
      'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784826750062-i5rvxi5x4l.jpg',
    imageAlt: 'Traditional snake and rose tattoo on upper arm',
    galleryFilter: 'traditional',
  },
  {
    slug: 'color',
    name: 'Color',
    description:
      'Rich, controlled color work designed for depth, balance, longevity, and strong visual impact.',
    image:
      'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784827074958-tr94w1vnsm8.jpg',
    imageAlt: 'Color tiger and flower tattoo on calf',
    galleryFilter: 'color',
  },
  {
    slug: 'large-scale-custom',
    name: 'Large Scale & Custom',
    description:
      'Sleeves, backpieces, bodysuits, and original multi-session works developed through full consultation.',
    image:
      'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784827077298-wizut2u9g6.jpg',
    imageAlt: 'Full-back Japanese dragon tattoo',
    galleryFilter: 'large-scale',
  },
]

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services \u2014 Seven Sins Tattoo | Styles & Directions | Folkston, GA'
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* ── Hero ── */}
      <section className="pt-40 pb-16 sm:pt-52 sm:pb-24">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 h-px w-12 bg-[#C8B89A]/30" />
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
              TATTOO SERVICES
            </p>
            <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              CHOOSE YOUR<br />DIRECTION
            </h1>
            <p className="mt-6 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/60 max-w-xl">
              Every piece begins with a direction. Explore our principal tattoo styles, each shaped around your anatomy, scale, and personal vision.
            </p>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      {CATEGORIES.map((cat, i) => {
        const isImageLeft = i % 2 === 0

        return (
          <section
            key={cat.slug}
            className={`border-t border-[#C8B89A]/5 py-10 sm:py-20 ${i === CATEGORIES.length - 1 ? 'pb-20' : ''}`}
          >
            <div className="mx-auto max-w-[90rem] px-3 sm:px-10 lg:px-12">
              {/* Desktop — alternating two-column */}
              <div
                className={`hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  isImageLeft ? '' : 'lg:[direction:rtl]'
                }`}
              >
                <div className={isImageLeft ? '' : '[direction:ltr]'}>
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    loading="lazy"
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
                <div className={isImageLeft ? '' : '[direction:ltr]'}>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.20em] text-[#C8B89A]/40">
                    {`0${i + 1}`}
                  </p>
                  <h2 className="mt-4 font-[Playfair Display] text-3xl font-bold uppercase text-white sm:text-4xl">
                    {cat.name}
                  </h2>
                  <p className="mt-5 max-w-md font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
                    {cat.description}
                  </p>
                  <Link
                    to={`/gallery?style=${cat.galleryFilter}`}
                    className="mt-8 inline-flex h-12 items-center border border-[#C8B89A]/60 px-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A]"
                  >
                    VIEW COLLECTION &rarr;
                  </Link>
                </div>
              </div>

              {/* Mobile — image edge-to-edge, then text */}
              <div className="lg:hidden -mx-3">
                <img
                  src={cat.image}
                  alt={cat.imageAlt}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <div className="mt-6 px-3">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.20em] text-[#C8B89A]/40">
                    {`0${i + 1}`}
                  </p>
                  <h2 className="mt-2 font-[Playfair Display] text-4xl font-bold uppercase leading-[1.1] text-white">
                    {cat.name}
                  </h2>
                  <p className="mt-3 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
                    {cat.description}
                  </p>
                  <Link
                    to={`/gallery?style=${cat.galleryFilter}`}
                    className="mt-5 inline-flex h-14 items-center border border-[#C8B89A]/60 px-8 text-sm font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A]"
                  >
                    VIEW COLLECTION &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
