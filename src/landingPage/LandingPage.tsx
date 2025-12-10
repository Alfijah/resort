import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import CabanaSection from "./CabanaSection";
import DiningSection from "./DiningSection";
import ActiviteitenSection from "./ActiviteitenSection";
import InviteSection from "./InviteSection";
import ReviewsSection from "./ReviewSection";
import ReserveCtaSection from "./ReserveCtaSection";
import ReserverenContactBar from "../components/tools/ReserverenContactBar";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <CabanaSection />
      <DiningSection />
      <ActiviteitenSection />
      <InviteSection />
      <ReviewsSection />
      <ReserveCtaSection />
      <ReserverenContactBar />

    </>
  );
}