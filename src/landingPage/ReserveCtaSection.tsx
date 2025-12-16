import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import bgImage from "../assets/cta/img.jpeg";

export default function ReserveCtaSection() {
    const { t } = useTranslation();

    const scrollToBooking = () => {
        const el = document.getElementById("booking-bar");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <section className="relative w-full h-[80vh] sm:h-[75vh] md:h-[58vh] lg:h-[62vh] flex items-center justify-center">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Overlay (donker / gradient / premium glow) */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-amber-900/20 to-black/80"></div>


            <SectionWrapper className="ctaSection relative z-25 max-w-screen-lg mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-center gap-0 sm:gap-8">
                {/* Tekstblok */}
                <div className="w-full md:w-1/2 text-white">

                    <motion.h1
                        variants={fadeInUp}
                        className="heading-primary mb-4"
                    >
                        {t("cta.title")}
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="body-text max-w-xl mb-10"
                    >
                        {t("cta.subtitle")}
                    </motion.p>


                </div>

                {/* Visual / sfeerblok */}
                <motion.div
                    variants={fadeInUp}
                    className="w-full md:w-1/2"
                >
                    <div className="relative overflow-hidden ">
                        <div className="w-full flex flex-col items-start">

                            <p className="body-text uppercase tracking-[0.15em] text-slate-200 mb-1">
                                {t("cta.highlightKicker")}
                            </p>
                            <p className="body-text text-slate-50 max-w-md mb-8">
                                {t("cta.highlightText")}
                            </p>

                            <motion.div variants={fadeInUp} className="flex flex-col w-full gap-4">
                                <a
                                    href="#reserveren"

                                    onClick={scrollToBooking}
                                    className="bg-sky-900 w-full hover:bg-red-400 transition-colors px-7 py-3 explore-button uppercase text-white cursor-pointer text-center location-heading"
                                >
                                    {t("cta.primary")}
                                </a>

                                <a
                                    href="#contact"
                                    className="border w-full border-white hover:bg-white text-white hover:text-red-400 transition-colors text-center px-7 py-3 explore-button location-heading uppercase"
                                >
                                    {t("cta.secondary")}
                                </a>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
