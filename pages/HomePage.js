"use client";

import React from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const fromSubmit = () => {
    window.location.href = "https://forms.gle/Q8hGhw5RkGpwwj949";
  };

  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center relative overflow-hidden bg-gray-200 px-4">
      <div className="relative z-10 text-center w-full">
        {/* Full-width main title */}
        <h1 className="text-black mb-2 text-4xl sm:text-6xl font-bold w-full">
          Welcome to
        </h1>
        
        <h1
          className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-600 mb-4 leading-tight w-full"
          style={{ letterSpacing: "-1.5px" }}
        >
          International Conference on Recent Trends in Computing and
          Communication Technologies -{" "}
          <span className="text-black hover:text-blue-600 transition-all duration-300">
            ICRCCT 2k24.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mb-4">
          {/* Optional description can go here */}
        </p>
        
        <div className="buttondiv flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button
            className="w-full sm:w-auto px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-500"
            onClick={fromSubmit}
          >
            Submit Paper
          </button>
          <button
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full hover:border hover:border-blue-600 hover:bg-transparent hover:text-blue-600 hover:scale-110 transition-all duration-500"
            onClick={() => router.push("/Mediator")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
