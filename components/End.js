import React, { useState, useEffect } from "react";

export default function End() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-10 left-5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-4 py-2 text-sm font-semibold z-50 border-r-red-500 border-r-8 shadow-xl transform transition-all duration-300 ease-in-out max-w-xs w-auto">
        <h1 className="leading-tight text-center">
          <span className="block md:hidden text-sm">
            The paper submission date has ended.
          </span>
          <span className="hidden md:block text-sm">
            The paper submission date has ended. Only selected papers can
            register now. Don't lose hope, register for the Pitch-a-thon!
          </span>
        </h1>
      </div>
    )
  );
}
