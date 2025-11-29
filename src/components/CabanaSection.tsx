import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img1 from "../assets//cabanaSection/cab1.jpg"
import img2 from "../assets/cabanaSection/cab2.jpg"
import img3 from "../assets/cabanaSection/cab3.jpg"
import img4 from "../assets/cabanaSection/cab4.jpg"
import img5 from "../assets/cabanaSection/cab5.jpg"
import img6 from "../assets/cabanaSection/cab6.jpg"

const images = [
    img1, img2, img3, img4, img5, img6
];

type ArrowProps = {
    onClick?: () => void;
};

function PrevArrow({ onClick }: ArrowProps) {
    return (
        <button
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-white/90 hover:text-black text-white p-2 rounded-full shadow-md border border-white/40 transition-colors"
            onClick={onClick}
        >
            <FiChevronLeft size={26} strokeWidth={1.6} />
        </button>
    );
}

// 🔹 Custom Next Arrow
function NextArrow({ onClick }: ArrowProps) {
    return (
        <button
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-white/90 hover:text-black text-white p-2 rounded-full shadow-md border border-white/40 transition-colors"
            onClick={onClick}
        >
            <FiChevronRight size={26} strokeWidth={1.6} />
        </button>
    );
}

export default function CabanaSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const gapPx = 16; // gap-4

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slidesPerView = isDesktop ? 2 : 1;
    const slideWidth = containerWidth
        ? (containerWidth - gapPx * (slidesPerView - 1)) / slidesPerView
        : 0;
    const maxIndex = Math.max(0, images.length - slidesPerView);

    useEffect(() => {
        setIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

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

    return (
        <motion.div variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-12 lg:px-20 flex flex-col lg:flex-row items-start overscroll-x-none mt-4 sm:mt-10 lg:mt-24">

        <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto py-12 md:py-16 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="text-2xl md:text-4xl xl:text-5xl leading-snugged font-semibold text-gray-800">Cabanas</motion.h1>
                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed8">
                    Onze exclusieve cabanas zijn ontworpen als jouw privéplek in de natuur.
                </motion.p>

                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    Elke cabana ligt direct aan het water en is voorzien van
                        een luxe outdoor zithoek, een eigen keuken met bar en barkrukken, poolbeds, een hangmat en een moderne douche met warm water en toilet.
                        Kajaks, hengels en luchtmatrassen staan tot je beschikking – of je nu actief het meer op wil, of liever dobbert in stilte.
                </motion.p>

            </motion.div>

            <motion.div variants={fadeInLeft}
                className="w-full lg:w-1/2 mx-auto">
                <div className="relative w-full overflow-hidden h-[240px] sm:h-[348px] md:h-[456px] lg:h-[480px]">
                    {/* Arrows desktop */}
                    {isDesktop && (
                        <>
                            <PrevArrow onClick={() => setIndex((prev) => Math.max(prev - 1, 0))} />
                            <NextArrow onClick={() => setIndex((prev) => Math.min(prev + 1, maxIndex))} />
                        </>
                    )}

                    <motion.div
                        ref={containerRef}
                        className="h-full"
                    >
                        <motion.div
                            className="flex gap-4 h-full items-center"
                            drag="x"
                            dragElastic={0.04}
                            dragConstraints={{
                                left: -slideWidth * maxIndex - gapPx * maxIndex,
                                right: 0,
                            }}
                            onDragEnd={(_event, info) => {
                                if (!slideWidth) return;
                                const swipe = -(info.offset.x + info.velocity.x * 0.2);
                                const target = index + swipe / (slideWidth + gapPx);
                                const next = Math.min(Math.max(Math.round(target), 0), maxIndex);
                                setIndex(next);
                            }}
                            animate={{ x: -(index * (slideWidth + gapPx)) }}
                            transition={{ type: "spring", stiffness: 260, damping: 32 }}
                            style={{ touchAction: "pan-y" }}
                        >
                            {images.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-shrink-0 h-full"
                                    style={{ width: slideWidth ? `${slideWidth}px` : slidesPerView === 2 ? "50%" : "100%" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="relative w-full h-full overflow-hidden shadow-lg">
                                        <img src={item} className="absolute inset-0 w-full h-full object-cover" alt={`Slide ${i}`} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Dots */}
                    <div className="flex justify-center mt-5 space-x-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                onClick={() => setIndex(dotIndex)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === dotIndex ? "bg-black scale-125 shadow-md" : "bg-gray-300"}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )

}
