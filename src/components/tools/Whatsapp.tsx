import { useTranslation } from "react-i18next";

type WhatsAppProps = {
  label?: string; // optioneel → als je geen label geeft, gebruik default
};

export default function WhatsApp({ label }: WhatsAppProps) {
  const { t } = useTranslation();

  const displayLabel = label ?? t("footer.phone");

    return(
        <p className="body-text mt-2">
            <span className="">{displayLabel}:</span>{" "}
            <a
              href="https://wa.me/5978592337"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              +597 8592337
            </a>
          </p>
    )
}