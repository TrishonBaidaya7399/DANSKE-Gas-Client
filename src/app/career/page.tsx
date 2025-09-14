import CareerHeroSection from "@/components/pages/career/CareerHeroSection";
import ContactUs from "@/components/sections/ContactUs";
import FAQS from "@/components/sections/FAQS";
import MapSection from "@/components/sections/MapSection";
import React from "react";

function CareerPage() {
  return (
    <div>

      <CareerHeroSection/>

      <div className="mt-[72px] md:mt-[100px] 3xl:mt-[110px] container-custom">
        <div className="max-w-[1280px] w-full mx-auto">
          <ContactUs/>
        </div>
      </div>

      {/* <div className="container-custom">
        <div className="max-w-[1280px] w-full mx-auto">
          <MapSection/>
        </div>
      </div> */}


    </div>
  );
}

export default CareerPage;
