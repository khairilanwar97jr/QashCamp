export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Kaiso Camp 🏕️</h1>
      <div className="space-x-6">
        <a href="/" className="hover:text-yellow-300 transition">Home</a>
        <a href="/" className="hover:text-yellow-300 transition">Contact</a>
        <a href="/" className="hover:text-yellow-300 transition">Details</a>
        <a href="/" className="hover:text-yellow-300 transition">Booking</a>
      </div>
    </nav>
  );
}
