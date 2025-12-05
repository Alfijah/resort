import { useTranslation } from "react-i18next";

export default function ExploreButton(){
    const { t } = useTranslation();

    return(
        <button className="explore-button w-full h-10 border mt-8 md:mt-10 cursor-pointer">
            {t("button.explore")}
        </button>
    )
}