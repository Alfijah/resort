import Carousel from "../carousels/Carousel";
import act1 from "../../assets/activiteitenSection/act1.jpg";
import act2 from "../../assets/activiteitenSection/act2.jpg";
import act3 from "../../assets/activiteitenSection/act3.jpg";
import act4 from "../../assets/activiteitenSection/act4.jpg";

const images = [act1, act2, act3, act4];

export default function ActiviteitenCarousel() {
  return (
    <Carousel
      images={images}
      slidesPerViewDesktop={2}
      slidesPerViewMobile={1}
      gap={16}
      showModal={true}
      height="320px"
    />
  );
}
