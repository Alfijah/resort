import './App.css'
import CabanaSection from './components/CabanaSection'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="relative z-10 pt-[100vh]">
        <IntroSection />
        <CabanaSection />
      </main>
    </>
  )
}
