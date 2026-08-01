import { Link } from 'react-router-dom'

export default function PaymentCancelPage() {
  return (
    <div data-component="src/pages/PaymentCancelPage.tsx" className="min-h-screen bg-black">
      <section className="pt-40 pb-20 sm:pt-52 sm:pb-32">
        <div className="mx-auto max-w-2xl px-3 sm:px-10 text-center">
          <div className="h-px w-12 bg-[#C8B89A]/30 mx-auto mb-8" />

          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
            PAYMENT NOT COMPLETED
          </p>
          <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl">
            NO CHARGE WAS COMPLETED
          </h1>
          <p className="mt-8 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
            You may return to the selected project and try again when ready.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-sm font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A] hover:text-white"
            >
              RETURN TO SERVICES
            </Link>
            <Link
              to="/"
              className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-sm font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A] hover:text-white"
            >
              RETURN HOME
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
