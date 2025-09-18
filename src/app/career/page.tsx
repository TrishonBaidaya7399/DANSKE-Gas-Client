import BenefitsSection from "@/components/pages/career/BenefitsSection";
import CareerHeroSection from "@/components/pages/career/CareerHeroSection";
import GrowingHiring from "@/components/pages/career/GrowingHiring";
import ContactUs from "@/components/sections/ContactUs";
import React from "react";

function CareerPage() {
  return (
    <div>

      <CareerHeroSection/>

      <div className="mt-[72px] md:mt-[100px] 3xl:mt-[170px] container-custom">
        <div id="form" className="max-w-[1280px] w-full mx-auto">
          <ContactUs careerPage/>
        </div>
      </div>

      <div className="mt-[72px] md:mt-[100px] lg:mt-[167px] 3xl:mt-[163px] container-custom">
        <div className="max-w-[1280px] w-full mx-auto">
          <BenefitsSection/>
        </div>
      </div>

      <div className="mt-[72px] md:mt-[75px] lg:mt-[78px] mb-[110px] md:mb-[100px] lg:mb-[166px] container-custom">
        <div className="max-w-[1280px] w-full mx-auto">
          <GrowingHiring/>
        </div>
      </div>
      
    </div>
  );
}

export default CareerPage;
