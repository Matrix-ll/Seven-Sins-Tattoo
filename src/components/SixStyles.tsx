const SIX_STYLES_ARTWORK = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784777938337-gu3zyadkro.png'

export default function SixStyles() {
  return (
    <section
      data-component="src/components/SixStyles.tsx"
      className="bg-black py-16 sm:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
        <h2 className="font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl text-center">
          SIX STYLES &middot; ONE STANDARD
        </h2>

        <div className="mt-8 sm:mt-16">
          <img
            src={SIX_STYLES_ARTWORK}
            alt="Six tattoo styles overview — Blackwork, Japanese, Realism, Fine Line, Color, Neo Traditional"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  )
}
