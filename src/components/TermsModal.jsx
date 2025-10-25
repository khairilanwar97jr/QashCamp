export default function TermsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">📜 Terms & Conditions</h2>
        <div className="text-gray-700 text-sm space-y-2">
          <p>1. The renter is responsible for all equipment during the rental period.</p>
          <p>2. Any loss, damage, or theft of items will require full compensation.</p>
          <p>3. A security deposit must be paid before the start of the camping period.</p>
          <p>4. Refunds are not available for early termination or cancellation unless otherwise agreed.</p>
          <p>5. Kaiso Camp is not liable for personal injuries or accidents during the camping activity.</p>
          <p>6. All renters must follow camp rules and safety guidelines.</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
