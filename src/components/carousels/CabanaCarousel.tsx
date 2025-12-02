import Carousel from "../carousels/Carousel";
import cab1 from "../../assets/cabanaSection/cab1.jpg";
import cab2 from "../../assets/cabanaSection/cab2.jpg";
import cab3 from "../../assets/cabanaSection/cab3.jpg";
import cab4 from "../../assets/cabanaSection/cab4.jpg";
import cab5 from "../../assets/cabanaSection/cab5.jpg";
import cab6 from "../../assets/cabanaSection/cab6.jpg";

const images = [cab1, cab2, cab3, cab4, cab5, cab6];

export default function CabanaCarousel() {
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
