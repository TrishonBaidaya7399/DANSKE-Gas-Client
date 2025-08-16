import ContactHeroSection from "@/components/pages/contact_us/ContactHeroSection";
import ContactUs from "@/components/sections/ContactUs";
import FAQS from "@/components/sections/FAQS";
import MapSection from "@/components/sections/MapSection";
import React from "react";

function ContactUsPage() {
  return (
    <div>
      <ContactHeroSection />
      <ContactUs/>
      <MapSection/>
      <FAQS/>
    </div>
  );
}

export default ContactUsPage;
