import { promises } from '@/data/seed'

export default function SevenPromises() {
  return (
    <section data-component="src/components/SevenPromises.tsx" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section head — weight, not decoration */}
        <div className="mb-16 sm:mb-24">
          <div className="h-px w-10 bg-accent/40 mb-6" />
          <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/50">
            Our Commitments
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground/90 sm:text-5xl lg:text-6xl">
            The Seven<br />Promises
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground/60">
            Seven non-negotiable commitments. Not marketing — the actual terms under which we work. Read them. They matter.
          </p>
        </div>

        {/* Grid — dark cards, warm numbers, no border frenzy */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {promises.map((promise) => (
            <div
              key={promise.number}
              className="group flex flex-col bg-card p-8 sm:p-10 transition-colors duration-500 hover:bg-foreground/[0.03]"
            >
              {/* Number — large, ghosted, typographic */}
              <p className="font-display text-5xl font-black text-foreground/8 sm:text-6xl transition-colors duration-500 group-hover:text-accent/15">
                {promise.number}
              </p>

              <div className="mt-4 h-px w-6 bg-accent/40 transition-all duration-500 group-hover:w-10" />

              <h3 className="mt-5 font-display text-lg font-bold leading-tight text-foreground/85">
                {promise.title}
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground/60">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
