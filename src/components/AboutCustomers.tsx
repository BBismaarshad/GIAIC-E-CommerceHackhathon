import React from "react";

const AboutCustomers = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Happy Customers */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-semibold text-[#252B42]">
              15K
            </h1>
            <h4 className="mt-2 text-base sm:text-lg font-bold text-[#737373]">
              Happy Customers
            </h4>
          </div>

          {/* Monthly Visitors */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-semibold text-[#252B42]">
              150K
            </h1>
            <h4 className="mt-2 text-base sm:text-lg font-bold text-[#737373]">
              Monthly Visitors
            </h4>
          </div>

          {/* Countries Worldwide */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-semibold text-[#252B42]">
              15
            </h1>
            <h4 className="mt-2 text-base sm:text-lg font-bold text-[#737373]">
              Countries Worldwide
            </h4>
          </div>

          {/* Top Partners */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-semibold text-[#252B42]">
              100+
            </h1>
            <h4 className="mt-2 text-base sm:text-lg font-bold text-[#737373]">
              Top Partners
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCustomers;
