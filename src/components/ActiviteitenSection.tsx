import { motion } from "framer-motion";
import { container, fadeInUp } from "../animations/Varianten";
import SectionWrapper from "../animations/SectionWrapper";
import ActiviteitenCarousel from "./carousels/ActiviteitenCarousel";

export default function ActiviteitenSection() {
    return (
        <SectionWrapper
            className="relative w-full max-w-screen-2xl mx-auto sm:px-10 md:px-12 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center overscroll-x-none mt-2 sm:mt-10 lg:mt-24">

            <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto px-6 py-12 md:py-16 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="text-2xl md:text-4xl xl:text-4xl leading-snugged text-gray-800">Activiteiten</motion.h1>
                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    Ontdek het meer in alle rust: kajak in je eigen tempo, vis op stille plekken of dobber zorgeloos in het water. Ontspan in je cabana — in je hangmat, omringd door niets dan wind en vogels.
                </motion.p>

                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    En voor natuurliefhebbers: van ijsvogels tot reigers, elke dag is anders.
                </motion.p>
            </motion.div>

            <motion.div variants={container}
                className="w-full lg:w-1/2 mx-auto">
                <div className="relative w-full overflow-hidden h-[320px] sm:h-[360px] md:h-[480px]">
                    <ActiviteitenCarousel />

                </div>
            </motion.div>
        </SectionWrapper>
    )

}
