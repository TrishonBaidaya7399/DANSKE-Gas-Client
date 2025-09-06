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
      <HeroSection />
      <AboutUs />
      <OurValues />
      <CTA />
      <OurSupply />
      <News />
      <div className="container-custom">
        <div className="max-w-[1280px] mx-auto w-full">
          <FAQS />
        </div>
      </div>
      <div className="container-custom">
        <div className="lg:py-[170px] md:py-[100px] py-[112px] max-w-[1280px] mx-auto">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default page;
