"use client";
import React, { useState } from "react";
import Image from "next/image";

const Slugcomponents = () => {
  const [path, setPath] = useState("");

  return (
    <div>
      <Image
        src={path ? path : "/Images/product1.png"}
        alt="products"
        width={400}
        height={400}
      />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/Images/product1.png"}
            alt="image"
            width={60}
            height={60}
            onClick={() => setPath("/Images/product1.png")}
          />
        </div>
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/Images/product3.png"}
            alt="image"
            width={60}
            height={60}
            onClick={() => setPath("/Images/product3.png")}
          />
        </div>
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/Images/product4.png"}
            alt="image"
            width={60}
            height={60}
            onClick={() => setPath("/Images/product4.png")}
          />
        </div>
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/Images/product5.png"}
            alt="image"
            width={60}
            height={60}
            onClick={() => setPath("/Images/product5.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Slugcomponents;
