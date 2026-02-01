import { useEffect, useRef, useState } from "react";

export default function LensCompare({ imgLeft, imgRight }) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  // 🔹 AUTO ANIMATION ON FIRST LOAD
  useEffect(() => {
    let dir = 1;
    const interval = setInterval(() => {
      setPos((p) => {
        if (p >= 70) dir = -1;
        if (p <= 30) dir = 1;
        return p + dir;
      });
    }, 25);

    const stop = setTimeout(() => clearInterval(interval), 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(stop);
    };
  }, []);

  // 🔹 POSITION CALCULATION
  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setPos(percent);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl mx-auto aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 select-none touch-none"
      onMouseMove={(e) => dragging && updatePosition(e.clientX)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={(e) => dragging && updatePosition(e.touches[0].clientX)}
      onTouchEnd={() => setDragging(false)}
    >
      {/* RIGHT IMAGE (BASE) */}
      <img
        src="/img7.png"
        alt="Right Lens"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* LEFT IMAGE (CLIPPED) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${pos}%` }}
      >
        <img
          src="/img8.png"
          alt="Left Lens"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* DIVIDER LINE */}
      <div className="absolute top-0 h-full" style={{ left: `${pos}%` }}>
        <div className="w-[2px] h-full bg-white/90" />
      </div>

      {/* SLIDER HANDLE */}
      <div
        className="absolute top-1/2 -translate-y-1/2 z-10 cursor-ew-resize"
        style={{ left: `${pos}%` }}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
      >
        <div className="w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center -ml-4">
          <span className="text-xs font-bold text-gray-700">|||</span>
        </div>
      </div>
    </div>
  );
}
