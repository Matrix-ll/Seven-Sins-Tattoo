// Consults save to Supabase.  TODO: Send email notifications to hello@sevensins.ing on new submissions.

import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { supabase, supabaseSchema } from '@/lib/supabase'

type FormData = {
  fullName: string
  email: string
  phone: string
  contactMethod: string
  placement: string
  size: string
  style: string
  colorType: string
  description: string
  preferredDates: string
  artistPreference: string
  budget: string
  ageConfirm: boolean
  noAppointmentConfirm: boolean
  depositConfirm: boolean
}

const INITIAL: FormData = {
  fullName: '',
  email: '',
  phone: '',
  contactMethod: '',
  placement: '',
  size: '',
  style: '',
  colorType: '',
  description: '',
  preferredDates: '',
  artistPreference: '',
  budget: '',
  ageConfirm: false,
  noAppointmentConfirm: false,
  depositConfirm: false,
}

const PLACEMENT_OPTIONS = ['Arm', 'Forearm', 'Shoulder', 'Back', 'Chest', 'Leg', 'Thigh', 'Calf', 'Neck', 'Hand', 'Other']
const SIZE_OPTIONS = ['Small (under 3 inches)', 'Medium (3\u20136 inches)', 'Large (6\u201312 inches)', 'Half-sleeve', 'Full sleeve', 'Full back piece', 'Other']
const STYLE_OPTIONS = ['Blackwork', 'Japanese', 'Realism', 'Fine Line', 'Color', 'Neo Traditional', 'No preference', 'Other']
const CONTACT_OPTIONS = ['Email', 'Phone', 'Text']

/* Map error description → field id */
const ERROR_FIELD_MAP: Record<string, string> = {
  'Full name is required.': 'field-fullName',
  'A valid email address is required.': 'field-email',
  'Please select a tattoo placement.': 'field-placement',
  'Please describe your tattoo idea.': 'field-description',
  'You must confirm you are 18 years of age or older.': 'field-ageConfirm',
  'You must confirm you understand this does not confirm an appointment.': 'field-noAppointmentConfirm',
  'You must acknowledge the deposit requirement.': 'field-depositConfirm',
}

