import React from "react";
import AboutNavber from "@/components/AboutNavber";

const AboutHero = () => {
  return (
    <div>
      <AboutNavber />
      <section
        className="about overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(aboutbackground.png)" }}
      >
        <div className="w-full">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14 md:py-20 lg:py-24">
          {/* Title Section */}
          <h1 className="flex justify-start text-white font-semibold">
            <span className="mb-6 sm:mb-8 md:mb-10 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#252B42]">
              ABOUT COMPANY
            </span>
          </h1>

          <h1 className="flex justify-start mt-3 sm:mt-4 md:mt-5 text-[#252B42] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            ABOUT US
          </h1>

          {/* Paragraph Section */}
          <p className="mt-6 sm:mt-8 md:mt-10 text-[#737373] leading-7 sm:leading-8 text-base sm:text-lg md:text-xl">
            We know how large objects will act,
          </p>
          <p className="mb-6 sm:mb-8 md:mb-10 text-[#737373] leading-7 sm:leading-8 text-base sm:text-lg md:text-xl">
            but things on a small scale.
          </p>

          {/* Button Section */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex justify-start items-center">
            <button className="relative flex h-[45px] sm:h-[50px] md:h-[55px] w-[180px] sm:w-[200px] md:w-[220px] items-center justify-center font-semibold bg-[#23A6F0] text-white shadow-2xl transition-all hover:shadow-lg text-base sm:text-lg">
              <span className="relative uppercase">
                Get Quote Now
              </span>
            </button>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
