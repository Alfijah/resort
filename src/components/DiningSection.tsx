import { motion } from "framer-motion";
import { container, fadeInUp } from "../animations/Varianten";
import SectionWrapper from "../animations/SectionWrapper";
import DiningCarousel from "./carousels/DiningCarousel";

export default function DiningSection() {
    return (
        <SectionWrapper
            className="relative w-full flex flex-col-reverse lg:flex-row items-center lg:items-center xl:gap-10 sm:px-10 md:px-12 lg:px-20 xl:py-16 pt-2 lg:mt-4 overscroll-x-none">

            <motion.div variants={container}
                className="w-full lg:w-1/2 mx-auto">
                <div className="relative w-full overflow-hidden h-[320px] sm:h-[360px] md:h-[480px]">
                    <DiningCarousel />
                </div>
            </motion.div>

            <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto px-6 py-12 md:py-16 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="heading-primary">Dining</motion.h1>
                <motion.p variants={fadeInUp}
                    className="body-text">
                    Proef de Javaanse keuken midden in de natuur: langzaam bereid op houtvuur, met authentieke kruiden en geserveerd in je eigen cabana — een culinaire ervaring waar smaak en rust samenkomen.
                </motion.p>

                <motion.p variants={fadeInUp}
                    className="body-text">
                    <br></br>De dining is volledig inbegrepen bij je verblijf.
                    Terwijl je ontspant aan het water, grill je zelf je lunch en geniet je van een omgeving die tijd laat stilstaan. Alles wat we serveren is vers, eerlijk en met zorg bereid — de smaken en geuren van Java maken jouw dagverblijf compleet.
                </motion.p>

            </motion.div>
        </SectionWrapper>
    )

}
