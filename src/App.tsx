import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Layout";
import LandingPage from "./landingPage/LandingPage";
import CabanasPage from "./pages/CabanasPage";
import DiningPage from "./pages/DiningPage";
import ActiviteitenPage from "./pages/ActiviteitenPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ReserverenPage from "./pages/ReserverenPage";

export default function App() {
  return (
  <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/resort" element={<LandingPage />} />
          <Route path="/cabanas" element={<CabanasPage />} />
          <Route path="/cabanas" element={<DiningPage />} />
          <Route path="/cabanas" element={<ActiviteitenPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cabanas" element={<ContactPage />} />
          <Route path="/contact" element={<ReserverenPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
