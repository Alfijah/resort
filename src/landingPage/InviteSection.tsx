import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import invite from "../assets/inviteSection/leaf2.jpg"

export default function InviteSection() {
    const { t } = useTranslation();

    return (
        <div
            className="invite-section relative w-full h-[660px] sm:h-[580px] md:h-[600px] mt-20 sm:mt-20 md:mt-22 sm:pb-8 lg:pb-0 flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${invite})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}>

            <div className="absolute inset-0 bg-black/70">
            </div>

            <SectionWrapper
                className="relative z-20 flex flex-col text-start md:text-center w-full md:w-[90%] lg:max-w-4xl px-6 sm:px-12">
                <motion.h1 variants={fadeInUp} className="heading-primary">
                    {t("invite.title")}
                </motion.h1>

                <motion.p variants={fadeInUp} className="body-text">
                    {t("invite.subtitle")}<br /><br />
                </motion.p>

                <motion.p variants={fadeInUp} className="body-text">
                    <span className="italic font-bold pb-4">{t("invite.subtitle1")}</span><br />
                    {t("invite.subtitle1text")}<br /><br />
                </motion.p>

                <motion.p variants={fadeInUp} className="body-text">
                    <span className="italic font-bold">{t("invite.subtitle2")}</span><br />
                    {t("invite.subtitle2text")}<br /><br />
                </motion.p>

                <motion.p variants={fadeInUp} className="body-text">
                    <span className="italic font-bold">{t("invite.subtitle3")}</span><br />
                    {t("invite.subtitle3text")}<br /><br />
                </motion.p>

                <motion.p variants={fadeInUp} className="body-text">
                    <span className="italic font-bold">{t("invite.subtitle4")}</span><br />
                    {t("invite.subtitle4text")}
                </motion.p>
            </SectionWrapper>
        </div>
    )
}
