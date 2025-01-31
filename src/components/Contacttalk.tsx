import React from "react";
import Image from "next/image";
import Arrow from "../../public/Contact/Arrow.png";

const Contacttalk = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-10 px-4 sm:py-16">
        {/* Title */}
        <div className="flex justify-center pb-5">
          <Image src={Arrow} alt="" />
        </div>
        <div className="flex justify-center">
          <h3 className="font-semibold text-[10px] sm:text-sm md:text-sm text-center text-[#252B42]">
            WE CAN&apos;T WAIT TO MEET YOU
          </h3>
        </div>

        {/* Subtitle */}
        <h1 className="text-[#252B42] text-center pt-5 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          Let’s Talk
        </h1>

        <div className="flex justify-center py-10">
          <button className="w-[150px] h-[45px] sm:w-[186px] sm:h-[52px] bg-[#23A6F0] px-5 py-3 sm:px-[40px] sm:py-[15px] rounded-md font-bold text-xs sm:text-sm md:text-sm text-[#FFFFFF]">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacttalk;
