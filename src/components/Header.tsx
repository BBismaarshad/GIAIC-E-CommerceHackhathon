"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="hidden md:flex flex-col h-[58px] md:flex-row items-center justify-between bg-[#252B42] px-4 py-2 text-sm">
        {/* Contact Info Section */}
        <div className="flex items-center space-x-3 text-white font-bold">
          {/* Phone Number */}
          <FaPhoneAlt className="text-sm" />
          <a href="#" className="hover:text-cyan-400 text-sm">
            (225) 555-0118
          </a>
          {/* Email Address */}
          <MdOutlineMailOutline className="text-sm" />
          <a href="#" className="hover:text-cyan-400 text-sm">
            michelle.rivera@example.com
          </a>
        </div>

        {/* Promotional Message */}
        <div className="flex items-center space-x-2 text-white font-bold text-sm">
          <a href="#" className="font-bold hover:text-cyan-400">
            Follow Us and get a chance to win 80% off
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-3 text-white">
          <span className="hover:text-cyan-400 text-sm font-bold">
            Follow Us:
          </span>
          {/* Facebook */}
          <a href="#">
            <FaFacebook className="text-sm hover:text-cyan-400" />
          </a>
          {/* YouTube */}
          <a href="#">
            <FaYoutube className="text-sm hover:text-cyan-400" />
          </a>
          {/* Instagram */}
          <a href="#">
            <FaInstagram className="text-sm hover:text-cyan-400" />
          </a>
          {/* Twitter */}
          <a href="#">
            <FaTwitter className="text-sm hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
