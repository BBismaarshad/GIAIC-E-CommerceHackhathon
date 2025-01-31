import React from "react";
import Image from "next/image";
import hero3 from "../../public/hero3.png"
import Link from "next/link";
const Hero3 = () => {
  return (
    <div>
      <div className="  pt-[4vh]  md:mt-10 md:pt-[12vh] h-[85:vh] md:h-[100vh] custom-bg">
        <div className=" flex justify-center flex-col w-[80%] h-[100%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center justify-center">
            {/* image */}
            <div className="hidden md:block  ">
              {" "}
              <Image
                src={hero3}
                alt="banner"
                width={510}
                height={685}
                className="object-contain  rounded-3xl  ml-10"
              />
            </div>

            <div className="">
              <h1 className="  xl:text-[50px] lg:text-[40px] md:[50px] sm:text-[25px] font-semibold leading-[2.4rem] text-white">
                <br />
                <span className=" mb-10 font-bold text-2xl w-[151px] h-[30px] leading-6 text-[#BDBDBD]">
                  {" "}
                  SUMMER 2024{" "}
                </span>{" "}
              </h1>

              <h1 className="  mt-10 xl:text-[40px] lg:text-[30px] sm:text-[25px] font-semibold leading-[2.4rem] text-[#252B42]">
                Part of the Neural Universe
              </h1>

              <p className="mt-10 text-[17px] md:text-[15px]  text-[#737373] ">
                We know how large objects will act, We know <br /> how are
                objects will act, We know
              </p>

              <div className="mt-10 flex items-center space-x-6">
                <Link href="/shop">
                <button className="relative  flex h-[52px] w-[182px] items-center justify-center font-semibold overflow-hidden bg-[#2DC071]  text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10 uppercase ">BUY NOW </span>
                </button>
                </Link>
                <Link href="/about">
                <button className="relative   border border-green-700 flex h-[52px] w-[182px] items-center justify-center font-semibold overflow-hidden  text-[#2DC071]   shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-[#b7e9d6] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10 uppercase ">READ MORE </span>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
