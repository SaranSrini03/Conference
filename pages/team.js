"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HOD from "../public/images/HOD.jpeg";
import staff1 from "../public/images/Mahesh.jpeg";
import staff2 from "../public/images/Suguna.jpeg";
import Kamal from "@/public/images/Kamal.jpg";
import Naveen from "../me.jpg";

const Team = () => {
  const [opacity, setOpacity] = useState(0);
  const [mobileTextVisible, setMobileTextVisible] = useState(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setOpacity(1);
        }
      });
    });
    if (teamRef.current) {
      observer.observe(teamRef.current);
    }
    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  const handleMobileClick = (index) => {
    setMobileTextVisible(mobileTextVisible === index ? null : index);
  };

  return (
    <div
      ref={teamRef}
      className={`flex bg-white flex-col items-center justify-center min-h-screen text-center transition-opacity duration-300`}
      style={{ opacity }}
    >
      <section id="team">
        <h1 className="m-10 text-3xl font-bold text-blue-600">
          Head Of The Department - CSE
        </h1>
        <div
          className="relative w-40 h-40 md:w-56 md:h-72 rounded-xl bg-white border border-black flex flex-col items-center justify-center mx-auto transition-transform duration-300 ease-in-out"
          onClick={() => handleMobileClick(0)}
        >
          <Image
            src={HOD}
            alt="Dr. Smitha"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-xl"
          />
        </div>
        <div className="mt-4 text-center">
          <div className="text-black font-bold">Dr. Smitha</div>
          <div className="text-gray-600">HOD of CSE Dept</div>
        </div>

        <div className="mt-12" />

        <h1 className="m-6 mt-10 text-3xl font-bold text-blue-600">
          Faculty Coordinators
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <div
              className="relative w-40 h-40 md:w-56 md:h-72 bg-blue-300 border-2 border-black flex items-center justify-center rounded-lg transition-transform duration-300 ease-in-out"
              onClick={() => handleMobileClick(1)}
            >
              <Image
                src={staff1}
                alt="Dr. Mahesh"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-black font-bold">Dr. Mahesh</div>
              <div className="text-gray-600">Faculty Coordinator</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="relative w-40 h-40 md:w-56 md:h-72 bg-blue-300 border-2 border-black flex items-center justify-center rounded-lg transition-transform duration-300 ease-in-out"
              onClick={() => handleMobileClick(2)}
            >
              <Image
                src={staff2}
                alt="Mrs. Suguna"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-black font-bold">Mrs. Suguna</div>
              <div className="text-gray-600">Faculty Coordinator</div>
            </div>
          </div>
        </div>

        <div className="mt-12" />

        <h1 className="m-6 mt-10 text-3xl font-bold text-blue-600">
          Student Coordinators
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {/* First student coordinator */}
          <div className="flex flex-col items-center">
            <div
              className="relative w-40 h-40 md:w-56 md:h-72 bg-blue-300 border-2 border-black flex items-center justify-center rounded-lg transition-transform duration-300 ease-in-out"
              onClick={() => handleMobileClick(3)}
            >
              <Image
                src={Kamal}
                alt="Kamalakannan"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-black font-bold">Kamalakannan</div>
              <div className="text-gray-600 mb-20">Final Year</div>
            </div>
          </div>

          {/* Second student coordinator (no image, just a square) */}
          <div className="flex flex-col items-center">
            <div
              className="relative w-40 h-40 md:w-56 md:h-72 bg-blue-300 border-2 border-black flex items-center justify-center rounded-lg transition-transform duration-300 ease-in-out"
              onClick={() => handleMobileClick(4)}
            >
                <Image
                src={Naveen}
                alt="Naveenrajanm"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 rounded-lg"
              />
              {/* Empty square for the second student coordinator */}
              <div className="w-full h-full bg-gray-200 rounded-lg"></div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-black font-bold">Naveen Rajan M</div>
              <div className="text-gray-600 mb-20">Third Year</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
