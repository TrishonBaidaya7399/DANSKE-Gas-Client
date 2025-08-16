import Header from "@/components/common/Header";
import AboutUs from "@/components/sections/AboutUs";
import ContactUs from "@/components/sections/ContactUs";
import CTA from "@/components/sections/CTA";
import FAQS from "@/components/sections/FAQS";
import HeroSection from "@/components/sections/HeroSection";
import News from "@/components/sections/News";
import OurSupply from "@/components/sections/OurSupply";
import OurValues from "@/components/sections/OurValues";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-full">
        <HeroSection />
      </div>
      <AboutUs />
      <OurValues />
      <CTA />
      <OurSupply />
      <News />
      <FAQS />
      <ContactUs />
    </div>
  );
};

export default page;
