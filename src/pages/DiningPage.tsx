import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import ReserverenContactBar from "../components/tools/ReserverenContactBar";
import img from "../assets/diningPage/satay.jpg"
import img1 from "../assets/diningPage/java.jpeg"
import loempia from "../assets/icons/loempia.png"
import drinks from "../assets/icons//drink.png"
import icon from "../assets/icons/arrowBlackRight.png"
import { GiCoconuts } from "react-icons/gi";
import { PiCoffeeLight } from "react-icons/pi";

export default function DiningPage() {
  const { t } = useTranslation();

  const items = [
    {
      bullets: [
        t("diningPage.features2.lunch"),
        t("diningPage.features2.dinner"),
      ]
    },
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
            {t("diningPage.hero")}
          </motion.h1>
        </SectionWrapper>
      </div>

      {/* First section */}
      <div className="relative w-full py-14 sm:py-18 md:py-20 lg:py-16">
        <SectionWrapper
          className="relative z-20 flex flex-col h-full justify-start items-center text-center w-full sm:px-12 md:px-10 lg:px-14">
          <motion.h1 variants={fadeInUp} className="heading-primary pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
            {t("diningPage.title1")}
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-5xl mx-auto body-text text-center pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
            {t("diningPage.text1")}
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
            {t("diningPage.title2")}
          </motion.h1>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text text-center px-6 pb-10 md:pb-6 xl:pb-8 leading-snugged">
            {t("diningPage.text2")} {/* pb hierboven is aangepast */}
          </motion.p>

          <motion.h2 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} className="heading-secondary pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
            {t("diningPage.subtitle2a")}
          </motion.h2>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text text-center px-6 pb-2 md:pb-6 xl:pb-8 leading-snugged">
            {t("diningPage.subtext2a")}
          </motion.p>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 mt-8 mb-12 max-w-6xl mx-auto"
          >
            {[
              { key: "coconut", icon: <GiCoconuts size={26} /> },
              { key: "snack", icon: <img src={loempia} alt="snack icon" className="w-10 h-10 object-contain" /> },
              { key: "coffee", icon: <PiCoffeeLight size={26} /> },
              { key: "freshDrinks", icon: <img src={drinks} alt="freshDrink icon" className="w-10 h-10 object-contain" /> },

            ].map((item, index) => (
              <motion.div key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center text-center">

                {/* ICON WRAPPER */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-900/10 text-sky-900 shadow-[0_0_15px_rgba(26,64,105,0.15)] mb-1"
                >
                  {item.icon}
                </div>

                {/* LABEL */}
                <p className="body-text text-center max-w-[150px]">
                  {t(`diningPage.features.${item.key}`)}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.h2 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} className="heading-secondary pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
            {t("diningPage.subtitle2b")}
          </motion.h2>

          {/* GRID STRUCTUUR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:px-10">

            {items.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden flex flex-col md:px-10 lg:px-0">
                {/* TEXT */}
                <div className="p-2 -mt-2 flex flex-col flex-grow">
                  <motion.ul
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="body-text space-y-1 text-center">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <img
                          src={icon}
                          alt=""
                          className="w-4 h-4 object-contain mt-1"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      <div className="relative w-full py-14 sm:py-18 md:py-20">
        <SectionWrapper className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto text-center px-6 lg:px-0 xl:px-2">

          <motion.h1 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-primary pb-2 md:pb-6 lg:pb-10 mb-6 px-6 leading-snugged">
            Ervaar onze luxe cabanas aan het water
          </motion.h1>

        </SectionWrapper>
      </div>

      <ReserverenContactBar />
    </>
  );
}