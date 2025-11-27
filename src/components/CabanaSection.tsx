import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { HiOutlineBellAlert } from "react-icons/hi2";
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
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-red-400 p-3"
            onClick={onClick}
        >
            <RiArrowLeftWideFill size={35} />
        </button>
    );
}

// 🔹 Custom Next Arrow
function NextArrow({ onClick }: ArrowProps) {
    return (
        <button
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-red-400 p-3"
            onClick={onClick}
        >
            <RiArrowRightWideFill size={35} className="" />
        </button>
    );
}

export default function CabanaSection() {
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        centerMode: false,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // <= 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "120px",
                    dots: true,
                },
            },
            {
                breakpoint: 768, // <= 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true, // geen halve afbeeldingen op mobiel
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 480, // <= 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: "0px",
                },
            },
        ],
    };

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3, // elementen komen 1-voor-1
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
    };

    // const scaleFade = {
    //     hidden: { opacity: 0, scale: 0.95 },
    //     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    // };


    return (
        <motion.div variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full flex flex-col lg:flex-row items-center lg:items-start overscroll-x-none">
            
            <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto px-6 py-12 md:py-16 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="text-2xl md:text-3xl xl:text-5xl text-center xl:text-start">Dining</motion.h1>
                <motion.p variants={fadeInUp}
                    className="text-xs lg:text-sm xl:text-sm pt-4 xl:pt-8">
                    Proef Javaanse traditie, midden in de natuur, langzaam bereid op houtvuur op een houtgestookt fornuis, met authentieke kruiden en geserveerd in je cabana – een culinaire ervaring waar smaak en beleving samenkomen.
                </motion.p>

                <motion.div variants={fadeInUp}
                    className="flex items-center pt-4 text-xs lg:text-sm xl:text-sm">
                    <HiOutlineBellAlert className="mr-2" />
                    <b><i>De dining is volledig inbegrepen bij je verblijf.</i></b>
                </motion.div>

                <motion.p variants={fadeInUp}
                    className="text-xs lg:text-sm xl:text-sm pt-4">
                    Een verblijf bij Sendang Redjo is meer dan een dagje uit:
                    Terwijl je ontspant aan het water, barbecueer je zelf je lunch en geniet je van een omgeving waarin alles tot rust komt. Alles wat wij serveren is vers, eerlijk en met zorg bereid – de smaken en geuren van Java maken jouw dagverblijf compleet.
                </motion.p>

            </motion.div>

            <motion.div variants={fadeInLeft}
                className="w-full xl:w-[63%]">
                <Slider {...settings}>
                    {
                        images.map((item, index) => {
                            return (
                                // <div key={index} className="px-6 sm:px-4 md:px-6 lg:px-10 xl:px-15">
                                //     <div className="aspect-4/3 w-full overflow-hidden">
                                //         <img src={item} className="s:w-[80%] w-[90%] h-full object-cover mx-auto" alt={`Slide ${index}`} />
                                //     </div>
                                // </div>
                                <div key={index} className="px-2 ">
                                    <div>
                                        <img src={item} className="aspect-1/1" alt={`Slide ${index}`} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </motion.div>
        </motion.div>
    )

}
