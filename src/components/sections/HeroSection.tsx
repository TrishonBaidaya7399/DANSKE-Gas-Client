"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { Icons } from "../Icons";

// Domain Models
interface HeaderProps {
  className?: string;
}

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Configuration
const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "1",
    title: "Certified Imports",
    description: "Direct supply from trusted global producers.",
    icon: <Icons.Imports />,
  },
  {
    id: "2",
    title: "Industrial Focus",
    description: "Tailored for energy, logistics and motorsport.",
    icon: <Icons.Industrial />,
  },
  {
    id: "3",
    title: "Reliable Delivery",
    description: "Fast, safe, fully documented transport.",
    icon: <Icons.Delivery />,
  },
];

const BREAKPOINTS = {
  MOBILE_LOGO: 786,
  MOBILE_MENU: 1025,
  DESKTOP_LARGE: 1275,
  CARDS_NORMAL: 1103,
} as const;

const IMAGES = {
  DESKTOP_HEADER_LARGE: "/assets/main-header-1440.webp",
  MOBILE_HEADER: "/assets/header-pic.webp",
} as const;

const HeroSection: React.FC<HeaderProps> = ({ className = "" }) => {
  const [windowWidth, setWindowWidth] = useState(1200);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Responsive Logic
  const isMobile = windowWidth <= 768; // Mobile breakpoint
  const isTablet = windowWidth > 768 && windowWidth <= 1025; // Tablet breakpoint
  const isDesktop = windowWidth > 1025; // Desktop breakpoint

  // Updated header image logic with three breakpoints
  const getHeaderImage = () => {
    if (windowWidth <= 1025) {
      return IMAGES.MOBILE_HEADER;
    } else {
      return IMAGES.DESKTOP_HEADER_LARGE;
    }
  };

  const headerImage = getHeaderImage();

  // Updated gradient style using your custom colors
  const gradientStyle = {
    background:
      " linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
  };

  // GSAP Seamless Marquee Animation - For mobile only (2x slower)
  useEffect(() => {
    if (isMobile && marqueeRef.current) {
      const cardWidth = 249; // 229px + 20px gap
      const originalCardsCount = FEATURE_CARDS.length;
      const singleSetWidth = cardWidth * originalCardsCount;

      gsap.set(marqueeRef.current, { x: 0 });

      const tl = gsap.timeline({ repeat: -1 });
      tl.to(marqueeRef.current, {
        x: -singleSetWidth,
        duration: 10, // Made 2x slower - changed from 5 to 10
        ease: "none",
        onComplete: () => {
          gsap.set(marqueeRef.current, { x: 0 });
        },
      });

      return () => {
        tl.kill();
      };
    }
  }, [isMobile]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className={`w-full relative ${className}`}>
      {/* Header Container - Fixed height */}
      <div
        className="w-full relative bg-cover bg-center bg-no-repeat overflow-hidden
          3xl:bg-[url('/assets/header-pic/bg.webp')] 3xl:h-[649px]
          lg:bg-[url('/assets/header-pic/lg-bg.webp')] lg:h-[657px]
          md:bg-[url('/assets/header-pic/md-bg.webp')] md:h-[594px]
          bg-[url('/assets/header-pic/sm-bg.webp')] h-[594px]
        "
      >
        {/* Content Container */}
        <div className="container-custom w-full h-full relative z-10">
          {/* Hero Content */}
          <div className="w-full h-full 
            max-w-[596px] lg:max-w-[668px] 
            pt-[130px] md:pt-[128px] lg:pt-[185px] 3xl:pt-[175px]"
          >
            <div className="">
              <h1 className="text-white 
                text-[38px] leading-[123%] font-medium
                md:text-[48px] md:leading-[133%] md:font-normal
                lg:text-[64px] lg:leading-[123%] lg:font-medium">
                Global Fuels. Local Delivery. Industrial Precision.
              </h1>
              <p className="block lg:hidden text-white
                text-[20px] md:text-[24px] leading-[150%] tracking-[-0.2px]
                pt-4">
                Supplying high-performance energy solutions to industries,
                businesses, and global motorsports.
              </p>
            </div>

            <div className="relative pt-[125px] md:pt-[156px] lg:pt-[140px]">
              <Link className="text-[18px] leading-[140%] 
                    text-black rounded-full bg-white font-medium
                    inline-flex items-center justify-center gap-[10px]
                    w-full md:w-[227px] lg:w-[251px] 
                    p-[14.5px] group transition-all duration-300
                    hover:text-white hover:bg-black"
                href="#"
              >
                <span>
                  See Our Products
                </span>

                <svg className="stroke-black transition-all duration-300 group-hover:stroke-white" 
                  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 1.47656H13M13 1.47656L13 10.4766M13 1.47656L1 13.4766" stroke-width="1.5" />
                </svg>

              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section Below Header - PROPERLY CONTAINED */}
      <div
        className={`w-full relative z-10 ${!isMobile ? "app-container" : ""}`}
        style={{ marginTop: "0px" }}
      >
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Left Side - Paragraph (shows after 1025px) */}
            {windowWidth > 1025 && (
              <div className="flex-1 lg:max-w-[420px] mt-[30px]">
                <p className="text-[24px] tracking-[-1%] leading-[150%] only-lg:text-[20px]   text-black  ">
                  Supplying high-performance energy solutions to industries,
                  businesses, and global motorsports.
                </p>
              </div>
            )}

            {/* Feature Cards */}
            <div
              className={`${windowWidth > 1025 ? "flex-1 lg:flex-grow" : "w-full"
                }`}
            >
              {/* Mobile - Marquee Animation (2x Slower) */}
              {isMobile && (
                <div className="overflow-hidden mt-[24px]">
                  <div className="relative h-full flex items-center">
                    <div
                      ref={marqueeRef}
                      className="flex gap-5"
                      style={{ width: "max-content" }}
                    >
                      {/* Triple the cards for seamless loop */}
                      {[
                        ...FEATURE_CARDS,
                        ...FEATURE_CARDS,
                        ...FEATURE_CARDS,
                      ].map((card, index) => (
                        <div
                          key={`${card.id}-${index}`}
                          className="bg-off-white rounded-xl p-5 w-[229px] h-[180px] flex-shrink-0 relative"
                        >
                          {/* Icon at top right - Fixed positioning */}
                          <div className="absolute top-5 right-5">
                            <div
                              className="w-[46px] h-[46px] rounded-full flex items-center justify-center shadow-md"
                              style={gradientStyle}
                            >
                              {card.icon}
                            </div>
                          </div>

                          {/* Content at bottom left */}
                          <div className="absolute bottom-5 left-5 right-5">
                            <h3 className="text-[18px] font-bold text-black leading-tight mb-2">
                              {card.title}
                            </h3>
                            <p className="text-black text-[16px] tracking-[-1%] leading-[140%] ">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tablet - Static 3 Cards */}
              {isTablet && (
                <div className="flex justify-center mt-[24px] items-center lg:gap-5 md:gap-[33px]  gap-5">
                  {FEATURE_CARDS.map((card) => (
                    <div
                      key={card.id}
                      className="bg-off-white rounded-xl p-5 w-[229px] h-[180px] relative"
                    >
                      {/* Icon at top right - Fixed positioning */}
                      <div className="absolute top-5 right-5">
                        <div
                          className="w-[46px] h-[46px] rounded-full flex items-center justify-center"
                          style={gradientStyle}
                        >
                          {card.icon}
                        </div>
                      </div>

                      {/* Content at bottom left */}
                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="text-[18px] font-bold text-black leading-tight mb-2">
                          {card.title}
                        </h3>
                        <p className="text-black text-[16px] tracking-[-1%] leading-[140%] ">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Desktop - Static Grid with positioning (shows after 1025px) */}
              {windowWidth > 1025 && (
                <div>
                  <div className="flex flex-row justify-end gap-[25px]">
                    {FEATURE_CARDS.map((card) => (
                      <div
                        key={card.id}
                        className="bg-off-white rounded-xl p-[16px] -top-[80px] w-[229px] h-[210px] only-lg:w-[200px] only-lg:h-[190px] relative"
                      >
                        {/* Icon at top right - Fixed positioning */}
                        <div className="absolute top-5 right-5">
                          <div
                            className="w-[46px] h-[46px] only-lg:w-8 only-lg:h-8 rounded-full flex items-center justify-center"
                            style={gradientStyle}
                          >
                            {card.icon}
                          </div>
                        </div>

                        {/* Content at bottom left */}
                        <div className="absolute bottom-[16px]">
                          <h3 className="text-[22px] only-lg:text-[18px] font-bold text-black leading-tight mb-2">
                            {card.title}
                          </h3>
                          <p className="text-black text-[16px] only-lg:text-[14px] tracking-[-1%] leading-[140%] ">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
