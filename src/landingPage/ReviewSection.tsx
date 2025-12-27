import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionWrapper from "../animations/SectionWrapper";
import { fadeInUp } from "../animations/Varianten";
import icon from "../assets/icons/arrowCircle.png"

export default function ReviewsSection() {
    const { t } = useTranslation();

    const reviews = [
        {
            name: t("reviews.items.1.name"),
            tag: t("reviews.items.1.tag"),
            text: t("reviews.items.1.text"),
        },
        {
            name: t("reviews.items.2.name"),
            tag: t("reviews.items.2.tag"),
            text: t("reviews.items.2.text"),
        },
        {
            name: t("reviews.items.3.name"),
            tag: t("reviews.items.3.tag"),
            text: t("reviews.items.3.text"),
        },
    ];

    return (
        <SectionWrapper amount={0.15} 
        className="relative w-full max-w-screen-xl mx-auto text-grey px-6 sm:px-8 lg:px-0 py-16 sm:py-16">
            <div>
                <motion.p
                    variants={fadeInUp}
                    className="body-text tracking-[0.15em] uppercase mb-3"
                >
                    {t("reviews.kicker")}
                </motion.p>

                <motion.h1
                    variants={fadeInUp}
                    className="heading-primary mb-4"
                >
                    {t("reviews.title")}
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="body-text mb-10"
                >
                    {t("reviews.subtitle")}
                </motion.p>

                <motion.div variants={fadeInUp}
                className="grid gap-6 md:gap-8 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <article
                            key={index}
                            className="flex flex-col justify-between h-full border border-white/10 bg-white backdrop-blur-sm px-5 py-6 md:px-6 md:py-7 shadow-sm"
                        >
                            <p className="body-text mb-2 italic">
                                <span className="font-bold text-4xl">“</span>{review.text}<br></br><span className="font-bold text-4xl">”</span>
                            </p>
                            <div className="mt-auto">
                                <p className="body-text">
                                    {review.name}
                                </p>
                            </div>
                        </article>
                    ))}
                </motion.div>
            </div>

            <motion.p
                variants={fadeInUp}
                className="body-text mt-12">
                {t("reviews.cta")}
            </motion.p>

            <div 
                className="mt-2 xl:px-0">
                <motion.a variants={fadeInUp}
                href="https://www.google.com/search?sca_esv=711d87e2c6f6d006&hl=fy-NL&sxsrf=AE3TifOg7i7blSqI4mzzevSWj-TudRwkeg:1764951431496&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_-7JAQ-M6S-hUJEkOLZ-jgFCBu9GuQrrvrwzgyoIxBLDSdNE_ffQ1B_IydxvBwfLL4XvSuv3NqNKacmiK2O7K0jHIfa&q=Sendang+Redjo+Reviews&sa=X&ved=2ahUKEwidyfq47KaRAxUAhP0HHYkyFrsQ0bkNegQIHxAE&biw=1536&bih=826&dpr=1.25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-3 cursor-pointer group">
                    <img
                        src={icon}
                        alt="Imagine icon"
                        className="w-8 h-8 object-contain font-bold group-hover:opacity-100 transition" />

                    <span className="body-text icon text-sm md:text-base leading-relaxed group-hover:underline group-hover:text-white transition">
                        {t("reviews.button")}
                    </span>
                </motion.a>
            </div>

        </SectionWrapper>
    );
}
