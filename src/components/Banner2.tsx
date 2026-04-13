import React from "react";
import Image from "next/image";
import heroimage from "../../public/heroimage.png";
const banner2 = () => {
  return (
    <div>
      <div className="w-full h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[695px] bg-[#23856D] py-12 sm:py-16 md:py-20">
        <div className="pt-8 sm:pt-12 md:pt-16">
          <div className="flex justify-center flex-col w-[90%] sm:w-[85%] md:w-[80%] h-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center justify-center">
              <div className="pb-8 sm:pb-12 md:pb-16 lg:pb-0 text-center md:text-left order-2 md:order-1">
                <h1 className="font-semibold text-white">
                  <span className="mb-6 sm:mb-8 md:mb-10 font-bold text-lg sm:text-xl md:text-2xl text-slate-300">
                    SUMMER 2024
                  </span>
                </h1>

                <h1 className="mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                  Vita Classic Product
                </h1>

                <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                  We know how large objects will act, We know how objects will act, We know
                </p>

                <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
                  <h4 className="font-semibold text-white text-lg sm:text-xl">$16.48</h4>
                  <button className="relative flex h-[45px] sm:h-[48px] md:h-[52px] w-[160px] sm:w-[170px] md:w-[182px] items-center justify-center font-semibold overflow-hidden bg-[#2DC071] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 text-sm sm:text-base">
                    <span className="relative z-10 uppercase">
                      Add to Cart
                    </span>
                  </button>
                </div>
              </div>
              <div className="hidden md:block order-1 md:order-2">
                <Image
                  src={heroimage}
                  alt="banner"
                  width={510}
                  height={100}
                  className="object-contain rounded-2xl md:rounded-3xl ml-0 md:ml-8 lg:ml-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[510px] h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner2;
