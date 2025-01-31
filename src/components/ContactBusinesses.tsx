import React from "react";
import Image from "next/image";
import ContactCard from "../../public/Contact/ContactCard.png";
import ContactCard1 from "../../public/Contact/ContactCard1.png";
import ContactCard2 from "../../public/Contact/ContactCard2.png";

const ContactBusinesses = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4   sm:py-36 md:pb-52 md:pt-56 ">
        {/* Title */}
        <div className="flex justify-center">
          <h3 className="font-semibold text-xl sm:text-xl text-center text-[#252B42]">
            VISIT OUR OFFICE
          </h3>
        </div>

        {/* Subtitle */}
        <h1 className="text-[#252B42] text-center pt-5 text-sm sm:text-4xl font-bold ">
          We help small businesses <br />
          with big ideas
        </h1>

        {/* Team Members */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:mt-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center p-5">
            <div className="px-6 sm:px-[40px] py-10 sm:py-[80px] flex justify-center text-center">
              <ul>
                <li className="flex justify-center pb-5">
                  <Image src={ContactCard1} alt="Business Contact Card1" />
                </li>
                <li className="text-[#252B42] font-bold text-sm sm:text-base">
                  <h3>georgia.young@example.com</h3>
                </li>
                <li className="text-[#252B42] font-bold text-sm sm:text-base">
                  <h3>georgia.young@ple.com</h3>
                </li>
                <li className="text-[#252B42] font-bold text-lg py-5">
                  <h2>Get Support</h2>
                </li>
                <li>
                  <button className="text-[#23A6F0] font-bold text-sm sm:text-base px-6 py-3 sm:px-[25px] sm:py-[15px] border border-[#23A6F0] rounded-full">
                    Submit Request
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center p-5">
            <div className="px-6 sm:px-[40px] py-10 sm:py-[80px] flex justify-center text-center bg-[#252B42]">
              <ul>
                <li className="flex justify-center pb-5">
                  <Image src={ContactCard} alt="Business Contact Card2" />
                </li>
                <li className="text-[#FFFFFF] font-bold text-sm sm:text-base">
                  <h3>georgia.young@example.com</h3>
                </li>
                <li className="text-[#FFFFFF] font-bold text-sm sm:text-base">
                  <h3>georgia.young@ple.com</h3>
                </li>
                <li className="text-[#FFFFFF] font-bold text-lg py-5">
                  <h2>Get Support</h2>
                </li>
                <li>
                  <button className="text-[#23A6F0] font-bold text-sm sm:text-base px-6 py-3 sm:px-[25px] sm:py-[15px] border border-[#23A6F0] rounded-full">
                    Submit Request
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center p-5">
            <div className="px-6 sm:px-[40px] py-10 sm:py-[80px] flex justify-center text-center">
              <ul>
                <li className="flex justify-center pb-5">
                  <Image src={ContactCard2} alt="Business Contact Card3" />
                </li>
                <li className="text-[#252B42] font-bold text-sm sm:text-base">
                  <h3>georgia.young@example.com</h3>
                </li>
                <li className="text-[#252B42] font-bold text-sm sm:text-base">
                  <h3>georgia.young@ple.com</h3>
                </li>
                <li className="text-[#252B42] font-bold text-lg py-5">
                  <h2>Get Support</h2>
                </li>
                <li className="pb-5">
                  <button className="text-[#23A6F0] font-bold text-sm sm:text-base px-6 py-3 sm:px-[25px] sm:py-[15px] border border-[#23A6F0] rounded-full">
                    Submit Request
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBusinesses;
