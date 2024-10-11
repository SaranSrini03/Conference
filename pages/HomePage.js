"use client";

import React from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const fromSubmit = () => {
    window.location.href = "https://forms.gle/Q8hGhw5RkGpwwj949";
  };

  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center relative overflow-hidden bg-white">
      <div className="relative z-10 text-center">
        <div className="textContainer flex justify-center p-4 w-75 ml-25 mr-25">
          <h1
            className="text-2xl md:text-5xl font-bold text-blue-600 mb-4 w-25 font-mono leading-tight"
            style={{ letterSpacing: "-1.5px" }}
          >
            International Conference on Recent Trends in Computing and
            Communication Technologies -{" "}
            <span className="text-black hover:text-blue-600 transition-all duration-300">
              ICRCCT 2k24
            </span>
          </h1>
        </div>
        <p className="text-lg text-gray-700 mb-8">
          {/* Optional description can go here */}
        </p>
        <div className="buttondiv flex justify-center gap-10 mt-20">
          <button
            className="px-10 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-500"
            onClick={fromSubmit} // Corrected to onClick
          >
            Submit Paper
          </button>
          <button
            className="px-10 py-3 bg-blue-600 text-white rounded-full hover:border hover:border-blue-600 hover:bg-transparent hover:text-blue-600 hover:scale-110 transition-all duration-500"
            onClick={() => router.push("/Mediator")} // Navigate to the Mediator page
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
