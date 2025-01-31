import React from "react";
import Image from "next/image";
import btn1 from "../../public/btn1.png";
import icon from "../../public/icon.png";

const Filter = () => {
  return (
    <div>
      {/* Container for filter section */}
      <div className="bg-[#FFFFFF]  my-16  h-auto md:h-[70px] py-2 px-3 md:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left section: Text */}
        <div className=" text-base  md:text-lg font-semibold text-[#252B42]">
          <h1>Showing all 12 results</h1>
        </div>

        {/* Center section: View options */}
        <div>
          <ul className="flex space-x-3   sm:space-x-5 lg:space-x-10 items-center">
            <li className="text-sm  md:text-base">Views:</li>
            <li>
              <Image src={btn1} alt="Button View" className="cursor-pointer" />
            </li>
            <li>
              <Image src={icon} alt="Icon View" className="cursor-pointer" />
            </li>
          </ul>
        </div>

        {/* Right section: Filter form */}
        <div>
          <form className="flex flex-wrap gap-2">
            <input
              type="text"
              className="p-2 w-[141px] md:w-[160px] h-[40px] md:h-[50px] border border-[#c0c0c0] bg-slate-100 text-[#737373] placeholder:text-sm md:placeholder:text-base"
              placeholder="Popularity"
            />
            <button className="p-2 w-[94px] md:w-[110px] h-[40px] md:h-[50px] font-light bg-[#23A6F0] hover:bg-[#276d96] text-white cursor-pointer">
              Filter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
