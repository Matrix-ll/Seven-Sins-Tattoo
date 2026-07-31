import { Img } from '@/components/ui/Img'
import { artists } from '@/data/seed'

const SKIN_TEXTURE = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531303128-wbaxqpn0efi.png'

export default function FeaturedArtists() {
  return (
    <section data-component="src/components/FeaturedArtists.tsx" id="artists" className="relative bg-background py-28 sm:py-36 overflow-hidden">
      {/* Subtle skin texture — the canvas */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <img
          src={SKIN_TEXTURE}
          alt=""
          className="w-full h-full object-cover opacity-[0.025] grayscale"
          loading="lazy"
          width={1200}
          height={1200}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 sm:mb-24">
          <div className="h-px w-10 bg-accent/40 mb-6" />
          <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/50">
            The House
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground/90 sm:text-5xl">
            Resident Artists
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground/60">
            Each artist at Seven Sins is selected for technical mastery, artistic vision, and an unwavering commitment to permanent quality.
          </p>
        </div>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {artists.map((artist, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Img
                  src={artist.image}
                  fallbackSeed={`artist-${i}`}
                  alt={artist.name}
                  className="h-full w-full object-cover grayscale opacity-30 transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <div className="h-px w-6 bg-accent/40 mb-3 group-hover:w-10 transition-all duration-500" />
                <p className="ui-chrome text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground/50">
                  {artist.role}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground/40 transition-colors duration-500 group-hover:text-foreground/70">
                  {artist.name}
                </h3>
                <p className="mt-1 text-[14px] text-muted-foreground/50">
                  {artist.specialty}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground/40">
                  {artist.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
