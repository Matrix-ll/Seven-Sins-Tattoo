import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import GalleryProjectDetail from '@/pages/GalleryProjectDetail'
import GalleryPage from '@/pages/GalleryPage'
import BookingPage from '@/pages/BookingPage'
import BookingConfirmationPage from '@/pages/BookingConfirmationPage'
import StylesPage from '@/pages/StylesPage'
import ArtistsPage from '@/pages/ArtistsPage'
import ArtistProfilePage from '@/pages/ArtistProfilePage'
import ServicesPage from '@/pages/ServicesPage'
import CategoryPage from '@/pages/CategoryPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import PricingPage2 from '@/pages/PricingPage'
import MembershipPage, { MembershipDetailPage } from '@/pages/MembershipPage'
import MembershipJoinPage from '@/pages/MembershipJoinPage'
import FAQPage from '@/pages/FAQPage'
import ContactPage from '@/pages/ContactPage'
import PaymentSuccessPage from '@/pages/PaymentSuccessPage'
import PaymentCancelPage from '@/pages/PaymentCancelPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Toaster />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:slug" element={<GalleryProjectDetail />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:category" element={<CategoryPage />} />
            <Route path="/services/:category/:slug" element={<ProductDetailPage />} />
            <Route path="/styles" element={<StylesPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/artists/:slug" element={<ArtistProfilePage />} />
            <Route path="/pricing" element={<PricingPage2 />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/membership/join/:plan?" element={<MembershipJoinPage />} />
            <Route path="/membership/:plan" element={<MembershipDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/confirmation" element={<BookingConfirmationPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />
            <Route path="/payment/cancel" element={<PaymentCancelPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
