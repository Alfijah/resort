import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import img1 from "../assets/introSection/lodge1.jpg"
import img2 from "../assets/introSection/lodge2.jpg"
import img3 from "../assets/introSection/lodge3.jpg"
import img4 from "../assets/introSection/lodge6.jpg"
import img5 from "../assets/introSection/img1.png"

const images = [img1, img2, img3, img4, img5];

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

export default function IntroSection() {
    const settings = {
        className: "center",
        infinite: true,
        centerMode: true,
        centerPadding: "280px",
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // <= 1024px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "260px",
                    dots: true,
                },
            },
            {
                breakpoint: 768, // <= 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true, // geen halve afbeeldingen op mobiel
                    centerPadding: "220px",
                },
            },
            {
                breakpoint: 480, // <= 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: "100px",
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };

    return (
        <motion.div variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full items-center lg:items-start xl:py-16 overscroll-x-none">

            <motion.div variants={container}
                className="flex flex-col items-center justify-center text-center w-full xl:w-[85%] xl:mx-auto py-10">
                <motion.h1 variants={fadeInUp}
                    className="text-2xl md:text-3xl xl:text-5xl">Waar stilte, natuur en ziel samenkomen</motion.h1>
                <motion.p variants={fadeInUp}
                    className="text-xs lg:text-sm xl:text-sm pt-4 xl:pt-8">
                    Op slechts 20 minuten van Paramaribo ligt Sendang Redjo: een exclusief eco retreat en nature sanctuary, gelegen rondom een privémeer in het hart van Tamanredjo.
                </motion.p>
                <motion.p variants={fadeInUp}
                    className="text-xs lg:text-sm xl:text-sm pt-4 xl:pt-8">
                    Sendang Redjo is gebouwd op historische grond, maar draagt een tijdloze ziel.
                    Wat ooit een oude plantage was, is nu een serene retreat, geworteld in eenvoud, stilte en natuurlijke schoonheid.
                    De sfeer ademt Javaanse gastvrijheid: warm, oprecht en ontspannen.
                </motion.p>
            </motion.div>

            <motion.div variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ delay: 2.8 }} //
                className="w-full xl:pt-8 custom-slider">
                <Slider {...settings}>
                    {
                        images.map((item, index) => {
                            return (
                                <motion.div key={index}
                                    className="px-2 sm:px-4 md:px-6 lg:px-10 xl:px-20"
                                    initial={{ opacity: 0.4, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0.4, scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20, 
                                        duration: 0.6,
                                        ease: "easeOut",
                                    }}>
                                    <div className="aspect-1/1 w-full overflow-hidden">
                                        <motion.img src={item}
                                            className="s:w-[80%] w-[95%] h-full object-contain mx-auto"
                                            alt={`Slide ${index}`}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 1.97 }}
                                            transition={{ duration: 0.3 }} />
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </Slider>
            </motion.div>
        </motion.div>
    )
}