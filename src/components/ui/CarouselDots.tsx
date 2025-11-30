type CarouselDotsProps = {
    total: number;
    current: number;
    onSelect: (index: number) => void;
    className?: string;
}

export default function CarouselDots({
    total,
    current,
    onSelect,
    className = "", }: CarouselDotsProps) {
    return (
        <div className={`flex justify-center mt-4 mb-3 space-x-4 md:space-x-8 ${className}`}>
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onSelect(i)}
                    className={`w-1.5 h-1.5 transition-all duration-300 
            ${current === i ? "bg-black scale-125 shadow-md" : "bg-gray-300"}`}
                />
            ))}
        </div>
    );
}

