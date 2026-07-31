const STENCIL_IMG = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531303131-w136u0vganf.png'

export default function BookingCTA() {
  return (
    <section data-component="src/components/BookingCTA.tsx" className="relative bg-foreground py-28 sm:py-36 overflow-hidden">
      {/* Stencil transfer image — faint, atmospheric */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <img
          src={STENCIL_IMG}
          alt=""
          className="w-full h-full object-cover opacity-[0.06] grayscale"
          loading="lazy"
          width={1200}
          height={1200}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <div className="mx-auto mb-7 h-px w-12 bg-accent/30" />
        <h2 className="font-display text-4xl font-bold leading-[1.10] text-background sm:text-5xl lg:text-6xl">
          Begin Your<br />Commission
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-background/40">
          Every tattoo that leaves this studio begins as a conversation. Reserve yours with a 15% deposit. Private, unhurried, yours.
        </p>

        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="/booking"
            className="ui-chrome inline-flex h-14 items-center bg-background px-11 text-[12px] font-medium uppercase tracking-[0.18em] text-foreground transition-all duration-500 hover:bg-accent hover:text-background"
          >
            Book Appointment
          </a>
          <a
            href="/pricing"
            className="ui-chrome text-[12px] font-medium uppercase tracking-[0.18em] text-background/40 transition-colors duration-500 hover:text-accent/80"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  )
}
