const FEATURED_IMAGE = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784782158471-k0rtw6r4fdc.jpg'
import { Link } from 'react-router-dom'


export default function FeaturedWork() {
  return (
    <section
      data-component="src/components/FeaturedWork.tsx"
      id="work"
      className="bg-black py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
        {/* DESKTOP — two-column: text left, image right */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left column — text */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
              FEATURED WORK
            </p>
            <h2 className="mt-8 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white lg:text-5xl">
              SIGNATURE BACKPIECE
            </h2>
            <p className="mt-8 max-w-md font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/80">
              A full-back composition shaped with classical structure, precision, and permanence.
            </p>
            <Link
              to="/gallery/signature-backpiece"
              className="mt-10 inline-flex h-12 items-center border border-[#C8B89A]/60 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A]"
            >
              VIEW PROJECT
            </Link>
          </div>
          {/* Right column — image */}
          <div>
            <img
              src={FEATURED_IMAGE}
              alt="Signature backpiece tattoo — full-back composition with classical ornamentation"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* MOBILE — stacked: label → heading → copy → CTA → image */}
        <div className="flex flex-col lg:hidden">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
            FEATURED WORK
          </p>
          <h2 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white">
            SIGNATURE BACKPIECE
          </h2>
          <p className="mt-8 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/80">
            A full-back composition shaped with classical structure, precision, and permanence.
          </p>
          <Link
            to="/gallery/signature-backpiece"
            className="mt-8 inline-flex h-12 w-fit items-center border border-[#C8B89A]/60 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A]"
          >
            VIEW PROJECT
          </Link>
          <img
            src={FEATURED_IMAGE}
            alt="Signature backpiece tattoo — full-back composition with classical ornamentation"
            className="w-full h-auto block mt-12 px-6"
          />
        </div>
      </div>
    </section>
  )
}
