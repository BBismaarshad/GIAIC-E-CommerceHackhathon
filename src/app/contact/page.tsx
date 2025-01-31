import React from "react";
// import Greenheader from '@/components/GreenHeader';
import Greenheader from "@/components/GreenHeader";
import ContactHero from '@/components/ContactHero';
import ContactBusinesses from '@/components/ContactBusinesses';
import Contacttalk from '@/components/Contacttalk';


const page = () => {
  return (
    <div>
      <Greenheader/>
      <ContactHero />
      <ContactBusinesses />
      <Contacttalk />
    </div>
  );
};

export default page;
