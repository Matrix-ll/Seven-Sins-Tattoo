import { Link } from 'react-router-dom'

const ATELIER_IMG = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531290177-kj9ijjlxjl8.png'

export default function Footer() {
  return (
    <footer data-component="src/components/Footer.tsx" className="relative border-t border-border/30 bg-background">
      {/* Subtle atmospheric image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <img
          src={ATELIER_IMG}
          alt=""
          className="w-full h-full object-cover opacity-[0.03] grayscale"
          loading="lazy"
          width={1800}
          height={1012}
        />
      </div>

      <div className="relative mx-auto max-w-[90rem] px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-black uppercase tracking-[0.18em] text-foreground/90">
              Seven Sins
            </p>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted-foreground">
              A private atelier for permanent art. Commissioned originals, absolute discretion, monochrome severity.
            </p>
          </div>

          {/* Studio */}
          <div>
            <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/60">
              Studio
            </p>
            <div className="mt-5 space-y-2.5">
              <p className="text-[14px] text-muted-foreground/70">152 Everett St, Folkston, GA 31537</p>
              <p className="text-[14px] text-muted-foreground/70">By appointment only</p>
              <p className="text-[14px] text-muted-foreground/70">hello@sevensins.ing</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/60">
              Navigate
            </p>
            <div className="mt-5 space-y-2.5">
              <Link to="/booking" className="block text-[14px] text-muted-foreground/70 transition-colors duration-300 hover:text-accent">Inquiries</Link>
              <Link to="/faq" className="block text-[14px] text-muted-foreground/70 transition-colors duration-300 hover:text-accent">FAQ</Link>
              <Link to="/pricing" className="block text-[14px] text-muted-foreground/70 transition-colors duration-300 hover:text-accent">Pricing</Link>
              <a href="#" className="block text-[14px] text-muted-foreground/70 transition-colors duration-300 hover:text-accent">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-20 border-t border-border/30 pt-8">
          <div className="h-px w-16 bg-accent/30 mb-6" />
          <p className="text-[11px] text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Seven Sins Tattoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
