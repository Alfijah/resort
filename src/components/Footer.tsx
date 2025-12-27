import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logoWhite from "../assets/logo/logo_sendang_wit.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import WhatsApp from "./tools/Whatsapp";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="relative w-full py-14 px-6 sm:px-8"
      style={{ backgroundColor: "#b39b75ff" }}
    >
      {/* TOP GRID */}
      <div className="ctaSection max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-white">

        {/* LEFT COLUMN — Logo + Location */}
        <div className="flex flex-col items-start lg:pl-8">
          <Link to=""><img
            src={logoWhite}
            alt="Sendang Redjo logo"
            className="h-14 w-24 mb-4 -ml-4"
          /></Link>

          <p className="location-heading uppercase text-white">
            {t("footer.locationTitle")}
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Sendang+Redjo+Suriname"
            target="_blank"
            rel="noopener noreferrer"
            className="body-text flex items-center gap-2"
          >
            <HiOutlineLocationMarker size={18} className="text-white" />
            <u><span>{t("footer.locationText")}</span></u>
          </a>
        </div>

        {/* RIGHT COLUMN — Contact + Socials */}
        <div className="flex flex-col items-start">
          <h3 className="location-heading uppercase mb-4">
            {t("footer.contactTitle")}
          </h3>

          {/* Email */}
          <p className="">
            <span className="body-text">{t("footer.email")}:</span>{" "}
            <a
              className="body-text"
            >
              info@tukunari-experience.com
            </a>
          </p>

          {/* Phone */}
          <WhatsApp />

          {/* WhatsApp note */}
          <p className="body-text italic mt-1">
            {t("footer.whatsappOnly")}
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6 mt-6">
            <a
              href="https://www.facebook.com/p/Sendang-Redjo-61578290586578/"
              target="_blank"
              className="hover:text-red-400 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/sendangredjo/"
              target="_blank"
              className="hover:text-red-400 transition"
            >
              <FaInstagram size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* HORIZONTAL LINE */}
      <div className="w-full h-px bg-white/50 my-4"></div>

      {/* BOTTOM CREDITS */}
      <div className="text-center text-white text-xs lg:-mb-10 tracking-wide leading-relaxed">
        &copy; {new Date().getFullYear()} Sendang Redjo — {t("footer.builtBy")} 
        <span><a href="https://nl.linkedin.com/in/alfijah-sarban" className="hover:text-underline">alfijah.sarban.</a></span>
      </div>
    </footer>
  );
}
