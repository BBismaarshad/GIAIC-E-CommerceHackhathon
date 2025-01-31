import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[10vh] md:min-h-screen custom-img flex items-center justify-center sm:px-4 sm:py-8">
        <div className="text-center md:text-left md:pl-44">
          <h1 className="flex justify-center md:justify-start xl:text-[50px] lg:text-[40px] md:[50px] sm:text-[25px] font-semibold leading-[2.4rem] text-white">
            <br />
            <span className="mb-5 font-bold text-2xl leading-6 text-[#FFFF]">
              SUMMER 2024
            </span>
          </h1>

          <h1 className="flex justify-center md:justify-start text-[35px] mt-5 xl:text-[50px] lg:text-[30px] sm:text-[25px] font-semibold leading-[2.4rem] text-[#ffff]">
            NEW COLLECTION
          </h1>

          <p className="mt-6 sm:mt-8 leading-7 text-[17px] md:text-[18px] text-[#ffff] text-center md:text-left">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center md:justify-start items-center space-x-6">
            <button className="relative flex h-[60px] w-[250px] items-center justify-center font-semibold overflow-hidden bg-[#2DC071] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-[250px]">
              <span className="relative z-10 uppercase text-xl font-bold">
                SHOP NOW
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
