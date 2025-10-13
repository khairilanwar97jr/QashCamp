import Navbar from "../components/Navbar";

export default function Booking() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-200 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">📝 Book Your Camping Package</h1>
        <p className="text-lg mb-6">Please fill in your details below.</p>

        <form className="bg-white shadow-lg rounded-xl p-8 w-96 flex flex-col gap-4">
          {/* First & Last Name */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Address Line 1"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* ID Number */}
          <input
            type="text"
            placeholder="ID Number"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Date Range */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Camping Date:</label>
            <div className="flex gap-2">
              <input
                type="date"
                className="border p-2 w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="date"
                className="border p-2 w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          {/* Where to Camp */}
          <input
            type="text"
            placeholder="Where to Camp"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </>
  );
}
