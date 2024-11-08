"use client";
//links to use future : https://forms.gle/Q8hGhw5RkGpwwj949 
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";

import Nav from "./Nav";
import End from "@/components/End";

const HomePage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const fromSubmit = () => {
    window.location.href = "https://forms.gle/Q8hGhw5RkGpwwj949";
  };

  const submitIdeas = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfTZdnwrFMo1RSsOOPM1eCNIAtfW67e8FjiOFykiY6nFvqYEw/viewform"; // Update with actual link for idea submission
  };

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to allow for fade-in effect

    return () => clearTimeout(fadeTimeout);
  }, []);

  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center relative overflow-hidden bg-gray-200  px-10">
      <Nav />
      <section id="homepage" className="flex-grow flex items-center">
        <End/>
        <div
          className={`relative z-10 text-center w-full max-w-screen-lg mx-auto transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
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
              
            >
              Time up
            </button>
            <button
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full hover:border hover:border-blue-600 hover:bg-transparent hover:text-blue-600 hover:scale-110 transition-all duration-500"
onClick={()=>router.push("/Mediator")}

             
            >
              Register
            </button>
          </div>

          {/* Pitchathon Section */}
          {/* <div className="mt-8 text-center">
            <h1
              className="text-xl sm:text-2xl md:text-5xl font-bold text-green-600 mb-1  leading-tight"
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
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
