import React from "react";
import Image from "next/image";
import hero3 from "../../public/hero3.png"
import Link from "next/link";
const Hero3 = () => {
  return (
    <div>
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 h-auto min-h-[60vh] md:min-h-[85vh] lg:min-h-[100vh]">
        <div className="flex justify-center flex-col w-[90%] sm:w-[85%] md:w-[80%] h-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center justify-center">
            {/* image */}
            <div className="hidden md:block order-2 md:order-1">
              <Image
                src={hero3}
                alt="banner"
                width={510}
                height={685}
                className="object-contain rounded-2xl md:rounded-3xl ml-0 md:ml-8 lg:ml-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[510px] h-auto mx-auto"
              />
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="font-semibold text-white">
                <span className="mb-6 sm:mb-8 md:mb-10 font-bold text-lg sm:text-xl md:text-2xl text-[#BDBDBD]">
                  SUMMER 2024
                </span>
              </h1>

              <h1 className="mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#252B42]">
                Part of the Neural Universe
              </h1>

              <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-[#737373] leading-relaxed">
                We know how large objects will act, We know how objects will act, We know
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
                <Link href="/shop">
                <button className="relative flex h-[45px] sm:h-[48px] md:h-[52px] w-[160px] sm:w-[170px] md:w-[182px] items-center justify-center font-semibold overflow-hidden bg-[#2DC071] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 text-sm sm:text-base">
                  <span className="relative z-10 uppercase">BUY NOW</span>
                </button>
                </Link>
                <Link href="/about">
                <button className="relative border border-green-700 flex h-[45px] sm:h-[48px] md:h-[52px] w-[160px] sm:w-[170px] md:w-[182px] items-center justify-center font-semibold overflow-hidden text-[#2DC071] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-[#b7e9d6] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 text-sm sm:text-base">
                  <span className="relative z-10 uppercase">READ MORE</span>
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
