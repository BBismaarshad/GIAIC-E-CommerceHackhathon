import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[10vh] md:min-h-screen custom-img flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 md:py-0">
        <div className="text-center md:text-left md:pl-8 lg:pl-16 xl:pl-24 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2">
          <h1 className="flex justify-center md:justify-start flex-wrap font-semibold text-white leading-tight">
            <span className="mb-3 sm:mb-5 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FFFF] w-full">
              SUMMER 2024
            </span>
          </h1>

          <h1 className="flex justify-center md:justify-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-3 sm:mt-5 font-semibold leading-tight text-[#ffff]">
            NEW COLLECTION
          </h1>

          <p className="mt-4 sm:mt-6 md:mt-8 leading-relaxed text-base sm:text-lg md:text-xl text-[#ffff] text-center md:text-left px-2 sm:px-0">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center md:justify-start items-center">
            <button className="relative flex h-[50px] sm:h-[55px] md:h-[60px] w-[200px] sm:w-[220px] md:w-[250px] items-center justify-center font-semibold overflow-hidden bg-[#2DC071] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-full text-sm sm:text-base md:text-lg lg:text-xl">
              <span className="relative z-10 uppercase">
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
