import heroBg from "../assets/heroSection/birds.mp4";
import { useState, useRef, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import icon from "../assets/icons/arrowCircleW.png"

export default function HeroSection() {
    // const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                src={heroBg}
                autoPlay
                loop
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
            </div>

            <SectionWrapper
                className="relative z-20 flex flex-col h-full justify-start items-start text-start md:items-center w-full px-6 sm:px-12 md:px-14 pt-88 md:pt-95 lg:pt-95 xl:pt-105">
                <motion.h1 variants={fadeInUp} className="text-2xl md:text-4xl pb-2 md:pb-6 xl:pb-8 text-white leading-snugged text-shadow-lg/30">
                    {t("hero.title")}
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-sm md:text-base text-white leading-relaxed text-shadow-lg/30 mt-4 md:mt-6">
                    {t("hero.subtitle")}
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="flex items-center justify-center gap-3 mt-6 cursor-pointer group"
                >
              
                    <img
                        src={icon}
                        alt="Imagine icon"
                        className="w-8 h-8 object-contain font-bold group-hover:opacity-100 transition"
                    />

                    
                    <span className="icon text-sm md:text-base text-white leading-relaxed text-shadow-lg group-hover:underline group-hover:text-white transition">
                        {t("hero.explore")}
                    </span>
                </motion.div>
                
            </SectionWrapper>

            
            {/* 📱 Mobiele onderbalk – zichtbaar onder 1260px */}
            <div className="fixed bottom-0 left-0 w-full bg-white text-white py-6 px-6 grid grid-cols-2 flex justify-around items-center xl:hidden z-50 backdrop-blur-md uppercase">
                <button className="absolute bg-sky-900 w-[50%] h-full uppercase tracking-widest text-xs cursor-pointer hover:bg-red-400">
                    {t("hero.book")}
                </button>
                <button className="absolute bg-white w-[50%] right-0 h-full py-2 uppercase tracking-widest text-xs text-black cursor-pointer hover:bg-white hover:text-orange-600 transition">
                    {t("hero.email")}
                </button>
            </div>

        </div>

    )
}