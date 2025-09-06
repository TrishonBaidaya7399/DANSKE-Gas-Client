"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/Icons";

// Domain Models
interface whyChooseUsProps {
    className?: string;
}

interface whyChooseUsContent {
    description: string;
}

interface StatItem {
    id: string;
    value: number;
    suffix: string;
    label: string;
}

// Configuration
const WHY_CHOOSE_US_CONTENT: whyChooseUsContent = {
    description:
        "Danske Gas supplies more than just products — we deliver a system built on scale, consistency, and trust. Our conventional energy solutions support key industries across Europe with full compliance, technical documentation, and international logistics. With over 15 years of experience in fuel import and a 99.9% on-time delivery rate, we make sure that your supply chain runs without interruptions.",
};

const STATS_DATA: StatItem[] = [
    {
        id: "1",
        value: 100000,
        suffix: "+",
        label: "tons of fuel and energy products imported annually",
    },
    {
        id: "2",
        value: 30,
        suffix: "+",
        label: "industries served across Central and Northern Europe",
    },
    {
        id: "3",
        value: 99.9,
        suffix: "%",
        label: "on-time delivery rate across all logistics channels",
    },
    {
        id: "4",
        value: 15,
        suffix: "",
        label: "years of experience in energy import and logistics",
    },
];

const IMAGES = {
    DANSKE_GAS: "/assets/OurProduct-page/conventional-energy/why-choose-us.png",
    DANSKE_GAS_compressed: "/assets/danske-gas-compressed.webp",
} as const;

