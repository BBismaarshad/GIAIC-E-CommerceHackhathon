"use client";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";

export default function Greenheader() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header>
      {/* Mobile Toggle Button */}
      <div className="md:hidden bg-[#23856D] px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-white text-sm">
          <FaPhoneAlt />
          <a href="tel:(225) 555-0118" className="hover:text-green-300">
            (225) 555-0118
          </a>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white hover:text-green-300 transition"
          aria-label="Toggle header expansion"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Top Bar - Responsive */}
      <div
        className={`${
          isExpanded ? "max-h-screen" : "max-h-0 md:max-h-none"
        } overflow-hidden md:overflow-visible transition-all duration-300 flex-col md:flex h-auto md:h-[58px] md:flex-row items-center justify-between bg-[#23856D] px-4 py-3 md:py-2 text-sm`}
      >
        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 text-white font-bold">
          {/* Phone Number */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-xs" />
            <a href="tel:(225) 555-0118" className="hover:text-green-300 text-xs sm:text-sm">
              (225) 555-0118
            </a>
          </div>
          {/* Email Address */}
          <div className="flex items-center space-x-2">
            <MdOutlineMailOutline className="text-xs" />
            <a href="mailto:michelle.rivera@example.com" className="hover:text-green-300 text-xs sm:text-sm truncate max-w-[200px] md:max-w-none">
              michelle.rivera@example.com
            </a>
          </div>
        </div>

        {/* Promotional Message */}
        <div className="flex items-center space-x-2 text-white font-bold text-xs sm:text-sm mt-2 md:mt-0 text-center md:text-left">
          <a href="#" className="font-bold hover:text-green-300">
            Follow Us and get a chance to win 80% off
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-3 text-white mt-2 md:mt-0">
          <span className="hover:text-green-300 text-xs sm:text-sm font-bold">
            Follow Us:
          </span>
          {/* Facebook */}
          <a href="#" aria-label="Facebook">
            <FaFacebook className="text-sm hover:text-green-300 transition" />
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube">
            <FaYoutube className="text-sm hover:text-green-300 transition" />
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-sm hover:text-green-300 transition" />
          </a>
          {/* Twitter */}
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-sm hover:text-green-300 transition" />
          </a>
        </div>
      </div>
    </header>
  );
}
