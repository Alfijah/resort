import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./tools/LanguageSwitcher";
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
            <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:hidden">
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
                <Link to="">
                    <img
                        src={isScrolled ? logoDark : logoWhite}
                        alt="Taman Logo"
                        className="h-14 w-auto transition-all duration-300" /></Link>

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
                            className={`fixed top-0 left-0 w-64 h-full lg:hidden flex flex-col items-start space-y-6 py-8 pl-8 pt-10 text-sm uppercase tracking-wider bg-white text-black shadow-lg z-50 will-change-transform`}
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
                            <Link to="" className="nav-link menu" onClick={() => setIsMenuOpen(false)}>{t("nav.home")}</Link>
                            <Link to="/cabanas" className="nav-link menu" onClick={() => setIsMenuOpen(false)}>{t("nav.cabanas")}</Link>
                            <Link to="/dining" className="nav-link menu" onClick={() => setIsMenuOpen(false)}>{t("nav.dining")}</Link>
                            <Link to="/activiteiten" className="nav-link menu" onClick={() => setIsMenuOpen(false)}>{t("nav.activities")}</Link>
                            <Link to="/about" className="nav-link menu" onClick={() => setIsMenuOpen(false)}>{t("nav.about")}</Link>
                            <Link className="nav-link menu" to="/contact" onClick={() => setIsMenuOpen(false)}>{t("nav.contact")}</Link>
                            <Link className="nav-link menu" to="/reserveren" onClick={() => setIsMenuOpen(false)}>{t("nav.book")}</Link>

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
            <div className="hidden lg:grid grid-cols-3 items-center max-w-screen-2xl mx-auto lg:px-16 text-xs uppercase tracking-widest">
                {/* Left links */}
                <ul className="flex justify-end gap-8 xl:px-20">
                    <li><Link to="" className="nav-link">{t("nav.home")}</Link></li>
                    <li><Link to="/cabanas" className="nav-link">{t("nav.cabanas")}</Link></li>
                    <li><Link to="/dining" className="nav-link">{t("nav.dining")}</Link></li>
                    <li><Link to="/activiteiten" className="nav-link">{t("nav.activities")}</Link></li>
                </ul>

                {/* Logo */}
                <div className="flex justify-center">
                    <Link to=""><img
                        src={isScrolled ? logoDark : logoWhite}
                        alt="sendang resort logo"
                        className="h-14 w-auto"
                    /></Link>
                </div>

                {/* Right links */}
                <div className="flex justify-end gap-8 items-center">
                    <ul className="flex items-center gap-10">
                        <li><Link className="nav-link " to="/about">{t("nav.about")}</Link></li>
                        <li><Link className="nav-link" to="/contact">{t("nav.contact")}</Link></li>
                    </ul>
                    <button className="customGreen px-6 py-3 uppercase tracking-widest hover:bg-red-400 text-white transition-all cursor-pointer">
                        <Link className="nav-link " to="/reserveren">{t("nav.book")}</Link>
                    </button>
                    <LanguageSwitcher isScrolled={isScrolled} />
                </div>
            </div>
        </nav>
    );
}
