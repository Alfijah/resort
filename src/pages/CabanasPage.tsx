import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import img from "../assets/cabanaSection/cab1.jpeg"
import img1 from "../assets/cabanasPage/image00034.jpeg"
import img2 from "../assets/cabanasPage/image00032.jpeg"
import img3 from "../assets/cabanasPage/image00060.jpeg"
import img4 from "../assets/cabanaSection/cab5.jpg"

import hammock from "../assets/icons/hammock2.png"
import icon from "../assets/icons/arrowBlackRight.png"
import { FiCoffee } from "react-icons/fi";
import { TbToolsKitchen, TbBeach, TbKayak, TbFishHook, TbLifebuoy } from "react-icons/tb";
import { PiShowerBold } from "react-icons/pi";

export default function CabanasPage() {
    const { t } = useTranslation();

    const items = [
        {
            img: img,
            title: t("cabanasPage.title3"),
            text: t("cabanasPage.text3"),
            bullets: [
                t("cabanasPage.text3Subs.sub1"),
                t("cabanasPage.text3Subs.sub2"),
                t("cabanasPage.text3Subs.sub3"),
                t("cabanasPage.text3Subs.sub1")
            ]
        },
        {
            img: img3,
            title: t("cabanasPage.title4"),
            text: t("cabanasPage.text4"),
            bullets: [
                t("cabanasPage.text4Subs.point1"),
                t("cabanasPage.text4Subs.point2"),
                t("cabanasPage.text4Subs.point3"),
                t("cabanasPage.text4Subs.point4"),
            ]
        },
        {
            img: img4,
            title: t("cabanasPage.title5"),
            text: t("cabanasPage.text5a"),
            bullets: [

            ]
        },
        {
            img: img2,
            title: t("cabanasPage.title6"),
            text: t("cabanasPage.text6"),
            bullets: [
                t("cabanasPage.text6Subs.sub1"),
                t("cabanasPage.text6Subs.sub2"),
                t("cabanasPage.text6Subs.sub3"),
                t("cabanasPage.text6Subs.sub4")
            ]
        },
    ];

    return (
        <>
            {/* Hero */}
            <div className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[550px]">

                <img src={img}
                    className="absolute inset-0 w-full h-full object-cover object-bottom" />

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-transparant pointer-events-none">
                </div>

                <SectionWrapper
                    className="relative z-20 flex flex-col h-full justify-start items-center md:justify-center w-full px-6 sm:px-12 md:px-14 pt-58 md:pt-35">
                    <motion.h1 variants={fadeInUp} className="hero text-3xl md:text-5xl font-extrabold pb-2 md:pb-6 xl:pb-8 text-white leading-snugged text-shadow-lg/30">
                        {t("cabanasPage.hero")}
                    </motion.h1>
                </SectionWrapper>
            </div>

            {/* First section */}
            <div className="relative w-full py-14 sm:py-18 md:py-20 lg:py-16">
                <SectionWrapper
                    className="relative z-20 flex flex-col h-full justify-start items-center text-center w-full sm:px-12 md:px-14">
                    <motion.h1 variants={fadeInUp} className="heading-primary pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
                        {t("cabanasPage.title1")}
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="max-w-5xl mx-auto body-text text-center pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
                        {t("cabanasPage.text1")}
                    </motion.p>

                    <motion.img variants={fadeInUp} src={img1} className="w-full max-w-screen-xl mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[580px] xl:h-[680px] sm:px-10 md:px-12 lg:px-20 object-cover object-bottom mt-8" />
                </SectionWrapper>
            </div>

            <div className="relative bg-white w-full py-14 sm:py-18 md:py-20">
                <SectionWrapper
                    className="relative z-20 flex flex-col h-full justify-start items-center text-center w-full sm:px-12 md:px-14">
                    <motion.h1 variants={fadeInUp} className="heading-primary pb-2 md:pb-6 xl:pb-8 px-6 leading-snugged">
                        {t("cabanasPage.title2")}
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="max-w-5xl mx-auto body-text text-center px-6 pb-2 md:pb-6 xl:pb-8 leading-snugged">
                        {t("cabanasPage.text2")}
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 mt-12 mb-8 max-w-6xl mx-auto"
                    >
                        {[
                            { key: "lounge", icon: <FiCoffee size={26} /> },
                            { key: "kitchen", icon: <TbToolsKitchen size={28} /> },
                            { key: "poolbeds", icon: <TbBeach size={28} /> },
                            { key: "hammock", icon: <img src={hammock} alt="hammock icon" className="w-10 h-10 object-contain" /> },
                            { key: "shower", icon: <PiShowerBold size={28} /> },
                            { key: "kayak", icon: <TbKayak size={28} /> },
                            { key: "fishing", icon: <TbFishHook size={28} /> },
                            { key: "floaties", icon: <TbLifebuoy size={28} /> },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center">

                                {/* ICON WRAPPER */}
                                <div
                                    className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-900/10 text-sky-900 shadow-[0_0_15px_rgba(26,64,105,0.15)] mb-3"
                                >
                                    {item.icon}
                                </div>

                                {/* LABEL */}
                                <p className="body-text text-center max-w-[150px]">
                                    {t(`cabanasPage.features.${item.key}`)}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* <motion.img variants={fadeInUp} src={img2} className="w-full max-w-screen-xl mx-auto h-[320px] sm:h-[420px] md:h-[540px] lg:h-[680px] object-cover object-center mt-8" /> */}

                </SectionWrapper>
            </div>


            <div className="relative w-full py-14 sm:py-18 md:py-20">
                <SectionWrapper className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto text-center px-6 lg:px-8">

                    <motion.h1 variants={fadeInUp} className="heading-primary pb-2 md:pb-6 lg:pb-10 mb-6 px-6 leading-snugged">
                        Ervaar onze luxe cabanas aan het water
                    </motion.h1>

                    {/* GRID STRUCTUUR */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="overflow-hidden flex flex-col"
                            >
                                {/* IMAGE */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-75 object-cover"
                                />

                                {/* TEXT */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="heading-secondary text-left pb-4">
                                        {item.title}
                                    </h2>

                                    <p className="body-text containerBorder mb-4 text-left">
                                        {item.text}
                                    </p>

                                    <ul className="body-text space-y-2 text-left">
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
                                    </ul>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </SectionWrapper>
            </div>

        </>
    );
}