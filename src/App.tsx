import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import CabanaSection from './components/CabanaSection'
import DiningSection from './components/DiningSection'
import ActiviteitenSection from './components/ActiviteitenSection'
import InviteSection from './components/InviteSection'
import ReviewsSection from './components/ReviewSection'
import ReserveCtaSection from './components/ReserveCtaSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <CabanaSection />
      <DiningSection />
      <ActiviteitenSection />
      <InviteSection />
      <ReviewsSection />
      <ReserveCtaSection />
      <Footer />
    </>
  )
}
