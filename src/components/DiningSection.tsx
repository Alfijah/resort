import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import img1 from "../assets/diningSection/dine1.jpg"
import img2 from "../assets/diningSection/dine2.jpg"
import img3 from "../assets/diningSection/dine3.jpg"
import img4 from "../assets/diningSection/dine4.jpg"
import img5 from "../assets/diningSection/dine5.jpg"
import img6 from "../assets/diningSection/dine6.jpg"

const images = [
    img1, img2, img3, img4, img5, img6
];

type ArrowProps = {
  onClick?: () => void;
};

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
      onClick={onClick}
    >
      <RiArrowLeftWideFill size={24} />
    </button>
  );
}

// 🔹 Custom Next Arrow
function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
      onClick={onClick}
    >
      <RiArrowRightWideFill size={24} />
    </button>
  );
}

export default function DiningSection() {
 const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "80px",
    slidesToShow: 2,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
    return (
        <div className="w-full bg-white py-24">
            <div className="relative w-[50%] mx-auto -left-12 lg:-left-80">
            <Slider {...settings}>
                {
                    images.map((item,index) => {
                        return(
                            <div key={index} className="px-4">
                                <div>
                                    <img src={item} className="w-full h-80 mp-50 object-cover" alt={`Slide ${index}`}/>
                                </div>
                            </div>
                        )
                    })
                }
                </Slider>
            </div>
        </div>
    )

}
