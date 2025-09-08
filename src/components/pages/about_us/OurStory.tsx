"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Domain Models
interface OurStoryProps {
    className?: string;
}

interface StatItem {
    id: string;
    value: number;
    suffix: string;
    label: string;
}

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
            <div className="hidden xl:grid grid-cols-4 pt-[86px] gap-[26px] 3xl:gap-6">
                {STATS_DATA.map((stat, index) => {
                    const count = counters[index] || 0;

                    return (
                        <React.Fragment key={stat.id}>
                            <div className="relative w-full h-full">
                                {/* Desktop Vertical Divider - Only show on desktop and not on last item */}
                                {index < STATS_DATA.length - 1 && (
                                    <div
                                        className="absolute z-10 -right-[15px] 3xl:right-[-13px] top-0 w-[1.5px] h-full shrink-0"
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
            <div className="hidden md:grid xl:hidden pt-[64px] items-center w-full">
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
            <div className="flex flex-col md:hidden pt-[25px] gap-[2.5px]">
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

const OurStory: React.FC<OurStoryProps> = ({ className = "" }) => {
    return (
        <div className="relative">
            {/* Our Story Section */}
            <div className="w-full px-4 md:px-[40px] xl:px-0 flex flex-col xl:flex-row justify-between gap-[30px] md:gap-[48px] xl:gap-[90px]">
                {/* left image */}
                <div className="relative max-w-[613px] w-full h-[390px] rounded-r-3xl overflow-hidden hidden xl:block">
                    <Image
                        src={"/assets/AboutUs-page/whatMovesLeft.png"}
                        overrideSrc={"/assets/AboutUs-page/whatMovesLeft.png"}
                        placeholder='blur'
                        blurDataURL={"/assets/AboutUs-page/whatMovesLeft.png"}
                        alt={"img"}
                        fill
                        className="w-full h-full object-cover object-right"
                    />
                </div>

                {/* center text area start */}
                <div className="w-full max-w-[544px] mx-auto space-y-2 md:space-y-[23px] xl:space-y-4 shrink-0">
                    {/* logo svg */}
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center gap-4 md:gap-6">
                            <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.741945 26.2455C0.804704 25.2146 0.65698 24.0912 0.741945 23.0728C1.07119 19.1149 3.07946 15.0386 5.75877 12.1588L17.9243 0H18.0208C21.0004 3.05222 21.2119 7.75581 18.409 11.0104L1.17643 28.1656C0.951462 28.1704 0.946635 26.4545 0.741945 26.2445V26.2455Z" fill="#E4242C" />
                                <path d="M24.7374 8.85259C24.9903 8.80827 25.925 10.213 26.0775 10.4779C27.4823 12.9261 27.5103 15.9166 26.2388 18.4284C25.4393 20.0075 24.0412 21.0991 22.8401 22.3496C17.7654 27.6313 12.5033 32.7607 7.3542 37.9797C7.23931 38.0934 7.15145 38.0877 7.01338 38.026C6.85793 37.9557 6.13862 36.9354 6.00634 36.7167C4.00386 33.4197 4.55517 29.3983 7.10607 26.5792L24.7374 8.85259Z" fill="#171515" />
                                <path d="M30.4444 19.6217C30.6722 19.561 31.0787 20.1342 31.2428 20.3346C33.087 22.5833 33.9695 25.9323 32.6496 28.6521C31.9911 30.0096 30.0263 31.5993 28.9266 32.7314C25.2779 36.4889 21.5741 40.2155 17.881 43.9393C17.5132 44.2206 17.0536 43.445 16.8248 43.155C14.7354 40.5074 14.0499 36.5081 16.3777 33.7893L30.4444 19.6226V19.6217Z" fill="#E4242C" />
                            </svg>
                            <h2 className="gradientText font-medium text-[12px] md:text-[16px] leading-[140%] text-center">
                                OUR STORY
                            </h2>
                        </div>
                        <h1 className="text-[34px] xl:text-[40px] leading-[133%] xl:font-medium text-center">
                            Danske Gas - Supplying What Moves the World
                        </h1>
                    </div>

                    <p className="text-black text-[16px] md:text-[20px] leading-[140%] md:leading-[150%] tracking-[-0.2] text-center md:px-4">
                        With over 15 years of experience in energy import and distribution, Danske Gas supports critical industries with certified fuels, technical gases, and chemical products. Our operations span across both fossil-based and renewable energy — helping our clients stay efficient today and future-ready tomorrow.
                    </p>
                </div>

                {/* right image start */}
                <div className="relative max-w-[754px] mx-auto xl:mx-0 xl:max-w-[613px] w-full h-[265px] md:h-[250px] xl:h-[390px] rounded-l-2xl rounded-r-2xl xl:rounded-l-3xl xl:rounded-r-[0px] overflow-hidden">
                    <Image
                        src={"/assets/AboutUs-page/whatMovesRight.png"}
                        overrideSrc={"/assets/AboutUs-page/whatMovesLeft.png"}
                        placeholder='blur'
                        blurDataURL={"/assets/AboutUs-page/whatMovesLeft.png"}
                        alt={"img"}
                        fill
                        className="w-full h-full object-cover object-left"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="container-custom">
                <div className="max-w-[1285px] mx-auto">
                    <Stats />
                </div>
            </div>
        </div>
    );
};

export default OurStory;
