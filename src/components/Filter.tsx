import React from "react";
import Image from "next/image";
import btn1 from "../../public/btn1.png";
import icon from "../../public/icon.png";

const Filter = () => {
  return (
    <div>
      {/* Container for filter section */}
      <div className="bg-[#FFFFFF] my-8 sm:my-12 md:my-16 h-auto py-3 sm:py-4 px-3 sm:px-4 md:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
        {/* Left section: Text */}
        <div className="text-sm sm:text-base md:text-lg font-semibold text-[#252B42]">
          <h1>Showing all 12 results</h1>
        </div>

        {/* Center section: View options */}
        <div>
          <ul className="flex space-x-2 sm:space-x-3 lg:space-x-5 items-center">
            <li className="text-xs sm:text-sm md:text-base">Views:</li>
            <li>
              <Image src={btn1} alt="Button View" className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
            </li>
            <li>
              <Image src={icon} alt="Icon View" className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
            </li>
          </ul>
        </div>

        {/* Right section: Filter form */}
        <div className="w-full md:w-auto">
          <form className="flex flex-wrap gap-2">
            <input
              type="text"
              className="flex-1 md:w-[160px] p-2 sm:p-3 h-[40px] sm:h-[45px] md:h-[50px] border border-[#c0c0c0] bg-slate-100 text-[#737373] placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base"
              placeholder="Popularity"
            />
            <button className="px-4 sm:px-6 h-[40px] sm:h-[45px] md:h-[50px] font-light bg-[#23A6F0] hover:bg-[#276d96] text-white cursor-pointer text-sm sm:text-base rounded transition">
              Filter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
