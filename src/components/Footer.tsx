import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logoWhite from "../assets/logo/logo_sendang_wit.png";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="relative w-full py-14 px-8"
      style={{ backgroundColor: "#b39b75ff" }}
    >
      {/* TOP GRID */}
      <div className="ctaSection max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-white">

        {/* LEFT COLUMN — Logo + Location */}
        <div className="flex flex-col items-start">
          <img
            src={logoWhite}
            alt="Sendang Redjo logo"
            className="h-16 sm:h-20 w-auto mb-4"
          />

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
            <span>{t("footer.locationText")}</span>
          </a>
        </div>

        {/* RIGHT COLUMN — Contact + Socials */}
        <div className="flex flex-col items-start">
          <h3 className="location-heading uppercase mb-4">
            {t("footer.contactTitle")}
          </h3>

          {/* Email */}
          <p className="text-sm opacity-90">
            <span className="body-text">{t("footer.email")}:</span>{" "}
            <a
              href="mailto:info@sendangredjo.sr"
              className="body-text"
            >
              info@sendangredjo.sr
            </a>
          </p>

          {/* Phone */}
          <p className="body-text mt-2">
            <span className="">{t("footer.phone")}:</span>{" "}
            <a
              href="https://wa.me/597000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              +597 000000
            </a>
          </p>

          {/* WhatsApp note */}
          <p className="body-text italic mt-1">
            {t("footer.whatsappOnly")}
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6 mt-6">
            <a
              href="#"
              target="_blank"
              className="hover:text-red-400 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
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
      <div className="text-center text-white text-sm tracking-wide leading-relaxed">
        &copy; {new Date().getFullYear()} Sendang Redjo — {t("footer.builtBy")}
      </div>
    </footer>
  );
}
