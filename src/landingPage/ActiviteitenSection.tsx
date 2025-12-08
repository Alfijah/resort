import { motion } from "framer-motion";
import { container, fadeInUp } from "/Users/alfij/resort/src/animations/Varianten";
import { useTranslation } from "react-i18next";
import SectionWrapper from "/Users/alfij/resort/src/animations/SectionWrapper";
import ActiviteitenCarousel from "../components/carousels/ActiviteitenCarousel";
import ExploreButton from "../components/tools/ExploreButton";

export default function ActiviteitenSection() {
    const { t } = useTranslation();

    return (
        <SectionWrapper
            className="relative w-full max-w-screen-2xl mx-auto sm:px-10 md:px-12 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center overscroll-x-none mt-2 sm:mt-4 lg:mt-12">

            <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto px-6 py-12 md:py-16 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="heading-primary">{t("activiteiten.title")}</motion.h1>
                <motion.p variants={fadeInUp}
                    className="body-text">
                    {t("activiteiten.subtitle1")}
                </motion.p>

                <motion.p variants={fadeInUp}
                    className="body-text">
                    <br></br>{t("activiteiten.subtitle2")}
                </motion.p>

                <motion.div variants={fadeInUp} className="w-full">
                                <ExploreButton />
                                </motion.div>
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
