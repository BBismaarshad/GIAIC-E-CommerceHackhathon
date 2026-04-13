import React from "react";
import Image from "next/image";
import Featuredpost1 from "../../public/Featuredposts1.png";
import Featuredpost2 from "../../public/Featuredposts2.png";
import Featuredpost3 from "../../public/Featuredpost3.png";
import { IoIosArrowForward } from "react-icons/io";

const FeaturedPost = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="container mx-auto">
        <h4 className="font-semibold text-center mb-1 text-base sm:text-lg md:text-xl text-[#23A6F0]">
          Practice Advice
        </h4>
        <h2 className="text-center font-semibold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 md:mt-5 text-[#252B42]">
          Featured Posts
        </h2>
        <p className="text-center mt-3 sm:mt-4 md:mt-5 font-light text-xs sm:text-sm text-[#737373] max-w-2xl mx-auto px-2">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        {/* Cards */}
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <div className="relative">
              <Image src={Featuredpost1} alt="post" className="w-full h-auto" />
            </div>
            <div className="p-4 sm:p-5">
              <ul className="text-xs flex justify-start gap-3 sm:gap-4 items-center py-2 sm:py-3">
                <li className="text-[#8EC2F2]">Google</li>
                <li className="text-[#737373]">Trending</li>
                <li className="text-[#737373]">New</li>
              </ul>
              <h3 className="text-sm leading-6 sm:leading-7 text-[#252B42] font-bold">
                Loudest à la Madison #1 (L&apos;integral)
              </h3>
              <p className="py-2 sm:py-3 text-[#737373] leading-5 font-medium text-xs sm:text-sm">
                We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
              </p>
              <div>
                <ul className="text-[#737373] flex justify-between items-center py-2 sm:py-3 font-bold text-xs">
                  <li>22 April 2021</li>
                  <li>10 comments</li>
                </ul>
                <h2 className="flex items-center text-[#737373] font-semibold gap-1 text-sm">
                  Learn More {" "}
                  <span className="text-[#23A6F0]">
                    <IoIosArrowForward />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <div className="relative">
              <Image src={Featuredpost2} alt="post" className="w-full h-auto" />
            </div>
            <div className="p-4 sm:p-5">
              <ul className="text-xs flex justify-start gap-3 sm:gap-4 items-center py-2 sm:py-3">
                <li className="text-[#8EC2F2]">Google</li>
                <li className="text-[#737373]">Trending</li>
                <li className="text-[#737373]">New</li>
              </ul>
              <h3 className="text-sm leading-6 sm:leading-7 text-[#252B42] font-bold">
                Loudest à la Madison #1 (L&apos;integral)
              </h3>
              <p className="py-2 sm:py-3 text-[#737373] leading-5 font-medium text-xs sm:text-sm">
                We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
              </p>
              <div>
                <ul className="text-[#737373] flex justify-between items-center py-2 sm:py-3 font-bold text-xs">
                  <li>22 April 2021</li>
                  <li>10 comments</li>
                </ul>
                <h2 className="flex items-center text-[#737373] font-semibold gap-1 text-sm">
                  Learn More {" "}
                  <span className="text-[#23A6F0]">
                    <IoIosArrowForward />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <div className="relative">
              <Image src={Featuredpost3} alt="post" className="w-full h-auto" />
            </div>
            <div className="p-4 sm:p-5">
              <ul className="text-xs flex justify-start gap-3 sm:gap-4 items-center py-2 sm:py-3">
                <li className="text-[#8EC2F2]">Google</li>
                <li className="text-[#737373]">Trending</li>
                <li className="text-[#737373]">New</li>
              </ul>
              <h3 className="text-sm leading-6 sm:leading-7 text-[#252B42] font-bold">
                Loudest à la Madison #1 (L&apos;integral)
              </h3>
              <p className="py-2 sm:py-3 text-[#737373] leading-5 font-medium text-xs sm:text-sm">
                We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
              </p>
              <div>
                <ul className="text-[#737373] flex justify-between items-center py-2 sm:py-3 font-bold text-xs">
                  <li>22 April 2021</li>
                  <li>10 comments</li>
                </ul>
                <h2 className="flex items-center text-[#737373] font-semibold gap-1 text-sm">
                  Learn More {" "}
                  <span className="text-[#23A6F0]">
                    <IoIosArrowForward />
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
