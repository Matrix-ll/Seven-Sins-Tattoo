import { useEffect } from 'react'
import {
  LegalList,
  PolicyLayout,
  PolicyMail,
  PolicyLink,
  PolicySection,
  PolicyText,
  STUDIO_CONTACT,
} from '@/components/PolicyLayout'

export default function RefundPolicyPage() {
  useEffect(() => {
    document.title = 'Refund Policy — Seven Sins Tattoo | Private Atelier'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'How deposits, memberships, and payments are handled by Seven Sins Tattoo, including what is refundable and how to request a refund.'
      )
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <PolicyLayout
      eyebrow="Legal · Seven Sins Tattoo · Folkston, Georgia"
      title="REFUND"
      titleItalic="POLICY"
      intro="How deposits, membership purchases, and payments are handled — what is refundable, and how to request a refund."
      updated="September 2026"
    >
      <PolicySection number="01" title="Overview">
        <PolicyText>
          This Refund Policy explains how payments made to {STUDIO_CONTACT.name} ("the studio," "we,"
          "us," or "our") are handled, including deposits paid to reserve tattoo appointments and
          membership purchases made through this website.
        </PolicyText>
        <PolicyText>
          It should be read together with our <PolicyLink to="/terms">Terms of Service</PolicyLink>.
          Where a specific appointment agreement or membership description states different terms,
          those specific terms prevail over this general policy.
        </PolicyText>
      </PolicySection>

      <PolicySection number="02" title="Deposits to reserve an appointment">
        <PolicyText>
          A deposit of 15% of the estimated total is required to secure a confirmed tattoo
          appointment. The deposit is applied toward your final balance — it is not an additional
          fee charged on top of the quoted price.
        </PolicyText>
        <PolicyText>
          The deposit compensates the studio for reserved artist time, design and preparation work,
          and the loss of the appointment slot when a booking is not honoured. Because of this, the
          deposit is generally non-refundable, subject to the exceptions set out below and to any
          rights you may have under applicable consumer protection law.
        </PolicyText>
      </PolicySection>

      <PolicySection number="03" title="Rescheduling">
        <PolicyText>
          We understand that circumstances change. If you need to reschedule, please contact the
          studio as early as possible. Where sufficient notice is given, your deposit may be
          transferred to a new appointment date at the studio's discretion, and typically without
          an additional charge.
        </PolicyText>
        <PolicyText>
          Rescheduling at short notice, or repeated rescheduling, may result in forfeiture of the
          deposit, because the reserved time cannot be reallocated at that point. The notice period
          that applies to your appointment is confirmed with you before your appointment is
          reserved.
        </PolicyText>
      </PolicySection>

      <PolicySection number="04" title="Cancellations by you">
        <PolicyText>If you choose to cancel a confirmed appointment:</PolicyText>
        <LegalList
          items={[
            'Cancellation with the notice period confirmed for your appointment: your deposit may, at the studio\'s discretion, be refunded or held as credit toward a future appointment.',
            'Cancellation without sufficient notice: the deposit is forfeited, as the reserved time can no longer be reallocated.',
            'Failure to attend a confirmed appointment without notice: the deposit is forfeited.',
          ]}
        />
      </PolicySection>

      <PolicySection number="05" title="Cancellations or changes by the studio">
        <PolicyText>
          If the studio cancels a confirmed appointment and cannot offer a reasonable alternative
          date, any deposit paid for that appointment will be refunded in full.
        </PolicyText>
        <PolicyText>
          If the studio is unable to complete a piece that has already been started — for example,
          due to illness or another unforeseen circumstance — we will contact you to arrange either
          a rescheduled session at no additional cost or a refund of any amount paid for work not
          yet carried out.
        </PolicyText>
      </PolicySection>

      <PolicySection number="06" title="Completed work">
        <PolicyText>
          Once a tattoo session has been carried out, the payment for that session's work is
          non-refundable. Tattooing is a permanent, personal, and irreversible service, and the
          studio cannot refund work that has already been performed.
        </PolicyText>
        <PolicyText>
          This does not affect any rights you may have if the work was not carried out in line with
          the agreed design. If you believe there is a genuine issue with completed work, please
          contact the studio promptly so that we can discuss it and, where appropriate, arrange a
          touch-up in line with the studio's touch-up practice.
        </PolicyText>
      </PolicySection>

      <PolicySection number="07" title="Membership purchases">
        <PolicyText>
          Membership plans are purchased as a one-time payment and are not subscriptions or
          recurring charges. Membership provides a discount on tattoo session rates.
        </PolicyText>
        <LegalList
          items={[
            'Where a membership has not been used — no discounted session has been booked or taken — you may request a refund within the period stated in the membership terms provided before purchase.',
            'Once a membership has been used to obtain a discounted session, the membership fee is generally non-refundable.',
            'Membership fees are not refundable where the membership has expired unused, except where required by applicable law.',
            'Membership does not include the deposit required to reserve an appointment, and a refund of a membership fee does not affect a separately paid deposit.',
          ]}
        />
      </PolicySection>

      <PolicySection number="08" title="Products and merchandise">
        <PolicyText>
          Where the studio offers physical products, such as aftercare items, these are treated as
          saleable goods. If an item arrives damaged, defective, or is not the item you ordered,
          please contact the studio within 14 days of receiving it so that we can arrange a
          replacement or a refund.
        </PolicyText>
        <PolicyText>
          For hygiene reasons, opened aftercare products cannot be returned or refunded, except
          where the item was faulty.
        </PolicyText>
      </PolicySection>

      <PolicySection number="09" title="How to request a refund">
        <PolicyText>
          To request a refund, contact the studio by email at{' '}
          <PolicyMail address={STUDIO_CONTACT.email} /> or by telephone on {STUDIO_CONTACT.phone}.
          Please include your name, the date of the appointment or purchase, and the reason for your
          request.
        </PolicyText>
        <PolicyText>
          We aim to acknowledge refund requests within a reasonable period and will confirm the
          outcome in writing. Approved refunds are returned to the original payment method used for
          the purchase. The time it takes for the amount to appear depends on your payment provider
          and may take several business days.
        </PolicyText>
      </PolicySection>

      <PolicySection number="10" title="Statutory rights">
        <PolicyText>
          Nothing in this policy excludes, restricts, or replaces any right you have under applicable
          consumer protection law. Where such law provides you with a right that is more favourable
          than the terms described here, that right applies.
        </PolicyText>
      </PolicySection>

      <PolicySection number="11" title="Changes to this policy">
        <PolicyText>
          This policy may be updated from time to time to reflect changes in our practices or
          applicable law. The version published on this page is the current version, and the "Last
          updated" date at the top will be revised whenever material changes are made. The policy in
          effect at the time of your purchase or appointment governs that purchase or appointment.
        </PolicyText>
      </PolicySection>

      <PolicySection number="12" title="Contact us">
        <PolicyText>Questions about this Refund Policy can be sent to:</PolicyText>
        <LegalList
          items={[
            <>
              Email: <PolicyMail address={STUDIO_CONTACT.email} />
            </>,
            <>Telephone: {STUDIO_CONTACT.phone}</>,
            <>Studio: {STUDIO_CONTACT.address}</>,
            <>
              General enquiries: <PolicyLink to="/contact">Contact the Studio</PolicyLink>
            </>,
            <>
              See also: <PolicyLink to="/terms">Terms of Service</PolicyLink>
            </>,
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  )
}
