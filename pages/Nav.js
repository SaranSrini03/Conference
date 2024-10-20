"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CollegeLogo from '/public/images/CollegeLogo.png';
import CseLogo from '/public/images/cse.png';
import Link from 'next/link';

const Nav = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 1000);

    const resetTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(resetTimer);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="bg-white/30 backdrop-blur-md font-mono p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-0">
          <Link href="/" className="cursor-pointer">
            <Image
              src={CseLogo}
              alt="CSE Logo"
              width={50}
              height={60}
              className="mr-3 bg-gray-200 p-1"
            />
          </Link>
          <Link href="/" className={`ml-20 transition-all duration-300 ease-in-out ${isAnimating ? 'translate-x-[-100px] opacity-0' : 'translate-x-0 opacity-100'}`}>
            <Image
              src={CollegeLogo}
              alt="College Logo"
              width={130}
              height={130}
            />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="block md:hidden text-blue-700 focus:outline-none"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>

        <ul
          className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}
        >
          <li>
            <Link href="/" className="text-blue-700 hover:text-gray-400 transition">
              Home.
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-blue-700 hover:text-gray-400">
              About.
            </Link>
          </li>
          <li>
            <Link href="#timeline" className="text-blue-700 hover:text-gray-400">
              Timeline.
            </Link>
          </li>
          <li>
            <Link href="#team" className="text-blue-700 hover:text-gray-400">
              Team.
            </Link>
          </li>
          <li>
            <Link href="/qna" className="text-blue-700 hover:text-gray-400">
              QnA.
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
