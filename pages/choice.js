"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";

import Nav from "./Nav"; // Import your Nav component if you have one

const Choice = () => {
  const router = useRouter();

  const handleSubmitPaper = () => {
    window.location.href = "https://forms.gle/Q8hGhw5RkGpwwj949"; // Redirect to the Google Form for paper submission
  };

  const handleSubmitPitchathon = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfTZdnwrFMo1RSsOOPM1eCNIAtfW67e8FjiOFykiY6nFvqYEw/viewform"; // Redirect to the Google Form for pitchathon
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-200 px-4">
      <Nav />
      <section className="flex-grow flex flex-col items-center justify-center text-center font-mono">
        <h1 className="text-black text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Choose an Option.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8">
          Do you want to <span className="text-blue-600 font-bold">submit a paper?</span> or 
          <span className="text-purple-900 font-bold"> submit a pitching?</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md">
          <button
            aria-label="Submit a paper"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full hover:border hover:border-blue-600 hover:bg-transparent hover:text-blue-600 hover:scale-110 transition-all duration-500"
            onClick={handleSubmitPaper}
          >
            Submit A Paper
          </button>
          <button
            aria-label="Submit a pitch"
            className="w-full sm:w-auto px-8 py-3 bg-purple-900 text-white rounded-full hover:border hover:border-purple-600 hover:bg-transparent hover:text-purple-900 hover:font-bold hover:scale-110 transition-all duration-500"
            onClick={handleSubmitPitchathon}
          >
            Submit A Pitch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Choice;
