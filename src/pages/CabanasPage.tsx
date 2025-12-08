import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import img from "../assets/cabanaSection/cab1.jpeg"

export default function CabanasPage() {
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-[420px] sm:h-[500px] md:h-[600px]">

            <img src={img}
                className="absolute inset-0 w-full h-full object-cover object-bottom" />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-transparant pointer-events-none">
            </div>

            <SectionWrapper
                className="relative z-20 flex flex-col h-full justify-start items-center md:justify-center w-full px-6 sm:px-12 md:px-14 pt-68 md:pt-35">
                <motion.h1 variants={fadeInUp} className="hero text-3xl md:text-5xl font-extrabold pb-2 md:pb-6 xl:pb-8 text-white leading-snugged text-shadow-lg/30">
                    {t("cabanasPage.hero")}
                </motion.h1>
            </SectionWrapper>
        </div>
    );
}