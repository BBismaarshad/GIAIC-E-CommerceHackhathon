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
    <div className="bg-[#f5f5f5] ">
      <div className="my-5  w-full h-auto flex flex-wrap justify-between px-5 py-5 items-center">
        {/* Logo Section */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <ul>
            <li className="text-[#252B42] font-bold text-2xl">Shop</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-3 sm:mt-0">
          <ul className="flex space-x-5">
            <li>
              <Link href="/" className="text-xl font-semibold ">
                Home
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={Vector} alt="Instagram" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#BDBDBD] text-lg">
                Shop
              </Link>
            </li>
          </ul>
        </div>
        {/* shop cards */}
      </div>

      <div className=" mx-5 grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {/* Image 1 */}
        <div className="">
          <div className="relative">
            <Image
              src={shop1}
              alt="shop image 1"
              className="w-full h-auto my-10 cursor-pointer "
            />
          </div>
        </div>
        {/* Image 2 */}
        <div>
          <div className="relative">
            <Image
              src={shop2}
              alt="shop image 2"
              className="w-full h-auto my-10 cursor-pointer  "
            />
          </div>
        </div>
        {/* Image 3 */}
        <div>
          <div className="relative">
            <Image
              src={shop3}
              alt="shop image 3"
              className="w-full h-auto my-10 cursor-pointer "
            />
          </div>
        </div>
        {/* Image 4 */}
        <div>
          <div className="relative">
            <Image
              src={shop4}
              alt="shop image 4"
              className="w-full h-auto my-10 cursor-pointer "
            />
          </div>
        </div>
        {/* Image 5 */}
        <div>
          <div className="relative">
            <Image
              src={shop5}
              alt="shop image 5"
              className="w-full h-auto my-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