export default function BookingPage() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<string[]>([])
  const fullNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const placementRef = useRef<HTMLSelectElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const ageCheckRef = useRef<HTMLInputElement>(null)
  const noApptCheckRef = useRef<HTMLInputElement>(null)
  const depositCheckRef = useRef<HTMLInputElement>(null)

  const update = (key: keyof FormData, value: string | boolean) => {
    setForm(prev => ({ ...prev, [key]: value }))
    setErrors([])
  }

  const fieldHasError = (errorText: string): boolean => errors.includes(errorText)

  const validate = (): string[] => {
    const e: string[] = []
    if (!form.fullName.trim()) e.push('Full name is required.')
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.push('A valid email address is required.')
    if (!form.placement.trim()) e.push('Please select a tattoo placement.')
    if (!form.description.trim()) e.push('Please describe your tattoo idea.')
    if (!form.ageConfirm) e.push('You must confirm you are 18 years of age or older.')
    if (!form.noAppointmentConfirm) e.push('You must confirm you understand this does not confirm an appointment.')
    if (!form.depositConfirm) e.push('You must acknowledge the deposit requirement.')
    return e
  }

  const focusFirstError = (errs: string[]) => {
    const firstErr = errs[0]
    const fieldId = ERROR_FIELD_MAP[firstErr]
    if (!fieldId) return
    const el = document.getElementById(fieldId)
    if (el) { el.focus(); el.scrollIntoView({ behavior: 'smooth', block: 'center' }) }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (errs.length > 0) {
      setErrors(errs)
      setTimeout(() => focusFirstError(errs), 50)
      return
    }
    setErrors([])
    setSubmitting(true)
    setSubmitError(null)

    const db = supabase.schema(supabaseSchema)
    const { error: insertErr } = await db
      .from('consultations')
      .insert({
        full_name: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        contact_method: form.contactMethod || null,
        placement: form.placement,
        size: form.size || null,
        style: form.style || null,
        color_type: form.colorType || null,
        description: form.description.trim(),
        preferred_dates: form.preferredDates.trim() || null,
        artist_preference: form.artistPreference.trim() || null,
        budget: form.budget.trim() || null,
      })

    setSubmitting(false)

    if (insertErr) {
      setSubmitError(insertErr.message || 'Failed to submit. Please try again.')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Fire-and-forget: notify via Worker (Resend emails)
    try {
      await fetch('/api/booking/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          contact_method: form.contactMethod || null,
          placement: form.placement,
          size: form.size || null,
          style: form.style || null,
          color_type: form.colorType || null,
          description: form.description.trim(),
          preferred_dates: form.preferredDates.trim() || null,
          artist_preference: form.artistPreference.trim() || null,
          budget: form.budget.trim() || null,
        }),
      })
    } catch (_) {
      // Notification is best-effort; booking is already saved.
    }

    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToForm = () => {
    fullNameRef.current?.focus()
    fullNameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const inputClass = 'w-full bg-transparent border border-[#C8B89A]/20 px-4 py-3 text-sm font-[\'Cormorant Garamond\'] text-[#C8B89A] placeholder:text-[#C8B89A]/30 focus:border-[#C8B89A]/60 focus:outline-none focus:ring-0 transition-colors'
  const inputErrorClass = 'w-full bg-transparent border border-red-500/40 px-4 py-3 text-sm font-[\'Cormorant Garamond\'] text-[#C8B89A] placeholder:text-[#C8B89A]/30 focus:border-red-500/60 focus:outline-none focus:ring-0 transition-colors'
  const labelClass = 'block font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#C8B89A]/60 mb-2'
  const selectClass = `${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23C8B89A%27 stroke-width=%272%27%3E%3Cpath d=%27M6 9l6 6 6-6%27/%3E%3C/svg%3E")] bg-[length:12px_12px] bg-[right_12px_center] bg-no-repeat`
  const selectErrorClass = `${inputErrorClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23C8B89A%27 stroke-width=%272%27%3E%3Cpath d=%27M6 9l6 6 6-6%27/%3E%3C/svg%3E")] bg-[length:12px_12px] bg-[right_12px_center] bg-no-repeat`
  const errorHintClass = 'mt-1.5 font-[\'Cormorant Garamond\'] text-xs text-red-400/80'

  if (submitted) {
    return (
      <div data-component="src/pages/BookingPage.tsx" className="bg-black min-h-screen">
        <section className="py-32 sm:py-40">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">CONSULTATION SUBMITTED</p>
            <h1 className="mt-8 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl">
              THANK YOU
            </h1>
            <p className="mt-8 font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/80">
              Your consultation request has been received.
            </p>
            <p className="mt-4 font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/60">
              The studio will review your project details and contact you within 48 hours. This is not a confirmed appointment.
            </p>
            <Link
              to="/"
              className="mt-12 inline-flex h-12 items-center border border-[#C8B89A]/60 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A]"
            >
              RETURN TO HOME
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const fullNameError = fieldHasError('Full name is required.')
  const emailError = fieldHasError('A valid email address is required.')
  const placementError = fieldHasError('Please select a tattoo placement.')
  const descriptionError = fieldHasError('Please describe your tattoo idea.')
  const ageError = fieldHasError('You must confirm you are 18 years of age or older.')
  const noApptError = fieldHasError('You must confirm you understand this does not confirm an appointment.')
  const depositError = fieldHasError('You must acknowledge the deposit requirement.')

  return (
    <div data-component="src/pages/BookingPage.tsx" className="bg-black min-h-screen">
      {/* ═══════════ HERO ═══════════ */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
            PRIVATE APPOINTMENTS
          </p>
          <h1 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            BOOK A<br />CONSULTATION
          </h1>
          <p className="mt-8 max-w-2xl font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/80">
            Every piece begins with a conversation.
          </p>
          <p className="mt-4 max-w-2xl font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/60">
            Tell us about your idea, preferred style, placement, size, and availability. After reviewing your request, our studio will contact you to confirm the consultation and estimated session details.
          </p>
        </div>
      </section>

      {/* ═══════════ FORM ═══════════ */}
      <section className="pb-20 sm:pb-32">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          {errors.length > 0 && (
            <div id="booking-errors" tabIndex={-1} className="border border-red-500/20 bg-red-500/[0.03] p-4 mb-8 focus:outline-none" role="alert">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-red-400/80 mb-3">Please correct the following:</p>
              <ul className="list-disc list-inside space-y-1">
                {errors.map((err, i) => <li key={i} className="font-['Cormorant Garamond'] text-sm text-[#C8B89A]/70">{err}</li>)}
              </ul>
            </div>
          )}
          {submitError && (
            <div id="submit-error" className="border border-red-500/30 bg-red-500/[0.04] p-4 mb-8 text-center" role="alert">
              <p className="font-['Cormorant Garamond'] text-sm text-red-400/80">{submitError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-10">
            {/* ── Contact ── */}
            <fieldset className="space-y-6">
              <legend className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#C8B89A]/90 pb-4 border-b border-[#C8B89A]/10 w-full">Contact Information</legend>

              <div>
                <label htmlFor="field-fullName" className={labelClass}>Full Name</label>
                <input id="field-fullName" ref={fullNameRef} type="text" className={fullNameError ? inputErrorClass : inputClass} placeholder="Your full name" value={form.fullName} onChange={e => update('fullName', e.target.value)}
                  required aria-required="true" aria-invalid={fullNameError ? 'true' : undefined} aria-describedby={fullNameError ? 'err-fullName' : undefined} />
                {fullNameError && <p id="err-fullName" className={errorHintClass} role="alert">Full name is required.</p>}
              </div>
              <div>
                <label htmlFor="field-email" className={labelClass}>Email Address</label>
                <input id="field-email" ref={emailRef} type="email" className={emailError ? inputErrorClass : inputClass} placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)}
                  required aria-required="true" aria-invalid={emailError ? 'true' : undefined} aria-describedby={emailError ? 'err-email' : undefined} />
                {emailError && <p id="err-email" className={errorHintClass} role="alert">A valid email address is required.</p>}
              </div>
              <div>
                <label htmlFor="field-phone" className={labelClass}>Phone Number</label>
                <input id="field-phone" type="tel" className={inputClass} placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
              </div>
              <div>
                <label htmlFor="field-contactMethod" className={labelClass}>Preferred Contact Method</label>
                <select id="field-contactMethod" className={selectClass} value={form.contactMethod} onChange={e => update('contactMethod', e.target.value)}>
                  <option value="">Select method</option>
                  {CONTACT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </fieldset>

            {/* ── Project Details ── */}
            <fieldset className="space-y-6">
              <legend className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#C8B89A]/90 pb-4 border-b border-[#C8B89A]/10 w-full">Tattoo Details</legend>

              <div>
                <label htmlFor="field-placement" className={labelClass}>Tattoo Placement</label>
                <select id="field-placement" ref={placementRef} className={placementError ? selectErrorClass : selectClass} value={form.placement} onChange={e => update('placement', e.target.value)}
                  required aria-required="true" aria-invalid={placementError ? 'true' : undefined} aria-describedby={placementError ? 'err-placement' : undefined}>
                  <option value="">Select placement</option>
                  {PLACEMENT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                {placementError && <p id="err-placement" className={errorHintClass} role="alert">Please select a tattoo placement.</p>}
              </div>
              <div>
                <label htmlFor="field-size" className={labelClass}>Approximate Size</label>
                <select id="field-size" className={selectClass} value={form.size} onChange={e => update('size', e.target.value)}>
                  <option value="">Select size</option>
                  {SIZE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="field-style" className={labelClass}>Preferred Style</label>
                <select id="field-style" className={selectClass} value={form.style} onChange={e => update('style', e.target.value)}>
                  <option value="">Select style</option>
                  {STYLE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="field-colorType" className={labelClass}>Black &amp; Grey or Color</label>
                <select id="field-colorType" className={selectClass} value={form.colorType} onChange={e => update('colorType', e.target.value)}>
                  <option value="">Select</option>
                  <option value="Black & Grey">Black &amp; Grey</option>
                  <option value="Color">Color</option>
                  <option value="Open to both">Open to both</option>
                </select>
              </div>
              <div>
                <label htmlFor="field-description" className={labelClass}>Description of Tattoo Idea</label>
                <textarea id="field-description" ref={descriptionRef} className={(descriptionError ? inputErrorClass : inputClass) + ' min-h-[120px] resize-y'} placeholder="Describe your idea, concept, or inspiration in as much detail as you can..." value={form.description} onChange={e => update('description', e.target.value)}
                  required aria-required="true" aria-invalid={descriptionError ? 'true' : undefined} aria-describedby={descriptionError ? 'err-description' : undefined} />
                {descriptionError && <p id="err-description" className={errorHintClass} role="alert">Please describe your tattoo idea.</p>}
              </div>
              <div>
                <label htmlFor="field-image" className={labelClass}>Reference Image Upload</label>
                <input id="field-image" type="file" accept="image/*" className="block w-full text-sm font-['Cormorant Garamond'] text-[#C8B89A]/50 file:mr-4 file:py-2 file:px-4 file:border file:border-[#C8B89A]/20 file:bg-transparent file:text-xs file:font-medium file:uppercase file:tracking-[0.1em] file:text-[#C8B89A]/70 hover:file:border-[#C8B89A]/40 file:cursor-pointer file:transition-colors" />
              </div>
            </fieldset>

            {/* ── Preferences ── */}
            <fieldset className="space-y-6">
              <legend className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#C8B89A]/90 pb-4 border-b border-[#C8B89A]/10 w-full">Preferences</legend>

              <div>
                <label htmlFor="field-preferredDates" className={labelClass}>Preferred Appointment Dates</label>
                <input id="field-preferredDates" type="text" className={inputClass} placeholder="e.g. Week of October 15, weekends preferred" value={form.preferredDates} onChange={e => update('preferredDates', e.target.value)} />
              </div>
              <div>
                <label htmlFor="field-artistPreference" className={labelClass}>Artist Preference</label>
                <input id="field-artistPreference" type="text" className={inputClass} placeholder="Specific artist name or no preference" value={form.artistPreference} onChange={e => update('artistPreference', e.target.value)} />
              </div>
              <div>
                <label htmlFor="field-budget" className={labelClass}>Estimated Budget</label>
                <input id="field-budget" type="text" className={inputClass} placeholder="e.g. $500\u2013$1,000, open to discussion" value={form.budget} onChange={e => update('budget', e.target.value)} />
              </div>
            </fieldset>

            {/* ── Confirmations ── */}
            <fieldset className="space-y-5">
              <legend className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#C8B89A]/90 pb-4 border-b border-[#C8B89A]/10 w-full">Confirmations</legend>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input id="field-ageConfirm" ref={ageCheckRef} type="checkbox" checked={form.ageConfirm} onChange={e => update('ageConfirm', e.target.checked)}
                  required aria-required="true" aria-invalid={ageError ? 'true' : undefined} aria-describedby={ageError ? 'err-ageConfirm' : undefined}
                  className="mt-0.5 h-4 w-4 border border-[#C8B89A]/30 bg-transparent accent-[#C8B89A] cursor-pointer" />
                <span className="font-['Cormorant Garamond'] text-sm leading-relaxed text-[#C8B89A]/70 group-hover:text-[#C8B89A]/90 transition-colors">
                  I confirm that I am 18 years of age or older and can present valid photo identification.
                </span>
              </label>
              {ageError && <p id="err-ageConfirm" className={`${errorHintClass} ml-7`} role="alert">You must confirm you are 18 years of age or older.</p>}

              <label className="flex items-start gap-3 cursor-pointer group">
                <input id="field-noAppointmentConfirm" ref={noApptCheckRef} type="checkbox" checked={form.noAppointmentConfirm} onChange={e => update('noAppointmentConfirm', e.target.checked)}
                  required aria-required="true" aria-invalid={noApptError ? 'true' : undefined} aria-describedby={noApptError ? 'err-noAppointmentConfirm' : undefined}
                  className="mt-0.5 h-4 w-4 border border-[#C8B89A]/30 bg-transparent accent-[#C8B89A] cursor-pointer" />
                <span className="font-['Cormorant Garamond'] text-sm leading-relaxed text-[#C8B89A]/70 group-hover:text-[#C8B89A]/90 transition-colors">
                  I understand that submitting this form does not confirm an appointment.
                </span>
              </label>
              {noApptError && <p id="err-noAppointmentConfirm" className={`${errorHintClass} ml-7`} role="alert">You must confirm you understand this does not confirm an appointment.</p>}

              <label className="flex items-start gap-3 cursor-pointer group">
                <input id="field-depositConfirm" ref={depositCheckRef} type="checkbox" checked={form.depositConfirm} onChange={e => update('depositConfirm', e.target.checked)}
                  required aria-required="true" aria-invalid={depositError ? 'true' : undefined} aria-describedby={depositError ? 'err-depositConfirm' : undefined}
                  className="mt-0.5 h-4 w-4 border border-[#C8B89A]/30 bg-transparent accent-[#C8B89A] cursor-pointer" />
                <span className="font-['Cormorant Garamond'] text-sm leading-relaxed text-[#C8B89A]/70 group-hover:text-[#C8B89A]/90 transition-colors">
                  I understand that a 15% deposit will be required after the project and appointment details are approved.
                </span>
              </label>
              {depositError && <p id="err-depositConfirm" className={`${errorHintClass} ml-7`} role="alert">You must acknowledge the deposit requirement.</p>}
            </fieldset>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center bg-[#C8B89A] px-12 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#C8B89A]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8B89A]/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'SUBMITTING\u2026' : 'SUBMIT CONSULTATION'}
            </button>
          </form>
        </div>
      </section>

      {/* ═══════════ DEPOSIT INFO ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-[#C8B89A]/5">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C8B89A]/70">
            RESERVATIONS
          </p>
          <h2 className="mt-6 font-[Playfair Display] text-3xl font-black uppercase leading-[1.1] text-white sm:text-4xl">
            YOUR APPOINTMENT<br />IS RESERVED WITH<br />A DEPOSIT
          </h2>
          <p className="mt-8 max-w-2xl font-['Cormorant Garamond'] text-lg leading-relaxed text-[#C8B89A]/70">
            After your consultation request is reviewed, Seven Sins will confirm the estimated price and session details. A deposit equal to 15% of the approved tattoo price is required to reserve your appointment.
          </p>
          <p className="mt-4 max-w-2xl font-['Cormorant Garamond'] text-base leading-relaxed text-[#C8B89A]/50">
            The remaining balance is paid at the studio by card or cash.
          </p>
          <p className="mt-2 font-['Cormorant Garamond'] text-sm italic text-[#C8B89A]/40">
            Submitting the consultation form does not automatically confirm an appointment.
          </p>
        </div>
      </section>

      {/* ═══════════ STUDIO DETAILS ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-[#C8B89A]/5">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          <h3 className="font-[Playfair Display] text-2xl font-black uppercase text-white">
            Seven Sins Tattoo
          </h3>
          <p className="mt-3 font-['Cormorant Garamond'] text-lg text-[#C8B89A]/70">
            Folkston, Georgia
          </p>

          <div className="mt-10 space-y-2">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#C8B89A]/50">Monday &ndash; Saturday</p>
            <p className="font-['Cormorant Garamond'] text-lg text-[#C8B89A]/80">12:00 PM &ndash; 8:00 PM</p>
          </div>

          <p className="mt-8 font-['Cormorant Garamond'] text-base italic text-[#C8B89A]/50">
            Appointments only.
          </p>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-24 sm:py-36 border-t border-[#C8B89A]/5">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10 lg:px-16">
          <h2 className="font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl">
            BEGIN THE<br />CONVERSATION
          </h2>
          <button
            onClick={scrollToForm}
            className="mt-10 inline-flex h-12 items-center border border-[#C8B89A]/60 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8B89A] transition hover:border-[#C8B89A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8B89A]/50"
          >
            BOOK YOUR CONSULTATION
          </button>
        </div>
      </section>
    </div>
  )
}
