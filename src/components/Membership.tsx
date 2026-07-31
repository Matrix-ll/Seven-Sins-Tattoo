import { membershipTiers } from '@/data/seed'
import { cn } from '@/lib/utils'

const GLOVES_IMG = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531303143-ldwplijswd.png'

export default function Membership() {
  return (
    <section data-component="src/components/Membership.tsx" id="membership" className="relative bg-background py-28 sm:py-36 overflow-hidden">
      {/* Gloved hands — faint, the preparation */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <img
          src={GLOVES_IMG}
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
            Membership
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground/90 sm:text-5xl">
            The Inner Circle
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground/60">
            Annual membership with priority booking and session discounts. For those who collect permanent art as a practice.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {membershipTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'flex flex-col p-10 sm:p-12 transition-colors duration-500',
                tier.featured
                  ? 'bg-foreground text-background ring-1 ring-foreground'
                  : 'bg-card ring-1 ring-border/30 hover:bg-foreground/[0.03]'
              )}
            >
              <div
                className={cn(
                  'mb-4 h-px w-8',
                  tier.featured ? 'bg-accent' : 'bg-accent/40'
                )}
              />
              <p
                className={cn(
                  'ui-chrome text-[10px] font-medium uppercase tracking-[0.16em]',
                  tier.featured ? 'text-background/50' : 'text-muted-foreground/50'
                )}
              >
                {tier.name}
              </p>
              <p
                className={cn(
                  'mt-3 font-display text-4xl font-bold',
                  tier.featured ? 'text-background' : 'text-foreground/85'
                )}
              >
                {tier.price}
              </p>
              <p className={cn(
                'text-[13px]',
                tier.featured ? 'text-background/40' : 'text-muted-foreground/50'
              )}>
                / year
              </p>
              <p
                className={cn(
                  'mt-4 text-[14px] leading-relaxed',
                  tier.featured ? 'text-background/60' : 'text-muted-foreground/60'
                )}
              >
                {tier.description}
              </p>

              <div className="mt-8 flex-1 space-y-3">
                {tier.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div
                      className={cn(
                        'mt-1.5 h-px w-3 flex-shrink-0',
                        tier.featured ? 'bg-accent' : 'bg-accent/40'
                      )}
                    />
                    <span
                      className={cn(
                        'text-[14px]',
                        tier.featured ? 'text-background/70' : 'text-muted-foreground/60'
                      )}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={cn(
                  'mt-10 ui-chrome inline-flex h-12 w-full items-center justify-center text-[11px] font-medium uppercase tracking-[0.16em] transition-all duration-500',
                  tier.featured
                    ? 'bg-background text-foreground hover:bg-accent hover:text-background'
                    : 'bg-foreground text-background hover:bg-accent'
                )}
              >
                Join {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
