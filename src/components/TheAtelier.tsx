const IMG = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784777947984-rvotecqcqqj.png'

export default function TheAtelier() {
  return (
    <section className="bg-black py-16 sm:py-36">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
        <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">THE ATELIER</p>
            <h2 className="mt-4 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl">
              A PRIVATE<br />STUDIO<br />DEVOTED TO ART
            </h2>
            <p className="mt-8 max-w-sm font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/80">
              By appointment only. No walk-ins, no distractions. Every piece is a collaboration, every client a story.
            </p>
            <p className="mt-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-white/50">FOLKSTON, GEORGIA</p>
            <a href="/about" className="mt-8 inline-flex h-12 items-center border border-[#C8B89A]/60 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A]">
              LEARN MORE
            </a>
          </div>

          <div className="overflow-hidden">
            <img src={IMG} alt="" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
