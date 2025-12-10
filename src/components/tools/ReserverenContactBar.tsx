import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ReserverenContactBar() {
    const { t } = useTranslation();

    return (
        <div>
            {/* 📱 Mobiele onderbalk – zichtbaar onder 1260px */}
            <div className="fixed bottom-0 left-0 w-full bg-white text-white py-6 px-6 grid grid-cols-2 flex justify-around items-center lg:hidden z-50 backdrop-blur-md uppercase">
                <button className="absolute bg-sky-900 w-[50%] h-full uppercase tracking-widest text-xs cursor-pointer hover:bg-red-400">
                    <Link to="reserveren">{t("nav.book")}</Link>
                </button>
                <button className="absolute bg-white w-[50%] right-0 h-full py-2 uppercase tracking-widest text-xs text-black cursor-pointer hover:bg-white hover:text-orange-600 transition">
                    <Link to="contact">{t("nav.contact")}</Link>
                </button>
            </div>
        </div>
    )
}