import Image from "next/image";
import React from "react";
import { Icons } from "../Icons";

const CTA_CONTENT = {
  sectionTitle: "WE POWER THE BEST",
  mainHeading: "Trusted to Fuel the FIA World Rally Championship",
};

const CTA = () => {
  return (
    <div className="container-custom pt-[93px] md:pt-[90px] lg:pt-[170px]">
      <div className="relative max-w-[1285px]">
        {/* Desktop Image and Tablet Image*/}
        <Image
          src={"/assets/trusted-section.webp"}
          overrideSrc={"/assets/trusted-section.webp"}
          placeholder='blur'
          blurDataURL={"/assets/trusted-section-compressed.webp"}
          alt={"trusted-section"}
          width={1000}
          height={500}
          className="w-full lg:h-[370px] md:h-[320px] h-full object-cover rounded-[24px] md:block hidden lg:block"
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
          className="w-full h-[600px] object-cover rounded-[12px] block lg:hidden md:hidden"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 
          px-[16px] py-[20px]
          md:px-[24px] md:py-[40px]
          lg:px-[38.5px] lg:py-[55px]
          flex flex-col justify-between
          md:flex-none md:justify-normal"
        >
          {/* Text content */}
          <div className="text-white relative">
            <span className="text-[12px] md:text-[16px] font-medium leading-[140%]">
              {CTA_CONTENT.sectionTitle}
            </span>
            <h2 className="leading-[133%]
              font-medium md:font-normal lg:font-medium
              text-[28px] md:text-[34px] lg:text-[40px] 
              max-w-[300px] lg:max-w-[520px] w-full"
            >
              <span className="hidden lg:block">
                {CTA_CONTENT.mainHeading}
              </span>
              <span className="hidden md:block lg:hidden">
                Trusted to Fuel <br/>
                the FIA World Rally <br/>
                Championship
              </span>
              <span className="block md:hidden">
                Trusted to Fuel the <br/>
                FIA World Rally <br/>
                Championship
              </span>
            </h2>
          </div>
          {/* Logos */}
          <div className="flex items-center 
            justify-center md:justify-normal
            gap-[50px] lg:gap-[55px] 
            pt-[31px] lg:pt-[38px]"
          >
            <div className="w-[80px] lg:w-[88px] lg:h-[36px]">
              <div className="mt-[11px]">
                <Icons.wrcLogo />
              </div>
            </div>
            <div className="">
              <Icons.oilLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
