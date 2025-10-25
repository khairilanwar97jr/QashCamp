import { useState } from "react";

export default function ZoomOnHover({ src, width = 500, height = 300, zoom = 2 }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setPos({ x, y });
  };

  return (
    <div className="relative inline-block">
      {/* Original Image */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg"
        style={{ width: `${width}px`, height: `${height}px` }}
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
      {hover && (
        <div
          className="fixed border rounded-xl shadow-lg overflow-hidden"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${width * zoom}px ${height * zoom}px`,
            backgroundPosition: `${pos.x * 100 * (zoom - 1)}% ${pos.y * 100 * (zoom - 1)}%`,
            pointerEvents: "none",
            zIndex: 9999,
            top: `${window.scrollY + pos.y * height}px`,
            left: `${window.innerWidth / 2 + width / 2 + 20}px`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      )}
    </div>
  );
}
