import { useEffect } from 'react'
import ContactComponent from '@/components/Contact'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact \u2014 Dramalaver LLC | Private Atelier | Folkston, GA'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Contact Dramalaver LLC, a private atelier for commissioned permanent body art in Folkston, Georgia. Private consultations by appointment only.')
  }, [])

  return (
    <div data-component="src/pages/ContactPage.tsx" className="bg-background min-h-screen pt-24">
      <ContactComponent />
    </div>
  )
}
