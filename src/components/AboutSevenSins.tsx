const ATELIER_CHAIR = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531294218-5s7fv2k1ezi.png'

const values = [
  { label: 'Private Studio', text: 'Our atelier operates by appointment only. No walk-ins, no foot traffic, no distractions — just focused creative work.' },
  { label: 'Custom Design', text: 'Every piece is drawn for one client and never repeated. Your tattoo is a commissioned original, designed and retired.' },
  { label: 'Appointment Only', text: 'Each session is dedicated to a single client. No overlapping bookings, no rushed consultations, no compromise on attention.' },
]

export default function AboutSevenSins() {
  return (
    <section data-component="src/components/AboutSevenSins.tsx" id="about" className="bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image column — first on mobile, second on desktop */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[2/3] overflow-hidden">
              <img
                src={ATELIER_CHAIR}
                alt="Seven Sins Tattoo private atelier — the client station, prepared and waiting"
                className="h-full w-full object-cover opacity-85"
                loading="lazy"
                width={800}
                height={1200}
              />
            </div>
          </div>

          {/* Copy column */}
          <div className="order-2 lg:order-1">
            <div className="h-px w-10 bg-accent/40 mb-6" />
            <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/50">
              The Atelier
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-foreground/90 sm:text-5xl">
              A room for the permanent
            </h2>

            <div className="mt-8 space-y-5">
              <p className="text-[16px] leading-relaxed text-muted-foreground/70">
                The body is the most intimate gallery a person will ever own. Every mark on it should be worthy of permanent exhibition — conceived, composed, and executed with the rigor of fine art.
              </p>
              <p className="text-[16px] leading-relaxed text-muted-foreground/70">
                We are not a tattoo parlor. We are a private atelier where each commission is a collaboration between artist and collector — unhurried, exacting, and never repeated.
              </p>
            </div>

            {/* Values — horizontal rules, typographic */}
            <div className="mt-12 space-y-7">
              {values.map((v) => (
                <div key={v.label} className="flex items-start gap-4">
                  <div className="mt-1.5 h-px w-6 flex-shrink-0 bg-accent/40" />
                  <div>
                    <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/70">
                      {v.label}
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground/60">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
