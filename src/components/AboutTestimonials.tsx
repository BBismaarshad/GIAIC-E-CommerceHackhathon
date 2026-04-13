import React from "react";
import Image from "next/image";
import Testimonials from "../../public/Aboutimages/Testimonials.png";

const AboutTestimonials = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-center pb-10 lg:pb-16">
        {/* Left Section */}
        <div className="bg-[#2A7CC7] w-full lg:w-[55%]">
          <div className="px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="w-full lg:max-w-lg">
              <h3 className="text-white font-bold text-xs sm:text-sm md:text-base">
                WORK WITH US
              </h3>
              <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl py-3 sm:py-4 md:py-6">
                Now Let&rsquo;s grow Yours
              </h1>
              <p className="text-white text-xs sm:text-sm md:text-base pb-4 sm:pb-6">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th{" "}
              </p>
              <button className="w-full sm:w-auto px-6 py-2.5 sm:py-3 border border-white hover:bg-[#a5a5a5] rounded-md text-white font-bold text-sm transition">
                Button
              </button>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[45%]">
          <Image
            src={Testimonials}
            alt="Testimonials"
            className="w-full h-auto object-cover"
            width={800}
            height={636}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutTestimonials;
