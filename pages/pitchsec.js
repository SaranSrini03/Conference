"use client";
import React from "react";

const PitchathonSection = () => {
  const submitIdeas = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfTZdnwrFMo1RSsOOPM1eCNIAtfW67e8FjiOFykiY6nFvqYEw/viewform";
  };

  return (
    <div className="text-center">
      <h1
        className="text-xl sm:text-2xl md:text-5xl font-bold text-green-600 mb-1 leading-tight"
        style={{ letterSpacing: "-1.5px" }}
      >
        Want to participate in Pitchathon?
      </h1>
      <p className="text-sm sm:text-lg text-gray-800 mb-2 leading-tight">
        A platform where you can turn your business ideas into something valuable.
      </p>

      <button
        className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white rounded-full hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600 hover:scale-110 transition-all duration-500"
        onClick={submitIdeas}
      >
        Submit Ideas
      </button>
    </div>
  );
};

export default PitchathonSection;
