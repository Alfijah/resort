import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { container, fadeInUp } from "../animations/Varianten";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import CarouselArrow from "../components/ui/CarouselArrow";
import ImageModal from "../components/ui/ImageModal";
import img1 from "../assets/introSection/lodge1.jpeg"
import img2 from "../assets/introSection/lodge2.jpeg"
import img3 from "../assets/introSection/lodge3.jpg"
import img4 from "../assets/introSection/lodge4.jpeg"
import img5 from "../assets/introSection/lodge5.jpeg"
import img6 from "../assets/introSection/lodge6.jpg"
import img7 from "../assets/introSection/lodge7.jpeg"


const images = [img1, img2, img3, img4, img5, img6, img7];

export default function IntroSection() {
    const { t } = useTranslation();
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

    function getOffset() {
        const width = window.innerWidth;

        if (width >= 1280) {
            return 0.45; // xl
        }
        if (width >= 1024) {
            return 0.56; // xl
        }
        if (width >= 768) {
            return 0.48; // md
        }
        return 0.48; 
    }

    return (
        <SectionWrapper
            className="relative w-full items-center lg:items-start overscroll-x-none">

            <motion.div variants={container}
                className="flex flex-col text-start md:items-center md:justify-center md:text-center w-full md:w-[95%] lg:max-w-5xl mx-auto px-6 sm:px-12 lg:px-28 py-14 md:py-14 lg:py-16">
                <motion.h1 variants={fadeInUp}
                    className="heading-primary">{t("intro.title")}</motion.h1>
                <motion.p variants={fadeInUp}
                    className="body-text">
                    {t("intro.subtitle")}
                </motion.p>
            </motion.div>

            <motion.div variants={fadeInUp}
                className="w-full max-w-screen-2xl mx-auto sm:px-8 md:px-10 lg:px-16">
                <div ref={containerRefDesktop} className="relative w-full overflow-hidden h-[320px] sm:h-[348px] md:h-[480px] flex items-center justify-center max-w-screen-2xl mx-auto">

                    {!isMobile && (
                        <motion.div variants={fadeInUp}
                            className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 lg:px-16">
                            <div className="relative w-full overflow-hidden h-[240px] sm:h-[348px] md:h-[480px] flex items-center justify-center max-w-screen-2xl mx-auto">
                                {/* Pijlen */}
                                <CarouselArrow direction="left" onClick={prev} />

                                <CarouselArrow direction="right" onClick={next} />

                                <div className="relative w-full h-full flex items-center justify-center">
                                    {images.map((img, i) => {
                                        const offset = getOffset();
                                        const position = (i - index + images.length) % images.length;
                                        // 🔹 NIEUW – DRIE POSITIES
                                        const leftX = -(desktopWidth * offset);   // ± 1/3 naar links
                                        const rightX = desktopWidth * offset;      // ± 1/3 naar rechts

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
                                                    opacity: isCenter ? 4 : (isLeft || isRight ? 0.6 : 0),

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
                                                    className="shadow-lg object-cover w-[60vw] max-w-[580px] h-[40vw] max-h-[540px]"
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
                        <motion.div ref={mobileContainerRef} className="relative flex w-screen h-full items-center md:items-start overflow-hidden">
                            {/* Pijlen */}
                            <CarouselArrow direction="left" onClick={prev} />

                            <CarouselArrow direction="right" onClick={next} />

                            <motion.div
                                ref={carouselRef}
                                className="flex"
                                drag="x"
                                dragElastic={0.05}
                                dragConstraints={{
                                    left: -(window.innerWidth * (images.length - 1)), // blokkeren bij laatste
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

                                animate={{ x: -index * window.innerWidth }}
                                transition={{ type: "spring", stiffness: 260, damping: 32 }}
                                style={{ touchAction: "pan-y" }}
                            >
                                {images.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        className="carousel-item flex-shrink-0 cursor-pointer"
                                        style={{
                                            width: "100vw",
                                            height: "320px"
                                        }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img src={img} alt={`Slide ${i}`} className="w-full h-[320px] md:h-[480px] lg:h-[480px] object-cover" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}

                </div>


                {/* --- DOTS NAVIGATIE --- */}
                {/* <CarouselDots
                    total={images.length}
                    current={index}
                    onSelect={(i) => setIndex(i)}
                /> */}
            </motion.div>

            {selectedImage && (
                <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
            )}

        </SectionWrapper>
    )
}
