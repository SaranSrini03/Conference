"use client";
import React from "react";
import Image from "next/image";  
import Arrow from "../public/images/Arrow.png";
import "tailwindcss/tailwind.css";

const About = () => { 
  return (
    <div className="bg-black overflow-hidden">
      {/* <Nav /> */}
      <div className="flex flex-col justify-center items-center min-h-screen bg-black text-blue-600 p-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-mono font-bold text-center">
          <span className="text-white">About</span> ICRCCT.
        </h1>

        <style jsx>{`
          @keyframes blink-shadow {
            0%, 100% {
              box-shadow: 0 0 0 rgba(0, 0, 255, 0); /* No shadow */
            }
            50% {
              box-shadow: 0 0 60px rgba(0, 0, 255, 1); /* Blue shadow */
            }
          }

          .animate-blink {
            animation: blink-shadow 3s infinite; 
          }
        `}</style>

        <div className="relative flex flex-col items-start text-justify text-sm sm:text-base md:text-lg lg:text-xl w-full max-w-md p-6 rounded-lg text-white font-mono bg-black border border-white shadow-lg animate-blink">
          <div className="absolute top-2 left-2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 transition-transform transform hover:scale-105">
            <Image 
              src={Arrow} 
              alt="Logo"
              width={80} 
              height={80}  
              className="object-contain"
            />
          </div> 
          
          <div className="mt-8 sm:mt-10 text-left leading-relaxed">
            Welcome to the International Paper Presentation Conference, a premier
            event dedicated to advancing research and collaboration in the field of
            computer science. This conference aims to bring together scholars,
            researchers, and industry professionals from around the globe to share
            their insights, innovations, and findings.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
