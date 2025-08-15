"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { Icons } from "../Icons";
import Header from "../common/Header";

// Domain Models
interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HeroSectionProps {
  className?: string;
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
  MOBILE_MENU: 1025,
  CARDS_NORMAL: 1103,
} as const;

const IMAGES = {
  DESKTOP_HEADER_LARGE: "/assets/main-header-1440.png",
  MOBILE_HEADER: "/assets/header-pic.png",
} as const;

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  // Simple state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Responsive Logic
  const isMobileMenu = windowWidth <= BREAKPOINTS.MOBILE_MENU;
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

  // Close menu on desktop
  useEffect(() => {
    if (!isMobileMenu) {
      setIsMenuOpen(false);
    }
  }, [isMobileMenu]);

  // Close menu when clicking on links
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`w-full relative ${className}`}>
      <div
        className="w-full relative bg-cover bg-center bg-no-repeat overflow-hidden 3xl:h-[649px] 2xl:h-[657px] xl:h-[657px] lg:h-[600px] md:h-[594px] h-[594px]"
        style={{
          backgroundImage: `url('${headerImage}')`,
        }}
      >
        {/* Content Container */}
        <div className="flex app-container justify-center w-full h-full">
          <div className="flex flex-col w-full relative h-full">
            <div className="relative z-10 flex flex-col h-full">
              <Header />

              {/* Learn More Button - Fixed positioning to bottom with 40px margin */}
              <div className="absolute lg:hidden block bottom-[40px] left-0 right-0 z-30">
                <Button
                  variant="cta"
                  size="cta"
                  asChild
                  className="lg:w-0 md:w-[227px] w-full h-[54px] group"
                >
                  <Link
                    href="#"
                    onClick={closeMenu}
                    className="font-medium justify-center"
                  >
                    Learn More
                    <div className="group-hover:hidden group-active:hidden">
                      <Icons.UpRightArrowDark />
                    </div>
                    <div className="hidden group-hover:block group-active:block">
                      <Icons.UpRightArrowLight />
                    </div>
                  </Link>
                </Button>
              </div>

              {/* Hero Content - Hidden when mobile menu is open */}
              {!(isMobileMenu && isMenuOpen) && (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex-1 flex items-center">
                    <div className="3xl:mb-[110px] 2xl:mb-[90px] only-lg:mb-[80px] md:mb-[195px] lg:mb-0 mb-[170px]">
                      <h1 className="text-white lg:text-[64px] only-lg:text-[58px] md:text-[48px] text-[38px] lg:font-medium md:font-normal leading-[130%] only-lg:w-[668px] md:w-[596px] lg:w-[668px] w-[370px] font-medium">
                        Global Fuels. Local Delivery. Industrial Precision.
                      </h1>
                      <p className="lg:hidden md:block block text-white mt-[16px] md:text-[24px] text-[20px] font-normal md:w-[596px] w-[370px] tracking-[-1%] leading-[150%]">
                        Supplying high-performance energy solutions to
                        industries, businesses, and global motorsports.
                      </p>
                    </div>
                  </div>

                  <div className="pb-8 md:pb-10 lg:block md:hidden hidden relative">
                    <Button
                      className="w-[254px] h-[54px] only-lg:w-[220px] group absolute bottom-[40px]"
                      variant="cta"
                      size="cta"
                      asChild
                    >
                      <Link
                        className="only-lg:text-[16px]"
                        href="#"
                        onClick={closeMenu}
                      >
                        See Our Products
                        <div className="group-hover:hidden group-active:hidden">
                          <Icons.UpRightArrowDark />
                        </div>
                        <div className="hidden group-hover:block group-active:block">
                          <Icons.UpRightArrowLight />
                        </div>
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full relative z-10 ${!isMobile ? "app-container" : ""}`}
        style={{ marginTop: "0px" }}
      >
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Left Side - Paragraph (shows after 1025px) */}
            {windowWidth > 1025 && (
              <div className="flex-1 lg:max-w-[420px] mt-[30px]">
                <p className="text-[24px] tracking-[-1%] leading-[150%] only-lg:text-[20px] text-black">
                  Supplying high-performance energy solutions to industries,
                  businesses, and global motorsports.
                </p>
              </div>
            )}

            {/* Feature Cards */}
            <div
              className={`${
                windowWidth > 1025 ? "flex-1 lg:flex-grow" : "w-full"
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
                            <p className="text-black text-[16px] tracking-[-1%] leading-[140%]">
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
                <div className="flex justify-center mt-[24px] items-center lg:gap-5 md:gap-[33px] gap-5">
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
                        <p className="text-black text-[16px] tracking-[-1%] leading-[140%]">
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
                          <p className="text-black text-[16px] only-lg:text-[14px] tracking-[-1%] leading-[140%]">
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
