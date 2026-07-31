import { tattooStyles } from '@/data/seed'

export default function TattooStyles() {
  const featured = tattooStyles
    .filter(s => s.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder)

  return (
    <section data-component="src/components/TattooStyles.tsx" id="styles" className="bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 sm:mb-24">
          <div className="h-px w-10 bg-accent/40 mb-6" />
          <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/50">
            Disciplines
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground/90 sm:text-5xl">
            The Craft
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground/60">
            Six disciplines, each mastered to the threshold where technique dissolves into art.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((style) => (
            <div key={style.name} className="group">
              <div className="aspect-square overflow-hidden bg-foreground/[0.04]">
                <img
                  src={style.heroImage}
                  alt={style.heroImageAlt}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-80"
                />
              </div>
              <div className="mt-5">
                <div className="h-px w-6 bg-accent/40 mb-3 group-hover:w-10 transition-all duration-500" />
                <h3 className="font-display text-xl font-bold text-foreground/85">
                  {style.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground/60">
                  {style.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
