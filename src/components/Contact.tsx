import { studioInfo } from '@/data/seed'
import { LocationMap } from '@/components/ui/LocationMap'
import { Phone, Mail, Clock } from 'lucide-react'

const TOOLS_IMG = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531303133-e7brsla2u4o.png'

export default function Contact() {
  return (
    <section data-component="src/components/Contact.tsx" id="contact" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-12">
        {/* Section head */}
        <div className="mb-16 sm:mb-24">
          <div className="h-px w-10 bg-accent/40 mb-6" />
          <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/50">
            Inquire
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground/90 sm:text-5xl">
            Contact the Atelier
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground/60">
            Private consultations by appointment only. We respond to all inquiries within 48 hours.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Contact details */}
          <div>
            <div className="space-y-9">
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-4 w-4 text-accent/50" />
                <div>
                  <p className="ui-chrome text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/50">Phone</p>
                  <a href={`tel:${studioInfo.phone.replace(/[^0-9+]/g, '')}`} className="mt-1 block text-[15px] text-foreground/80 transition-colors duration-500 hover:text-accent">
                    {studioInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-4 w-4 text-accent/50" />
                <div>
                  <p className="ui-chrome text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/50">Email</p>
                  <a href={`mailto:${studioInfo.email}`} className="mt-1 block text-[15px] text-foreground/80 transition-colors duration-500 hover:text-accent">
                    {studioInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 h-4 w-4 text-accent/50" />
                <div>
                  <p className="ui-chrome text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/50">Hours</p>
                  <p className="mt-1 text-[15px] text-foreground/80">{studioInfo.hours}</p>
                  <p className="mt-0.5 text-[13px] text-muted-foreground/50">{studioInfo.hoursNote}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-4 w-4 items-center justify-center">
                  <span className="text-[10px] font-bold text-accent/50">A</span>
                </div>
                <div>
                  <p className="ui-chrome text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/50">Address</p>
                  <p className="mt-1 text-[15px] text-foreground/80">{studioInfo.address}</p>
                </div>
              </div>

              <div>
                <p className="ui-chrome text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/50">Instagram</p>
                <a href="#" className="mt-1 block text-[15px] text-foreground/80 transition-colors duration-500 hover:text-accent">
                  {studioInfo.instagram}
                </a>
              </div>
            </div>

            {/* Tools image — small, quiet, closing */}
            <div className="mt-14">
              <img
                src={TOOLS_IMG}
                alt="Seven Sins Tattoo — tools of the craft"
                className="w-24 h-24 object-cover opacity-40"
                loading="lazy"
                width={200}
                height={200}
              />
            </div>

            <div className="mt-8">
              <a
                href={`mailto:${studioInfo.email}`}
                className="ui-chrome inline-flex h-14 items-center bg-foreground px-11 text-[12px] font-medium uppercase tracking-[0.18em] text-background transition-colors duration-500 hover:bg-accent hover:text-background"
              >
                Request a Consultation
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <LocationMap
              lat={studioInfo.location.lat}
              lng={studioInfo.location.lng}
              address={studioInfo.address}
              label="Seven Sins Tattoo"
              zoom={13}
            />
            <p className="mt-4 text-[13px] text-muted-foreground/50">
              {studioInfo.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
