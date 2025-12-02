import { motion } from "framer-motion";
import { container, fadeInUp } from "../animations/Varianten";
import SectionWrapper from "../animations/SectionWrapper";
import CabanaCarousel from "./carousels/CabanaCarousel";

export default function CabanaSection() {
    return (
        <SectionWrapper
            className="relative w-full max-w-screen-2xl mx-auto sm:px-10 md:px-12 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center overscroll-x-none mt-2 sm:mt-4 lg:mt-20">

            <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto px-6 py-12 md:py-12 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="text-2xl md:text-4xl xl:text-4xl leading-snugged text-gray-800">Cabanas</motion.h1>
                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    Onze cabanas zijn jouw privéplek aan het water — alleen per boot bereikbaar, waardoor je vanaf het eerste moment in volledige rust aankomt.
                </motion.p>

                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    Elke cabana beschikt over een luxe outdoor zithoek, een eigen keuken met bar, poolbeds, een hangmat en een moderne douche met warm water en toilet. Kajaks, hengels en luchtmatrassen staan voor je klaar, of je nu het meer op wil of in stilte wil dobberen.
                </motion.p>
            </motion.div>

            <motion.div variants={container}
                className="w-full lg:w-1/2 mx-auto">
                <div className="relative w-full overflow-hidden h-[320px] sm:h-[360px] md:h-[480px]">
                    <CabanaCarousel />

                </div>
            </motion.div>
        </SectionWrapper>
    )

}
