import './App.css'
import ActiviteitenSection from './components/ActiviteitenSection'
import CabanaSection from './components/CabanaSection'
import DiningSection from './components/DiningSection'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <CabanaSection />
      <DiningSection />
      <ActiviteitenSection />

      <main className="relative z-10 px-6 sm:px-[8%] md:px-[10%]">
      </main>
    </>
  )
}
