import React from "react";
import AboutHero from "@/components/AboutHero";
import AboutProblemsTrying from "@/components/AboutProblemsTrying";
import AboutCustomers from "@/components/AboutCustomers";
import AboutVideo from "@/components/AboutVideo";
import AboutTeam from "@/components/AboutTeam";
import AboutClients from "@/components/AboutClients";
import AboutTestimonials from "@/components/AboutTestimonials";

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutProblemsTrying />
      <AboutCustomers />
      <AboutVideo />
      <AboutTeam />
      <AboutClients />
      <AboutTestimonials />
    </div>
  );
};

export default page;
