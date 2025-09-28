"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { eventData } from "@/data/poweringCulture";

interface EventCard {
    id: string;
    date: string;
    title: string;
    description: string;
    imageUrl: string;
    compressedImageUrl?: string;
    imageAlt: string;
}

interface PoweringCultureProps {
    PoweringCulturePage?: boolean
}


const PoweringCulture: React.FC<PoweringCultureProps> = ({ PoweringCulturePage }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [isMdBreakpoint, setIsMdBreakpoint] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkBreakpoint = () => {
            setIsMdBreakpoint(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        checkBreakpoint();
        window.addEventListener("resize", checkBreakpoint);

        return () => window.removeEventListener("resize", checkBreakpoint);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const ArrowIcon = () => (
        <svg
            width="12"
            height="12"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 15.2222L12.9091 2.38604L3.45455 2.38604V0.849315C3.45455 0.758919 3.63636 0.578126 3.72727 0.578126L15.7273 0.578126C15.8182 0.578126 15.9091 0.668524 16 0.849315L16 12.7815C16 12.8719 15.9091 13.0527 15.7273 13.0527H14.1818V3.83236L1.36364 16.5781"
                fill="url(#paint0_linear_139_679)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_139_679"
                    x1="-5.03703"
                    y1="-1.68113"
                    x2="-3.6481"
                    y2="20.933"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F99639" />
                    <stop offset="0.552885" stopColor="#D80A00" />
                    <stop offset="1" stopColor="#A01800" />
                </linearGradient>
            </defs>
        </svg>
    );

    // Reorder cards for md layout only
    const getCardOrder = (index: number) => {
        if (index === 2) return 0; // Third card first
        if (index === 0) return 1; // First card second
        if (index === 1) return 2; // Second card third
        return index;
    };

    // Get ordered cards based on breakpoint
    const getOrderedCards = () => {
        const cardsWithIndex = eventData.map((event, index) => ({
            event,
            originalIndex: index,
        }));

        if (isMdBreakpoint) {
            return cardsWithIndex.sort(
                (a, b) => getCardOrder(a.originalIndex) - getCardOrder(b.originalIndex)
            );
        }

        return cardsWithIndex; // Keep original order for mobile and lg
    };

    return (
        <div className="container-custom" ref={sectionRef}>
            <div>
                {/* Header Section */}
                <div className="pb-[40px]">
                    <span
                        className="text-[12px] md:text-[16px] leading-[140%] font-medium inline-block uppercase bg-clip-text text-transparent"
                        style={{
                            background:
                                "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        sponsorship initiatives

                    </span>

                    <h2 className="text-[48px] leading-[133%] lg:block hidden">
                        Powering Culture
                    </h2>{" "}
                    <h2 className="text-[34px] leading-[133%] lg:hidden md:block hidden">
                        Powering Culture
                    </h2>{" "}
                    <h2 className="text-[34px] md:text-[48px] leading-[133%] lg:hidden md:hidden block">
                        Powering Culture
                    </h2>
                    <p className="text-[16px] lg:text-[20px] 
                        leading-[140%] lg:leading-[150%] 
                        max-w-[494px] lg:max-w-[550px] tracking-[-0.2px] w-full 
                        pt-[7px] lg:pt-[8px]">
                        We believe art is a vital part of community and innovation. Energy moves the world. Art moves people. We’re proud to support both.
                    </p>
                </div>

                {/* Event Cards Section */}
                <div className="3xl:pt-[3px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[26px] sm:gap-y-[30px] md:gap-x-[25px] md:gap-y-[40px] lg:gap-x-[40px] lg:gap-y-[40px] mx-auto 3xl:px-[1px]">
                    {getOrderedCards().map(({ event, originalIndex }, sortedIndex) => (
                        <div
                            key={event.id}
                            className={`bg-off-white flex flex-col gap-[17px] sm:gap-y-[20px] lg:gap-y-[0] p-[20px] rounded-2xl transition-all duration-600 ease-out overflow-hidden w-full h-full cursor-pointer hover:-translate-y-1 
                                ${originalIndex === 2 ? "md:flex md:flex-row md:col-span-2 lg:flex lg:flex-col lg:col-span-1 lg:mb-0"
                                    : ""
                                } ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                                }`}
                            style={{
                                transitionDelay: isVisible ? `${sortedIndex * 150}ms` : "0ms",
                                transitionProperty: "all",
                                transitionDuration: "0.3s",
                                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                            onMouseEnter={() => setHoveredCard(event.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="h-full flex flex-col justify-between">
                                <div className="w-full">
                                    {/* Image-Container */}
                                    <div
                                        className={`relative ${originalIndex === 2
                                            ? "md:w-[347px] md:h-[242px] w-full md:flex-shrink-0 md:order-2 lg:w-full lg:h-[242px] lg:order-none h-[242px]"
                                            : "h-[242px] md:h-[240px] lg:h-[240px]"
                                            }`}
                                    >
                                        <div className="relative rounded-lg">
                                            <Image
                                                src={event.imageUrl}
                                                overrideSrc={event.imageUrl}
                                                placeholder="blur"
                                                blurDataURL={event.compressedImageUrl}
                                                alt={event.imageAlt}
                                                className={`rounded-[10px] object-cover ${originalIndex === 2
                                                    ? "md:w-[347px] w-full h-[242px] md:h-[242px] lg:w-[100%] lg:h-[242px]"
                                                    : "w-[100%] h-[242px] md:h-[241px] lg:h-[241px]"
                                                    }`}
                                                priority={event.id === "1"}
                                                height={242}
                                                width={originalIndex === 2 ? 347 : 357}
                                            />
                                        </div>
                                    </div>
                                    {/* Content Container */}
                                    <div
                                        className={`flex flex-col lg:pt-[8px] pl-[1px] lg:pl-0 
                                            ${originalIndex === 2
                                                ? "md:flex-1 md:order-1 md:pr-6 lg:pr-0 lg:order-none"
                                                : ""
                                            }`}
                                    >
                                        {/* Date with Vending Machine Animation */}
                                        <div className="text-[14px] md:text-[16px] text-dark-gray font-normal lg:mt-[12px] h-5 overflow-hidden relative">
                                            <div
                                                className={`transform transition-transform duration-400 ease-in-out ${hoveredCard === event.id
                                                    ? "-translate-y-5"
                                                    : "translate-y-0"
                                                    }`}
                                            >
                                                {event.date}
                                            </div>
                                            <div
                                                className={`absolute top-5 left-0 transform transition-transform duration-400 ease-in-out ${hoveredCard === event.id
                                                    ? "-translate-y-5"
                                                    : "translate-y-0"
                                                    }`}
                                            >
                                                <Link
                                                    href={`#`}
                                                    className="text-dark-gray hover:bg-gradient-to-r hover:from-[#A01800] hover:via-[#D80A00] hover:to-[#F99639] hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:underline underline-offset-2"
                                                >
                                                    By Danske Gas
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="max-w-[300px] w-full lg:max-w-full text-[20px] lg:text-[24px] pt-[6px] tracking-[-0.2px] leading-[150%] font-normal text-black mb-1">
                                            {event.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[16px] leading-[140%] tracking-[-0.2px]">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Read More Button */}
                                <Link
                                    href={`#`}
                                    className={`inline-flex items-center gap-[18px] transition-all duration-300 self-start group
                                            ${originalIndex === 2
                                            ? "mt-[26px] md:mt-[58px] lg:mt-[26px]"
                                            : "mt-[26px] md:mt-[25px] lg:mt-[26px]"
                                        }
                                        `}
                                >
                                    <span className="text-[12px] md:text-[16px] leading-[140%] font-medium bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] bg-clip-text text-transparent">
                                        READ MORE
                                    </span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowIcon />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PoweringCulture;
