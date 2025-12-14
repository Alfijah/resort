import { useEffect, useRef, useState } from "react";
import { BsGripVertical } from "react-icons/bs";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  className?: string;
};

export default function BeforeAfterSlider({
  before,
  after,
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const [position, setPosition] = useState(80);

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    let x = ((clientX - rect.left) / rect.width) * 100;
    x = Math.max(5, Math.min(95, x));
    setPosition(x);
  };

  /* HANDLERS – zelfde als eerder */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      updatePosition(e.clientX);
    };
    const moveTouch = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      if (e.touches[0]) updatePosition(e.touches[0].clientX);
    };
    const up = () => (isDraggingRef.current = false);

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", moveTouch);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", moveTouch);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const startDrag = (clientX: number) => {
    isDraggingRef.current = true;
    updatePosition(clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none touch-none ${className}`}
      onMouseDown={(e) => startDrag(e.clientX)}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
    >
      {/* BEFORE - absolute, fixed, NIET in een masker, beweegt nooit */}
      <img
        src={before}
        alt="before"
        className="absolute inset-0 w-full h-full object-cover object-left pointer-events-none"
        style={{ zIndex: 1 }}  // onderlaag
      />

      {/* AFTER - gemaskerd door width%, blijft op één vaste plek */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%`, zIndex: 2 }}
      >
        <img
          src={after}
          alt="after"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* SLIDER + HANDLE */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/90" />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full h-10 w-10 flex 
          items-center justify-center cursor-pointer border border-white/60">
          <BsGripVertical className="text-sky-900 text-xl" />
        </div>
      </div>
    </div>
  );
}
