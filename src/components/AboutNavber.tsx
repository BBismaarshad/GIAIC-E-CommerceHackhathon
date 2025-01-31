"use client";

import Link from "next/link";
import React, { useState } from "react";

const AboutNavber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="max-w-[90%] mx-auto">
      <nav className="bg-[#FFFFFF] h-[70px] py-2 px-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#252B42]">
          <h1>Bandage</h1>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex">
          <ul className="flex space-x-4 lg:space-x-8 font-bold text-[#737373] text-sm md:text-base lg:text-xl">
            <li>
              <Link href="/" className="hover:text-[#b6b5b5] cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#b6b5b5]">
                About
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#b6b5b5]">
                Product
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#b6b5b5]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div>
          <ul className="flex gap-4 sm:gap-6 items-center font-bold text-sm sm:text-base md:text-lg">
            <li className="text-[#23A6F0]">
              <Link href="#">Login</Link>
            </li>

            <li className="hidden sm:block">
              <Link href="#">
                <button className="relative rounded-xl flex h-[40px] sm:h-[52px] w-[100px] sm:w-[200px] items-center justify-center font-semibold overflow-hidden bg-[#23A6F0] text-white shadow-lg transition-all hover:bg-[#69bef0]">
                  <span className="relative z-10 text-sm sm:text-lg font-bold">
                    Become a member
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-[#252B42]">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFFFFF] p-4 shadow-lg">
          <ul className="space-y-4 font-bold text-[#737373] text-lg">
            <li>
              <Link href="/" className="hover:text-[#b6b5b5]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#b6b5b5]">
                Product
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#b6b5b5]">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#b6b5b5]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AboutNavber;
