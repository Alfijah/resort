import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../../assets/icons/arrowWhite.png"
import icon2 from "../../assets/icons/arrowBlack.png"

interface LanguageDropdownProps {
  isScrolled: boolean;
}

export default function LanguageSwitcher({ isScrolled }: LanguageDropdownProps) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const languages = [
    { code: "nl", label: "Nederlands" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "pt", label: "Português" }
  ];

  const currentLang = i18n.language.slice(0, 2);

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
  function handleClickOutside(event: MouseEvent | TouchEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  }

  if (open) {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
  };
}, [open]);

  return (
    <div ref={dropdownRef} className="relative mb-4 lg:mb-0">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 lg:w-12 h-8 md:h-9 rounded-md uppercase tracking-widest transition-all cursor-pointer text-xs
                    ${isScrolled ? "text-black" : "text-white"}
                `}
      >
        <span>{currentLang.toUpperCase()}</span>

        {/* ROTATING ICON */}
        <motion.div
          animate={{ rotate: open ? -180 : 0 }}
          transition={{ stiffness: 300, damping: 15 }}
        >
          <img src={isScrolled ? icon2 : icon}
            alt="Language"
            className="w-4 h-6 mb-1 md:w-5 md:h-6 cursor-pointer" />
        </motion.div>
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-0 mt-2 w-40 rounded-md shadow-xl z-50 py-2
                            ${isScrolled ? "bg-white text-black" : "bg-black/20 text-white"}
                        `}
          >
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleChange(lang.code)}
                  className={`w-full text-left px-4 py-2 hover:bg-black/20 hover:text-red-400 transition-all cursor-pointer uppercase text-xs font-bold
                                        ${currentLang === lang.code ? "font-bold text-red-400" : ""}
                                    `}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
