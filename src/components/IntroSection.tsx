import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { easeOut } from "framer-motion";
import CarouselArrow from "./ui/CarouselArrow";
import CarouselDots from "../components/ui/CarouselDots";
// import ImageModal from "../components/ui/ImageModal";
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
    const [itemWidthPx, setItemWidthPx] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const mobileContainerRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        const updateItemWidth = () => {
            setIsMobile(window.innerWidth < 1024);
            if (carouselRef.current) {
                const firstItem = carouselRef.current.querySelector<HTMLDivElement>('.carousel-item');
                if (firstItem) {
                    const measured = firstItem.offsetWidth;
                    itemWidth.current = measured;
                    setItemWidthPx(measured);
                }
            }
        };

        updateItemWidth();
        window.addEventListener("resize", updateItemWidth);
        return () => window.removeEventListener("resize", updateItemWidth);
    }, []);

    // Ensure we recalc width once the mobile carousel actually exists in the DOM
    useEffect(() => {
        if (!isMobile) return;

        const measure = () => {
            if (mobileContainerRef.current) {
                const width = mobileContainerRef.current.offsetWidth;
                setContainerWidth(width);
            }
            if (carouselRef.current) {
                const firstItem = carouselRef.current.querySelector<HTMLDivElement>('.carousel-item');
                if (firstItem) {
                    const measured = firstItem.offsetWidth;
                    itemWidth.current = measured;
                    setItemWidthPx(measured);
                } else {
                    const fallback = Math.round(window.innerWidth * 0.85); // fallback to 85vw
                    itemWidth.current = fallback;
                    setItemWidthPx(fallback);
                }
            }
            const fallback = Math.round(window.innerWidth);
            itemWidth.current = fallback;
            setItemWidthPx(fallback);
            setContainerWidth(fallback);
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [isMobile]);

    const fallbackWidth = typeof window !== "undefined" ? Math.round(window.innerWidth) : 0;
    const effectiveWidth = containerWidth || itemWidthPx || fallbackWidth;

    const containerRefDesktop = useRef<HTMLDivElement>(null);
    const [desktopWidth, setDesktopWidth] = useState(0);

    useEffect(() => {
        const update = () => {
            if (containerRefDesktop.current) {
                setDesktopWidth(containerRefDesktop.current.offsetWidth);
            }
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);


    return (
        <motion.div variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full items-center lg:items-start overscroll-x-none">

            <motion.div variants={container}
                className="flex flex-col text-start md:items-center md:justify-center md:text-center w-full md:w-[95%] lg:max-w-5xl mx-auto px-6 py-14 md:py-16 lg:py-20">
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
                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    Lees <i className="cursor-pointer"><u>Imagine Your Day</u></i> en laat je meevoeren in de beleving.
                </motion.p>
            </motion.div>

            <motion.div variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ delay: 2.8 }} //
                className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 lg:px-16">
                <div ref={containerRefDesktop} className="relative w-full overflow-hidden h-[240px] sm:h-[348px] md:h-[456px] lg:h-[480px] flex items-center justify-center max-w-screen-2xl mx-auto">

                    {!isMobile && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3 }}
                            transition={{ delay: 2.8 }} //
                            className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 lg:px-16">
                            <div className="relative w-full overflow-hidden h-[240px] sm:h-[348px] md:h-[456px] lg:h-[480px] flex items-center justify-center max-w-screen-2xl mx-auto">
                                {/* Pijlen */}
                                <CarouselArrow direction="left" onClick={prev} />

                                <CarouselArrow direction="right" onClick={next} />

                                <div className="relative w-full h-full flex items-center justify-center">
                                    {images.map((img, i) => {
                                        const position = (i - index + images.length) % images.length;
                                        // 🔹 NIEUW – DRIE POSITIES
                                        const leftX = -(desktopWidth * 0.45);   // ± 1/3 naar links
                                        const rightX = desktopWidth * 0.45;      // ± 1/3 naar rechts

                                        const isCenter = position === 0;
                                        const isLeft = position === images.length - 1;
                                        const isRight = position === 1;

                                        return (
                                            <motion.div
                                                key={i}
                                                className={`absolute cursor-pointer transition-all duration-700 ease-out`}
                                                animate={{
                                                    // 🔹 NIEUW – pixel-gebaseerde positionering
                                                    x: isCenter ? 0 : isLeft ? leftX : isRight ? rightX : desktopWidth * 2,

                                                    // 🔹 NIEUW – 3-level scaling
                                                    scale: isCenter ? 1.15 : (isLeft || isRight ? 0.9 : 0.6),

                                                    // 🔹 NIEUW – subtle fades
                                                    opacity: isCenter ? 1 : (isLeft || isRight ? 0.6 : 0),

                                                    // 🔹 NIEUW – center bovenop
                                                    zIndex: isCenter ? 30 : (isLeft || isRight ? 20 : 0),
                                                }}
                                                whileHover={isCenter ? { scale: 1.2 } : {}}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                onClick={() => setIndex(i)}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Slide ${i}`}
                                                    className="shadow-lg object-cover w-[60vw] max-w-[580px] h-[40vw] max-h-[380px]"
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                        </motion.div>
                    )}

                    {/* --- MOBILE CAROUSEL (NO LOOP, CORRECT INDEX, NO WHITE SPACE) --- */}
                    {isMobile && (
                        <motion.div ref={mobileContainerRef} className="relative flex w-full h-full items-center overflow-hidden">
                            {/* Pijlen */}
                            <CarouselArrow direction="left" onClick={prev} />

                            <CarouselArrow direction="right" onClick={next} />

                            <motion.div
                                ref={carouselRef}
                                className="flex"
                                drag="x"
                                dragElastic={0.05}
                                dragConstraints={{
                                    left: -effectiveWidth * (images.length - 1), // blokkeren bij laatste
                                    right: 0, // blokkeren bij eerste
                                }}
                                onDragEnd={(_event, info) => {
                                    if (!effectiveWidth) return;

                                    // 1️⃣ Swipe power = afstand + snelheid
                                    const swipe = -(info.offset.x + info.velocity.x * 0.2);

                                    // 2️⃣ Hoeveel slides is dit?
                                    const movement = swipe / effectiveWidth;

                                    // 3️⃣ Nieuwe slide bepalen
                                    const target = index + movement;

                                    // 4️⃣ Naar dichtstbijzijnde slide afronden
                                    const next = Math.min(
                                        Math.max(Math.round(target), 0),
                                        images.length - 1
                                    );

                                    setIndex(next);
                                }}

                                animate={{ x: -index * effectiveWidth }}
                                transition={{ type: "spring", stiffness: 260, damping: 32 }}
                                style={{ touchAction: "pan-y" }}
                            >
                                {images.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        className="carousel-item flex-shrink-0 shadow-lg cursor-pointer"
                                        style={{
                                            width: effectiveWidth ? `${effectiveWidth}px` : "100%",
                                            height: "62vw"
                                        }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}

                </div>


                {/* --- DOTS NAVIGATIE --- */}
                <CarouselDots
                    total={images.length}
                    current={index}
                    onSelect={(i) => setIndex(i)}
                />
            </motion.div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        className="max-w-[90%] max-h-[90%] shadow-lg"
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
