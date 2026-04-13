import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="p-6 sm:p-8 md:p-10">
        <div className="max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="mb-5">
              <h4 className="pb-4 font-bold text-base sm:text-lg text-[#252B42]">Company Info</h4>
              <ul>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  {" "}
                  <a href="#" className="hover:text-blue-500 transition">
                    About Us
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Career
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    We are hiring
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-5">
              <h4 className="pb-4 font-bold text-base sm:text-lg text-[#252B42]">Legal</h4>
              <ul>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  {" "}
                  <a href="#" className="hover:text-blue-500 transition">
                    About Us
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Career
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    We are hiring
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-bold text-base sm:text-lg text-[#252B42]">Features</h4>
              <ul>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Business Marketing
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    User Analytic
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Live Chat
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Unlimited Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-bold text-base sm:text-lg text-[#252B42]">Resources</h4>
              <ul>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Resources
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    IOS & Android
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Watch a Demo
                  </a>
                </li>
                <li className="pb-3 sm:pb-4 font-bold text-sm sm:text-base text-[#737373]">
                  <a href="#" className="hover:text-blue-500 transition">
                    Customers
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5 sm:mb-0 sm:col-span-2 lg:col-span-1">
              <h4 className="pb-4 font-bold text-base sm:text-lg text-[#252B42]">Get In Touch </h4>

              <form className="flex flex-col sm:flex-row flex-wrap gap-2">
                <input
                  type="text"
                  className="w-full sm:flex-1 p-2 sm:p-3 border border-gray-300 text-[#737373] focus:border-blue-400 focus:outline-none text-sm sm:text-base rounded"
                  placeholder="Your Email"
                />
                <button className="w-full sm:w-auto p-2 sm:p-3 font-light bg-[#23A6F0] hover:bg-[#276d96] text-white rounded transition text-sm sm:text-base">
                  Subscribe
                </button>
              </form>
              <p className="pb-2 pt-3 text-xs sm:text-sm text-[#737373]">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#E6E6E6] px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 sm:py-6 mx-auto justify-between items-center gap-2">
          <div className="text-center sm:text-left">
            <div className="text-xs sm:text-sm text-[#737373]">
              Made With Love By Finland All Right Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
