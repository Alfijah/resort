import { motion } from "framer-motion";
import { container, fadeInUp } from "../animations/Varianten";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionWrapper from "../animations/SectionWrapper";
import ActiviteitenCarousel from "../components/carousels/ActiviteitenCarousel";
import ExploreButton from "../components/tools/ExploreButton";

export default function ActiviteitenSection() {
    const { t } = useTranslation();

    return (
        <SectionWrapper className="relative bg-white w-full">
        <div
            className="max-w-screen-xl mx-auto sm:px-8 lg:px-0 py-14 sm:py-16 flex flex-col gap-12 lg:flex-row items-start lg:items-center overscroll-x-none">

            <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full lg:w-[40%] px-6 sm:px-0">
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
                    <Link to="activiteiten"><ExploreButton /></Link>
                </motion.div>
            </motion.div>

            <motion.div variants={container}
                className="w-full lg:w-[60%]">
                <div className="relative w-full overflow-hidden h-[320px] sm:h-[360px] md:h-[480px]">
                    <ActiviteitenCarousel />

                </div>
            </motion.div>
        </div>
        </SectionWrapper>
    )

}
