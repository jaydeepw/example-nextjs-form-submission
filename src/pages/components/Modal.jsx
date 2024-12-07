import { useState } from "react";

export default function Modal({ data }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Submission Successful!</h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Full Name:</span> {data.fullName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {data.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span>{" "}
            {data.phone || "Not provided"}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}
