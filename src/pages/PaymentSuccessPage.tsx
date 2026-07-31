import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function PaymentSuccessPage() {
  const [sessionId, setSessionId] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setSessionId(params.get('session_id'))
  }, [])

  return (
    <div data-component="src/pages/PaymentSuccessPage.tsx" className="min-h-screen bg-black">
      <section className="pt-40 pb-20 sm:pt-52 sm:pb-32">
        <div className="mx-auto max-w-2xl px-3 sm:px-10 text-center">
          <div className="h-px w-12 bg-[#C8B89A]/30 mx-auto mb-8" />

          {sessionId ? (
            <>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
                PAYMENT RECEIVED
              </p>
              <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl">
                THANK YOU
              </h1>
              <p className="mt-8 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
                Your payment has been received. A confirmation has been sent to your email.
              </p>
              <p className="mt-4 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/50">
                Our team will contact you with the confirmed appointment details.
              </p>
            </>
          ) : (
            <>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#C8B89A]/50">
                NO PAYMENT DETECTED
              </p>
              <h1 className="mt-6 font-[Playfair Display] text-3xl font-black uppercase leading-[1.05] text-white sm:text-4xl">
                NO COMPLETED<br />PAYMENT FOUND
              </h1>
              <p className="mt-8 font-['Cormorant Garamond'] text-xl leading-relaxed text-[#C8B89A]/80">
                This page is shown after a completed payment. If you believe you completed a purchase, check your email for a receipt.
              </p>
            </>
          )}

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-sm font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A] hover:text-white"
            >
              RETURN HOME
            </Link>
            <Link
              to="/membership"
              className="inline-flex h-14 items-center justify-center border border-[#C8B89A]/60 px-10 text-sm font-semibold uppercase tracking-[0.15em] text-[#C8B89A] transition hover:border-[#C8B89A] hover:text-white"
            >
              VIEW MEMBERSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
