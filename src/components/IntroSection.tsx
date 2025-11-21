import { useState } from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import img1 from "../assets/introSection/lodge1.jpg"
import img2 from "../assets/introSection/lodge1.jpg"
import img3 from "../assets/introSection/lodge1.jpg"
import img4 from "../assets/introSection/lodge1.jpg"
import img5 from "../assets/introSection/img1.png"

export default function IntroSection() {
    const images = [img1, img2, img3, img4, img5];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Volgende foto (infinite scroll)
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    // Vorige foto (infinite scroll)
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
        <div className="w-full relative px-[10%] xl:px-[12%] py-16 text-center tracking-wide">
            <h1 className="xl:text-lg">Waar stilte, natuur en ziel samenkomen</h1>
            <p className="text-xs xl:text-sm pt-8">Op slechts 20 minuten van Paramaribo ligt Sendang Redjo: een exclusief eco retreat en nature sanctuary, gelegen rondom een privémeer in het hart van Tamanredjo. <br /><br />Sendang Redjo is gebouwd op historische grond, maar draagt een tijdloze ziel.
                Wat ooit een oude plantage was, is nu een serene retreat, geworteld in eenvoud, stilte en natuurlijke schoonheid.
                De sfeer ademt Javaanse gastvrijheid: warm, oprecht en ontspannen.</p>

            <div className="relative w-full pt-15 max-w-4xl mx-auto flex justify-center overflow-hidden group">

                {/* Afbeelding */}
                <img
                    src={images[currentIndex]}
                    alt="carousel slide"
                    className="w-[100%] xl:w-[90%] h-50 xl:h-130 object-cover rounded-md shadow-lg transition-all duration-500"
                />

                {/* Linker pijl */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white opacity-80 hover:bg-sky-900 hover:opacity-100 transition"
                >
                    <RiArrowLeftWideFill />
                </button>

                {/* Rechter pijl */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white opacity-80 hover:bg-black hover:opacity-100 transition"
                >
                    <RiArrowRightWideLine />
                </button>

                {/* Bolletjes indicator */}
                <div className="absolute bottom-3 w-full flex justify-center gap-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}