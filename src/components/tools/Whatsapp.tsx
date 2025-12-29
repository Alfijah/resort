import { useTranslation } from "react-i18next";
import { PiWhatsappLogoThin } from "react-icons/pi";

type WhatsAppProps = {
  variant?: "text" | "icon" | "both";
  className?: string;
  iconClassName?: string;
};

export default function WhatsApp({
  variant = "text",
  className = "",
  iconClassName = "",
}: WhatsAppProps) {
  const { t } = useTranslation();

  return (
    <a
      href="https://wa.me/5978592337"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Contact via WhatsApp"
    >
      {(variant === "icon" || variant === "both") && (
        <PiWhatsappLogoThin
          className={`text-sky-900 text-4xl lg:text-5xl ${iconClassName}`}
        />
      )}

      {(variant === "text" || variant === "both") && (
        <span className="body-text">
          {t("footer.phone")}: <u>+597 8592337</u>
        </span>
      )}
    </a>
  );
}
