import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Escape to Nature 🌲
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto drop-shadow">
          Discover peace and adventure with our cozy camping packages. Your next
          outdoor getaway starts here.
        </p>
        <Link
          to="/booking"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
