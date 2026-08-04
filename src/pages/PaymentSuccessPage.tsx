import { Link } from 'react-router-dom'

export default function PaymentSuccessPage() {
  return (
    <div data-component="src/pages/PaymentSuccessPage.tsx" className="min-h-screen bg-black">
      <section className="pt-40 pb-20 sm:pt-52 sm:pb-32">
        <div className="mx-auto max-w-2xl px-3 sm:px-10 text-center">
          <div className="h-px w-12 bg-[#C8B89A]/30 mx-auto mb-8" />

          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
            PAYMENT RECEIVED
          </p>
          <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl">
            YOUR PROJECT PAYMENT<br />HAS BEEN SUBMITTED
          </h1>
          <p className="mt-8 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
            Thank you for choosing Seven Sins Tattoo. The studio will contact you to confirm placement, references, and scheduling for your project.
          </p>
          <p className="mt-6 font-sans text-[12px] leading-relaxed text-[#C8B89A]/40 max-w-lg mx-auto">
            Payment does not automatically confirm an appointment date. The studio will reach out to finalize project details.
          </p>

          <div className="mt-12 flex items-center justify-center">
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
