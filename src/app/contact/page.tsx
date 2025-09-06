import ContactHeroSection from "@/components/pages/contact_us/ContactHeroSection";
import ContactUs from "@/components/sections/ContactUs";
import FAQS from "@/components/sections/FAQS";
import MapSection from "@/components/sections/MapSection";
import React from "react";

function ContactUsPage() {
  return (
    <div>
      <ContactHeroSection />
      <div className="lg:mt-[170px] md:mt-[100px] mt-[110px] container-custom">
        <div className="max-w-[1280px] w-full mx-auto">
          <ContactUs/>
        </div>
      </div>
      <div className="container-custom">
        <div className="max-w-[1280px] w-full mx-auto">
          <MapSection/>
        </div>
      </div>
      <div className="container-custom">
        <div className="2xl:mb-[170px] md:mb-[100px] xs:mb-[109px] max-w-[1280px] mx-auto">
          <FAQS/>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
