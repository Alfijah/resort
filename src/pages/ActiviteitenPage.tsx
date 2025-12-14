import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import ReserverenContactBar from "../components/tools/ReserverenContactBar";
import img from "../assets/activiteitenPage/actHero.jpeg"
import img1 from "../assets/activiteitenPage/dobber1.jpeg"
import img2 from "../assets/activiteitenPage/dobber3.jpeg"
import img3 from "../assets/activiteitenPage/fishing.jpeg"
import img4 from "../assets/activiteitenSection/act1.jpeg"
import img5 from "../assets/activiteitenPage/kajak.jpeg"
import { TbKayak } from "react-icons/tb";
import { GiBoatFishing } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { GiEgyptianBird } from "react-icons/gi";

export default function ActiviteitenPage() {
  const { t } = useTranslation();

  const items = [
    {
      img: img5,
      title: t("activiteitenPage.title3"),
      text: t("activiteitenPage.text3")
    },
    {
      img: img3,
      title: t("activiteitenPage.title4"),
      text: t("activiteitenPage.text4")
    },
    {
      img: img2,
      title: t("activiteitenPage.title5"),
      text: t("activiteitenPage.text5")
    },
    {
      img: img4,
      title: t("activiteitenPage.title6"),
      text: t("activiteitenPage.text6")
    }
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[550px]">

        <img src={img}
          className="absolute inset-0 w-full h-full object-cover object-top" />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-transparant pointer-events-none">
        </div>

        <SectionWrapper
          className="relative z-20 flex flex-col h-full justify-start items-center md:justify-center w-full px-6 sm:px-12 md:px-14 pt-58 md:pt-35">
          <motion.h1 variants={fadeInUp} className="hero text-3xl md:text-5xl font-extrabold pb-2 md:pb-6 xl:pb-8 text-white leading-snugged text-shadow-lg/30">
            {t("activiteitenPage.hero")}
          </motion.h1>
        </SectionWrapper>
      </div>

      {/* First section */}
      <div className="relative w-full py-14 sm:py-18 md:py-20 lg:py-16">
        <SectionWrapper
          className="relative z-20 flex flex-col h-full justify-start items-center text-center w-full sm:px-12 md:px-10 lg:px-14">
          <motion.h1 variants={fadeInUp} className="heading-primary pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
            {t("activiteitenPage.title1")}
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-5xl mx-auto body-text text-center pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
            {t("activiteitenPage.text1")}
          </motion.p>

          <motion.img variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} src={img1} className="w-full max-w-screen-xl mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[580px] xl:h-[680px] sm:px-10 md:px-8 lg:px-20 object-cover object-center mt-8" />
        </SectionWrapper>
      </div>

      <div className="relative bg-white w-full py-14 sm:py-18 md:py-20">
        <SectionWrapper
          className="relative z-20 flex flex-col h-full justify-start items-center text-center w-full sm:px-12 md:px-14">
          <motion.h1 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} className="heading-primary pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
            {t("activiteitenPage.title2")}
          </motion.h1>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text text-center px-6 pb-2 md:pb-6 xl:pb-8 leading-snugged">
            {t("activiteitenPage.text2")}
          </motion.p>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 mt-8 mb-8 max-w-6xl mx-auto">
            {[
              { key: "kajak", icon: <TbKayak size={28} /> },
              { key: "vissen", icon: <GiBoatFishing size={28} /> },
              { key: "zwemmen", icon: <FaPersonSwimming size={28} /> },
              { key: "vogels", icon: <GiEgyptianBird size={28} /> },
            ].map((item, index) => (
              <motion.div key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center text-center">

                {/* ICON WRAPPER */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-900/10 text-sky-900 shadow-[0_0_15px_rgba(26,64,105,0.15)] mb-1">
                  {item.icon}
                </div>

                {/* LABEL */}
                <p className="body-text text-center max-w-[150px]">
                  {t(`activiteitenPage.features.${item.key}`)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* <motion.img variants={fadeInUp} src={img2} className="w-full max-w-screen-xl mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[680px] object-cover object-center mt-8" /> */}

        </SectionWrapper>
      </div>

      <div className="relative w-full py-14 sm:py-18 md:py-20">
        <SectionWrapper className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto text-center px-6 lg:px-0 xl:px-2">

          <motion.h1 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-primary pb-2 md:pb-6 lg:pb-10 mb-6 px-6 leading-snugged">
            {t("activiteitenPage.headAct")}
          </motion.h1>

          {/* GRID STRUCTUUR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:px-10">

            {items.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden flex flex-col md:px-10 lg:px-0">
                {/* IMAGE */}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full h-75 object-cover" />

                {/* TEXT */}
                <div className="p-2 mt-4 flex flex-col flex-grow">
                  <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="heading-secondary text-left pb-4">
                    {item.title}
                  </motion.h2>

                  <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="body-text containerBorder mb-2 text-left">
                    {item.text}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      <ReserverenContactBar />
    </>
  );
}