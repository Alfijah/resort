import Carousel from "../carousels/Carousel";
import act1 from "../../assets/activiteitenSection/act1.jpeg";
import act2 from "../../assets/activiteitenSection/act2.jpeg";
import act3 from "../../assets/activiteitenSection/act3.jpeg";
import act4 from "../../assets/activiteitenSection/act4.jpeg";
import act5 from "../../assets/activiteitenSection/act5.jpeg";

const images = [act1, act2, act3, act4, act5];

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
