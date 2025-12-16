type CarouselArrowProps = {
    direction: "left" | "right";
    onClick: () => void;
    className?: string;
}

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CarouselArrow({
    direction,
    onClick,
    className = "", }: CarouselArrowProps) {
    const Icon = direction === "left" ? FiChevronLeft : FiChevronRight;

    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-1/2 z-30
        bg-black/25 hover:bg-white/90 hover:text-black text-white 
        p-2 shadow-md border border-white/70 transition-colors
        ${direction === "left" ? "left-5" : "right-5"}
        ${className}`}
        >
            <Icon size={28} strokeWidth={1.5} />
        </button>
    );
}
