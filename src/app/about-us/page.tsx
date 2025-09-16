import React from "react";
import AboutUsHeroSection from "@/components/pages/about_us/AboutUsHeroSection";
import Image from "next/image";
import OurStory from "@/components/pages/about_us/OurStory";
import WhoIsBehind from "@/components/pages/about_us/WhoIsBehind";
import SupervisoryBoard from "@/components/pages/about_us/SupervisoryBoard";
import BrandName from "@/components/pages/about_us/BrandName";
import ContactUs from "@/components/sections/ContactUs";

function sustainableEnergy() {
    return (
        <div className="w-full">
            <AboutUsHeroSection />

            <div className="w-full pt-[74px] pb-[110px] md:pt-[100px] md:pb-[100px] xl:pt-[170px] xl:pb-[170px]">
                <OurStory />
            </div>

            <div className="px-4 md:px-[40px] lg:px-[31px] 3xl:px-0 3xl:max-w-[1378px] w-full mx-auto md:pt-[4px] xl:pt-0">
                <WhoIsBehind/>
            </div>

            <div className="py-[105px] md:py-[100px] lg:py-[170px]">
                <SupervisoryBoard/>
            </div>

            <div className="px-4 md:px-10 lg:px-0 lg:max-w-[1280px] mx-auto">
                <BrandName/>
            </div>

            <div className="px-4 md:px-10 lg:px-0 lg:max-w-[1280px] mx-auto py-[110px] md:py-[100px] lg:py-[170px]">
                <ContactUs/>
            </div>

            


        </div>
    );
}

export default sustainableEnergy;
