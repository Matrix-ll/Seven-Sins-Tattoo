import { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { Search, X, ChevronDown, ChevronUp, ArrowRight, MessageCircle } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════════════
   Data Model
   ═══════════════════════════════════════════════════════════════════ */

interface FAQEntry {
  slug: string
  question: string
  answer: string
  category: FAQCategory
  keywords: string[]
  relatedLinks: { label: string; href: string }[]
  featured: boolean
  published: boolean
  displayOrder: number
  policyDependent: boolean
  lastReviewed: string
}

type FAQCategory =
  | 'getting-started'
  | 'booking-appointments'
  | 'pricing-deposits'
  | 'styles-design'
  | 'artists'
  | 'membership'
  | 'preparation-visit'
  | 'aftercare-touchups'
  | 'policies-privacy'

interface FAQCategoryDef {
  id: FAQCategory
  label: string
  description: string
}

const CATEGORIES: FAQCategoryDef[] = [
  { id: 'getting-started', label: 'Getting Started', description: 'How the process works and what to expect before you submit an inquiry.' },
  { id: 'booking-appointments', label: 'Booking & Appointments', description: 'Inquiry, review, consultation, and appointment confirmation.' },
  { id: 'pricing-deposits', label: 'Pricing & Deposits', description: 'Hourly rates, estimates, deposits, and what influences the final cost.' },
  { id: 'styles-design', label: 'Styles & Design', description: 'Tattoo styles offered, reference images, design process, and what can and cannot be done.' },
  { id: 'artists', label: 'Artists', description: 'Artist matching, portfolios, and who works at the studio.' },
  { id: 'membership', label: 'Membership', description: 'Membership plans, discounts, and how they interact with bookings.' },
  { id: 'preparation-visit', label: 'Preparation & Visit', description: 'Getting ready for your appointment and what to expect at the studio.' },
  { id: 'aftercare-touchups', label: 'Aftercare & Touch-Ups', description: 'Healing, long-term care, and touch-up guidance.' },
  { id: 'policies-privacy', label: 'Studio Policies', description: 'Cancellation, rescheduling, privacy, and studio policies.' },
]

const FAQ_DATA: FAQEntry[] = [
  /* ─── Getting Started ─── */
  {
    slug: 'how-do-i-begin', question: 'How do I begin?', category: 'getting-started',
    answer: `Start by submitting a tattoo inquiry through the booking form. Share your idea, describe the style and placement you are considering, and upload any reference images that communicate the direction. The studio will review the details and reach out regarding the next step. You do not need every detail finalized — the consultation process exists to refine the direction together.`,
    keywords: ['start', 'begin', 'first step', 'inquiry', 'how to start'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }, { label: 'Explore Styles', href: '/styles' }],
    featured: true, published: true, displayOrder: 1, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'do-i-need-to-know-the-style', question: 'Do I need to know the exact tattoo style?', category: 'getting-started',
    answer: `No. If you are unsure which style fits your idea, the studio can help you explore options during the consultation. The style pages on this site describe each approach in detail, including what ages well and which placements work best. Bringing reference images that show the general aesthetic you are drawn to — even if the style is unclear — is more helpful than guessing at a category.`,
    keywords: ['style', 'not sure', 'unsure', 'help choosing'],
    relatedLinks: [{ label: 'Explore Tattoo Styles', href: '/styles' }, { label: 'View Gallery', href: '/gallery' }],
    featured: true, published: true, displayOrder: 2, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'what-information-to-include', question: 'What information should I include in my inquiry?', category: 'getting-started',
    answer: `The more clearly you describe the idea, the better the studio can prepare. Helpful details include: the subject or theme, preferred style direction, body placement, approximate size, color or black-and-grey preference, any reference images, and your general availability. You do not need to know the exact size in inches or a final design — rough guidance is enough to begin the conversation.`,
    keywords: ['information', 'details', 'prepare', 'what to include', 'inquiry details'],
    relatedLinks: [{ label: 'Begin an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 3, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'submit-without-choosing-artist', question: 'Can I submit an idea without choosing an artist?', category: 'getting-started',
    answer: `Yes. When submitting an inquiry, you can select "No preference" or "Match me with an artist." Your project details will be reviewed, and if the studio determines a particular artist is the right fit, that will be part of the consultation conversation. Artist matching will be available after the studio reviews your project.`,
    keywords: ['no artist', 'match', 'choose artist', 'without artist'],
    relatedLinks: [{ label: 'Begin an Inquiry', href: '/booking' }, { label: 'Artists', href: '/artists' }],
    featured: false, published: true, displayOrder: 4, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'visit-without-appointment', question: 'Can I visit the studio without an appointment?', category: 'getting-started',
    answer: `Walk-in availability has not been confirmed. Please submit an inquiry or contact the studio before visiting for tattoo services. This ensures someone is available to speak with you and the studio is prepared for your arrival.`,
    keywords: ['walk-in', 'visit', 'without appointment', 'drop in', 'studio visit'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 5, policyDependent: true, lastReviewed: '2026-07-19',
  },

  /* ─── Booking & Appointments ─── */
  {
    slug: 'does-booking-confirm-appointment', question: 'Does submitting the booking form confirm an appointment?', category: 'booking-appointments',
    answer: `No. Submitting the inquiry form shares your project details with the studio for review. It does not create or confirm an appointment. An appointment is only confirmed after the studio reviews the project, the consultation or estimate process is complete, and a deposit has been arranged.`,
    keywords: ['confirm', 'appointment', 'booking form', 'inquiry vs appointment'],
    relatedLinks: [{ label: 'How Booking Works', href: '/booking' }],
    featured: true, published: true, displayOrder: 1, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'what-happens-after-inquiry', question: 'What happens after I submit an inquiry?', category: 'booking-appointments',
    answer: `After you submit an inquiry, the studio reviews the project details — the idea, style, placement, size, and any reference images. Depending on the scope, the studio may reach out with follow-up questions, request a consultation, or provide an estimate. An appointment is finalized only after both the studio and the client agree on the direction, timeline, and terms.`,
    keywords: ['after inquiry', 'next step', 'process', 'review', 'after submitting'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: true, published: true, displayOrder: 2, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'how-long-response', question: 'How long does a response take?', category: 'booking-appointments',
    answer: `Response timing may vary. The studio will provide timing guidance once the inquiry system and operating process are finalized. If your timing is urgent, please indicate that in the additional notes section of the inquiry form.`,
    keywords: ['response time', 'how long', 'wait', 'reply', 'timeline'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 3, policyDependent: true, lastReviewed: '2026-07-19',
  },
  {
    slug: 'choose-specific-date', question: 'Can I choose a specific date?', category: 'booking-appointments',
    answer: `The inquiry form includes a field for your earliest preferred date, which helps the studio understand your general availability. This is a preference only. Actual appointment dates are confirmed after the studio reviews the project and both parties agree on timing. Selected dates do not imply availability.`,
    keywords: ['date', 'schedule', 'specific date', 'calendar', 'when'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 4, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'request-specific-artist', question: 'Can I request a specific artist?', category: 'booking-appointments',
    answer: `The inquiry form allows you to indicate a preference: no preference, match me with an artist, or specific artist. If you request a specific artist, availability depends on that artist's schedule and whether their style aligns with your project. The studio will confirm during the review process. Specific artist names are not published at this time.`,
    keywords: ['specific artist', 'choose artist', 'request artist', 'artist preference'],
    relatedLinks: [{ label: 'Artists', href: '/artists' }, { label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 5, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'change-idea-after-submitting', question: 'Can I change my idea after submitting?', category: 'booking-appointments',
    answer: `Yes. It is normal for ideas to evolve — especially after a consultation. If your direction changes significantly after submitting the inquiry, communicate the update as early as possible so the studio can adjust the approach. Substantial redesign after an estimate has been provided may require a revised estimate.`,
    keywords: ['change idea', 'revise', 'modify', 'update', 'different idea'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 6, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'bring-a-guest', question: 'Can I bring a guest?', category: 'booking-appointments',
    answer: `Guest policies are determined by the studio. Space, privacy, and the artist's working environment are all factors. This will be addressed before your appointment is confirmed. Please ask about the current guest policy during the consultation or in the additional notes of your inquiry.`,
    keywords: ['guest', 'bring someone', 'friend', 'companion', 'plus one'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 7, policyDependent: true, lastReviewed: '2026-07-19',
  },

  /* ─── Pricing & Deposits ─── */
  {
    slug: 'how-is-pricing-calculated', question: 'How is tattoo pricing calculated?', category: 'pricing-deposits',
    answer: `Pricing is based on the artist's hourly rate multiplied by the estimated time required. The estimate is informed by: design complexity, size, placement difficulty, color versus black-and-grey, and the number of sessions expected. Your artist will provide an estimate during the consultation before any deposit is collected.`,
    keywords: ['pricing', 'cost', 'calculated', 'how much', 'estimate', 'rate'],
    relatedLinks: [{ label: 'Pricing Guide', href: '/pricing' }],
    featured: true, published: true, displayOrder: 1, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'hourly-ranges', question: 'What are the hourly ranges?', category: 'pricing-deposits',
    answer: `Beginner Artist: $100–150 per hour. Experienced Artist: $150–250 per hour. Premium Artist: $300–500 per hour. These are guide ranges. The exact rate depends on the specific artist, the project, and the consultation discussion.`,
    keywords: ['hourly', 'rate', 'range', 'pricing tiers', 'artist cost'],
    relatedLinks: [{ label: 'Full Pricing Guide', href: '/pricing' }],
    featured: true, published: true, displayOrder: 2, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'minimum-charge', question: 'Is there a minimum charge?', category: 'pricing-deposits',
    answer: `Yes. The studio minimum is $100. This covers the setup, materials, and artist time for even the smallest pieces.`,
    keywords: ['minimum', 'minimum charge', 'smallest', 'base price'],
    relatedLinks: [{ label: 'Pricing Guide', href: '/pricing' }],
    featured: false, published: true, displayOrder: 3, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'when-is-deposit-required', question: 'When is the 15% deposit required?', category: 'pricing-deposits',
    answer: `A 15% deposit is required only after the studio has approved the project and both parties have agreed on the direction, estimate, and appointment date. The deposit secures the confirmed appointment. No deposit is required to submit an initial inquiry or to browse.`,
    keywords: ['deposit', '15%', 'when deposit', 'deposit required', 'payment'],
    relatedLinks: [{ label: 'Pricing Guide', href: '/pricing' }, { label: 'Submit an Inquiry', href: '/booking' }],
    featured: true, published: true, displayOrder: 4, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'deposit-part-of-balance', question: 'Is the deposit part of the final balance?', category: 'pricing-deposits',
    answer: `Yes. The 15% deposit is applied directly toward your final tattoo balance. For example, an $800 estimated total with a $120 deposit leaves a $680 remaining balance. The deposit is not an additional fee.`,
    keywords: ['deposit balance', 'deposit applied', 'deposit credit', 'final payment'],
    relatedLinks: [{ label: 'Pricing Guide', href: '/pricing' }],
    featured: false, published: true, displayOrder: 5, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'exact-price-before-consultation', question: 'Can I receive an exact price before consultation?', category: 'pricing-deposits',
    answer: `Not typically. Accurately pricing custom work requires understanding the design, placement, scale, and time commitment — all of which are discussed during the consultation. You will receive a clear estimate before any deposit is collected, but a fixed quote before consultation is not standard.`,
    keywords: ['exact price', 'quote', 'before consultation', 'fixed price'],
    relatedLinks: [{ label: 'Pricing Guide', href: '/pricing' }],
    featured: false, published: true, displayOrder: 6, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'pay-to-submit-inquiry', question: 'Do I pay anything when submitting an inquiry?', category: 'pricing-deposits',
    answer: `No. There is no charge to submit an inquiry, browse the site, or share your project idea. Payment — including the 15% deposit — is only discussed after the studio has reviewed the project and both parties are ready to move forward with a confirmed appointment.`,
    keywords: ['payment inquiry', 'free', 'no charge', 'submit cost'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: true, published: true, displayOrder: 7, policyDependent: false, lastReviewed: '2026-07-19',
  },

  /* ─── Styles & Design ─── */
  {
    slug: 'what-styles-offered', question: 'What tattoo styles are offered?', category: 'styles-design',
    answer: `The studio works across six defined styles: Fine Line, Blackwork, Japanese, Realism, Geometric, and Color. Each style has its own page with detailed guidance on visual characteristics, suitable subjects, recommended placements, aging considerations, and maintenance. The studio may also consider work outside these categories depending on the project and artist fit.`,
    keywords: ['styles', 'offered', 'available styles', 'what styles'],
    relatedLinks: [{ label: 'Explore Tattoo Styles', href: '/styles' }],
    featured: true, published: true, displayOrder: 1, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'copy-another-artist-tattoo', question: 'Can you copy a tattoo from another artist?', category: 'styles-design',
    answer: `No. The studio creates original, custom-drawn work for every client. Reference images communicate direction, mood, and aesthetic — they are not templates to be traced or replicated. Copying another artist's original work is not consistent with the studio's commitment to original design. Every piece is drawn specifically for the individual client and never repeated.`,
    keywords: ['copy', 'replicate', 'another artist', 'existing tattoo', 'duplicate'],
    relatedLinks: [{ label: 'Explore Styles', href: '/styles' }, { label: 'View Gallery', href: '/gallery' }],
    featured: false, published: true, displayOrder: 2, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'bring-reference-images', question: 'Can I bring reference images?', category: 'styles-design',
    answer: `Yes — and it is encouraged. Reference images help communicate direction, mood, style, and subject matter. Bring images that illustrate the general aesthetic, not images you expect to be duplicated. The studio does not copy existing tattoos or artwork. Reference images serve as a starting point for an original design developed specifically for you.`,
    keywords: ['reference', 'images', 'photos', 'inspiration', 'examples'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 3, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'unsure-size-placement', question: 'What if I am not sure about size or placement?', category: 'styles-design',
    answer: `That is common. During the consultation, the artist can discuss how size affects readability, detail, aging, and cost. Placement guidance considers the natural contours of the body, how the design flows with movement, and long-term visibility. The inquiry form allows you to indicate flexibility — you do not need to commit to an exact size or spot before the consultation.`,
    keywords: ['size', 'placement', 'not sure', 'unsure', 'where'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 4, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'very-small-design', question: 'Can every design be made very small?', category: 'styles-design',
    answer: `No. Scale directly affects readability, detail, and aging. A design that looks crisp at four inches may lose legibility at one inch — especially over time as the skin naturally changes and ink softens. Fine line work is more forgiving at smaller scales, but even there, sub-centimeter elements will blur. The artist will advise on a minimum viable size during the consultation to ensure your tattoo ages well.`,
    keywords: ['small', 'tiny', 'mini', 'minimum size', 'scale down'],
    relatedLinks: [{ label: 'Explore Fine Line', href: '/styles/fine-line' }],
    featured: false, published: true, displayOrder: 5, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'fine-line-last-forever', question: 'Do fine-line tattoos stay exactly the same forever?', category: 'styles-design',
    answer: `No tattoo remains completely unchanged forever. All tattoos soften as skin ages. Fine line work, by its nature, shows that softening more visibly than bolder styles. Well-placed fine line pieces with adequate scale and proper aftercare can remain beautiful for decades. Designs with excessive micro-detail or insufficient spacing between lines may blur together over time and require more frequent touch-ups.`,
    keywords: ['fine line aging', 'last forever', 'fade', 'blur', 'over time'],
    relatedLinks: [{ label: 'Fine Line Style', href: '/styles/fine-line' }],
    featured: false, published: true, displayOrder: 6, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'cover-up-every-request', question: 'Can every cover-up request be accepted?', category: 'styles-design',
    answer: `No. Cover-up suitability depends on the existing tattoo's size, density, color, placement, and age. Dark, dense, or heavily saturated existing work limits what can be placed over it. Some tattoos cannot be effectively covered without a larger, darker composition — which may not match the client's goals. The studio will evaluate the existing work honestly during consultation and advise whether a cover-up is the right approach.`,
    keywords: ['cover-up', 'cover up', 'existing tattoo', 'hide', 'conceal'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 7, policyDependent: false, lastReviewed: '2026-07-19',
  },

  /* ─── Artists ─── */
  {
    slug: 'who-are-the-artists', question: 'Who are the artists?', category: 'artists',
    answer: `Artist profiles are not yet published. The studio is building its roster and will publish verified artist profiles — including portfolios, specialties, and background — once each artist's information is confirmed and ready. No fictional artist names or placeholder profiles are displayed.`,
    keywords: ['artists', 'who', 'roster', 'team', 'staff'],
    relatedLinks: [{ label: 'Artists', href: '/artists' }],
    featured: true, published: true, displayOrder: 1, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'can-studio-match-artist', question: 'Can the studio match me with an artist?', category: 'artists',
    answer: `Yes. If you are unsure which artist fits your project, the studio can review your idea and recommend the right direction. The inquiry form includes a "Match me with an artist" option. Artist profiles and matching details will be published when verified.`,
    keywords: ['match', 'artist matching', 'recommend', 'find artist'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }, { label: 'Artists', href: '/artists' }],
    featured: false, published: true, displayOrder: 2, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'guest-artists', question: 'Are guest artists available?', category: 'artists',
    answer: `The studio may host guest artists periodically. Guest artist availability, scheduling, and booking will be announced when confirmed. No guest artist bookings are currently available.`,
    keywords: ['guest', 'visiting', 'traveling artist', 'guest artist'],
    relatedLinks: [{ label: 'Artists', href: '/artists' }],
    featured: false, published: true, displayOrder: 3, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'view-artist-portfolio', question: 'How do I view an artist\'s portfolio?', category: 'artists',
    answer: `Once artist profiles are published, each profile will include a portfolio of completed work. In the meantime, the gallery page provides an overview of the studio's stylistic range across all six tattoo styles. Artist-specific portfolios will be available when artist records are verified and added.`,
    keywords: ['portfolio', 'work', 'view work', 'see art'],
    relatedLinks: [{ label: 'View Gallery', href: '/gallery' }, { label: 'Artists', href: '/artists' }],
    featured: false, published: true, displayOrder: 4, policyDependent: false, lastReviewed: '2026-07-19',
  },

  /* ─── Membership ─── */
  {
    slug: 'what-are-membership-plans', question: 'What are the membership plans?', category: 'membership',
    answer: `Three plans are offered: Basic ($88/year, 5% discount on sessions), Premium ($188/year, 12% discount), and Elite ($288/year, 20% discount). Each plan provides a discount on tattoo session rates at the studio. Full benefit details are available on the membership page.`,
    keywords: ['plans', 'tiers', 'basic', 'premium', 'elite', 'options'],
    relatedLinks: [{ label: 'Membership Details', href: '/membership' }],
    featured: true, published: true, displayOrder: 1, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'membership-replace-deposit', question: 'Does membership replace the 15% deposit?', category: 'membership',
    answer: `No. Membership provides a discount on the tattoo session rate. It does not replace, reduce, or eliminate the 15% deposit required to reserve a confirmed appointment. The deposit is a separate requirement that applies regardless of membership status.`,
    keywords: ['membership deposit', 'replace deposit', 'deposit vs membership'],
    relatedLinks: [{ label: 'Membership Details', href: '/membership' }, { label: 'Pricing Guide', href: '/pricing' }],
    featured: true, published: true, displayOrder: 2, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'membership-guarantee-discount', question: 'Are discounts guaranteed to apply to every service?', category: 'membership',
    answer: `No. Membership discounts apply to tattoo session rates at the studio as configured by the active membership policy. They do not apply to merchandise, aftercare products, guest artist bookings, or special events. Final eligibility and exclusions are confirmed before enrollment.`,
    keywords: ['guarantee', 'every service', 'exclusions', 'not all'],
    relatedLinks: [{ label: 'Membership Details', href: '/membership' }],
    featured: false, published: true, displayOrder: 3, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'membership-appointment-availability', question: 'Does membership guarantee appointment availability?', category: 'membership',
    answer: `No. Membership does not guarantee immediate availability or a particular artist. It provides a discount on session rates for confirmed appointments. Appointment availability depends on artist schedules, project scope, and studio capacity — the same factors that apply to all clients.`,
    keywords: ['availability', 'guarantee appointment', 'priority', 'faster'],
    relatedLinks: [{ label: 'Membership Details', href: '/membership' }],
    featured: false, published: true, displayOrder: 4, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'membership-shared', question: 'Can membership be shared?', category: 'membership',
    answer: `Membership terms, including transferability and sharing, will be specified in the final membership agreement provided before purchase. Review the complete terms during the enrollment process.`,
    keywords: ['share', 'transfer', 'family', 'friend', 'shared'],
    relatedLinks: [{ label: 'Membership Details', href: '/membership' }],
    featured: false, published: true, displayOrder: 5, policyDependent: true, lastReviewed: '2026-07-19',
  },
  {
    slug: 'membership-expire', question: 'Does membership expire?', category: 'membership',
    answer: `Membership duration, expiration, and renewal terms will be provided in the final membership agreement. The studio intends to offer clear, fair terms that respect the member's commitment.`,
    keywords: ['expire', 'expiration', 'duration', 'renew', 'term'],
    relatedLinks: [{ label: 'Membership Details', href: '/membership' }],
    featured: false, published: true, displayOrder: 6, policyDependent: true, lastReviewed: '2026-07-19',
  },
  {
    slug: 'how-to-join-membership', question: 'How do I join?', category: 'membership',
    answer: `Enrollment is not yet available. When the membership program launches, you will be able to select a plan, review the complete membership terms, enter your details, and complete enrollment. A confirmation will be provided upon successful enrollment. This FAQ and the membership page will be updated when enrollment opens.`,
    keywords: ['join', 'enroll', 'sign up', 'register', 'how to join'],
    relatedLinks: [{ label: 'Membership Details', href: '/membership' }],
    featured: false, published: true, displayOrder: 7, policyDependent: false, lastReviewed: '2026-07-19',
  },

  /* ─── Preparation & Studio Visit ─── */
  {
    slug: 'how-to-prepare', question: 'How should I prepare for a tattoo appointment?', category: 'preparation-visit',
    answer: `General guidance: arrive rested and well, eat a reasonable meal beforehand, wear clothing that allows easy access to the placement area, bring any required identification or consent documents if the studio has requested them, and contact the studio if circumstances change before your appointment. The studio will provide specific preparation instructions relevant to your session.`,
    keywords: ['prepare', 'preparation', 'before appointment', 'ready', 'get ready'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 1, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'what-to-bring', question: 'What should I bring?', category: 'preparation-visit',
    answer: `Bring identification if the studio has requested it, any consent forms or documentation discussed during booking, and reference images if they are not already submitted digitally. The studio will let you know ahead of time if anything specific is required for your appointment.`,
    keywords: ['bring', 'what to bring', 'id', 'identification', 'items'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 2, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'what-to-wear', question: 'What should I wear?', category: 'preparation-visit',
    answer: `Wear comfortable clothing that provides easy access to the placement area. For example: a tank top or loose sleeve for an upper arm piece, shorts for a thigh piece, or a button-down shirt worn backward for a back piece. Choose something you do not mind getting ink on — although the studio takes care to protect clothing, small amounts of pigment can transfer.`,
    keywords: ['wear', 'clothing', 'outfit', 'dress', 'what to wear'],
    relatedLinks: [],
    featured: false, published: true, displayOrder: 3, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'eat-before-appointment', question: 'Can I eat before the appointment?', category: 'preparation-visit',
    answer: `Yes. It is generally recommended to eat a reasonable meal before a tattoo session. Follow the final instructions provided by the studio.`,
    keywords: ['eat', 'food', 'meal', 'hungry', 'eating'],
    relatedLinks: [],
    featured: false, published: true, displayOrder: 4, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'alcohol-before-appointment', question: 'Should I drink alcohol before the appointment?', category: 'preparation-visit',
    answer: `No. Alcohol consumption before a tattoo appointment is not recommended. Follow the final instructions provided by the studio. The artist will discuss any relevant preparation guidelines during the consultation.`,
    keywords: ['alcohol', 'drink', 'drinking', 'beer', 'wine'],
    relatedLinks: [],
    featured: false, published: true, displayOrder: 5, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'feeling-unwell', question: 'What if I feel unwell?', category: 'preparation-visit',
    answer: `Contact the studio as soon as possible if you feel unwell before your appointment. The studio would rather reschedule than proceed under conditions that may affect your comfort, healing, or the quality of the work. Do not attend if you believe you may be contagious.`,
    keywords: ['sick', 'ill', 'unwell', 'cold', 'fever', 'cancel sick'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 6, policyDependent: false, lastReviewed: '2026-07-19',
  },

  /* ─── Aftercare & Touch-Ups ─── */
  {
    slug: 'aftercare-instructions', question: 'Will I receive aftercare instructions?', category: 'aftercare-touchups',
    answer: `Yes. Final aftercare instructions will be provided for your specific tattoo. These instructions are tailored to the size, placement, style, and technique used. The studio will walk through the aftercare process before you leave and provide written guidance. Follow the instructions carefully — proper aftercare is as important as the application itself for long-term results.`,
    keywords: ['aftercare', 'instructions', 'care', 'healing', 'after appointment'],
    relatedLinks: [],
    featured: false, published: true, displayOrder: 1, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'touch-ups-included', question: 'Are touch-ups included?', category: 'aftercare-touchups',
    answer: `Touch-up eligibility is subject to the approved studio policy. Many artists include a complimentary touch-up within a reasonable window after healing. This will be discussed during your consultation and confirmed in your appointment agreement. Touch-ups address normal healing variation — they are not for design changes or altering the original work.`,
    keywords: ['touch-up', 'touch up', 'included', 'free', 'fix'],
    relatedLinks: [{ label: 'Pricing Guide', href: '/pricing' }],
    featured: false, published: true, displayOrder: 2, policyDependent: true, lastReviewed: '2026-07-19',
  },
  {
    slug: 'how-long-healing', question: 'How long does healing take?', category: 'aftercare-touchups',
    answer: `Healing varies by person, placement, size, and other factors. Surface healing typically takes two to four weeks, during which the tattoo may peel, itch, and appear dull. Deeper skin layers continue to heal for several months. The tattoo will settle into its final appearance over three to six months. Your artist will provide a healing timeline specific to your piece.`,
    keywords: ['healing', 'how long', 'recovery', 'heal time', 'duration'],
    relatedLinks: [],
    featured: false, published: true, displayOrder: 3, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'swim-exercise-sun', question: 'Can I swim, exercise, or expose the tattoo to sunlight?', category: 'aftercare-touchups',
    answer: `During the initial healing period, avoid submerging the tattoo in water (pools, baths, oceans), limit heavy sweating, and keep the tattoo protected from direct sunlight. Once fully healed, consistent sun protection is essential for preserving the tattoo's appearance long-term. The studio will provide specific guidance on timing for resuming these activities.`,
    keywords: ['swim', 'exercise', 'sun', 'pool', 'beach', 'gym', 'workout'],
    relatedLinks: [],
    featured: false, published: true, displayOrder: 4, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'concerned-about-healing', question: 'What if I am concerned about healing?', category: 'aftercare-touchups',
    answer: `Reach out to the studio if you have concerns about how your tattoo is healing. The artist can assess the situation and advise on next steps. Concerns about unexpected symptoms — such as signs of infection or an allergic reaction — should be directed to an appropriate healthcare professional. The studio can provide aftercare guidance but does not provide medical diagnosis or treatment.`,
    keywords: ['concern', 'worried', 'problem', 'infection', 'not healing', 'red'],
    relatedLinks: [],
    featured: false, published: true, displayOrder: 5, policyDependent: false, lastReviewed: '2026-07-19',
  },

  /* ─── Policies & Privacy ─── */
  {
    slug: 'cancellation-policy', question: 'What is the cancellation policy?', category: 'policies-privacy',
    answer: `Appointment, rescheduling, cancellation, and touch-up terms will be confirmed before your appointment is reserved. The studio intends to provide clear and fair policies that respect both the artist's time and the client's commitment. Full policy terms will be outlined in your appointment agreement.`,
    keywords: ['cancel', 'cancellation', 'refund', 'policy', 'terms'],
    relatedLinks: [{ label: 'Pricing Guide', href: '/pricing' }],
    featured: false, published: true, displayOrder: 1, policyDependent: true, lastReviewed: '2026-07-19',
  },
  {
    slug: 'reschedule', question: 'Can I reschedule?', category: 'policies-privacy',
    answer: `Rescheduling terms will be confirmed before your appointment is reserved. The studio generally aims to accommodate reasonable schedule changes. Specific notice periods, deposit handling, and any applicable conditions will be provided in your appointment agreement.`,
    keywords: ['reschedule', 'change date', 'move', 'postpone'],
    relatedLinks: [{ label: 'Pricing Guide', href: '/pricing' }],
    featured: false, published: true, displayOrder: 2, policyDependent: true, lastReviewed: '2026-07-19',
  },
  {
    slug: 'deposits-refundable', question: 'Are deposits refundable or transferable?', category: 'policies-privacy',
    answer: `Deposit handling — including refundability and transferability — will be confirmed before your appointment is reserved. The studio intends to provide clear and fair terms. These details will be part of your appointment agreement.`,
    keywords: ['refundable', 'transferable', 'deposit refund', 'money back'],
    relatedLinks: [{ label: 'Pricing Guide', href: '/pricing' }],
    featured: false, published: true, displayOrder: 3, policyDependent: true, lastReviewed: '2026-07-19',
  },
  {
    slug: 'late-arrival', question: 'What happens if I arrive late?', category: 'policies-privacy',
    answer: `Late arrival policies will be confirmed before your appointment is reserved. The studio will do its best to accommodate the full session within the remaining booked time, but in some cases the session may need to be shortened or rescheduled. Please communicate any delays as early as possible.`,
    keywords: ['late', 'arrival', 'delay', 'running late', 'traffic'],
    relatedLinks: [],
    featured: false, published: true, displayOrder: 4, policyDependent: true, lastReviewed: '2026-07-19',
  },
  {
    slug: 'what-info-collected', question: 'What information does the booking form collect?', category: 'policies-privacy',
    answer: `The booking form collects the information you provide: name, email, phone, project description, placement and style preferences, availability, reference images, and optional fields such as accessibility preferences and membership status. This information is used only to review your inquiry and to contact you regarding your project. No submission occurs while the form backend is still being configured.`,
    keywords: ['information', 'collected', 'data', 'privacy', 'personal'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }, { label: 'Privacy Notice', href: '/privacy' }],
    featured: false, published: true, displayOrder: 5, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'files-uploaded-sent', question: 'Are uploaded files sent to the studio?', category: 'policies-privacy',
    answer: `Not currently. File upload fields on the booking form allow you to preview reference images locally in your browser. These files have not been uploaded to the studio and are not sent while the form backend is unavailable. Once the submission system is connected, file handling will follow the studio's data practices.`,
    keywords: ['files', 'upload', 'sent', 'images sent', 'attachments'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 6, policyDependent: false, lastReviewed: '2026-07-19',
  },
  {
    slug: 'draft-saved', question: 'Is my draft saved?', category: 'policies-privacy',
    answer: `The booking form can save your progress on your current device — but only if you choose to enable the "Save my progress on this device" option. By default, draft saving is off. When enabled, your form entries (excluding uploaded files, consent choices, and sensitive information) are stored locally on your browser. Clearing your browser data or using a different device means your draft will not be available. No draft information is sent to the studio until you complete and submit the form through a connected backend.`,
    keywords: ['draft', 'save', 'saved', 'progress', 'local', 'storage'],
    relatedLinks: [{ label: 'Submit an Inquiry', href: '/booking' }],
    featured: false, published: true, displayOrder: 7, policyDependent: false, lastReviewed: '2026-07-19',
  },
]

/* ═══════════════════════════════════════════════════════════════════
   Constants
   ═══════════════════════════════════════════════════════════════════ */

const MOST_ASKED_SLUGS = [
  'how-do-i-begin',
  'when-is-deposit-required',
  'cancellation-policy',
  'reschedule',
  'how-to-prepare',
  'aftercare-instructions',
  'what-are-membership-plans',
]

const INITIAL_VISIBLE = 4

/* ═══════════════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════════════ */

const FAQPage: React.FC = () => {
  const reduced = useReducedMotion()
  const [searchParams] = useSearchParams()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'all'>('all')
  const [openSlugs, setOpenSlugs] = useState<Set<string>>(new Set())
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({})

  // Apply URL params and hash on mount
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && CATEGORIES.some(c => c.id === cat)) {
      setActiveCategory(cat as FAQCategory)
    }
    const h = window.location.hash
    if (h && h.startsWith('#')) {
      const slug = h.slice(1)
      const entry = FAQ_DATA.find(e => e.slug === slug && e.published)
      if (entry) {
        setActiveCategory(entry.category)
        setOpenSlugs(prev => new Set(prev).add(slug))
        setTimeout(() => {
          document.getElementById(`faq-${slug}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 150)
      }
    }
  }, [searchParams])

  const toggleOpen = useCallback((slug: string) => {
    setOpenSlugs(prev => {
      const next = new Set(prev)
      if (next.has(slug)) next.delete(slug)
      else next.add(slug)
      return next
    })
  }, [])

  const clearSearch = useCallback(() => {
    setQuery('')
    setActiveCategory('all')
    searchInputRef.current?.focus()
  }, [])

  const showMore = useCallback((categoryLabel: string, total: number) => {
    setVisibleCounts(prev => ({ ...prev, [categoryLabel]: total }))
  }, [])

  // Reset visible counts when category or search changes
  useEffect(() => {
    setVisibleCounts({})
  }, [activeCategory, query])

  // Filter and search
  const filteredFAQs = useMemo(() => {
    let results = FAQ_DATA.filter(e => e.published)
    if (activeCategory !== 'all') results = results.filter(e => e.category === activeCategory)
    if (query.trim()) {
      const q = query.toLowerCase().trim()
      results = results.filter(e =>
        e.question.toLowerCase().includes(q) ||
        e.answer.toLowerCase().includes(q) ||
        e.keywords.some(k => k.toLowerCase().includes(q)) ||
        e.category.toLowerCase().includes(q)
      )
    }
    return results.sort((a, b) => a.displayOrder - b.displayOrder)
  }, [activeCategory, query])

  // Most Asked entries (only in All view, no search active)
  const mostAsked = useMemo(() => {
    if (activeCategory !== 'all' || query.trim()) return []
    return MOST_ASKED_SLUGS
      .map(slug => FAQ_DATA.find(e => e.slug === slug && e.published))
      .filter((e): e is FAQEntry => !!e)
  }, [activeCategory, query])

  const mostAskedSlugSet = useMemo(() => new Set(mostAsked.map(e => e.slug)), [mostAsked])

  // Group remaining FAQs by category (excluding Most Asked slugs in All view)
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, FAQEntry[]> = {}
    const remaining = activeCategory === 'all' && !query.trim()
      ? filteredFAQs.filter(e => !mostAskedSlugSet.has(e.slug))
      : filteredFAQs

    for (const faq of remaining) {
      const cat = CATEGORIES.find(c => c.id === faq.category)
      const label = cat?.label ?? faq.category
      if (!groups[label]) groups[label] = []
      groups[label].push(faq)
    }
    return groups
  }, [filteredFAQs, activeCategory, query, mostAskedSlugSet])

  const anim = reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.35 } }

  return (
    <div data-component="src/pages/FAQPage.tsx" className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden">
      {/* ═══ Hero ═══ */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center py-24">
        <div className="absolute inset-0">
          <img
            src="https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784531290177-kj9ijjlxjl8.png"
            alt="" className="w-full h-full object-cover opacity-12" loading="eager" width={1800} height={1012}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/80 via-[#0d0d0d]/40 to-[#0d0d0d]" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-12 lg:px-24">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C8B89A]/60 font-light mb-6">
            Client Guide &middot; Seven Sins Tattoo &middot; Folkston, Georgia
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.02em] leading-[1.05] mb-5">
            QUESTIONS,<br /><span className="italic">CONSIDERED</span>
          </h1>
          <p className="text-white/35 text-sm md:text-base font-light leading-relaxed max-w-lg">
            Clear answers about the studio, the process, pricing, membership, and what to expect.
          </p>
        </div>
      </section>

      {/* ═══ Search ═══ */}
      <section className="max-w-2xl mx-auto px-3 sm:px-6 md:px-12 py-8 md:py-10">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 pointer-events-none" />
          <input
            ref={searchInputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search appointments, deposits, aftercare, membership..."
            aria-label="Search FAQ questions and answers"
            className="w-full bg-white/[0.04] border border-white/[0.08] py-4 pl-13 pr-12 text-sm font-light text-white/80 placeholder:text-white/15 placeholder:font-light focus:outline-none focus:border-white/25 transition-colors"
          />
          {query && (
            <button onClick={clearSearch} aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/40 transition-colors p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </section>

      {/* ═══ Category Filters ═══ */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-12 pb-6">
        {/* Mobile: horizontally scrollable row with hidden scrollbar */}
        <div className="md:hidden overflow-x-auto scrollbar-none -mx-1 px-1">
          <div className="flex gap-1.5 min-w-max pb-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`text-[11px] whitespace-nowrap uppercase tracking-[0.1em] px-3.5 py-2.5 border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 ${
                activeCategory === 'all' ? 'border-[#C8B89A]/40 text-[#C8B89A] bg-[#C8B89A]/[0.04]' : 'border-white/[0.06] text-white/25 hover:border-white/15 hover:text-white/40'
              }`}
            >
              All
            </button>
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`text-[11px] whitespace-nowrap uppercase tracking-[0.1em] px-3.5 py-2.5 border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 ${
                  activeCategory === c.id ? 'border-[#C8B89A]/40 text-[#C8B89A] bg-[#C8B89A]/[0.04]' : 'border-white/[0.06] text-white/25 hover:border-white/15 hover:text-white/40'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        {/* Desktop: flex-wrap */}
        <div className="hidden md:flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`text-[11px] whitespace-nowrap uppercase tracking-[0.12em] px-4 py-2.5 border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 ${
              activeCategory === 'all' ? 'border-[#C8B89A]/40 text-[#C8B89A] bg-[#C8B89A]/[0.04]' : 'border-white/[0.06] text-white/25 hover:border-white/15 hover:text-white/40'
            }`}
          >
            All
          </button>
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`text-[11px] whitespace-nowrap uppercase tracking-[0.12em] px-4 py-2.5 border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 ${
                activeCategory === c.id ? 'border-[#C8B89A]/40 text-[#C8B89A] bg-[#C8B89A]/[0.04]' : 'border-white/[0.06] text-white/25 hover:border-white/15 hover:text-white/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        {activeCategory !== 'all' && (
          <p className="mt-3 text-[11px] text-white/15 font-light">
            {CATEGORIES.find(c => c.id === activeCategory)?.description}
          </p>
        )}
      </section>

      {/* ═══ FAQ Accordions ═══ */}
      <section className="max-w-3xl mx-auto px-3 sm:px-6 md:px-12 py-4 md:py-8">
        {filteredFAQs.length === 0 ? (
          <motion.div {...anim} className="text-center py-16 border border-white/[0.04]">
            <p className="text-sm text-white/25 font-light mb-2">No matching answer was found.</p>
            <p className="text-[11px] text-white/12 font-light mb-6">Try another phrase or begin a booking inquiry.</p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/booking" className="text-[10px] uppercase tracking-[0.15em] text-[#C8B89A]/60 hover:text-[#C8B89A]/80 transition-colors">Begin an Inquiry</Link>
              <Link to="/" className="text-[10px] uppercase tracking-[0.15em] text-white/20 hover:text-white/40 transition-colors">Return Home</Link>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Most Asked — only in All view with no search */}
            {mostAsked.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <MessageCircle className="w-4 h-4 text-[#C8B89A]/50" />
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8B89A]/60 font-medium">Most Asked</p>
                </div>
                <div className="space-y-[1px]">
                  {mostAsked.map(faq => (
                    <AccordionItem key={faq.slug} faq={faq} openSlugs={openSlugs} toggleOpen={toggleOpen} reduced={reduced} />
                  ))}
                </div>
              </div>
            )}

            {/* Category groups */}
            {Object.entries(groupedFAQs).map(([category, faqs]) => {
              const isAllView = activeCategory === 'all' && !query.trim()
              const visible = isAllView ? (visibleCounts[category] ?? INITIAL_VISIBLE) : faqs.length
              const shown = faqs.slice(0, visible)
              const hidden = faqs.length - visible

              return (
                <div key={category} className="mb-10">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#C8B89A]/45 font-medium mb-4">{category}</p>
                  <div className="space-y-[1px]">
                    {shown.map(faq => (
                      <AccordionItem key={faq.slug} faq={faq} openSlugs={openSlugs} toggleOpen={toggleOpen} reduced={reduced} />
                    ))}
                  </div>
                  {hidden > 0 && (
                    <button
                      onClick={() => showMore(category, faqs.length)}
                      className="mt-5 w-full text-center py-3 border border-white/[0.06] text-[11px] uppercase tracking-[0.15em] text-white/30 hover:text-white/50 hover:border-white/12 transition-colors"
                    >
                      Show {hidden} More {hidden === 1 ? 'Answer' : 'Answers'}
                    </button>
                  )}
                </div>
              )
            })}
          </>
        )}
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="max-w-2xl mx-auto px-3 sm:px-6 md:px-12 py-20 border-t border-white/[0.06] text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8B89A]/50 font-medium mb-5">Still Have a Question?</p>
        <p className="text-sm text-white/30 font-light leading-relaxed mb-8 max-w-md mx-auto">
          Send us a message or begin a consultation and we will guide you from there.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/booking" className="w-full sm:w-auto px-10 py-3.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 text-center">
            Begin a Consultation
          </Link>
          <Link to="/contact" className="w-full sm:w-auto px-10 py-3.5 border border-white/12 text-white/40 text-xs uppercase tracking-[0.2em] font-medium hover:border-white/30 hover:text-white/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 text-center">
            Contact the Studio
          </Link>
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   Accordion Item (extracted for reuse)
   ═══════════════════════════════════════════════════════════════════ */

const AccordionItem: React.FC<{
  faq: FAQEntry
  openSlugs: Set<string>
  toggleOpen: (slug: string) => void
  reduced: boolean | null
}> = ({ faq, openSlugs, toggleOpen, reduced }) => {
  const isOpen = openSlugs.has(faq.slug)

  return (
    <div id={`faq-${faq.slug}`} className="border border-white/[0.08]">
      <button
        onClick={() => toggleOpen(faq.slug)}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${faq.slug}`}
        className="w-full text-left px-5 md:px-6 py-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/15 group"
      >
        <span className="text-sm font-light text-white/60 group-hover:text-white/75 transition-colors leading-relaxed pr-4">{faq.question}</span>
        <span className="flex-shrink-0 mt-0.5 text-white/25">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${faq.slug}`}
            role="region"
            initial={reduced ? {} : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 pt-1">
              <p className="text-[13px] text-white/35 font-light leading-[1.75] whitespace-pre-line">{faq.answer}</p>
              {faq.policyDependent && (
                <p className="mt-3 text-[10px] text-white/10 font-light italic">This answer references a policy that is subject to final studio confirmation.</p>
              )}
              {faq.relatedLinks.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {faq.relatedLinks.map(link => (
                    <Link key={link.href} to={link.href} className="text-[11px] text-[#C8B89A]/45 hover:text-[#C8B89A]/70 transition-colors uppercase tracking-[0.1em] inline-flex items-center gap-1.5">
                      {link.label} <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQPage