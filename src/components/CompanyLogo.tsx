import React from "react";
import Image from "next/image";
import logo1 from "../../public/Logo/logo1.png";
import logo2 from "../../public/Logo/logo2.png";
import logo3 from "../../public/Logo/logo3.png";
import logo4 from "../../public/Logo/logo4.png";
import logo5 from "../../public/Logo/logo5.png";
import logo6 from "../../public/Logo/logo6.png";
const CompanyLogo = () => {
  return (
    <div className="">
      <div className="bg-[#f0efef]">
        <div className=" mx-5 grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {/* logo 1 */}
          <div className="">
            <div className="relative ">
              <Image
                src={logo1}
                alt="shop logo 1"
                className="w-full h-auto my-12  "
              />
            </div>
          </div>
          {/* logo 2 */}
          <div>
            <div className="relative">
              <Image
                src={logo2}
                alt="shop image 2"
                className="w-full h-auto my-12 "
              />
            </div>
          </div>
          {/* logo 3 */}
          <div>
            <div className="relative ">
              <Image
                src={logo3}
                alt="shop image 3"
                className="w-full h-auto my-12"
              />
            </div>
          </div>
          {/* logo */}
          <div>
            <div className="relative ">
              <Image
                src={logo4}
                alt="shop image 4"
                className="w-full h-auto my-12"
              />
            </div>
          </div>
          {/* logo 5 */}
          <div>
            <div className="relative ">
              <Image
                src={logo5}
                alt="shop image 5"
                className="w-full h-auto my-12"
              />
            </div>
          </div>
          {/* logo 6 */}
          <div>
            <div className="relative">
              <Image
                src={logo6}
                alt="shop image 6"
                className="w-full h-auto my-12"
              />
            </div>
          </div>
          {/* Image 7 */}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
