import React from "react";
import Image from "next/image";
import heroimage from "../../public/heroimage.png";
const banner2 = () => {
  return (
    <div>
      <div className=" w-full h-[500px] md:h-[695px] bg-[#23856D]">
        <div className="  pt-[4vh]  md:mt-10 md:pt-[12vh] h-[85:vh] md:h-[100vh] custom-bg">
          <div className=" flex justify-center flex-col w-[80%] h-[100%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center justify-center">
              <div className="pb-48">
                <h1 className="  xl:text-[50px] lg:text-[40px] md:[50px] sm:text-[25px] font-semibold leading-[2.4rem] text-white">
                  <br />
                  <span className=" mb-10 font-bold text-2xl w-[151px] h-[30px] leading-6 text-slate-300">
                    {" "}
                    SUMMER 2024{" "}
                  </span>{" "}
                </h1>

                <h1 className="  mt-10 xl:text-[50px] lg:text-[40px] sm:text-[25px] font-semibold leading-[2.4rem] text-white">
                  Vita Classic Product
                </h1>

                <p className="mt-10 text-[17px] md:text-[15px]  text-slate-300 ">
                  We know how large objects will &rsquo; We know <br /> how are
                  objects will act&rsquo; We know
                </p>

                <div className="mt-10 flex items-center space-x-6">
                  <h4 className="font-semibold text-white text-xl">$16.48</h4>
                  <button className="relative  flex h-[52px] w-[182px] items-center justify-center font-semibold overflow-hidden bg-[#2DC071] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10 uppercase ">
                      Add to Cart{" "}
                    </span>
                  </button>
                </div>
              </div>
              <div className="hidden md:block  ">
                {" "}
                <Image
                  src={heroimage}
                  alt="banner"
                  width={510}
                  height={100}
                  className="object-contain  rounded-3xl  ml-10"
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
