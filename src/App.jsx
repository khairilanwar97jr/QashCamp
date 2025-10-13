import Navbar from "./components/Navbar";
import "./index.css";
import { Link } from "react-router-dom";
import Banner from "./components/Banner";

export default function App() {
    const bookings = [
    { name: "Ali Bin Ahmad", startDate: "2025-10-20", endDate: "2025-10-22", location: "Taman Negara" },
    { name: "Sara Lim", startDate: "2025-10-25", endDate: "2025-10-27", location: "Gunung Ledang" },
    { name: "Mika Tan", startDate: "2025-11-01", endDate: "2025-11-03", location: "Janda Baik" },
  ];
  return (
    
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
        <div>
      <Banner />
      {/* other content like your packages and booking table */}
    </div>
      {/* Hero Section */}
      <div className="text-center mt-10 px-4">
        <h1 className="text-5xl font-bold text-red-500">Welcome to Kaiso Camp 🏕️</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your next adventure starts here.
        </p>
      </div>

      {/* Packages Section */}
      <section className="mt-16 px-6 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Package A */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
          <h2 className="text-xl font-semibold mb-2">🏕️ Package A</h2>
          <p className="text-gray-600 mb-4">Not available</p>
          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed">
            Unavailable
          </button>
        </div>

        {/* Package B */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
          <h2 className="text-xl font-semibold mb-2">🔥 Package B</h2>
          <p className="text-gray-600 mb-2">Available</p>
          <p className="text-gray-700 mb-4">
            Tent size: 210cm x 320cm<br />Height: 180cm
          </p>
          <div className="space-y-2">
            <p>RM110 - 2 days 1 night</p>
            <p>RM150 - 3 days 2 nights</p>
          </div>
          <Link to="/booking">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">
              Book Now
            </button>
          </Link>
        </div>
      </section>
      
           {/* Booking Details Table */}
      <div className="mt-16 mx-auto max-w-4xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">📋 Booking Details</h2>
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Start Date</th>
              <th className="py-2 px-4 border">End Date</th>
              <th className="py-2 px-4 border">Location</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, index) => (
              <tr key={index} className="text-center hover:bg-green-50">
                <td className="py-2 px-4 border">{b.name}</td>
                <td className="py-2 px-4 border">{b.startDate}</td>
                <td className="py-2 px-4 border">{b.endDate}</td>
                <td className="py-2 px-4 border">{b.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Footer */}
      <footer className="text-center mt-16 py-6 text-gray-500 border-t">
        © 2025 Kaiso Camp. All rights reserved.
      </footer>
    </div>
  );
}
