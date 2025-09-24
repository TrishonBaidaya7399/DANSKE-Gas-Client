"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  const isTablet = windowWidth <= 1024; // Tablet breakpoint
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
    if (isTablet && marqueeRef.current) {
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
  }, [isTablet]);

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
      <div className="bg-[#F99639] relative z-20">
        <div
          className="w-full relative bg-cover bg-bottom bg-no-repeat overflow-hidden
            3xl:bg-[url('/assets/header-pic/bg.png')] 3xl:h-[649px]
            lg:bg-[url('/assets/header-pic/lg-bg.png')] lg:h-[657px]
            md:bg-[url('/assets/header-pic/md-bg.webp')] md:h-[594px]
            bg-[url('/assets/header-pic/sm-bg.webp')] h-[594px]
          "
        >
          <div className="w-full h-full absolute top-0 left-0">
            <video src="/assets/header-pic/hero-video.mp4" autoPlay muted loop className="w-full h-full object-cover"></video>
          </div>

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

              <div className="relative z-30 pt-[125px] md:pt-[156px] lg:pt-[140px]">
                <Link className="text-[18px] leading-[140%] 
                      text-black rounded-full bg-white font-medium
                      inline-flex items-center justify-center gap-[10px]
                      w-full min-[596px]:w-[227px] lg:w-[251px] 
                      p-[14.5px] group transition-all duration-300
                      hover:text-white hover:bg-black"
                  href="/our-products"
                >
                  <span>
                    See Our Products
                  </span>

                  <svg className="stroke-black transition-all duration-300 group-hover:stroke-white"
                    width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 1.47656H13M13 1.47656L13 10.4766M13 1.47656L1 13.4766" strokeWidth="1.5" />
                  </svg>

                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* rounded area start */}
        <div className="absolute -bottom-1 left-0 w-full hidden lg:block">
          <svg className="w-full" viewBox="0 0 1492 114" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M485.7 110.79H0V114H1492V0H625.65C614.39 0 603.62 4.64 595.88 12.83L515.46 97.96C507.72 106.15 496.96 110.79 485.69 110.79H485.7Z" fill="#fff" />
          </svg>
        </div>
        {/* rounded area start */}

      </div>

      {/* Content Section Below Header - PROPERLY CONTAINED */}
      <div
        className={`w-full relative z-30 ${!isTablet ? "container-custom" : ""}`}
        style={{ marginTop: "0px" }}
      >
        <div className="">
          <div className="flex flex-col lg:flex-row gap-2 justify-between relative">
            {/* Left Side - Paragraph (shows after 1025px) */}
            <p className="hidden lg:block text-black max-w-[415px] w-full
                  text-[20px] md:text-[24px] leading-[150%] tracking-[-0.2px]
                  pt-8"
            >
              Supplying high-performance energy solutions to industries,
              businesses, and global motorsports.
            </p>

            
            <div className="w-full">
              {/* Mobile - Marquee Animation (2x Slower) */}
              <div className="overflow-hidden mt-[24px] block lg:hidden">
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
                        className="bg-[#F9F7F7] rounded-xl px-4 pt-4 pb-6 w-[229px] flex-shrink-0 relative"
                      >
                        {/* Icon at top right - Fixed positioning */}
                        <div
                          className="ml-auto size-[46px] rounded-full flex items-center justify-center"
                          style={gradientStyle}
                        >
                          {card.icon}
                        </div>

                        {/* Content at bottom left */}
                        <div className="text-black">
                          <h3 className="text-[18px] min-[1320px]:text-[22px] leading-[110%] font-bold pt-[22px] pb-[9px] min-[1320px]:pt-[40px] min-[1320px]:pb-[16px]">
                            {card.title}
                          </h3>
                          <p className="text-[16px] min-[1320px]:text-[16px] leading-[140%] tracking-[-0.2px]">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Feature Cards */}
              {/* Desktop - Static Grid with positioning (shows after 1025px) */}
              <div className="hidden lg:flex justify-end
                min-[1320px]:absolute
                relative top-[-50px] min-[1320px]:top-auto 
                min-[1320px]:right-0 min-[1320px]:bottom-0 
                gap-[10px] min-[1320px]:gap-[25px]
                min-[1320px]:pr-[1px] 3xl:pr-[25px]"
              >
                {FEATURE_CARDS.map((card) => (
                  <div
                    key={card.id}
                    className="bg-[#F9F7F7] rounded-[16px] p-[16px]
                      w-[200px] min-[1320px]:w-[229px]
                      px-4 pt-4 pb-6"
                  >
                    {/* Icon at top right - Fixed positioning */}
                    <div
                      className="ml-auto size-[46px] rounded-full flex items-center justify-center"
                      style={gradientStyle}
                    >
                      {card.icon}
                    </div>

                    {/* Content at bottom left */}
                    <div className="text-black">
                      <h3 className="text-[18px] min-[1320px]:text-[22px] leading-[110%] font-bold pt-[20px] pb-[20px] min-[1320px]:pt-[40px] min-[1320px]:pb-[16px]">
                        {card.title}
                      </h3>
                      <p className="text-[14px] min-[1320px]:text-[16px] leading-[140%] tracking-[-0.2px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
