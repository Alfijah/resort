import Carousel from "../carousels/Carousel";
import img1 from "../../assets/diningSection/fish.jpeg"
import img2 from "../../assets/diningSection/dine2.jpg"
import img3 from "../../assets/diningSection/dine3.jpg"
import img4 from "../../assets/diningSection/dine4.jpg"
import img5 from "../../assets/diningSection/dine5.jpg"
import img6 from "../../assets/diningSection/dine6.jpg"

const images = [img1, img2, img3, img4, img5, img6];

export default function DiningCarousel() {
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