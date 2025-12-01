import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import DiningCarousel from "./carousels/DiningCarousel";

export default function DiningSection() {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.55,
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
    };

    // const fadeInLeft = {
    //     hidden: { opacity: 0, x: 50 },
    //     visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
    // };

    // const scaleFade = {
    //     hidden: { opacity: 0, scale: 0.95 },
    //     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    // };


    return (
        <motion.div variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full flex flex-col-reverse xl:flex-row items-center lg:items-start xl:gap-10 xl:py-16 pt-20 overscroll-x-none">

            <motion.div variants={container}
                className="w-full lg:w-1/2 mx-auto">
                <div className="relative w-full overflow-hidden h-[240px] sm:h-[348px] md:h-[456px] lg:h-[480px]">
                    <DiningCarousel />
                </div>
            </motion.div>

            <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto px-6 py-12 md:py-16 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="text-2xl md:text-4xl xl:text-4xl leading-snugged text-gray-800">Dining</motion.h1>
                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    Proef de Javaanse keuken midden in de natuur: langzaam bereid op houtvuur, met authentieke kruiden en geserveerd in je eigen cabana — een culinaire ervaring waar smaak en rust samenkomen.
                </motion.p>

                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    De dining is volledig inbegrepen bij je verblijf.
                    Terwijl je ontspant aan het water, grill je zelf je lunch en geniet je van een omgeving die tijd laat stilstaan. Alles wat we serveren is vers, eerlijk en met zorg bereid — de smaken en geuren van Java maken jouw dagverblijf compleet.
                </motion.p>

            </motion.div>
        </motion.div>
    )

}
