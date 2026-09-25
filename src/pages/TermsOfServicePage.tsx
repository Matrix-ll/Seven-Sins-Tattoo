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

export default function TermsOfServicePage() {
  useEffect(() => {
    document.title = 'Terms of Service — Seven Sins Tattoo | Private Atelier'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'The terms governing use of the Seven Sins Tattoo website, studio services, deposits, appointment scheduling, and membership purchases.'
      )
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <PolicyLayout
      eyebrow="Legal · Seven Sins Tattoo · Folkston, Georgia"
      title="TERMS OF"
      titleItalic="SERVICE"
      intro="The terms that govern your use of this website and any service, appointment, or membership obtained through it."
      updated="September 2026"
    >
      <PolicySection number="01" title="Acceptance of these terms">
        <PolicyText>
          These Terms of Service ("Terms") govern your access to and use of this website, and any
          service, appointment, or membership purchased through it. This website is operated by{' '}
          {STUDIO_CONTACT.name} ("the studio," "we," "us," or "our").
        </PolicyText>
        <PolicyText>
          By accessing this website, submitting an inquiry, or purchasing a service or membership,
          you confirm that you have read, understood, and agree to be bound by these Terms. If you do
          not agree, please do not use this website or purchase our services.
        </PolicyText>
      </PolicySection>

      <PolicySection number="02" title="Eligibility">
        <PolicyText>
          This website is intended for adults. Tattoo services are provided only to clients who are
          18 years of age or older. You must be at least 18 years old to submit a tattoo inquiry or
          purchase any service offered on this website. By using this website, you represent that
          you meet this requirement.
        </PolicyText>
      </PolicySection>

      <PolicySection number="03" title="Nature of this website">
        <PolicyText>
          This website presents information about the studio, its work, and its services. It also
          allows you to submit an inquiry, request a consultation, purchase certain products or
          memberships, and review answers to common questions.
        </PolicyText>
        <PolicyText>
          The information published on this website — including pricing guidance, style
          descriptions, membership benefits, and general process explanations — is provided for
          general information. It does not constitute a binding quotation, a confirmed appointment,
          or professional medical advice.
        </PolicyText>
      </PolicySection>

      <PolicySection number="04" title="Inquiries are not appointments">
        <PolicyText>
          Submitting an inquiry or booking form shares your project details with the studio for
          review. It does not create or confirm an appointment. An appointment exists only once the
          studio has reviewed your project, the design direction and estimated cost have been
          discussed, and any required deposit has been arranged and received.
        </PolicyText>
        <PolicyText>
          Any date you indicate on a form expresses a preference only. It does not reserve studio
          time and does not imply that a given artist or date is available.
        </PolicyText>
      </PolicySection>

      <PolicySection number="05" title="Quotations, deposits, and pricing">
        <PolicyText>
          Tattoo pricing is determined by the artist's hourly rate multiplied by the estimated time
          the work requires, taking into account design complexity, size, placement, colour
          preference, and the number of sessions anticipated. Estimates are provided before any
          deposit is collected.
        </PolicyText>
        <PolicyText>
          The studio's minimum charge is $100, which covers setup, materials, and artist time for
          smaller pieces. A deposit of 15% of the estimated total is required to secure a confirmed
          appointment. This deposit is applied toward your final balance and is not an additional
          fee.
        </PolicyText>
        <PolicyText>
          Estimates are given in good faith based on the information available at the time. If the
          scope of a project changes materially — for example, following a substantial design
          revision or a change in size or placement — a revised estimate may be required.
          Appointment, rescheduling, cancellation, and deposit-handling terms are confirmed before
          your appointment is reserved and form part of your appointment agreement.
        </PolicyText>
      </PolicySection>

      <PolicySection number="06" title="Payment">
        <PolicyText>
          Payments made through this website are processed by a third-party payment provider using a
          hosted checkout. You are transferred to the provider's secure environment to complete
          payment. We do not receive or store your full payment card details.
        </PolicyText>
        <PolicyText>
          By completing a purchase, you confirm that you are authorised to use the payment method
          provided, and you agree to the payment provider's own terms in addition to these Terms.
          Prices are stated in United States dollars.
        </PolicyText>
      </PolicySection>

      <PolicySection number="07" title="Memberships">
        <PolicyText>
          The studio may offer membership plans that provide a discount on tattoo session rates.
          Membership is purchased as a one-time payment and is not a subscription or recurring
          charge.
        </PolicyText>
        <LegalList
          items={[
            'Membership provides a discount on tattoo session rates. It does not replace, reduce, or eliminate the deposit required to reserve a confirmed appointment.',
            'Discounts do not apply to merchandise, aftercare products, guest artist bookings, or special events unless expressly stated.',
            'Membership does not guarantee appointment availability, a particular artist, or immediate scheduling.',
            'The duration, expiration, renewal, transferability, and any exclusions applicable to a plan are specified in the membership terms provided before purchase.',
          ]}
        />
      </PolicySection>

      <PolicySection number="08" title="No guarantee of a particular result">
        <PolicyText>
          Tattooing is a creative and physical process. While every effort is made to realise the
          agreed design, no two tattoos are identical and the final result may vary in ways that
          cannot be fully predicted — including in how ink settles, how a piece heals, and how it
          ages over time.
        </PolicyText>
        <PolicyText>
          The studio creates original work for each client and does not copy or replicate existing
          tattoos or another artist's original artwork. Reference images communicate aesthetic
          direction only; they are not templates for duplication.
        </PolicyText>
      </PolicySection>

      <PolicySection number="09" title="Your responsibilities">
        <PolicyText>By engaging the studio, you agree to:</PolicyText>
        <LegalList
          items={[
            'Provide accurate and complete information about your project, your availability, and any relevant health or medical considerations',
            'Follow the preparation and aftercare guidance provided by the studio',
            'Attend confirmed appointments on time, or notify the studio as early as possible if circumstances change',
            'Treat studio staff and other clients with respect, and comply with studio policies while on the premises',
          ]}
        />
        <PolicyText>
          Healing outcomes depend significantly on aftercare performed by the client. The studio
          cannot be responsible for results affected by failure to follow the guidance provided.
        </PolicyText>
      </PolicySection>

      <PolicySection number="10" title="Intellectual property">
        <PolicyText>
          All content on this website — including text, photography of the studio's work, custom
          designs, graphics, layout, and the studio's name and marks — is the property of the studio
          or is used with permission, and is protected by applicable intellectual property law.
        </PolicyText>
        <PolicyText>
          You may not copy, reproduce, distribute, republish, or use any content from this website
          for commercial purposes without the studio's prior written permission. Where a custom
          design is created for you, the design remains the intellectual property of the artist;
          you receive the physical tattoo and the right to display it personally, but not the right
          to reproduce the design, resell it, or have it applied by another artist.
        </PolicyText>
      </PolicySection>

      <PolicySection number="11" title="Acceptable use of this website">
        <PolicyText>You agree not to:</PolicyText>
        <LegalList
          items={[
            'Use this website for any unlawful purpose, or in breach of any applicable regulation',
            'Submit false, misleading, or fraudulent information, including through inquiry or booking forms',
            'Attempt to gain unauthorised access to any part of this website, its systems, or its data',
            'Introduce viruses, malware, or any other harmful code, or otherwise interfere with the operation of this website',
            'Scrape, harvest, or systematically extract content or data from this website without permission',
            'Reproduce the studio\'s original designs, or represent the studio\'s work as your own',
          ]}
        />
      </PolicySection>

      <PolicySection number="12" title="Third-party services">
        <PolicyText>
          This website relies on third-party services, including web hosting, payment processing,
          and email delivery, and may link to third-party websites such as social media profiles.
          Those services and websites are governed by their own terms and privacy policies. We are
          not responsible for the content, availability, or practices of any third party.
        </PolicyText>
      </PolicySection>

      <PolicySection number="13" title="Availability and changes">
        <PolicyText>
          We may modify, suspend, or discontinue any part of this website or the services described
          on it at any time, including pricing, availability, style offerings, and membership plans.
          We may also update these Terms from time to time. The version published on this page is
          the current version, and the "Last updated" date at the top will be revised whenever
          material changes are made.
        </PolicyText>
        <PolicyText>
          Your continued use of this website after an update constitutes acceptance of the revised
          Terms. The Terms in effect at the time of your purchase govern that purchase.
        </PolicyText>
      </PolicySection>

      <PolicySection number="14" title="Disclaimer and limitation of liability">
        <PolicyText>
          This website and its content are provided on an "as is" and "as available" basis without
          warranties of any kind, whether express or implied, to the fullest extent permitted by law.
        </PolicyText>
        <PolicyText>
          To the maximum extent permitted by applicable law, the studio shall not be liable for any
          indirect, incidental, consequential, or special damages arising out of or in connection
          with your use of this website. Nothing in these Terms limits any liability that cannot be
          limited or excluded under applicable law, and nothing in these Terms affects any rights you
          may have under consumer protection legislation that applies to you.
        </PolicyText>
      </PolicySection>

      <PolicySection number="15" title="Governing law">
        <PolicyText>
          These Terms are governed by the laws of the State of Georgia, United States, without
          regard to its conflict-of-law provisions. Any dispute arising from these Terms or your use
          of this website shall be subject to the exclusive jurisdiction of the courts located in
          Georgia.
        </PolicyText>
      </PolicySection>

      <PolicySection number="16" title="Contact us">
        <PolicyText>Questions about these Terms of Service can be sent to:</PolicyText>
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
              See also: <PolicyLink to="/refund">Refund Policy</PolicyLink>
            </>,
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  )
}
