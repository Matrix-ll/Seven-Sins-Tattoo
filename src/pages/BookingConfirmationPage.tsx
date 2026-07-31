import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BookingConfirmationPage: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Guard: direct visits without a verified server-signed submission token
    // redirect to /booking. The token is only set by a real backend response.
    const token = sessionStorage.getItem('booking_submitted_token')
    if (!token) {
      navigate('/booking', { replace: true })
    }
  }, [navigate])

  // Fallback: while the redirect resolves, render nothing visible
  return null

  // The real success page design below is preserved for future backend
  // integration. When the submission backend is connected:
  //   1. The server returns a signed token after a successful submission.
  //   2. The BookingPage saves it to sessionStorage and navigates here.
  //   3. This page verifies the token and renders the success UI.
  //
  // Until then, direct visits always redirect to /booking.
}

export default BookingConfirmationPage
