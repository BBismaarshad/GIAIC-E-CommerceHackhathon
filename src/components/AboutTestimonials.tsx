import React from "react";
import Image from "next/image";
import Testimonials from "../../public/Aboutimages/Testimonials.png";

const AboutTestimonials = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-center pb-10">
        {/* Left Section */}
        <div className="bg-[#2A7CC7] w-full lg:w-[60%] lg:h-[636px]">
          <div className="px-6 sm:px-10 md:px-20 lg:px-[195px] py-10 sm:py-14 md:py-20 lg:py-[112px]">
            <div className="w-full sm:w-[70%] lg:w-[438px] lg:h-[238px] py-5 sm:py-8">
              <h3 className="text-white font-bold text-sm sm:text-base">
                WORK WITH US
              </h3>
              <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl py-4 lg:py-[48px]">
                Now Let&rsquo;s grow Yours
              </h1>
              <p className="text-white text-sm sm:text-base pb-6 lg:pb-[40px]">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th{" "}
              </p>
              <button className="w-[132px] h-[52px] border border-white px-6 py-3 cursor-pointer hover:bg-[#a5a5a5] rounded-md text-white font-bold text-sm sm:text-base">
                Button
              </button>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[40%] h-auto">
          <Image
            src={Testimonials}
            alt="Testimonials"
            className="w-full lg:h-[636px] object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutTestimonials;
