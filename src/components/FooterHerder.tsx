
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import twitter from "../../public/twitter.png";

const FooterHerder = () => {
  return (
    <div className="bg-[#FAFAFA] mb-5 shadow-md w-full h-auto flex flex-wrap justify-between px-5 py-5 items-center">
      {/* Logo Section */}
      <div className="  w-full sm:w-auto text-center sm:text-left">
        <ul>
          <li className="text-[#252B42] font-bold text-2xl">Bandage</li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-3 sm:mt-0">
        <ul className="flex space-x-5">
          <li>
            <Link href="#">
              <Image src={facebook} alt="Facebook" className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={instagram} alt="Instagram" className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={twitter} alt="Twitter" className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterHerder;
