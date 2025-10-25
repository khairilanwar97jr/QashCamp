import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] flex flex-col justify-center items-center text-white text-center overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

      {/* Content */}
      <div className="relative z-30 px-4">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Escape to Nature 🌲
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto drop-shadow">
          Discover peace and adventure with our cozy camping packages. Your next
          outdoor getaway starts here.
        </p>
<button
  onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById("hero");
    if (element) {
      const yOffset = -64; // adjust based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }}
  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
>
  Book Now
</button>
      </div>
    </div>
  );
}
