import React from "react";
import Greenheader from "@/components/GreenHeader";
import Navbar from "@/components/navber";
import Shop from "@/components/Shop";
import Filter from "@/components/Filter";
import CompanyLogo from "@/components/CompanyLogo";
import ShopList from "@/components/ShopList";

const page = () => {
  return (
    <div>
      <Greenheader />
      <Navbar />
      <Shop />
      <Filter />
      <CompanyLogo />
      <ShopList />
    </div>
  );
};

export default page;
