import React from "react";
import AboutUsHeroSection from "@/components/pages/about_us/AboutUsHeroSection";
import Image from "next/image";
import OurStory from "@/components/pages/about_us/OurStory";
import Swiper1 from "@/components/pages/about_us/Swiper1";

function sustainableEnergy() {
    return (
        <div className="w-full">
            <AboutUsHeroSection />

            <div className="w-full pt-[74px] pb-[110px] md:pt-[100px] md:py-[100px] xl:pt-[170px] xl:pb-[170px]">
                <OurStory />
            </div>

            <div className="px-4 md:px-[40px] lg:px-[31px] 3xl:px-0 3xl:max-w-[1378px] w-full mx-auto">
                <div className="w-full max-w-[1378px] rounded-[40px] overflow-hidden mx-auto relative bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] flex flex-col xl:flex-row">

                    <div className="relative xl:max-w-[540px] w-full h-[465px] xl:h-[600px] shrink-0">
                        <Image
                            src={"/assets/AboutUs-page/sliderPerson-1.png"}
                            overrideSrc={"/assets/AboutUs-page/whatMovesLeft.png"}
                            placeholder='blur'
                            blurDataURL={"/assets/AboutUs-page/whatMovesLeft.png"}
                            alt={"img"}
                            fill
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* text area */}
                    <div className="relative w-full h-full">
                        {/* bg svg */}
                        <div className="h-full max-w-[461px] w-full max-h-[600px] ml-auto">
                            <svg className="h-full w-full" viewBox="0 0 462 625" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.494203 372.557C1.38535 357.942 -0.712275 342.016 0.494203 327.579C5.16931 271.469 33.6861 213.679 71.7313 172.853L244.477 0.480469H245.848C288.157 43.7512 291.159 110.433 251.359 156.572L6.66369 399.779C3.46927 399.847 3.40072 375.521 0.494203 372.543V372.557Z" fill="white" fill-opacity="0.07" />
                                <path d="M341.001 126.069C344.591 125.442 357.854 145.318 360.019 149.066C379.956 183.705 380.353 226.019 362.308 261.558C350.962 283.901 331.122 299.346 314.076 317.04C242.058 391.771 167.382 464.348 94.3086 538.193C92.678 539.801 91.4311 539.72 89.4717 538.847C87.2657 537.852 77.0576 523.416 75.1805 520.321C46.7623 473.672 54.5862 416.772 90.7871 376.885L341.001 126.069Z" fill="white" fill-opacity="0.07" />
                                <path d="M421.389 278.501C424.611 277.64 430.357 285.768 432.678 288.609C458.75 320.49 471.226 367.97 452.566 406.53C443.257 425.776 415.479 448.314 399.931 464.364C348.347 517.635 295.985 570.469 243.774 623.263C238.573 627.251 232.075 616.256 228.84 612.144C199.302 574.608 189.61 517.908 222.52 479.362L421.389 278.515V278.501Z" fill="white" fill-opacity="0.07" />
                            </svg>
                        </div>

                        <div className="w-full absolute top-0 left-0 h-full space-y-[60px]">

                            {/* text area start */}
                            <div className="pt-[80px] px-[96px] text-white">
                                <div className="">
                                    <h1 className="text-[16px] leading-[140%] font-medium">ZARZAD</h1>
                                    <div className="text-[48px] leading-[133%]">
                                        Who is behind <br/>
                                        <span className="font-medium pl-1.5">
                                             Danske Gas
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[rgba(37,34,34,0.64)]">
                                <Swiper1 />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default sustainableEnergy;
