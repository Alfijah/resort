import { motion } from "framer-motion";
import { container, fadeInUp } from "../animations/Varianten";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionWrapper from "../animations/SectionWrapper";
import CabanaCarousel from "../components/carousels/CabanaCarousel";
import ExploreButton from "../components/tools/ExploreButton";

export default function CabanaSection() {
    const { t } = useTranslation();

    return (
        <SectionWrapper
            className="relative bg-white w-full max-w-screen-2xl mx-auto sm:px-8 lg:px-8 xl:px-14 py-14 sm:py-16 lg:mt-20 flex flex-col lg:flex-row gap-12 items-start lg:items-center overscroll-x-none">

            <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto px-6 sm:px-0 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="heading-primary">{t("cabanas.title")}</motion.h1>
                <motion.p variants={fadeInUp}
                    className="body-text">
                    {t("cabanas.subtitle1")}
                </motion.p>

                <motion.p variants={fadeInUp}
                    className="body-text">
                    <br></br>{t("cabanas.subtitle2")}
                </motion.p>

                <motion.div variants={fadeInUp} className="w-full">
                    <Link to="cabanas"><ExploreButton /></Link>
                </motion.div>
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
