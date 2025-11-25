import { useState, useRef, useEffect } from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import img1 from "../assets//cabanaSection/cab1.jpg"
import img2 from "../assets/cabanaSection/cab2.jpg"
import img3 from "../assets/cabanaSection/cab3.jpg"
import img4 from "../assets/cabanaSection/cab4.jpg"
import img5 from "../assets/cabanaSection/cab5.jpg"
import img6 from "../assets/cabanaSection/cab6.jpg"
import FadeInSection from "./FadeInsection";

export default function CabanaSection() {
    const images = [img1, img2, img3, img4, img5, img6];

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const totalSlides = images.length;
    const slideIntervalRef = useRef<number | null>(null);

    const goToSlide = (index: number) => {
        if (!sliderRef.current) return; // voorkomt null errors

        const slideWidth =
            sliderRef.current.children[0].clientWidth || 0;

        sliderRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // const resetAutoSlide = () => {
    //     if (slideIntervalRef.current) {
    //         clearInterval(slideIntervalRef.current);
    //     }
    //     slideIntervalRef.current = window.setInterval(nextSlide, 3000);
    // };

    // // Handle automatic slide
    // useEffect(() => {
    //     slideIntervalRef.current = setInterval(nextSlide, 3000);
    //     return () => {
    //         if (slideIntervalRef.current !== null) {
    //             clearInterval(slideIntervalRef.current);
    //         }
    //     };
    // }, []);

    // Handle slide transform when currentSlide changes
    useEffect(() => {
        goToSlide(currentSlide);
    }, [currentSlide]);

    // Handle resizing
    useEffect(() => {
        const handleResize = () => goToSlide(currentSlide);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentSlide]);

    return (
        <FadeInSection>
            <div className="w-full relative flex flex-row py-2 md:py-4 xl:py-10 text-center tracking-wide">
                <div className="flex flex-col">
                    <h1 className="md:text-xl xl:text-2xl px-[10%] xl:px-[12%]">Cabanas</h1>
                    <p className="text-xs lg:text-sm xl:text-base pt-8 px-[10%] xl:px-[12%]">Onze exclusieve cabanas zijn ontworpen als jouw privéplek in de natuur. <br /><br />Elke cabana ligt direct aan het water en is voorzien van
                        een luxe outdoor zithoek, een eigen keuken met bar en barkrukken, poolbeds, een hangmat en een moderne douche met warm water en toilet.
                        Kajaks, hengels en luchtmatrassen staan tot je beschikking – of je nu actief het meer op wil, of liever dobbert in stilte.</p>
                </div>

                {/* images */}
                <div className="flex items-center justify-center w-full pt-10 xl:pt-16">
                    {/* Prev Button */}
                    <button
                        onClick={() => {
                            prevSlide();
                            // resetAutoSlide();
                        }}
                        className="md:p-2 text-3xl text-gray-400 md:mr-6 rounded-full hover:bg-black/10"
                    >
                        <RiArrowLeftWideFill />
                    </button>

                    {/* Image Slider */}
                    <div className="w-[75%] xl:w-[70%] h-50 md:h-130 xl:h-180 overflow-hidden flex items-center relative">
                        <div
                            ref={sliderRef}
                            className="flex transition-transform duration-500 ease-in-out"
                        >
                            {images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    className="w-full flex-shrink-0"
                                    alt={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => {
                            nextSlide();
                            // resetAutoSlide();
                        }}
                        className="md:p-2 md:ml-6 text-3xl text-gray-400 rounded-full hover:bg-black/10"
                    >
                        <RiArrowRightWideLine />
                    </button>
                </div>

            </div >
        </FadeInSection>
    )
}