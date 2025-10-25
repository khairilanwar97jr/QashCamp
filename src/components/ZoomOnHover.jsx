import { useState, useRef } from "react";

export default function ZoomOnHover({ src, width = 500, height = 300, zoom = 2 }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 }); // center default
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setPos({ x, y });
  };

  return (
    <div className="relative inline-block" style={{ width, height }} ref={imgRef}>
      {/* Original Image */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg w-full h-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={src}
          alt="Package"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Zoom Window */}
      {hover && imgRef.current && (
        <div
          className="fixed border rounded-xl shadow-lg overflow-hidden"
          style={{
            top: `${pos.y * height + 100}px`,
            left: `${imgRef.current.getBoundingClientRect().right + -300}px`, // 10px to the right of image
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${width * zoom}px auto`, // keep aspect ratio
            backgroundPosition: `${pos.x * 100 * (zoom - 1)}% ${pos.y * 100 * (zoom - 1)}%`,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        ></div>
      )}
    </div>
  );
}
