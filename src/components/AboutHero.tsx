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
        <div className=" ">
        <div className="px-4 py-10 md:pb-52 md:pt-40 md:pl-52">
          {/* Title Section */}
          <h1 className="flex justify-start text-white font-semibold leading-[2.4rem]">
            <br />
            <span className="mb-10 font-bold text-xl sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px] text-[#252B42]">
              ABOUT COMPANY
            </span>
          </h1>

          <h1 className="flex justify-start mt-5 text-[#252B42] font-semibold leading-[2.4rem] text-lg sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
            ABOUT US
          </h1>

          {/* Paragraph Section */}
          <p className="mt-10 text-[#737373] leading-8 text-[16px] sm:text-[18px] md:text-[20px]">
            We know how large objects will act,
          </p>
          <p className="mb-10 text-[#737373] leading-8 text-[16px] sm:text-[18px] md:text-[20px]">
            but things on a small scale.
          </p>

          {/* Button Section */}
          <div className="mt-10 flex justify-start items-center space-x-6">
            <button className="relative flex h-[50px] sm:h-[60px] w-[200px] sm:w-[250px] items-center justify-center font-semibold bg-[#23A6F0] text-white shadow-2xl transition-all hover:shadow-lg">
              <span className="relative uppercase text-lg sm:text-xl font-bold">
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
