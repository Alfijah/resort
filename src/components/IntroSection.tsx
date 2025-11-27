import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { easeOut } from "framer-motion";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import img1 from "../assets/introSection/lodge1.jpg"
import img2 from "../assets/introSection/lodge2.jpg"
import img3 from "../assets/introSection/lodge3.jpg"
import img4 from "../assets/introSection/lodge6.jpg"
import img5 from "../assets/introSection/img1.png"

const images = [img1, img2, img3, img4, img5];

export default function IntroSection() {
    const [index, setIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemWidth = useRef(0);

    const next = () => setIndex((prev) => (prev + 1) % images.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + images.length) % images.length);

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

    const handleSwipe = (offsetX: number) => {
        let swipe = 0;
        if (offsetX < -50) swipe = 1;
        else if (offsetX > 50) swipe = -1;

        if (swipe !== 0) {
            setIndex(prev => {
                const nextIndex = prev + swipe;
                // clamp tussen 0 en images.length-1
                return Math.max(0, Math.min(nextIndex, images.length - 1));
            });
        }
    };


    useEffect(() => {
        const updateItemWidth = () => {
            setIsMobile(window.innerWidth < 1024);
            if (carouselRef.current) {
                const firstItem = carouselRef.current.querySelector<HTMLDivElement>('.carousel-item');
                if (firstItem) itemWidth.current = firstItem.offsetWidth + 16; // gap
            }
        };

        updateItemWidth();
        window.addEventListener("resize", updateItemWidth);
        return () => window.removeEventListener("resize", updateItemWidth);
    }, []);

    return (
        <motion.div variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full items-center lg:items-start overscroll-x-none">

            <motion.div variants={container}
                className="flex flex-col items-start justify-center text-start w-full max-w-4xl mx-auto px-6 py-12 md:py-16 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="text-2xl md:text-4xl xl:text-5xl leading-snugged font-semibold text-gray-800">Waar stilte, natuur en ziel samenkomen</motion.h1>
                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    Op slechts 20 minuten van Paramaribo ligt Sendang Redjo: een exclusief eco retreat en nature sanctuary, gelegen rondom een privémeer in het hart van Tamanredjo.
                </motion.p>
                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
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
                className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-14">
                <div className="relative w-full overflow-hidden h-[200px] sm:h-[290px] md:h-[380px] lg:h-[400px] flex items-center justify-center max-w-[1400px] mx-auto">

                    {!isMobile && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3 }}
                            transition={{ delay: 2.8 }} //
                            className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-14">
                            <div className="relative w-full overflow-hidden h-[200px] sm:h-[290px] md:h-[380px] lg:h-[400px] flex items-center justify-center max-w-[1400px] mx-auto">
                                {/* Pijlen */}
                                <button
                                    onClick={prev}
                                    className="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-white text-white p-1 rounded-sm shadow-md"
                                >
                                    <RiArrowLeftWideFill size={35} />
                                </button>

                                <button
                                    onClick={next}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-white text-white p-1 rounded-sm shadow-md"
                                >
                                    <RiArrowRightWideFill size={35} />
                                </button>

                                <div className="relative w-full h-full flex items-center justify-center">
                                    {images.map((img, i) => {
                                        const position = (i - index + images.length) % images.length;
                                        const isCenter = position === 0;
                                        const isLeft = position === images.length - 1;
                                        const isRight = position === 1;

                                        return (
                                            <motion.div
                                                key={i}
                                                className={`absolute cursor-pointer transition-all duration-700 ease-out`}
                                                animate={{
                                                    x: isCenter ? 0 : isLeft ? "-32vw" : isRight ? "32vw" : "90vw",
                                                    scale: isCenter ? 1.15 : isLeft || isRight ? 0.9 : 0.7,
                                                    opacity: isCenter ? 1 : isLeft || isRight ? 0.7 : 0,
                                                    zIndex: isCenter ? 20 : isLeft || isRight ? 10 : 0,
                                                }}
                                                whileHover={isCenter ? { scale: 1.2 } : { scale: 1.0 }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                onClick={() => setIndex(i)}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Slide ${i}`}
                                                    className="rounded-sm shadow-lg object-cover w-[60vw] max-w-[580px] h-[40vw] max-h-[380px]"
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                        </motion.div>
                    )}

                    {/* --- MOBILE CAROUSEL --- */}
                    {isMobile && (
                        <motion.div className="relative flex w-full h-full items-center justify-center overflow-hidden">
                            <motion.div
                                ref={carouselRef}
                                className="flex gap-4"
                                drag="x"

                                dragElastic={0.2}
                                onDragEnd={(_event, info) => handleSwipe(info.offset.x)}
                                animate={{
                                    x: itemWidth.current ? -Math.min(index * itemWidth.current, (images.length - 1) * itemWidth.current) : 0
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {images.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        className="carousel-item flex-shrink-0 snap-center rounded-lg shadow-lg cursor-pointer"
                                        style={{ width: "85vw", height: "52vw" }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover rounded-md" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}


                </div>


                {/* --- DOTS NAVIGATIE --- */}
                <div className="flex justify-center mt-5 mb-3 space-x-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === i ? "bg-black scale-125 shadow-md" : "bg-gray-300"
                                }`}
                        ></button>

                    ))}
                </div>

            </motion.div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        className="max-w-[90%] max-h-[90%] rounded-md shadow-lg"
                        onClick={(e) => e.stopPropagation()} // voorkomt sluiten bij klik op afbeelding
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        ✕
                    </button>
                </div>
            )}

        </motion.div>
    )
}