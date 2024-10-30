"use client";
import React from "react";

const PitchathonSection = () => {
  const submitIdeas = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfTZdnwrFMo1RSsOOPM1eCNIAtfW67e8FjiOFykiY6nFvqYEw/viewform";
  };

  return (
    <div className="text-center px-4 py-6 sm:py-8 md:py-12">
      <h1
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-600 mb-3 leading-snug"
        style={{ letterSpacing: "-1.5px" }}
      >
        Want to participate in Pitchathon?
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
        A platform where you can turn your business ideas into something valuable.
      </p>

      <button
        className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-full hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600 hover:scale-105 transition-all duration-500"
        onClick={submitIdeas}
      >
        Submit Ideas
      </button>
    </div>
  );
};

export default PitchathonSection;
