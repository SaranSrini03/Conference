"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import HOD from "../public/images/HOD.jpeg"; 
import staff1 from "../public/images/Mahesh.jpeg";
import staff2 from "../public/images/Suguna.jpeg";

const Team = () => {
  const [hoveredFacultyIndex, setHoveredFacultyIndex] = useState(null);
  const [hoveredStudentIndex, setHoveredStudentIndex] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const [mobileTextVisible, setMobileTextVisible] = useState(false);
  const teamRef = useRef(null);

  const facultyDetails = [
    { name: "Dr. Smitha", image: HOD },
  ];

  const studentDetails = [
    { name: "Mr. Mahesh", image: staff1 },
    { name: "Mrs. Suguna", image: staff2 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setOpacity(1); // Fade in
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
      <h1 className="m-10 text-3xl font-bold text-blue-600">Head Of The Department - CSE</h1>
      <div className="flex  flex-wrap justify-center space-x-4 md:space-x-8">
        {facultyDetails.map((faculty, index) => (
          <div
            key={index}
            className={`relative w-40 h-40 md:w-56 md:h-72 bg-white border-2 border-black flex items-center justify-center transition-transform duration-300 ease-in-out ${
              hoveredFacultyIndex === index ? 'scale-105' : 'scale-100'
            }`}
            onMouseEnter={() => setHoveredFacultyIndex(index)}
            onMouseLeave={() => setHoveredFacultyIndex(null)}
            onClick={() => handleMobileClick(index)} // Handle click for mobile
          >
            {/* Image for HOD */}
            <Image
              src={faculty.image}
              alt={faculty.name}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            {/* Overlay for better text visibility */}
            {(hoveredFacultyIndex === index || mobileTextVisible === index) && (
              <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  {faculty.name}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Space between sections */}
      <div className="mt-12" />

      {/* Student Coordinators Section */}
      <h1 className="m-6 mt-10 text-3xl font-bold text-blue-600">Faculty Coordinators</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {studentDetails.map((student, index) => (
          <div
            key={index}
            className={`relative w-40 h-40 md:w-56 md:h-72 m-10 bg-blue-300 border-2 border-black flex items-center justify-center transition-transform duration-300 ease-in-out ${
              hoveredStudentIndex === index ? 'scale-105' : 'scale-100'
            }`}
            onMouseEnter={() => setHoveredStudentIndex(index)}
            onMouseLeave={() => setHoveredStudentIndex(null)}
            onClick={() => handleMobileClick(index + facultyDetails.length)} // Handle click for mobile
          >
            {/* Image for Students */}
            <Image
              src={student.image}
              alt={student.name}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            {/* Overlay for better text visibility */}
            {(hoveredStudentIndex === index || mobileTextVisible === index + facultyDetails.length) && (
              <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  {student.name}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

export default Team;
