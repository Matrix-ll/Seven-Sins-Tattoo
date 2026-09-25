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

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — Seven Sins Tattoo | Private Atelier'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'How Seven Sins Tattoo collects, uses, and protects personal information submitted through this website, including inquiry forms, membership purchases, and analytics.'
      )
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <PolicyLayout
      eyebrow="Legal · Seven Sins Tattoo · Folkston, Georgia"
      title="PRIVACY"
      titleItalic="POLICY"
      intro="How this studio collects, uses, and protects the information you share through this website."
      updated="September 2026"
    >
      <PolicySection number="01" title="Overview">
        <PolicyText>
          {STUDIO_CONTACT.name} ("the studio," "we," "us," or "our") operates this website as a
          private atelier for commissioned permanent body art. This Privacy Policy explains what
          information we collect through this website, why we collect it, how it is used and
          protected, and the choices available to you.
        </PolicyText>
        <PolicyText>
          By using this website or submitting information through it, you acknowledge the practices
          described in this policy. If you do not agree with any part of it, please do not submit
          information through this website.
        </PolicyText>
      </PolicySection>

      <PolicySection number="02" title="Information you provide directly">
        <PolicyText>
          We collect the information you choose to give us. This most commonly happens through the
          inquiry and booking form, which may collect:
        </PolicyText>
        <LegalList
          items={[
            'Name and contact details, including email address and telephone number',
            'Details about the tattoo you are considering, such as placement, approximate size, style preference, and description',
            'Preferred dates and general availability',
            'Reference images or supporting files you choose to attach',
            'Optional information you elect to provide, such as artist preference or membership status',
            'Any other information you include in free-text fields or send to us by email',
          ]}
        />
        <PolicyText>
          Providing this information is voluntary. You are not required to submit any personal
          information in order to browse this website.
        </PolicyText>
      </PolicySection>

      <PolicySection number="03" title="How we use your information">
        <PolicyText>Information submitted through this website is used to:</PolicyText>
        <LegalList
          items={[
            'Review and respond to your inquiry',
            'Assess your project and discuss design, sizing, placement, and scheduling',
            'Prepare estimates, arrange deposits, and confirm appointments',
            'Process and administer membership purchases',
            'Maintain records relating to your project and any completed work',
            'Communicate with you about your inquiry, appointment, or purchase',
            'Comply with applicable legal, tax, and regulatory obligations',
          ]}
        />
        <PolicyText>
          We do not use your information to build advertising profiles, and we do not sell personal
          information.
        </PolicyText>
      </PolicySection>

      <PolicySection number="04" title="Payment information">
        <PolicyText>
          Payments for services and memberships offered on this website are processed by a
          third-party payment provider using a hosted checkout. When you begin a payment, you are
          transferred to the payment provider's own secure environment.
        </PolicyText>
        <PolicyText>
          We do not receive or store your full payment card number, security code, or banking
          credentials. Our payment provider may share limited transaction information with us —
          such as the amount paid, the date, and a transaction identifier — so that we can confirm
          your purchase and administer your membership. The payment provider's handling of your
          payment details is governed by its own privacy policy and terms.
        </PolicyText>
      </PolicySection>

      <PolicySection number="05" title="Cookies and analytics">
        <PolicyText>
          This website may use cookies and similar technologies that are necessary for the site to
          function correctly and to remember your preferences during a visit. Analytics tools, where
          used, help us understand aggregate patterns such as which pages are visited most often and
          how visitors navigate the site. These tools are not used to identify you personally.
        </PolicyText>
        <PolicyText>
          You can control or delete cookies through your browser settings. Disabling cookies may
          affect how parts of the website behave.
        </PolicyText>
      </PolicySection>

      <PolicySection number="06" title="Information stored in your browser">
        <PolicyText>
          Certain features of this website may store information locally in your own browser — for
          example, saving your progress on a form, or remembering items you have selected during a
          visit. Information stored this way remains on your device, is not transmitted to us unless
          you complete and submit a form, and is cleared when you clear your browser data.
        </PolicyText>
      </PolicySection>

      <PolicySection number="07" title="How your information is shared">
        <PolicyText>
          We do not sell, rent, or trade personal information. Information may be shared only in the
          following limited circumstances:
        </PolicyText>
        <LegalList
          items={[
            'With service providers who support this website and our operations, such as our payment provider, website hosting provider, and email provider — each of which receives only the information necessary to perform its function',
            'Where required by law, regulation, legal process, or a valid governmental request',
            'To protect the rights, property, or safety of the studio, our clients, or others',
            'In connection with a change of ownership or transfer of the studio, in which case information may be transferred as part of that transaction',
          ]}
        />
      </PolicySection>

      <PolicySection number="08" title="Data retention">
        <PolicyText>
          We retain personal information only for as long as it is needed for the purposes described
          in this policy. Inquiry details that do not lead to an appointment are typically retained
          for a reasonable period so that we can follow up, then deleted. Records relating to a
          completed project, a payment, or a membership are retained longer where necessary for
          administrative, warranty, or legal purposes.
        </PolicyText>
      </PolicySection>

      <PolicySection number="09" title="Security">
        <PolicyText>
          We take reasonable technical and organisational measures to protect the information
          submitted through this website, including the use of encrypted connections. No method of
          transmission over the internet or electronic storage is completely secure, and we cannot
          guarantee absolute security. Please avoid sending sensitive information — such as medical
          records, government identification numbers, or payment details — through the website's
          free-text fields or by ordinary email.
        </PolicyText>
      </PolicySection>

      <PolicySection number="10" title="Your choices and rights">
        <PolicyText>
          You may contact us at any time to request access to the personal information we hold about
          you, to ask that it be corrected, or to request that it be deleted, subject to any records
          we are required to retain by law. You may also ask us to stop contacting you about a
          pending inquiry.
        </PolicyText>
        <PolicyText>
          Where you have provided consent for a particular use, you may withdraw that consent at any
          time. Withdrawing consent does not affect the lawfulness of any processing carried out
          before the withdrawal.
        </PolicyText>
        <PolicyText>
          Requests can be sent to <PolicyMail address={STUDIO_CONTACT.email} />. We may need to
          verify your identity before acting on a request.
        </PolicyText>
      </PolicySection>

      <PolicySection number="11" title="Children">
        <PolicyText>
          This website is intended for adults. Tattooing is a service provided to adults, and we do
          not knowingly collect personal information from anyone under the age of 18. If you believe
          a minor has submitted information through this website, please contact us so that we can
          remove it.
        </PolicyText>
      </PolicySection>

      <PolicySection number="12" title="Third-party websites">
        <PolicyText>
          This website may link to third-party websites, including social media profiles and our
          payment provider's checkout. We are not responsible for the privacy practices of those
          websites. We encourage you to review the privacy policy of any site you visit through a
          link from this one.
        </PolicyText>
      </PolicySection>

      <PolicySection number="13" title="Changes to this policy">
        <PolicyText>
          This policy may be updated from time to time to reflect changes in our practices, our
          services, or applicable law. The version published on this page is the current version,
          and the "Last updated" date at the top will be revised whenever material changes are made.
          Continued use of this website after an update constitutes acceptance of the revised
          policy.
        </PolicyText>
      </PolicySection>

      <PolicySection number="14" title="Contact us">
        <PolicyText>
          Questions about this Privacy Policy, or requests relating to your personal information,
          can be sent to:
        </PolicyText>
        <LegalList
          items={[
            <>
              Email: <PolicyMail address={STUDIO_CONTACT.email} />
            </>,
            <>Studio: {STUDIO_CONTACT.address}</>,
            <>
              General enquiries: <PolicyLink to="/contact">Contact the Studio</PolicyLink>
            </>,
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  )
}
