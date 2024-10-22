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
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-white text-blue-600 p-4 md:p-6 lg:p-8 space-y-8 lg:space-y-0 lg:space-x-8">
          {/* First Container (Paper Presentation) */}
          <div className="relative flex flex-col items-start text-sm sm:text-base md:text-lg lg:text-xl w-full lg:flex-1 min-h-[400px] p-6 rounded-lg text-white font-mono bg-black border border-white shadow-lg">
            <div className="flex items-center space-x-4">
              {/* Flex container for logo and title */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 transition-transform transform hover:scale-105">
                <Image
                  src={Arrow}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl text-blue-600 sm:text-3xl font-bold">
                About Paper Presentation
              </h2>
            </div>

            <div className="mt-8 sm:mt-10 text-left leading-relaxed">
              Welcome to the International Paper Presentation Conference, a
              premier event dedicated to advancing research and collaboration in
              the field of computer science. This conference aims to bring
              together scholars, researchers, and industry professionals from
              around the globe to share their insights, innovations, and
              findings.
            </div>

            {/* Button directly below the first container */}
            <button
              onClick={openPDF}
              className="mt-8 px-6 py-3 self-center bg-white border border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              More Details
            </button>
          </div>

          {/* Second Container (Pitchathon) */}
          <div className="relative flex flex-col items-start text-justify text-sm sm:text-base md:text-lg lg:text-xl w-full lg:flex-1 min-h-[400px] p-6 rounded-lg text-white font-mono bg-black border border-white shadow-lg">
            <div className="flex items-center space-x-4">
              {/* Flex container for logo and title */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 transition-transform transform hover:scale-105">
                <Image
                  src={Arrow}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                About Pitchathon
              </h2>
            </div>

            <div className="mt-8 sm:mt-10 text-left leading-relaxed">
              The Pitchathon provides a dynamic platform for participants to
              refine their business strategies, enhance their presentation
              skills, and gain valuable feedback from seasoned investors. Beyond
              potential funding, participants build connections with industry
              leaders and collaborators. The event fosters innovation,
              encouraging entrepreneurs to develop creative solutions and
              accelerate their journey toward success in the competitive
              marketplace.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
