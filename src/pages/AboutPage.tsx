import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import ReserverenContactBar from "../components/tools/ReserverenContactBar";
import img from "../assets/aboutPage/aboutHero.jpeg"
import img1 from "../assets/aboutPage/image00059.jpg"
import img2 from "../assets/aboutPage/birdsFly.jpg"
import img3 from "../assets/aboutPage/aboutCabana.jpg"
import img4 from "../assets/aboutPage/dobber2.jpeg"
import img5 from "../assets/aboutPage/aboutWhy.jpg"

export default function AboutPage() {
  const { t } = useTranslation();

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
            {t("about.hero")}
          </motion.h1>
        </SectionWrapper>
      </div>

      {/* First section */}
      <div className="relative w-full py-14 sm:py-16 sm:px-8">
        <SectionWrapper
          className="relative max-w-screen-xl mx-auto z-20 flex flex-col h-full justify-start items-center text-center w-full">
          <motion.h1 variants={fadeInUp} className="heading-primary pb-2 md:pb-6 xl:pb-8 px-6 sm:px-0 lg:px-22 leading-snugged">
            {t("about.title1")}
          </motion.h1>

          <motion.p variants={fadeInUp} className="body-text text-center pb-2 md:pb-6 xl:pb-8 px-6 sm:px-0 lg:px-22 leading-snugged">
            {t("about.text1")}
          </motion.p>

          <motion.img variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} src={img1} className="w-full mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[660px] sm:px-0 object-cover object-center mt-8" />
        </SectionWrapper>
      </div>

      {/* Van plantage naar eco retreat */}
      <div className="relative bg-white w-full py-14 sm:py-16 px-6 sm:px-8 lg:px-26">
        <SectionWrapper
          className="relative max-w-screen-xl mx-auto z-20 flex flex-col lg:flex-row gap-12 h-full justify-between items-center text-center lg:text-left w-full">
          <div className="lg:w-1/2 flex flex-col gap-2">
            <motion.h1 variants={fadeInUp} className="heading-primary leading-snugged">
              {t("about.title2")}
            </motion.h1>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text2a")}
            </motion.p>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text2b")}
            </motion.p>
          </div>

          <motion.img variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} src={img2} className="w-full lg:w-1/2 mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[460px] object-cover object-center" />
        </SectionWrapper>
      </div>

      {/* Cabanas die opgaan in het landschap */}
      <div className="relative w-full py-14 sm:py-16 px-6 sm:px-8 lg:px-26">
        <SectionWrapper
          className="relative max-w-screen-xl mx-auto z-20 flex flex-col lg:flex-row-reverse gap-12 h-full justify-between items-center text-center lg:text-left w-full">

          <div className="lg:w-1/2 flex flex-col gap-2">
            <motion.h1 variants={fadeInUp} className="heading-primary leading-snugged">
              {t("about.title3")}
            </motion.h1>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text3a")}
            </motion.p>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text3b")}
            </motion.p>
          </div>

          <motion.img variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} src={img3} className="w-full lg:w-1/2 mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[460px] object-cover object-center" />
        </SectionWrapper>
      </div>

      {/* De betekenis achter de naam */}
      <div className="relative bg-white w-full py-14 sm:py-16 px-6 sm:px-8 lg:px-26">
        <SectionWrapper
          className="relative max-w-screen-xl mx-auto z-20 flex flex-col lg:flex-row gap-12 h-full justify-between items-center text-center lg:text-left w-full">
          <div className="lg:w-1/2 flex flex-col gap-2">
            <motion.h1 variants={fadeInUp} className="heading-primary leading-snugged">
              {t("about.title4")}
            </motion.h1>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text4a")}
            </motion.p>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text4b")}
            </motion.p>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text4c")}
            </motion.p>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text4d")}
            </motion.p>
          </div>

          <motion.img variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} src={img4} className="w-full lg:w-1/2 mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[460px] object-cover object-center" />
        </SectionWrapper>
      </div>

      {/* Waarom verblijven bij Sendang Redjo? */}
      <div className="relative w-full py-14 sm:py-18 px-6 sm:px-8 lg:px-26">
        <SectionWrapper
          className="relative max-w-screen-xl mx-auto z-20 flex flex-col lg:flex-row-reverse gap-12 h-full justify-between items-center text-center lg:text-left w-full">
          <div className="lg:w-1/2 flex flex-col gap-2">
            <motion.h1 variants={fadeInUp} className="heading-primary leading-snugged">
              {t("about.title5")}
            </motion.h1>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text5a")}
            </motion.p>

            <motion.p variants={fadeInUp} className="body-text leading-snugged">
              {t("about.text5b")}
            </motion.p>
          </div>

          <motion.img variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} src={img5} className="w-full lg:w-1/2 mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[460px] object-cover object-center" />
        </SectionWrapper>
      </div>
      <ReserverenContactBar />
    </>
  );
}