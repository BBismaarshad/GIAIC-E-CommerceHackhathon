"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Vector from "../../public/Vector.png";
import shop1 from "../../public/shopimages/shop1.png";
import shop2 from "../../public/shopimages/shop2.png";
import shop3 from "../../public/shopimages/shop3.png";
import shop4 from "../../public/shopimages/shop4.png";
import shop5 from "../../public/shopimages/shop5.png";

const Shop = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="my-4 sm:my-6 md:my-8 w-full h-auto flex flex-wrap justify-between px-4 sm:px-6 py-4 sm:py-6 items-center">
        {/* Logo Section */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <ul>
            <li className="text-[#252B42] font-bold text-xl sm:text-2xl">Shop</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-2 sm:mt-0">
          <ul className="flex space-x-3 sm:space-x-5 items-center">
            <li>
              <Link href="/" className="text-base sm:text-xl font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={Vector} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#BDBDBD] text-sm sm:text-base lg:text-lg">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-4 sm:mx-6 md:mx-8 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {/* Image 1 */}
        <div>
          <div className="relative">
            <Image
              src={shop1}
              alt="shop image 1"
              className="w-full h-auto cursor-pointer rounded-lg shadow-md hover:shadow-xl transition"
            />
          </div>
        </div>
        {/* Image 2 */}
        <div>
          <div className="relative">
            <Image
              src={shop2}
              alt="shop image 2"
              className="w-full h-auto cursor-pointer rounded-lg shadow-md hover:shadow-xl transition"
            />
          </div>
        </div>
        {/* Image 3 */}
        <div>
          <div className="relative">
            <Image
              src={shop3}
              alt="shop image 3"
              className="w-full h-auto cursor-pointer rounded-lg shadow-md hover:shadow-xl transition"
            />
          </div>
        </div>
        {/* Image 4 */}
        <div>
          <div className="relative">
            <Image
              src={shop4}
              alt="shop image 4"
              className="w-full h-auto cursor-pointer rounded-lg shadow-md hover:shadow-xl transition"
            />
          </div>
        </div>
        {/* Image 5 */}
        <div>
          <div className="relative">
            <Image
              src={shop5}
              alt="shop image 5"
              className="w-full h-auto cursor-pointer rounded-lg shadow-md hover:shadow-xl transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
