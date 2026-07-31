import { pricingConfig, studioInfo } from '@/data/seed'

const CONSULTATION_IMG = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531290163-mwslizprx4r.png'

export default function PricingOverview() {
  return (
    <section data-component="src/components/PricingOverview.tsx" id="pricing" className="relative bg-secondary py-28 sm:py-36 overflow-hidden">
      {/* Consultation image — faint */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <img
          src={CONSULTATION_IMG}
          alt=""
          className="w-full h-full object-cover opacity-[0.025] grayscale"
          loading="lazy"
          width={1800}
          height={1012}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 sm:mb-24">
          <div className="h-px w-10 bg-accent/40 mb-6" />
          <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/50">
            Investment
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground/90 sm:text-5xl">
            Transparent Pricing
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground/60">
            Clear hourly rates across three artist tiers. Every commission begins with a private consultation and a detailed estimate.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingConfig.hourlyTiers.map((tier) => (
            <div key={tier.name} className="bg-card p-8 sm:p-10 transition-colors duration-500 hover:bg-foreground/[0.03]">
              <div className="h-px w-6 bg-accent/40 mb-4 group-hover:w-10 transition-all duration-500" />
              <p className="ui-chrome text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground/50">
                {tier.label}
              </p>
              <p className="mt-3 font-display text-4xl font-bold text-foreground/85">
                ${tier.min}&ndash;{tier.max}
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground/50">/ hour</p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground/60">
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-border/30 pt-10 sm:flex-row sm:justify-center sm:gap-16">
          <div className="text-center">
            <p className="ui-chrome text-[10px] uppercase tracking-[0.16em] text-muted-foreground/50">Minimum Charge</p>
            <p className="mt-1 font-display text-2xl font-bold text-foreground/85">{studioInfo.minCharge}</p>
          </div>
          <div className="hidden h-10 w-px bg-border/30 sm:block" />
          <div className="text-center">
            <p className="ui-chrome text-[10px] uppercase tracking-[0.16em] text-muted-foreground/50">Deposit Required</p>
            <p className="mt-1 font-display text-2xl font-bold text-foreground/85">{studioInfo.deposit}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
