import { motion } from "framer-motion";
import SectionWrapper from "../animations/SectionWrapper";
import { fadeInUp } from "../animations/Varianten";
import { useTranslation } from "react-i18next";
import ReserverenContactBar from "../components/tools/ReserverenContactBar";
import WhatsApp from "../components/tools/Whatsapp";
import TarievenTable from "../components/tools/TarievenTabel";
import img from "../assets/reserverenPage/hero.jpeg"
import img1 from "../assets/reserverenPage/image00051.jpeg"
import icon from "../assets/icons/arrowBlackRight.png"

export default function ReserverenPage() {
  const { t } = useTranslation();
  const inclusiveList = t("reserverenPage.inclusief", { returnObjects: true, }) as string[];
  const excludedList = t("reserverenPage.nietInbegrepen", { returnObjects: true, }) as string[];
  const importantList = t("reserverenPage.belangrijk", { returnObjects: true, }) as string[];

  return (
    <div className="w-full">

      {/* HERO */}
      <div className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[550px]">
        <img src={img}
          className="absolute inset-0 w-full h-full object-cover object-center" />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-transparant pointer-events-none">
        </div>

        <SectionWrapper
          className="relative z-20 flex flex-col h-full justify-start items-center md:justify-center w-full px-6 sm:px-12 md:px-14 pt-58 md:pt-35">
          <motion.h1 variants={fadeInUp} className="hero text-3xl md:text-5xl font-extrabold pb-2 md:pb-6 xl:pb-8 text-white leading-snugged text-shadow-lg/30">
            {t("reserverenPage.hero")}
          </motion.h1>
        </SectionWrapper>
      </div>

      {/* INTRO */}
      {/* Jou dag bij sendang redjo */}
      <div className="relative w-full py-14 sm:py-16">
        <SectionWrapper
          className="relative max-w-screen-xl mx-auto z-20 flex flex-col h-full justify-start items-center text-center w-full sm:px-8 lg:px-0">
          <motion.h1 variants={fadeInUp} className="heading-primary pb-2 md:pb-6 xl:pb-8 px-6 sm:px-0 leading-snugged">
            {t("reserverenPage.introTitle")}
          </motion.h1>

          <motion.p variants={fadeInUp} className="mx-auto body-text text-center pb-2 md:pb-6 xl:pb-8 px-6 sm:px-0 lg:px-22 leading-snugged">
            {t("reserverenPage.introText")}
          </motion.p>

          <motion.img variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} src={img1} className="w-full h-[320px] sm:h-[420px] md:h-[540px] lg:h-[660px] object-cover object-center mt-8" />
        </SectionWrapper>
      </div>

      {/* Subtitle Reserveren */}
      <div className="relative bg-white w-full px-6 sm:px-8 lg:px-0 py-14 sm:py-16">
        <SectionWrapper
          className="relative max-w-screen-lg mx-auto z-20 flex flex-col gap-2 h-full justify-start w-full">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-secondary text-left">
            {t("reserverenPage.contactTitle")}
          </motion.h2>

          <motion.p variants={fadeInUp} className="body-text text-left leading-snugged">
            {t("reserverenPage.contactSubtitle")}
          </motion.p>

          <motion.p variants={fadeInUp} className="body-text text-left leading-snugged">
            <WhatsApp />
          </motion.p>

          <motion.p variants={fadeInUp} className="body-text text-left md:text-center leading-snugged">
            {t("reserverenPage.emailLabel")}: info@tukunari-experience.com
          </motion.p>

        </SectionWrapper>
      </div>

      {/* Subtitle Tarieven */}
      <div className="relative w-full px-6 sm:px-8 lg:px-0 py-14 sm:py-16">
        <SectionWrapper
          className="relative max-w-screen-lg mx-auto z-20 flex flex-col gap-2 h-full justify-start items-left w-full">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-secondary text-left">
            {t("reserverenPage.tarievenTitle")}
          </motion.h2>

          <motion.p variants={fadeInUp} className="body-text text-left leading-snugged">
            {t("reserverenPage.tarievenSub")}
          </motion.p>
          <div className="">
            <TarievenTable />
          </div>

          <motion.p variants={fadeInUp} className="body-text text-left leading-snugged">
            *{t("reserverenPage.tariefRemark")}
          </motion.p>
        </SectionWrapper>
      </div>

      {/* INCLUSIEF */}
      <SectionWrapper className="w-full bg-white py-14 sm:py-16 px-6 sm:px-8 lg:px-0">
        <div className="max-w-screen-lg mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-secondary text-left pb-4">
            {t("reserverenPage.inclusiefTitle")}
          </motion.h2>

          <ul className="body-text space-y-2">
            {inclusiveList.map((item: string, i: number) => (
              <motion.li key={i} variants={fadeInUp} className="flex items-start gap-2">
                <img
                  src={icon}
                  alt=""
                  className="w-4 h-4 object-contain mt-1"
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* NIET INBEGREPEN */}
      <SectionWrapper className="w-full max-w-screen-lg mx-auto px-6 sm:px-8 lg:px-0 py-14 sm:py-16">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="heading-secondary text-left">
          {t("reserverenPage.nietInbegrepenTitle")}
        </motion.h2>

        <ul className="body-text space-y-2">
          {excludedList.map((item: string, i: number) => (
            <motion.li key={i} variants={fadeInUp} className="flex items-start gap-2">
              <img
                src={icon}
                alt=""
                className="w-4 h-4 object-contain mt-1"
              />
              {item}
            </motion.li>
          ))}
        </ul>
      </SectionWrapper>

      {/* HUISREGELS */}
      <div className="relative bg-white w-full px-6 sm:px-8 lg:px-0 py-14 sm:py-16">
        <SectionWrapper
          className="max-w-screen-lg mx-auto z-20 flex flex-col gap-2 h-full justify-start items-left w-full">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-secondary text-left">
            {t("reserverenPage.huisregelsTitle")}
          </motion.h2>

          <motion.p variants={fadeInUp} className="body-text text-left leading-snugged">
            {t("reserverenPage.huisregelsText")}
          </motion.p>

          <motion.a variants={fadeInUp}
            href="src\assets\reserverenPage\Huisregels-Vrijwaring.pdf"
            target="_blank" className="body-text text-left leading-snugged">
            <u>{t("reserverenPage.huisregelsButton")}</u>
          </motion.a>
        </SectionWrapper>
      </div>

      {/* BELANGRIJKE INFO */}
      <SectionWrapper className="w-full max-w-screen-lg mx-auto px-6 sm:px-8 lg:px-0 py-14 sm:py-16">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="heading-secondary text-left pb-4">
          {t("reserverenPage.belangrijkTitle")}
        </motion.h2>

        <ul className="body-text space-y-2">
          {importantList.map((item: string, i: number) => (
            <motion.li key={i} variants={fadeInUp} className="flex items-start gap-2">
              <img
                src={icon}
                alt=""
                className="w-4 h-4 object-contain mt-1"
              />
              {item}
            </motion.li>
          ))}
        </ul>
      </SectionWrapper>

      {/* CTA */}
      <div className="relative bg-white w-full px-6 sm:px-8 lg:px-0 py-14 sm:py-16">
        <SectionWrapper
          className="max-w-screen-lg mx-auto z-20 flex flex-col gap-2 h-full justify-start items-left w-full">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-secondary text-left">
            {t("reserverenPage.ctaText")}
          </motion.h2>

          <motion.p variants={fadeInUp} className="body-text text-left leading-snugged">
            <WhatsApp />
          </motion.p>

          <motion.p variants={fadeInUp} className="body-text text-left leading-snugged">
            {t("reserverenPage.emailLabel")}: info@tukunari-experience.com
          </motion.p>
        </SectionWrapper>
      </div>
      <ReserverenContactBar />

    </div>
  );
}
