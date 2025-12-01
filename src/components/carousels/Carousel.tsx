import { useEffect, useRef, useState } from "react";
import CarouselArrow from "../ui/CarouselArrow";
import ImageModal from "../ui/ImageModal";

type CarouselProps = {
  images: string[];
  slidesPerViewDesktop?: number;
  slidesPerViewMobile?: number;
  gap?: number;
  showModal?: boolean;
  height?: string;
};

export default function Carousel({
  images,
  slidesPerViewDesktop = 2,
  slidesPerViewMobile = 1,
  gap = 16,
  showModal = true,
  height = "280px",
}: CarouselProps) {

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  // ❗ Start op index 1, want loopImages = [last, ...real..., first]
  const [index, setIndex] = useState(1);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Clone images for infinite loop
  const loopImages = [images[images.length - 1], ...images, images[0]];
  const realCount = images.length;

  // Resize
  useEffect(() => {
    const resize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (wrapperRef.current) {
        setContainerWidth(wrapperRef.current.offsetWidth);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const slidesPerView = isDesktop ? slidesPerViewDesktop : slidesPerViewMobile;

  const slideWidth = containerWidth
    ? (containerWidth - gap * (slidesPerView - 1)) / slidesPerView
    : 0;

  const effectiveSlideWidth =
    slidesPerView === 1 ? window.innerWidth : slideWidth;

  const step = effectiveSlideWidth + gap;

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => prev - 1);

  // 🔥 PERFECT SMOOTH TELEPORT METHOD
  useEffect(() => {
    if (index === 0) {
      // Teleport to last real slide but OFFSCREEN
      const offscreenX = -(realCount * step);

      wrapperRef.current!.style.transition = "none";
      wrapperRef.current!.style.transform = `translateX(${offscreenX}px)`;

      requestAnimationFrame(() => {
        wrapperRef.current!.style.transition = "transform 0.35s ease";
        setIndex(realCount);
      });
    }

    if (index === realCount + 1) {
      // Teleport to first slide but OFFSCREEN
      const offscreenX = -(1 * step);

      wrapperRef.current!.style.transition = "none";
      wrapperRef.current!.style.transform = `translateX(${offscreenX}px)`;

      requestAnimationFrame(() => {
        wrapperRef.current!.style.transition = "transform 0.35s ease";
        setIndex(1);
      });
    }
  }, [index, realCount, step]);

  const effectiveHeight = isDesktop ? "480px" : height;


  return (
    <div className="relative w-full overflow-hidden" style={{ height: effectiveHeight }}>

      <CarouselArrow direction="left" onClick={handlePrev} />
      <CarouselArrow direction="right" onClick={handleNext} />

      <div className="h-full overflow-hidden">
        {/* Outer wrapper — we animate THIS ONLY */}
        <div
          ref={wrapperRef}
          className="flex h-full items-center"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${index * step}px)`,
            transition: "transform 0.35s ease",
          }}
        >
          {loopImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-full cursor-pointer"
              style={{
                width: effectiveSlideWidth ? `${effectiveSlideWidth}px` : "100%",
              }}
              onClick={() => showModal && setSelectedImage(src)}
            >
              <img
                src={src}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}
