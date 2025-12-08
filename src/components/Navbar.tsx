import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { RxCross1 } from "react-icons/rx";
import logoWhite from "../assets/logo/logo_sendang_wit.png";
import logoDark from "../assets/logo/logo_sendang_donker.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Detect scroll
    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"

            className={`w-full fixed top-0 z-50 py-3 transition-colors duration-700 whitespace-nowrap
            ${isScrolled ? "bg-white/100 text-black shadow-md" : "bg-transparent text-white"}`}
        >
            {/* MOBILE / TABLET / SMALL LAPTOP (tot <1260px) */}
            <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 xl:hidden">
                {/* Hamburger */}
                <button
                    aria-label="Open Menu"
                    onClick={() => { setIsMenuOpen(true); setIsClosing(false); }}
                    className="flex flex-col justify-start items-center space-y-1  w-8 h-10 gap-1 transition-all"
                >
                    <span className={`w-5 h-[1px] transform rotate-0 origin-left ${isScrolled ? "bg-black" : "bg-white"}`}></span>
                    <span className={`w-full h-[2px] transform rotate-0 origin-left ${isScrolled ? "bg-black" : "bg-white"}`}></span>
                    <span className={`w-5 h-[1px] transform rotate-0 origin-left ${isScrolled ? "bg-black" : "bg-white"}`}></span>
                </button>

                {/* Logo */}
                <img
                    src={isScrolled ? logoDark : logoWhite}
                    alt="Taman Logo"
                    className="h-16 sm:h-20 transition-all duration-300"
                />

                <LanguageSwitcher isScrolled={isScrolled} />

                {/* Leeg voor alignment (Reserveren zit in menu) */}
                {/* <div className="w-8" /> */}
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay achter het menu */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsMenuOpen(false)} // sluit bij klik buiten
                        />

                        {/* MENU PANEEL */}
                        <motion.div
                            className={`fixed top-0 left-0 w-64 h-full xl:hidden flex flex-col items-start space-y-6 py-8 pl-8 pt-10 text-sm uppercase tracking-wider bg-white text-black shadow-lg z-50 will-change-transform`}
                            initial={{ x: "-100%" }}
                            animate={{ x: isClosing ? "-100%" : 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.30, ease: "easeOut" }}
                        >
                            <button
                                className="absolute top-4 right-4 text-black text-xl cursor-pointer"
                                onClick={() => {
                                    setIsClosing(true);
                                    setTimeout(() => setIsMenuOpen(false), 300);
                                }}
                            >
                                <RxCross1 />
                            </button>

                            {/* Existing menu links — exact jouw code */}
                            <a href="" className="nav-link">{t("nav.home")}</a>
                            <a href="" className="nav-link">{t("nav.cabanas")}</a>
                            <a href="" className="nav-link">{t("nav.dining")}</a>
                            <a href="" className="nav-link">{t("nav.activities")}</a>
                            <a href="" className="nav-link">{t("nav.about")}</a>
                            <a href="" className="nav-link">{t("nav.contact")}</a>

                            {/* SOCIAL ICONS ONDERAAN */}
                            <div className="mt-auto flex items-center gap-6 pl-1 pb-10 pt-4">
                                <a
                                    href="https://www.facebook.com/p/Sendang-Redjo-61578290586578/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-red-400 transition"
                                >
                                    <FaFacebookF size={20} />
                                </a>

                                <a
                                    href="https://www.instagram.com/sendangredjo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-red-400 transition"
                                >
                                    <FaInstagram size={22} />
                                </a>

                                <a
                                    href="https://wa.me/5978592337"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-red-400 transition"
                                >
                                    <FaWhatsapp size={22} />
                                </a>
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* DESKTOP NAVBAR (≥1260px) */}
            <div className="hidden xl:grid grid-cols-3 items-center max-w-screen-2xl mx-auto px-8 text-xs xl:text-xs uppercase tracking-widest">
                {/* Left links */}
                <ul className="flex justify-start gap-10 px-10 xl:px-20">
                    <li><a href="" className="nav-link">{t("nav.home")}</a></li>
                    <li><a href="" className="nav-link">{t("nav.cabanas")}</a></li>
                    <li><a href="" className="nav-link">{t("nav.dining")}</a></li>
                    <li><a href="" className="nav-link">{t("nav.activities")}</a></li>
                </ul>

                {/* Logo */}
                <div className="flex justify-center">
                    <img
                        src={isScrolled ? logoDark : logoWhite}
                        alt="sendang resort logo"
                        className="h-20 w-auto"
                    />
                </div>

                {/* Right links */}
                <div className="flex justify-end gap-8 px-[20%] items-center">
                    <ul className="flex items-center gap-10">
                        <li><a className="nav-link " href="">{t("nav.about")}</a></li>
                        <li><a className="nav-link" href="">{t("nav.contact")}</a></li>
                    </ul>
                    <button className="bg-sky-900 px-6 py-3 uppercase tracking-widest hover:bg-red-400 text-white transition-all cursor-pointer">
                        {t("nav.book")}
                    </button>
                    <LanguageSwitcher isScrolled={isScrolled} />
                </div>
            </div>
        </nav>
    );
}
