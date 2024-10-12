"use client";
import { useState } from 'react';
import "tailwindcss/tailwind.css";

const ConfirmationComponent = () => {
  const [submitted, setSubmitted] = useState(null);

  const handleResponse = (response) => {
    setSubmitted(response);
    if (response === 'yes') {
      window.location.href = "https://forms.gle/ohEG2zF6mvJnoUyDA";
    } else {
      window.location.href = "https://forms.gle/Q8hGhw5RkGpwwj949";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 text-center">
        Did you submit your paper and received an acceptance mail?
      </h2>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
        <button
          className="bg-blue-600 text-white border px-16 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
          onClick={() => handleResponse('yes')}
        >
          Yes
        </button>
        <button
          className="bg-white text-black border border-black px-16 py-3 rounded-lg shadow hover:bg-red-700 transition duration-200 w-full sm:w-auto"
          onClick={() => handleResponse('no')}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmationComponent;
