import React from "react";
import Image from "next/image";

import product1 from "../../public/Images/product1.png";
import product2 from "../../public/Images/product2.png";
import product3 from "../../public/Images/product3.png";
import product4 from "../../public/Images/product4.png";
import product5 from "../../public/Images/product5.png";
import product6 from "../../public/Images/product6.png";
import product7 from "../../public/Images/product7.png";
import product8 from "../../public/Images/product8.png";
import product9 from "../../public/Images/product9.png";
import product10 from "../../public/Images/product10.png";
import product11 from "../../public/Images/product11.png";
import product12 from "../../public/Images/product12.png";
import product13 from "../../public/Images/product13.png";
import product14 from "../../public/Images/product14.png";
import product15 from "../../public/Images/product15.png";
import product16 from "../../public/Images/product16.png";
import product17 from "../../public/Images/product17.png";
import product18 from "../../public/Images/product18.png";
import product19 from "../../public/Images/product19.png";
import product20 from "../../public/Images/product20.png";
const Products = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h4 className="font-semibold text-center mb-1 text-xl text-[#737373]">
          Featured Products
        </h4>
        <h2 className="text-center font-semibold text-3xl md:text-5xl mt-5 text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-center mt-5 mb-10 font-light text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {[
            product1,
            product2,
            product3,
            product4,
            product5,
            product6,
            product7,
            product8,
            product9,
            product10,
            product11,
            product12,

            product14,
            product13,
            product15,

            product16,

            product17,
            product18,
            product19,
            product20,
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center"
            >
              <Image
                src={product}
                alt={`Product ${index + 1}`}
                className="rounded-md"
              />
              <h3 className="font-bold text-center text-[#252B42] pt-5">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="font-bold text-[#23856D]">$6.48</span>
              </h6>
              <div className="flex justify-center space-x-2 py-3">
                {[14, 15, 16, 17].map((ellipse, i) => (
                  <Image
                    key={i}
                    src={`/Ellipse ${ellipse}.png`}
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
