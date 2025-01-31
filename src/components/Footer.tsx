import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="p-10">
        <div className="max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            <div className="mb-5">
              <h4 className="pb-4 font-bold text-[#252B42]">Company Info</h4>
              <ul>
                <li className="pb-4 font-bold text-[#737373]">
                  {" "}
                  <a href="#" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Carrier
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    We are hiring
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-5">
              <h4 className="pb-4 font-bold text-[#252B42]">Legal</h4>
              <ul>
                <li className="pb-4 font-bold text-[#737373]">
                  {" "}
                  <a href="#" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Carrier
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    We are hiring
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-bold text-[#252B42]">Features</h4>
              <ul>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Business Marketing
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    User Analytic
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Live Chat
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Unlimited Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-bold text-[#252B42]">Resources</h4>
              <ul>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Resources
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    IOS & Android
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Watch a Demo
                  </a>
                </li>
                <li className="pb-4 font-bold text-[#737373]">
                  <a href="#" className="hover:text-blue-500">
                    Customers
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-bold text-[#252B42]">Get In Touch </h4>

              <form className="flex flex-row flex-wrap ">
                <input
                  type="text"
                  className="w-2/3 p-2  border-current text-[#737373] focus:border-yellow-300"
                  placeholder="Your Email"
                />
                <button className="p-2 w1/3 font-light bg-[#23A6F0] hover:bg-[#276d96] text-white">
                  Subscribe
                </button>
              </form>
              <p className="pb-2 pt-2">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#E6E6E6] px-10">
        <div className=" max-w-7xl flex  flex-col sm:flex-row py-4 mx-auto justify-between">
          <div className="text-center ">
            <div className="text-[#737373]">
              Made With Love By Finland All Right Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
