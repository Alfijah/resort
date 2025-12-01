import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CarouselArrow from "../ui/CarouselArrow";
import CarouselDots from "../ui/CarouselDots";
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
}: CarouselProps) {

  const containerRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerView = isDesktop ? slidesPerViewDesktop : slidesPerViewMobile;

  const slideWidth = containerWidth
    ? (containerWidth - gap * (slidesPerView - 1)) / slidesPerView
    : 0;

  const maxIndex = Math.max(0, images.length - slidesPerView);

  useEffect(() => {
    // Beperk index als je resized
    setIndex(prev => Math.min(prev, maxIndex));
  }, [maxIndex]);

  return (
    <>
      <>
        {/* Arrows */}
        <CarouselArrow direction="left" onClick={() => setIndex(prev => Math.max(prev - 1, 0))} />
        <CarouselArrow direction="right" onClick={() => setIndex(prev => Math.min(prev + 1, maxIndex))} />
      </>

      {/* SLIDE WRAPPER */}
      <motion.div ref={containerRef} className="h-full">
        <motion.div
          className="flex gap-4 h-full items-center"
          style={{ touchAction: "pan-y" }}
          drag="x"
          dragElastic={0.04}
          dragConstraints={{
            left: -slideWidth * maxIndex - gap * maxIndex,
            right: 0,
          }}
          onDragEnd={(_event, info) => {
            if (!slideWidth) return;

            const swipe = -(info.offset.x + info.velocity.x * 0.2);
            const target = index + swipe / (slideWidth + gap);
            const next = Math.min(Math.max(Math.round(target), 0), maxIndex);

            setIndex(next);
          }}
          animate={{ x: -(index * (slideWidth + gap)) }}
          transition={{ type: "spring", stiffness: 260, damping: 32 }}
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 h-full cursor-pointer"
              style={{ width: slideWidth ? `${slideWidth}px` : slidesPerView === 2 ? "50%" : "100%" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => showModal && setSelectedImage(src)}
            >
              <div className="relative w-full h-full overflow-hidden shadow-lg">
                <img
                  src={src}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={`Slide ${i}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* DOTS */}
      <CarouselDots
        total={maxIndex + 1}
        current={index}
        onSelect={setIndex}
      />

      {/* MODAL */}
      {showModal && selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
}
