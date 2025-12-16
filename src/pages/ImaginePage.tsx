import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import imagine from "../assets/imagine/imagine.mp4";

export default function ImaginePage() {
    const { t } = useTranslation();

    const section3List = t("imagine.section3List", { returnObjects: true }) as string[];
    const section4List = t("imagine.section4List", { returnObjects: true }) as string[];

    // Lock body scroll while this page is active
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto"; // reset when leaving page
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* VIDEO BACKGROUND */}
            <video
                src={imagine}
                autoPlay
                loop
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* TOP GRADIENT OVERLAY (OPTIONEEL) */}
            <div className="absolute z-12 top-0 left-0 w-full h-55 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            <div className="absolute z-12 top-0 left-0 w-full h-55 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-teal-950 to-black/25 pointer-events-none" />

            <div className="absolute top-0 left-0 w-full h-40 
                bg-gradient-to-b from-black via-black/60 to-transparent 
                pointer-events-none z-20" />


            {/* TEXT SCROLLING LAYER */}
            <SectionWrapper className="relative z-11 h-full overflow-y-scroll overscroll-none px-8 sm:px-12 md:px-20 lg:px-40 pt-40 pb-48 
                            text-white backdrop-blur-[1px] scrollbar-none">

                <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
                    <motion.h1 variants={fadeInUp} className="hero text-center text-3xl md:text-5xl pb-2 md:pb-6 xl:pb-8 text-white font-extrabold leading-snugged text-shadow-lg/30">
                        {t("imagine.title")}
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.p1")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.p2")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.p3")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section1Text")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section2Text")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section3Text")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        <ul>
                            {section3List.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section3End")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section4Title")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        <ul>
                            {section3List.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section4End")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section5Text")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section6Title")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section6Text")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section7Text")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section8Title")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section8Text")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section9Text")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.section10Text")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.ctaTitle")}
                    </motion.p>

                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30">
                        {t("imagine.ctaText")}
                    </motion.p>
                </div>
            </SectionWrapper>
            <div className="absolute inset-0 pointer-events-none z-15 
                bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />


            <div className="absolute bottom-0 left-0 w-full h-20 
                bg-gradient-to-t from-black via-black/60 to-transparent 
                pointer-events-none z-20" />


            {/* BOTTOM GRADIENT OVERLAY (OPTIONEEL) */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
    );
}
