import ConventionalHero from "@/components/pages/our_products/conventionalEnergy/ConventionalHero";
import React from "react";
import ProductTabs from "../productTabs";
import WhyChooseUs from "../whyChooseUs";
import ContactUs from "@/components/sections/ContactUs";

function conventionalEnergy() {
  return (
    <div className="w-full">
        <ConventionalHero/>

        <div className="pt-[58px] md:pt-[82px] 3xl:pt-[150px]">
          <ProductTabs/>
        </div>

        <div className="container-custom pt-[110px] md:pt-[98px] lg:pt-[169.5px] 3xl:pt-[148.5px] pb-[134px] md:pb-[100px] lg:pb-[170px]">
          <div className="w-full max-w-[1240px] mx-auto">
            <WhyChooseUs/>
          </div>
        </div>

          <div className="container-custom">
            <div className="w-full max-w-[1280px] mx-auto pb-[110px] md:pb-[100px] lg:pb-[170px]">
              <ContactUs/>
            </div>
          </div>


    </div>
  );
}

export default conventionalEnergy;
