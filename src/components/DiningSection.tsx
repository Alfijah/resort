import { motion } from "framer-motion";
import { container, fadeInUp } from "../animations/Varianten";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import DiningCarousel from "./carousels/DiningCarousel";
import ExploreButton from "./ExploreButton";

export default function DiningSection() {
    const { t } = useTranslation();

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
                    className="heading-primary">{t("dining.title")}</motion.h1>
                <motion.p variants={fadeInUp}
                    className="body-text">
                    {t("dining.subtitle1")}
                </motion.p>

                <motion.p variants={fadeInUp}
                    className="body-text">
                    <br></br>{t("dining.subtitle2")}
                </motion.p>

                <motion.div variants={fadeInUp} className="w-full">
                                <ExploreButton />
                                </motion.div>

            </motion.div>
        </SectionWrapper>
    )

}
