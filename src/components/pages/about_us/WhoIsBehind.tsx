"use client";

import React from "react";
import Image from "next/image";
import Swiper1 from "./Swiper1"; // adjust the import path if needed

const WhoIsBehind: React.FC = () => {
    return (
        <div className="w-full max-w-[1378px] rounded-[28px] md:rounded-[40px] overflow-hidden mx-auto relative bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639]">

            <div className="w-full flex flex-col xl:flex-row justify-between items-stretch h-full">
                {/* Image Section */}
                <div className="relative xl:max-w-[540px] w-full h-[258px] md:h-[465px] xl:h-[600px]">
                    <Image
                        src={"/assets/AboutUs-page/sliderPerson-1.png"}
                        alt="Danske Gas Team"
                        fill
                        placeholder="blur"
                        blurDataURL={"/assets/AboutUs-page/whatMovesLeft.png"}
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Text Area */}
                <div className="relative w-full xl:w-[61%] ml-auto">
                    <div className="absolute bottom-0 right-0 h-full">
                        {/* Background SVG */}
                        <div className="h-full max-w-[461px] w-full max-h-[600px]">
                            <svg
                                className="h-full w-full"
                                viewBox="0 0 462 625"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.494203 372.557C1.38535 357.942 -0.712275 342.016 0.494203 327.579C5.16931 271.469 33.6861 213.679 71.7313 172.853L244.477 0.480469H245.848C288.157 43.7512 291.159 110.433 251.359 156.572L6.66369 399.779C3.46927 399.847 3.40072 375.521 0.494203 372.543V372.557Z"
                                    fill="white"
                                    fillOpacity="0.07"
                                />
                                <path
                                    d="M341.001 126.069C344.591 125.442 357.854 145.318 360.019 149.066C379.956 183.705 380.353 226.019 362.308 261.558C350.962 283.901 331.122 299.346 314.076 317.04C242.058 391.771 167.382 464.348 94.3086 538.193C92.678 539.801 91.4311 539.72 89.4717 538.847C87.2657 537.852 77.0576 523.416 75.1805 520.321C46.7623 473.672 54.5862 416.772 90.7871 376.885L341.001 126.069Z"
                                    fill="white"
                                    fillOpacity="0.07"
                                />
                                <path
                                    d="M421.389 278.501C424.611 277.64 430.357 285.768 432.678 288.609C458.75 320.49 471.226 367.97 452.566 406.53C443.257 425.776 415.479 448.314 399.931 464.364C348.347 517.635 295.985 570.469 243.774 623.263C238.573 627.251 232.075 616.256 228.84 612.144C199.302 574.608 189.61 517.908 222.52 479.362L421.389 278.515V278.501Z"
                                    fill="white"
                                    fillOpacity="0.07"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full h-full space-y-[36px] md:space-y-[32px] xl:space-y-[60px] pb-[55px] md:pb-[88px] xl:pb-0 overflow-hidden">
                        {/* Heading */}
                        <div className="pt-[51px] md:pt-[61px] xl:pt-[80px] px-5 md:px-[78px] xl:px-[96px] text-white">
                            <h1 className="text-[12px] md:text-[16px] leading-[140%] font-medium tracking-[0.3]">ZARZAD</h1>
                            <div className="pt-[4px] xl:pt-0 text-[34px] md:text-[40px] xl:text-[48px] leading-[133%]">
                                Who is behind <br />
                                <span className="font-medium">Danske Gas</span>
                            </div>
                        </div>

                        {/* Swiper Section */}
                        <div className="bg-[rgba(37,34,34,0.64)]">
                            <Swiper1 />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default WhoIsBehind;
