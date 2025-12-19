import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import ReserverenContactBar from "../components/tools/ReserverenContactBar";
import BeforeAfterSlider from "../components/tools/BeforeAfterSlider";
import img from "../assets/diningPage/satay.jpg"
import img1 from "../assets/diningPage/java.jpeg"
import loempia from "../assets/icons/loempia.png"
import drinks from "../assets/icons//drink.png"
import cocunut from "../assets/icons/coconut.png"
import lunch from "../assets/icons/lunch.png"
import santen from "../assets/diningSection/dine1.jpg"
import fish from "../assets/diningPage/fish.jpg"
import satePitik from "../assets/diningPage/dine4.jpg"
import sateSapi from "../assets/diningSection/dine3.jpg"
import cookFish from "../assets/activiteitenSection/act2.jpeg"
import catchFish from "../assets/diningPage/fish2.png"
import extraImg from "../assets/diningPage/extras.jpg"
import { GiCoffeeCup } from "react-icons/gi";
import { GiBarbecue } from "react-icons/gi";
import icon from "../assets/icons/arrowBlackRight.png"

export default function DiningPage() {
  const { t } = useTranslation();

  const items = [
    {
      img: santen,
      title: t("diningPage.text3Subs.sub1title"),
      text: t("diningPage.text3Subs.sub1text")
    },
    {
      img: fish,
      title: t("diningPage.text3Subs.sub2title"),
      text: t("diningPage.text3Subs.sub2text")
    },
  ];

  const dinnerItems = [
    {
      img: satePitik,
      title: t("diningPage.subtitle4aSubs.sub1title"),
      text: t("diningPage.subtitle4aSubs.sub1text")
    },
    {
      img: sateSapi,
      title: t("diningPage.subtitle4bSubs.sub1title"),
      text: t("diningPage.subtitle4bSubs.sub1text")
    },
  ];

  const extras = [
    {
      title: t("diningPage.extras.titleMeals"),
      text: t("diningPage.extras.textMeals"),
      bullets: [
        t("diningPage.extras.meals.meal1Title"),
        t("diningPage.extras.meals.meal2Title")
      ]
    },
    {
      title: t("diningPage.extras.titleDrinks"),
      text: t("diningPage.extras.textDrinks"),
      bullets: []
    },
    {
      title: t("diningPage.extras.titleDiets"),
      text: t("diningPage.extras.textDiets"),
      bullets: []
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
            className="max-w-5xl mx-auto body-text text-center px-6 lg:px-27 pb-10 md:pb-6 xl:pb-8 leading-snugged">
            {t("diningPage.text2")} {/* pb hierboven is aangepast */}
          </motion.p>

          <motion.h2 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} className="heading-secondary pb-2 mt-4 md:pb-6 xl:pb-8 px-6 leading-snugged">
            {t("diningPage.subtitle2a")}
          </motion.h2>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text text-center px-6 lg:px-27 pb-2 md:pb-6 xl:pb-8 leading-snugged">
            {t("diningPage.subtext2a")}
          </motion.p>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-8 mt-4 mb-12 max-w-6xl mx-auto"
          >
            {[
              // { key: "coconut", icon: <cocunut size={26} /> },
              { key: "coconut", icon: <img src={cocunut} alt="snack icon" className="w-9 h-19 object-contain" /> },
              { key: "snack", icon: <img src={loempia} alt="snack icon" className="w-9 h-9 object-contain" /> },
              { key: "coffee", icon: <GiCoffeeCup size={30} /> },
              { key: "freshDrinks", icon: <img src={drinks} alt="freshDrink icon" className="w-9 h-9 object-contain" /> },

            ].map((item, index) => (
              <motion.div key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center text-center">

                {/* ICON WRAPPER */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-900/10 textGreen shadow-[0_0_15px_rgba(26,64,105,0.15)] mb-1"
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
            viewport={{ once: true, amount: 0.3 }} className="heading-secondary pb-2 mt-4 md:pb-6 xl:pb-8 px-6 leading-snugged">
            {t("diningPage.subtitle2b")}
          </motion.h2>


          <div
            className="grid grid-cols-2 gap-8 md:gap-12 mt-4 mb-8 max-w-6xl mx-auto">
            {[
              // { key: "coconut", icon: <cocunut size={26} /> },
              { key: "lunch", icon: <img src={lunch} alt="snack icon" className="w-10 h-10 object-contain" /> },
              { key: "dinner", icon: <GiBarbecue size={28} /> },

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
                  {t(`diningPage.features2.${item.key}`)}
                </p>
              </motion.div>
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
            className="heading-primary pb-2 md:pb-6 lg:pb-10 px-6 lg:px-24 leading-snugged">
            {t("diningPage.title3")}
          </motion.h1>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text text-center px-6 mb-10 leading-snugged">
            {t("diningPage.text3")}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:px-10">
            {items.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden flex flex-col md:px-10 lg:px-0"
              >
                {/* IMAGE */}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full h-75 lg:h-90 object-cover"
                />

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

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-secondary text-left mt-6 ml-2 sm:px-8 md:px-16 lg:px-10">
            {t("diningPage.text3Subs.sub3title")}
          </motion.h2>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text px-2 mb-8 sm:px-10 md:px-18 lg:px-12 xl:-ml-0 leading-snugged">
            {t("diningPage.text3Subs.sub3text")}
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-secondary text-left mt-10 ml-2 sm:px-8 md:px-16 lg:px-10">
            {t("diningPage.text3Subs.sub4title")}
          </motion.h2>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text px-2 mb-6 md:mb-2 sm:px-10 md:px-18 lg:px-12 xl:-ml-0 leading-snugged">
            {t("diningPage.text3Subs.sub4text")}
          </motion.p>
        </SectionWrapper>
      </div>

      <div className="relative bg-white w-full py-14 sm:py-18 md:py-20">
        <SectionWrapper className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto text-center px-6 lg:px-0 xl:px-2">

          <motion.h1 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-primary pb-2 md:pb-6 lg:pb-10 px-6 leading-snugged">
            {t("diningPage.title4")}
          </motion.h1>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text text-center px-6 lg:px-28 mb-10 leading-snugged">
            {t("diningPage.text4")}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:px-10">
            {dinnerItems.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden flex flex-col md:px-10 lg:px-0"
              >
                {/* IMAGE */}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full h-75 lg:h-90 object-cover"
                />

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

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-secondary text-left mt-6 ml-2 sm:px-8 md:px-16 lg:px-10">
            {t("diningPage.subtitle4bSubs.sub2title")}
          </motion.h2>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text px-2 mb-6 md:mb-2 sm:px-10 md:px-18 lg:px-12 xl:-ml-0 leading-snugged">
            {t("diningPage.subtitle4bSubs.sub2text")}
          </motion.p>
        </SectionWrapper>
      </div>

      <div className="relative w-full py-14 sm:py-18 md:py-20">
        <SectionWrapper className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto text-center px-6 lg:px-0 xl:px-2">
          <motion.h1 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-primary pb-2 md:pb-6 lg:pb-10 mb-4 px-6 leading-snugged">
            {t("diningPage.title5")}
          </motion.h1>

          <div className="gap-10 sm:px-10">
            <div
              className="overflow-hidden flex flex-col md:px-10 lg:px-0">
              <BeforeAfterSlider
                before={catchFish}
                after={cookFish}
                className="relative w-full h-[320px] md:h-[480px] object-cover" />

              {/* TEXT */}
              <div className="p-2 mt-4 flex flex-col flex-grow">
                <motion.h2
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="heading-secondary text-left pb-4">
                  {t("diningPage.text5")}
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="body-text containerBorder mb-2 text-left">
                  {t("diningPage.text5sub")}
                </motion.p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      <div className="relative bg-white w-full py-14 sm:py-18 md:py-20">
        <SectionWrapper className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto text-center px-6 lg:px-0 xl:px-2">

          <motion.h1 variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading-primary pb-2 md:pb-6 lg:pb-10 px-6 leading-snugged">
            {t("diningPage.extras.sectionTitle")}
          </motion.h1>

          <motion.p variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto body-text text-center px-6 mb-10 leading-snugged">
            {t("diningPage.extras.sectionSubtitle")}
          </motion.p>

          <motion.img variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} src={extraImg} className="w-full max-w-screen-xl mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[580px] xl:h-[680px] sm:px-10 md:px-8 lg:px-10 object-cover object-center mt-8 mb-4" />

          <div className="grid grid-cols-1 gap-3 sm:px-10">
            {extras.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden flex flex-col md:px-10 lg:px-0">
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

                  <motion.ul
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="body-text space-y-1 text-left">
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

      <ReserverenContactBar />
    </>
  );
}