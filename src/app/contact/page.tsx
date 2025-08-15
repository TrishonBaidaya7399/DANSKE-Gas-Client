import ContactUsHeader from "@/components/pages/contact_us/ContactHeader";
import ContactUs from "@/components/sections/ContactUs";
import FAQS from "@/components/sections/FAQS";
import MapSection from "@/components/sections/MapSection";
import React from "react";

function ContactUsPage() {
  return (
    <div>
      <ContactUsHeader />
      <ContactUs/>
      <MapSection/>
      <FAQS/>
    </div>
  );
}

export default ContactUsPage;
