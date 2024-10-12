"use client";
import React from "react";
import Image from "next/image";
import Arrow from "../public/images/Arrow.png";
import "tailwindcss/tailwind.css";

const About = () => {
  const openPDF = () => {
    window.open("/pdf.pdf", "_blank");
  };

  return (
    <div className="bg-white overflow-hidden">
      <section id="about">
        <div className="flex flex-col justify-center items-center min-h-screen bg-white text-blue-600 p-4 md:p-6 lg:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-mono font-bold text-center">
            <span className="text-black">About</span> ICRCCT.
          </h1>

          <div className="relative flex flex-col items-start text-justify text-sm sm:text-base md:text-lg lg:text-xl w-full max-w-md p-6 rounded-lg text-white font-mono bg-black border border-white shadow-lg">
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

          <button
            onClick={openPDF}
            className="mt-12 px-6 py-3 bg-white border border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
          >
            More Details
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