// Custom hook for managing multiple counters
const useMultipleCounters = (
    stats: StatItem[],
    duration: number = 2000,
    shouldStart: boolean = false
) => {
    const [counts, setCounts] = useState<number[]>(
        new Array(stats.length).fill(0)
    );

    useEffect(() => {
        if (!shouldStart) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(stats.map((stat) => stat.value * easeOut));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [stats, duration, shouldStart]);

    return counts;
};

// Stats Component
const Stats: React.FC<{ className?: string }> = ({ className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Use the new hook that manages all counters
    const counters = useMultipleCounters(STATS_DATA, 2000, isVisible);

    const gradientStyle = {
        background:
            "linear-gradient(266.49deg, #A01800 -15.12%, #D80A00 58.77%, #F99639 118.54%)",
    };

    // Intersection Observer
    useEffect(() => {
        const currentRef = sectionRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className=""
        >
            {/* Desktop Layout */}
            <div className="hidden xl:grid grid-cols-4 pt-[70px] gap-[26px] 3xl:gap-0">
                {STATS_DATA.map((stat, index) => {
                    const count = counters[index] || 0;

                    return (
                        <React.Fragment key={stat.id}>
                            <div className="relative w-full h-full">
                                {/* Desktop Vertical Divider - Only show on desktop and not on last item */}
                                {index < STATS_DATA.length - 1 && (
                                    <div
                                        className="absolute z-10 -right-[13px] 3xl:right-[10px] top-0 w-[1.5px] h-full shrink-0"
                                        style={gradientStyle}
                                    />
                                )}

                                {/* Stat Content */}
                                <div className="px-[20px] py-[30px] h-full">
                                    <div className="">
                                        <span className="text-[52px] font-medium text-black leading-[150%]">
                                            {stat.value % 1 !== 0
                                                ? count.toFixed(1)
                                                : Math.floor(count).toLocaleString()}
                                        </span>
                                        <span className="text-[52px] font-medium text-black leading-[150%]">
                                            {stat.suffix}
                                        </span>
                                    </div>

                                    <p className="text-[20px] text-black leading-[145%] w-full max-w-[258px]">
                                        {stat.label}
                                    </p>
                                </div>

                            </div>
                        </React.Fragment>
                    );
                })}
            </div>

            {/* Tablet Layout - 2x2 Grid */}
            <div className="hidden md:grid xl:hidden pt-[46px] items-center w-full">
                <div className=" ">
                    {/* Top Row */}
                    <div className="grid grid-cols-2 mb-5 relative">
                        {/* Centered Vertical Divider for top row */}
                        <div
                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1.5px] h-[194px]"
                            style={gradientStyle}
                        />

                        {STATS_DATA.slice(0, 2).map((stat, index) => {
                            const count = counters[index] || 0;

                            return (
                                <div key={stat.id} className="flex flex-col">
                                    <div className="p-[24px]">
                                        <div className="">
                                            <span className="text-[52px] leading-[150%] font-medium text-black tracking-[-0.3px]">
                                                {stat.value % 1 !== 0
                                                    ? count.toFixed(1)
                                                    : Math.floor(count).toLocaleString()}
                                            </span>
                                            <span className="text-[52px] leading-[150%] font-medium text-black tracking-[-0.3px]">
                                                {stat.suffix}
                                            </span>
                                        </div>

                                        <p className="text-[20px] text-black leading-[150%] w-full max-w-[260px] tracking-[-0.2px]">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Horizontal Divider */}
                    <div className="w-full h-[1.5px] mb-6" style={gradientStyle} />

                    {/* Bottom Row */}
                    <div className="grid grid-cols-2 relative">
                        {/* Centered Vertical Divider for bottom row */}
                        <div
                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1.5px] h-[194px]"
                            style={gradientStyle}
                        />

                        {STATS_DATA.slice(2, 4).map((stat, index) => {
                            const count = counters[index + 2] || 0;

                            return (
                                <div key={stat.id} className="flex flex-col">
                                    <div className="p-[24px]">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[52px] leading-[150%] font-medium text-black tracking-[-0.3px]">
                                                {stat.value % 1 !== 0
                                                    ? count.toFixed(1)
                                                    : Math.floor(count).toLocaleString()}
                                            </span>
                                            <span className="text-[52px] leading-[150%] font-medium text-black tracking-[-0.3px]">
                                                {stat.suffix}
                                            </span>
                                        </div>

                                        <p className="text-[20px] text-black leading-[150%] w-full max-w-[255px] tracking-[-0.2px]">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex flex-col md:hidden pt-[61px] gap-[2.5px]">
                {STATS_DATA.map((stat, index) => {
                    const count = counters[index] || 0;

                    return (
                        <React.Fragment key={stat.id}>
                            <div className="flex flex-col py-6">
                                <div className="">
                                    <span className="text-[52px] leading-[150%] font-medium text-black tracking-[-0.3px]">
                                        {stat.value % 1 !== 0
                                            ? count.toFixed(1)
                                            : Math.floor(count).toLocaleString()}
                                    </span>
                                    <span className="text-[52px] leading-[150%] font-medium text-black tracking-[-0.3px]">
                                        {stat.suffix}
                                    </span>
                                </div>

                                <p className="text-[20px] text-black leading-[150%] w-full max-w-[260px] tracking-[-0.2px]">
                                    {stat.label}
                                </p>
                            </div>

                            {/* Mobile Horizontal Divider - Only show on mobile and not on last item */}
                            {index < STATS_DATA.length - 1 && (
                                <div className="w-full h-[2px] my-4" style={gradientStyle} />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

const whyChooseUs: React.FC<whyChooseUsProps> = ({ className = "" }) => {
    return (
        <div className="bg-white relative">
            {/* About Us Section */}
            <div className="flex flex-col lg:flex-row items-start gap-[22px] md:gap-[24px] lg:gap-[56px]">

                <div className="relative rounded-[16px] px-4 py-[19px] md:py-[39px] md:px-[41px] lg:p-[38px] 3xl:p-[39px] overflow-hidden
                lg:max-w-[632px] w-full h-[265px] md:h-[250px] lg:h-[370px]"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={IMAGES.DANSKE_GAS}
                            alt="Danske Gas Industrial Facility"
                            fill
                            className="w-full h-full object-cover"
                            priority
                            overrideSrc={IMAGES.DANSKE_GAS}
                            placeholder="blur"
                            blurDataURL={IMAGES.DANSKE_GAS_compressed}
                        />
                    </div>
                </div>

                {/* Right Grid - Content */}
                <div className="w-full">

                    <div className="text-[34px] lg:text-[48px] leading-[133%] pb-4 md:pb-2 lg:pb-6">
                        Why Choose Us
                    </div>

                    <div className="lg:max-w-[544px] w-full">
                        {WHY_CHOOSE_US_CONTENT.description.split("\n").map((paragraph, index) => (
                            <p
                                key={index}
                                className={`w-full text-[20px] leading-[150%] text-black tracking-[-0.2px] 
                                ${index === 0 && "mb-4"}`}
                            > 
                            
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            {/* Stats Section */}
            <Stats />
        </div>
    );
};

export default whyChooseUs;
