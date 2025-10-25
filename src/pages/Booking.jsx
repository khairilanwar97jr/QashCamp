import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import AddOnModal from "../components/AddOnModal";
import TermsModal from "../components/TermsModal";

import packageAImg from "../assets/packageA.jpg";
import packageBImg from "../assets/packageB.jpg";

import ZoomOnHover from "../components/ZoomOnHover"; // import the new component


export default function Booking() {
  const location = useLocation();
  const selectedPackage = location.state?.package; // "A" or "B"
  const packageImg =
    selectedPackage === "A" ? packageAImg : selectedPackage === "B" ? packageBImg : null;

  const [showModal, setShowModal] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [showTerms, setShowTerms] = useState(false);
  const [agreed, setAgreed] = useState(false);



  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  // Callback from Add-On modal
  const handleSaveAddOns = (addons) => {
    setSelectedAddOns(addons);
    setShowModal(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    console.log("Booking submitted:", { selectedAddOns, agreed, selectedPackage });
    alert("Booking submitted successfully!");
  };

  return (
    <>
      <Navbar />




      {/* Full-width Header Section */}
      <div className="w-full bg-green-50/80 backdrop-blur-md py-12 mb-8 flex flex-col items-center shadow-md">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-4 drop-shadow-md">
          📝 Book Your Camping Package
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center px-4">
          Please fill in your details below and get ready for an amazing adventure!
        </p>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 text-gray-800 py-10 flex justify-center items-start gap-10 px-4">



        {/* Left : Booking Form */}
        <form
          className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          {/* First & Last Name */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Address Line 1"
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
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

          {/* Contact Info */}
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* ID Number */}
          <input
            type="text"
            placeholder="ID Number"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Date Range */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Camping Date:</label>
            <div className="flex gap-2">
              <input
                type="date"
                className="border p-2 w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="date"
                className="border p-2 w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          </div>

          {/* Where to Camp */}
          <input
            type="text"
            placeholder="Where to Camp"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Add-On Button */}
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition w-full"
          >
            Choose Add-On
          </button>

          {/* Selected Add-Ons Summary */}
          {selectedAddOns.length > 0 && (
            <div className="bg-green-50 p-3 rounded-md text-sm">
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold">Selected Add-Ons:</p>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </button>
              </div>
              <ul className="list-disc pl-5">
                {selectedAddOns.map((a) => (
                  <li key={a.id}>
                    {a.name} (RM{a.price})
                  </li>
                ))}
              </ul>
            </div>
          )}


        </form>

        {/* right: Package Image */}
        <div className="flex flex-col gap-4">
          {/* Package Image */}
          {packageImg && <ZoomOnHover src={packageImg} width={500} height={300} />}

          {/* Summary under the image */}
          <div className="bg-white shadow-lg rounded-xl p-4 w-[500px]">
            <h2 className="text-lg font-semibold mb-2">🛒 Booking Summary</h2>

            {/* Package Info */}
            <p className="font-medium">Package: {selectedPackage === "A" ? "Package A" : "Package B"}</p>
            <p>Price (1 day): RM110</p>

            {/* Add-Ons */}
            {selectedAddOns.length > 0 ? (
              <div className="mt-2">
                <p className="font-medium">Add-Ons:</p>
                <ul className="list-disc pl-5">
                  {selectedAddOns.map((a) => (
                    <li key={a.id}>
                      {a.name} (RM{a.price})
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-2 text-gray-500 text-sm">No add-ons selected</p>
            )}

            {/* Total Price */}
            <div className="mt-4 border-t pt-2 font-semibold">
              Total: RM{110 + selectedAddOns.reduce((sum, a) => sum + a.price, 0)}
            </div>
            {/* Terms & Submit Row */}
            <div className="flex items-center justify-between mt-2">
              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  id="agree"
                  className="w-4 h-4 accent-green-600"
                  required
                />
                <label htmlFor="agree" className="text-sm text-gray-700">
                  I agree to the
                  <button
                    type="button"
                    onClick={() => setShowTerms(true)}
                    className="text-blue-600 hover:underline ml-1"
                  >
                    Terms & Conditions
                  </button>
                </label>
              </div>

              {/* Submit Button on the same line */}
              <button
                type="submit"
                disabled={!agreed}
                className={`bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition ${!agreed ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Submit Booking
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* Add-On Modal */}
      {showModal && (
        <AddOnModal
          selected={selectedAddOns}
          onClose={() => setShowModal(false)}
          onSave={handleSaveAddOns}
        />
      )}

      {/* Terms & Conditions Modal */}
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}

    </>
  );
}
