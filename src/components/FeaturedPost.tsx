import React from "react";
import Image from "next/image";
import Featuredpost1 from "../../public/Featuredposts1.png";
import Featuredpost2 from "../../public/Featuredposts2.png";
import Featuredpost3 from "../../public/Featuredpost3.png";
import { IoIosArrowForward } from "react-icons/io";

const FeaturedPost = () => {
  return (
    <div className="md:pb-52    px-4 sm:px-6 lg:px-10 bg-white">
      <div className="container mx-auto ">
        <h4 className="mt-24 font-semibold text-center mb-1 text-xl text-[#23A6F0]">
          Practice Advice
        </h4>
        <h2 className="text-center font-semibold uppercase text-3xl sm:text-4xl md:text-5xl mt-5 text-[#252B42]">
          Featured Posts
        </h2>
        <p className="text-center mt-5 font-light text-sm text-[#737373] max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <Image src={Featuredpost1} alt="post" className="w-full h-auto" />
            </div>
            <div className="p-5">
              <ul className="text-xs flex justify-start gap-4 items-center py-3">
                <li className="text-[#8EC2F2]">Google</li>
                <li className="text-[#737373]">Trending</li>
                <li className="text-[#737373]">New</li>
              </ul>
              <h3 className="text-sm leading-7 text-[#252B42] font-bold">
                Loudest à la Madison #1 (L&apos;integral)
              </h3>
              <p className="py-3 text-[#737373] leading-5 font-medium">
                We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
              </p>
              <div>
                <ul className="text-[#737373] flex justify-between items-center py-3 font-bold text-xs">
                  <li>22 April 2021</li>
                  <li>10 comments</li>
                </ul>
                <h2 className="flex items-center text-[#737373] font-semibold gap-1">
                  Learn More {" "}
                  <span className="text-[#23A6F0]">
                    <IoIosArrowForward />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <Image src={Featuredpost2} alt="post" className="w-full h-auto" />
            </div>
            <div className="p-5">
              <ul className="text-xs flex justify-start gap-4 items-center py-3">
                <li className="text-[#8EC2F2]">Google</li>
                <li className="text-[#737373]">Trending</li>
                <li className="text-[#737373]">New</li>
              </ul>
              <h3 className="text-sm leading-7 text-[#252B42] font-bold">
                Loudest à la Madison #1 (L&apos;integral)
              </h3>
              <p className="py-3 text-[#737373] leading-5 font-medium">
                We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
              </p>
              <div>
                <ul className="text-[#737373] flex justify-between items-center py-3 font-bold text-xs">
                  <li>22 April 2021</li>
                  <li>10 comments</li>
                </ul>
                <h2 className="flex items-center text-[#737373] font-semibold gap-1">
                  Learn More {" "}
                  <span className="text-[#23A6F0]">
                    <IoIosArrowForward />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <Image src={Featuredpost3} alt="post" className="w-full h-auto" />
            </div>
            <div className="p-5">
              <ul className="text-xs flex justify-start gap-4 items-center py-3">
                <li className="text-[#8EC2F2]">Google</li>
                <li className="text-[#737373]">Trending</li>
                <li className="text-[#737373]">New</li>
              </ul>
              <h3 className="text-sm leading-7 text-[#252B42] font-bold">
                Loudest à la Madison #1 (L&apos;integral)
              </h3>
              <p className="py-3 text-[#737373] leading-5 font-medium">
                We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
              </p>
              <div>
                <ul className="text-[#737373] flex justify-between items-center py-3 font-bold text-xs">
                  <li>22 April 2021</li>
                  <li>10 comments</li>
                </ul>
                <h2 className="flex items-center text-[#737373] font-semibold gap-1">
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
