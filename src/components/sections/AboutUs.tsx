"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "../Icons";

// Domain Models
interface AboutUsProps {
  className?: string;
}

interface AboutContent {
  sectionTitle: string;
  mainHeading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

// Configuration
const ABOUT_CONTENT: AboutContent = {
  sectionTitle: "WHO WE ARE",
  mainHeading: "Danske Gas - Supplying What Moves the World",
  description:
    "Danske Gas powers industries, engines, and champions. From high-performance racing fuels to technical gases and industrial chemicals — we import what matters, when it matters.\nOur team combines deep industry knowledge, global supply chain access, and a sharp focus on innovation and sustainability. Trusted by major players across Europe, and officially fueling the World Rally Championship — we don't just deliver products. We deliver energy that performs.",
  buttonText: "Learn More",
  buttonHref: "#",
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
  DANSKE_GAS: "/assets/danske-gas.webp",
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
      className={`app-container lg:mt-[70px] md:mt-[40px] mt-[60px] ${className}`}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-4 h-[194px]  items-center gap-[14px] lg:gap-16">
        {STATS_DATA.map((stat, index) => {
          const count = counters[index] || 0;

          return (
            <React.Fragment key={stat.id}>
              <div className="relative flex flex-col">
                {/* Desktop Vertical Divider - Only show on desktop and not on last item */}
                {index < STATS_DATA.length - 1 && (
                  <div
                    className="absolute left-[calc(100%+2rem)] top-1/2 transform -translate-y-1/2 w-[2px] h-[194px]"
                    style={gradientStyle}
                  />
                )}

                {/* Stat Content */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-[48px] lg:text-[52px] font-medium text-black leading-none">
                      {stat.value % 1 !== 0
                        ? count.toFixed(1)
                        : Math.floor(count).toLocaleString()}
                    </span>
                    <span className="text-[48px] lg:text-[52px] font-medium text-black leading-none">
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="text-[20px] text-black leading-[1.4] lg:w-full w-[235px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Tablet Layout - 2x2 Grid */}
      <div className="hidden md:grid lg:hidden h-[454px] items-center w-full">
        <div className=" ">
          {/* Top Row */}
          <div className="grid grid-cols-2 mb-8 relative">
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
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-[48px] font-medium text-black leading-none">
                        {stat.value % 1 !== 0
                          ? count.toFixed(1)
                          : Math.floor(count).toLocaleString()}
                      </span>
                      <span className="text-[48px] font-medium text-black leading-none">
                        {stat.suffix}
                      </span>
                    </div>

                    <p className="text-[20px] text-black leading-[1.4] lg:w-full w-[280px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-[1.5px] mb-8" style={gradientStyle} />

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
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-[48px] font-medium text-black leading-none">
                        {stat.value % 1 !== 0
                          ? count.toFixed(1)
                          : Math.floor(count).toLocaleString()}
                      </span>
                      <span className="text-[48px] font-medium text-black leading-none">
                        {stat.suffix}
                      </span>
                    </div>

                    <p className="text-[20px] text-black leading-[1.4] lg:w-full w-[280px]">
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
      <div className="flex flex-col md:hidden gap-[14px]">
        {STATS_DATA.map((stat, index) => {
          const count = counters[index] || 0;

          return (
            <React.Fragment key={stat.id}>
              <div className="flex flex-col py-6">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-[48px] font-medium text-black leading-none">
                    {stat.value % 1 !== 0
                      ? count.toFixed(1)
                      : Math.floor(count).toLocaleString()}
                  </span>
                  <span className="text-[48px] font-medium text-black leading-none">
                    {stat.suffix}
                  </span>
                </div>

                <p className="text-[20px] text-black leading-[1.4]  w-[260px]">
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

const AboutUs: React.FC<AboutUsProps> = ({ className = "" }) => {
  return (
    <div className="bg-white relative z-20 lg:mt-[68px] md:mt-[100px] mt-[110px]">
      {/* About Us Section */}
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full grid-cols-1">
            <div className="relative rounded-2xl h-[265px] md:h-[250px] lg:h-[370px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={IMAGES.DANSKE_GAS}
                  alt="Danske Gas Industrial Facility"
                  height={370}
                  width={634}
                  className="w-full h-full rounded-[16px]"
                  priority
                  overrideSrc={IMAGES.DANSKE_GAS}
                  placeholder="blur"
                  blurDataURL={IMAGES.DANSKE_GAS_compressed}
                />
              </div>

              {/* Text Overlay */}
              <div className="relative z-10 lg:pl-[40px] lg:pt-[40px] md:pl-[40px] md:pt-[40px] pl-[16px] pt-[24px] pr-[40px] h-full flex flex-col justify-start">
                <div className="text-white">
                  <span className=" lg:text-[16px] md:text-[16px]  text-[12px] text-off-white font-medium tracking-wide block">
                    {ABOUT_CONTENT.sectionTitle}
                  </span>
                  <h2 className="lg:text-[40px] md:text-[34px] md:font-normal only-lg:w-[450px] text-[28px] text-off-white leading-[133%] tracking-[0%] font-medium lg:w-[550px] md:w-[538px] w-[350px]">
                    {ABOUT_CONTENT.mainHeading}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid - Content */}
          <div className="w-full grid-cols-1 flex flex-col justify-between lg:pl-[56px] lg:h-[370px] mt-[24px] md:mt-8 lg:mt-0">
            <div className="">
              {ABOUT_CONTENT.description.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={` w-full lg:text-[20px] md:text-[20px] text-[16px] font-normal text-black leading-[150%] tracking-[-1%] ${
                    index === 0 && "mb-4"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Learn Button - Positioned at the very bottom */}
            <div className="flex lg:mt-[60px] md:mt-10 mt-8">
              <Button
                variant="cta-gradient"
                size="cta"
                className="font-medium lg:w-[205px] md:w-[205px] w-full h-[54px] text-[16px] relative z-10"
              >
                <Link
                  href={ABOUT_CONTENT.buttonHref}
                  className="inline-flex items-center gap-2 relative z-10"
                >
                  <span className="relative z-10">
                    {ABOUT_CONTENT.buttonText}
                  </span>
                  <span className="relative z-10">
                    <Icons.UpRightArrowLight />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </div>
  );
};

export default AboutUs;
