import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { RxCross1 } from "react-icons/rx";
import logoWhite from "../assets/logo/logo_sendang_wit.png";
import logoDark from "../assets/logo/logo_sendang_donker.png";

export default function Navbar() {
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
            className={`w-full py-1 fixed z-50 transition-all duration-300 
      ${isScrolled ? "bg-white text-black shadow-md" : "text-white"}`}
        >
            {/* MOBILE / TABLET / SMALL LAPTOP (tot <1260px) */}
            <div className="flex items-center justify-between px-6 xl:hidden">
                {/* Hamburger */}
                <button onClick={() => { setIsMenuOpen(true); setIsClosing(false); }} className="text-3xl">
                    ☰
                </button>

                {/* Logo */}
                <img
                    src={isScrolled ? logoDark : logoWhite}
                    alt="Taman Logo"
                    className="h-22"
                />

                {/* Leeg voor alignment (Reserveren zit in menu) */}
                <div className="w-8" />
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
                            className={`fixed top-0 left-0 w-60 h-full xl:hidden flex flex-col 
        items-start space-y-4 py-6 pl-6 pt-8 text-xs uppercase tracking-widest
        ${isScrolled ? "bg-white text-black" : "bg-white text-black"} z-50`}
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <button
                                className="absolute top-4 right-4 text-black text-xl cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <RxCross1 />
                            </button>

                            {/* Existing menu links — exact jouw code */}
                            <a href="">Home</a>
                            <a href="">Cabanas</a>
                            <a href="">Dining</a>
                            <a href="">Activiteiten</a>
                            <a href="">Over Ons</a>
                            <a href="">Contact</a>
                            <a href="">Tarieven</a>

                            <button className="bg-sky-900 text-white px-6 py-2 rounded-sm uppercase hover:bg-sky-800">
                                Reserveren
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* DESKTOP NAVBAR (≥1260px) */}
            <div className="hidden xl:grid grid-cols-3 items-center text-xs uppercase tracking-widest">
                {/* Left links */}
                <ul className="flex justify-start gap-8 px-[20%]">
                    <li><a href="">Home</a></li>
                    <li><a href="">Cabanas</a></li>
                    <li><a href="">Dining</a></li>
                    <li><a href="">Activiteiten</a></li>
                </ul>

                {/* Logo */}
                <div className="flex justify-center">
                    <img
                        src={isScrolled ? logoDark : logoWhite}
                        alt="sendang resort logo"
                        className="h-27 w-auto"
                    />
                </div>

                {/* Right links */}
                <div className="flex justify-end gap-8 px-[20%] items-center">
                    <ul className="flex items-center gap-8">
                        <li><a className="whitespace-nowrap" href="">Over Ons</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Tarieven</a></li>
                    </ul>
                    <button className="bg-sky-900 px-6 py-4 uppercase tracking-widest hover:bg-sky-800 text-white cursor-pointer">
                        Reserveren
                    </button>
                </div>
            </div>
        </nav>
    );
}
