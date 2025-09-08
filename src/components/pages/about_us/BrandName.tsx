"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const BrandName: React.FC = () => {
    return (
        <div className="w-full">
            <div className="w-full flex gap-8 md:gap-10 lg:gap-5 flex-col lg:flex-row justify-between">
                <div className="lg:max-w-[517px] w-full">
                    <h2 className="gradientText font-medium text-[12px] md:text-[16px] leading-[140%] uppercase">
                        Main Shareholder
                    </h2>
                    <div className="text-[34px] md:text-[40px] lg:text-[65px] leading-[123%] font-medium">
                        Brandname - <br /> Main Shareholder
                    </div>
                    <p className="text-[16px] leading-[140%] tracking-[-0.1] lg:tracking-[-0.2] lg:max-w-[517px] w-full pt-[20px] lg:pt-[10px]">
                        Danske Gas operates as part of a larger capital group, backed by a strong and experienced main shareholder. This partnership gives us access to stable financing, global procurement channels, and the infrastructure needed to scale operations across Europe — from fossil fuels to green energy.
                    </p>
                </div>
                <div className="lg:max-w-[650px] w-full relative h-[204px] md:h-[306px] rounded-[12px] overflow-hidden">
                    <Image
                        src={"/assets/AboutUs-page/BrandName-img.png"}
                        alt="Danske Gas Team"
                        fill
                        placeholder="blur"
                        blurDataURL={"/assets/AboutUs-page/BrandName-img.png"}
                        className="w-full h-full object-cover object-right"
                    />
                </div>
            </div>
            <div className="pt-[40px] md:pt-[43px] lg:pt-[100px] grid grid-cols-1 md:grid-cols-3 gap-[32px] lg:gap-[84px]">
                <div className="w-full space-y-2">
                    <h3 className="text-[18px] lg:text-[22px] font-bold leading-[110%]">
                        Global Network
                    </h3>
                    <p className="text-[16px] leading-[140%] tracking-[-0.1]">
                        Thanks to our shareholder’s international presence, we benefit from direct relationships with trusted producers, refineries, and logistics partners across Europe and beyond.
                    </p>
                </div>
                <div className="w-full space-y-2">
                    <h3 className="text-[18px] lg:text-[22px] font-bold leading-[110%]">
                        Scalable Operations
                    </h3>
                    <p className="text-[16px] leading-[140%] tracking-[-0.1]">
                        With access to group-level resources, we’re equipped to take on complex projects, scale up deliveries, and expand our product portfolio whether it’s conventional fuels or green electricity
                    </p>
                </div>
                <div className="w-full space-y-2">
                    <h3 className="text-[18px] lg:text-[22px] font-bold leading-[110%]">
                        Strong Governance
                    </h3>
                    <p className="text-[16px] leading-[140%] tracking-[-0.1]">
                        Operating under a shareholder with a proven corporate governance model means we adhere to best practices in compliance, risk management, and transparency
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BrandName;
