"use client";

import React, { useRef, useState } from "react";
import Swiper1 from "./Swiper1";

const FreshPerspectives: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className="container-custom space-y-[39px] lg:space-y-[56px]">
            <div className="w-full mx-auto text-black
                flex items-end justify-between">

                <div className="w-full">
                    <h2 className="gradientText font-medium text-[12px] md:text-[16px] leading-[140%] uppercase">
                        Fresh Perspectives
                    </h2>
                    <div className="text-[34px] lg:text-[48px] leading-[133%]">
                        Art in Rotation
                    </div>
                    <p className="text-[16px] leading-[140%] md:text-[20px] md:leading-[150%] tracking-[-0.2] mt-[7px] max-w-[544px] w-full">
                        Due to space limitations, only part of the collection is on display at any given time in our offices. To offer a dynamic experience, we rotate the exhibited works every few months
                    </p>
                </div>

                {/* External Navigation */}
                {isBeginning && isEnd ? null : (
                    <div className="hidden md:flex gap-[20px] lg:gap-[26px] pb-[10px] 3xl:gap-[26px] 3xl:pb-[8px] pr-[5px] 3xl:pr-[32px]">
                        {/* Prev */}
                        <button
                            ref={prevRef}
                            className={`w-10 h-10 rounded-full flex items-center justify-center 
                                ${isBeginning
                                    ? "bg-gray-200"
                                    : "bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639]"
                                }`}
                        >
                            <svg width="19" height="15" viewBox="0 0 19 15" fill="none">
                                <path
                                    d="M8.1638 0.92015L1.7999 7.28411M1.7999 7.28411L8.1638 13.6481M1.7999 7.28411L18.7704 7.28411"
                                    stroke={isBeginning ? "#171515" : "white"}
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </button>

                        {/* Next */}
                        <button
                            ref={nextRef}
                            className={`w-10 h-10 rounded-full flex items-center justify-center 
                                ${isEnd
                                    ? "bg-gray-200"
                                    : "bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639]"
                                }`}
                        >
                            <svg width="19" height="15" viewBox="0 0 19 15" fill="none">
                                <path
                                    d="M10.8362 0.92015L17.2001 7.28411M17.2001 7.28411L10.8362 13.6481M17.2001 7.28411L0.229563 7.28411"
                                    stroke={isEnd ? "#171515" : "white"}
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </button>
                    </div>
                )}

            </div>

            <div className="w-full 3xl:pr-[26px]">
                <Swiper1
                    prevEl={prevRef}
                    nextEl={nextRef}
                    setIsBeginning={setIsBeginning}
                    setIsEnd={setIsEnd}
                />
            </div>

        </div>
    );
};

export default FreshPerspectives;
