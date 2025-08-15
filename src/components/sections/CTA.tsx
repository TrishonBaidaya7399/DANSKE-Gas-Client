import Image from "next/image";
import React from "react";
import { Icons } from "../Icons";

const CTA_CONTENT = {
  sectionTitle: "WE POWER THE BEST",
  mainHeading: "Trusted to Fuel the FIA World Rally Championship",
};

const CTA = () => {
  return (
    <div className="lg:mt-[170px] md:mt-[100px] mt-[110px] lg:mb-0 md:mb-[0px] mb-[110px] app-container">
      <div className="relative ">
        {/* Desktop Image and Tablet Image*/}
        <Image
          src={"/assets/trusted-section.webp"}
          overrideSrc={"/assets/trusted-section.webp"}
          placeholder='blur'
          blurDataURL={"/assets/trusted-section-compressed.webp"}
          alt={"trusted-section"}
          width={1000}
          height={500}
          className="w-full lg:h-[370px] md:h-[320px] h-full rounded-[24px] md:block hidden lg:block"
          style={{
            objectPosition: "70% center", // Change this value to control position
          }}
        />

        {/* Mobile  */}
        <Image
          src={"/assets/cta-mobile.webp"}
          overrideSrc={"/assets/cta-mobile.webp"}
          placeholder='blur'
          blurDataURL={"/assets/cta-mobile-compressed.webp"}
          alt={"trusted-section-mobile"}
          width={1000}
          height={500}
          className="w-full h-[600px] rounded-[12px] block lg:hidden md:hidden"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 lg:pl-[40px] lg:pt-[57px] md:pl-[24px] md:pt-[40px] pl-[16px] pt-[24px] flex flex-col">
          {/* Text content */}
          <div className="text-white relative">
            <span className="lg:text-[16px] md:text-[14px] text-[12px] text-light-gray font-medium tracking-wide block">
              {CTA_CONTENT.sectionTitle}
            </span>
            <h2 className="lg:text-[40px] md:text-[37px] text-[28px] lg:w-[480px] md:w-[280px] w-[280px] text-off-white md:font-normal font-medium leading-[133%] tracking-[0%] lg:block md:hidden block">
              {CTA_CONTENT.mainHeading}
            </h2>{" "}
            <h2 className="lg:text-[40px] md:text-[37px] text-[28px] lg:w-[480px] md:w-[100%] w-[280px] text-off-white md:font-normal font-medium leading-[133%] tracking-[0%] lg:hidden md:block hidden">
              Trusted to Fuel <br /> the FIA World Rally <br /> Championship
            </h2>
          </div>
          {/* Logos */}
          <div className="flex items-center lg:justify-normal md:justify-normal justify-center gap-[51px] lg:mt-[40px] md:mt-[30px] mt-auto mb-[40px] lg:mb-0 md:mb-0 ">
            <div className="w-[88px] h-[36px]">
              <div className="mt-[14px]">
                <Icons.wrcLogo />
              </div>
            </div>
            <div className="w-[77px] h-[44px]">
              <Icons.oilLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
