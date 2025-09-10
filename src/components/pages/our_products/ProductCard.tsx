"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
    overlayColor: string;
    direction?: "left" | "right";
    hovered: boolean; // own hover
    otherHovered: boolean; // other card hover
    setHovered: (v: boolean) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    subtitle,
    description,
    image,
    link,
    overlayColor,
    direction = "left",
    hovered,
    otherHovered,
    setHovered,
}) => {
    return (
        <div
            className="w-full relative 
            h-[50vh] lg:h-screen 
            overflow-hidden group"
        >
            {/* background image */}
            <img
                src={image}
                alt={`${title} ${subtitle}`}
                className="w-full h-full object-cover"
            />

            {/* text content */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2,
                }} className="absolute inset-0 flex flex-col items-start justify-end z-20">
                <div className="pl-4 md:pl-[40px] lg:pl-[80px] 3xl:pl-0 3xl:max-w-[653px] 3xl:ml-auto w-full">
                    <div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="w-full max-w-[330px] lg:max-w-[423px] text-white space-y-[6px] lg:space-y-6 mb-[38px] md:mb-[100px]">
                        <div className="text-[34px] lg:text-[48px] leading-[133%]">
                            <span className="flex gap-2">
                                <span>
                                    {title}
                                </span>
                                <span className="inline-block lg:hidden">
                                    {subtitle}
                                </span>
                            </span>

                            <span className="hidden lg:flex items-end gap-[20px]">
                                <span>{subtitle}</span>
                                <Link
                                    href={link}
                                    className={`whitespace-nowrap relative z-50 
                                    inline-flex items-center justify-center
                                    h-[40px] text-[18px] leading-[140%] 
                                    font-medium rounded-full
                                    transition-all duration-500
                                    mb-1.5
                                    ${hovered ? "max-w-[163px] w-full" : "max-w-[40px] w-full overflow-hidden"}
                                    ${otherHovered ? "bg-transparent text-white border-white border" : "bg-white text-black border-transparent border"}`}
                                >
                                    <span className="w-full flex items-center justify-center">
                                        {/* "Learn More" expands */}
                                        <span className={`transition-all duration-500 overflow-hidden 
                                                    ${hovered ? "max-w-[95px] w-full mr-2 relative z-0" : "max-w-[0px] w-full"
                                            }`}
                                        >
                                            Learn More
                                        </span>
                                        <svg
                                            className={`shrink-0 relative z-30 transition-all duration-500 ${otherHovered ? "stroke-white" : "stroke-black"}`}
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M4 1H13M13 1L13 10M13 1L1 13" strokeWidth="1.5" />
                                        </svg>
                                    </span>
                                </Link>
                            </span>
                        </div>

                        <div className="text-[20px] mb-[20px] lg:mb-0 leading-[150%] tracking-[-0.2]">
                            {description}
                        </div>
                        <div className="block lg:hidden">
                            <Link
                                href={link}
                                className="text-black bg-white rounded-full inline-flex items-center justify-center gap-[10px] max-w-[163px] w-full text-[18px] leading-[140%] font-medium py-2"
                            >

                                {/* "Learn More" expands */}
                                <span>
                                    Learn More
                                </span>

                                <svg
                                    className={`shrink-0 relative z-30 transition-all duration-500 stroke-black`}
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4 1H13M13 1L13 10M13 1L1 13" strokeWidth="1.5" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* sliding overlay */}
            <span
                style={{ background: overlayColor }}
                className={`absolute inset-0 z-10 transition-transform duration-500 
                        ${hovered ? "translate-x-0" : direction === "left" ? "translate-x-full" : "-translate-x-full"
                    }`}
            ></span>
        </div>
    );
};

export default ProductCard;
