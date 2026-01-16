import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp } from "../animations/Varianten";
import ReserverenContactBar from "../components/tools/ReserverenContactBar";
import img from "../assets/contactPage/img1.jpg"
import img1 from "../assets/contactPage/entrance.jpg"
import img2 from "../assets/contactPage/map.jpg"
import img3 from "../assets/contactPage/qrCode.jpg"

export default function ContactPage() {
  const { t } = useTranslation();

  const items = [
    {
      img: img1,
      title: t("contact.enroute.entranceTitle"),
      text: t("contact.enroute.entranceText")
    },
    {
      img: img2,
      title: t("contact.enroute.mapTitle"),
      text: t("contact.enroute.mapText")
    },
    {
      img: img3,
      title: t("contact.enroute.qrCodeTitle"),
      text: t("contact.enroute.qrCodeText")
    }
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[550px]">

        <img src={img}
          className="absolute inset-0 w-full h-full object-cover object-center" />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-transparant pointer-events-none">
        </div>

        <SectionWrapper
          className="relative z-20 flex flex-col h-full justify-start items-center md:justify-center w-full px-6 sm:px-12 md:px-14 pt-58 md:pt-35">
          <motion.h1 variants={fadeInUp} className="hero text-3xl md:text-5xl font-extrabold pb-2 md:pb-6 xl:pb-8 text-white leading-snugged text-shadow-lg/30">
            {t("contact.hero")}
          </motion.h1>
        </SectionWrapper>
      </div>

      {/* First section */}
      <div className="relative w-full py-14 sm:py-16 px-6 sm:px-16 lg:px-0">
        <SectionWrapper
          className="relative max-w-screen-md mx-auto z-20 flex flex-col gap-4 h-full justify-start items-center text-center w-full">
          <motion.h1 variants={fadeInUp} className="heading-primary leading-snugged">
            {t("contact.title1")}
          </motion.h1>

          <motion.p variants={fadeInUp} className="body-text text-center leading-snugged">
            {t("contact.whatsapp.subtitle")} 
            <Link
              to="/reserveren#tarieven"
              className="underline underline-offset-4">
              <u>{t("contact.whatsapp.subtitlePricing")}</u>
            </Link>
          </motion.p>

          <motion.p variants={fadeInUp} className="body-text text-center leading-snugged">
            {t("contact.whatsapp.subtitle2")}
          </motion.p>

          <motion.div variants={fadeInUp} className="w-full">
            <button className="explore-button w-full h-10 border mt-2 md:mt-6 transition-colors cursor-pointer">
              <a
                href="https://wa.me/5978592337"
                target="_blank"
                rel="noopener noreferrer"
                className="">
                WhatsApp </a>
            </button>
          </motion.div>
        </SectionWrapper>
      </div>

      {/* Bereikbaarheid en route */}
      <div className="relative bg-white w-full py-14 sm:py-16 px-6 sm:px-8 lg:px-0">
        <SectionWrapper className="w-full max-w-screen-xl mx-auto text-center">

          <motion.h1 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-primary pb-2 md:pb-6 lg:pb-10 mb-6 leading-snugged">
            {t("contact.enroute.title")}
          </motion.h1>

          {/* GRID STRUCTUUR */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {items.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden flex flex-col"
              >
                {/* IMAGE */}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full h-75 sm:h-145 md:h-60 lg:h-80 object-cover"
                />

                {/* TEXT */}
                <div className="mt-4 flex flex-col flex-grow">
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