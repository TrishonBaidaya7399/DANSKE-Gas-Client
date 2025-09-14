"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

interface CareerHeroSectionProps {
  className?: string;
}

const MARQUEE_ITEMS = [
  "JOIN THE TEAM",
  "WE ARE HIRING",
  "JOIN THE TEAM",
  "WE ARE HIRING",
  "JOIN THE TEAM",
  "WE ARE HIRING",
  "JOIN THE TEAM",
  "WE ARE HIRING",
];

const BREAKPOINTS = {
  MOBILE_LOGO: 786,
  MOBILE_MENU: 1025,
} as const;

const CareerHeroSection: React.FC<CareerHeroSectionProps> = ({
  className = "",
}) => {
  const [windowWidth, setWindowWidth] = useState(1200);

  const isMobileMenu = windowWidth <= BREAKPOINTS.MOBILE_MENU;
  const isMobileLogo = windowWidth <= BREAKPOINTS.MOBILE_LOGO;

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
      <div
        className={`w-full relative bg-cover bg-center bg-no-repeat overflow-hidden   
            3xl:bg-[url('/assets/career-page/hero-1920.png')] 3xl:h-[476px]
            lg:bg-[url('/assets/career-page/hero-1440.png')] lg:h-[488px]
            md:bg-[url('/assets/career-page/hero-834.png')] md:h-[413px]
            bg-[url('/assets/career-page/hero-402.png')] h-[411px]
        `}
      >
        <div className="container-custom w-full h-full text-white">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="flex flex-col justify-end items-start h-full  
              pb-[75px] md:pb-[51px] lg:pb-[96px] 3xl:pb-[91px] 
              space-y-1"
          >
            <nav
              className="text-gray-200 "
              style={{ letterSpacing: "-1%" }}
            >
              <Link
                href="/"
                className="hover:underline transition-all duration-300 text-[13px] font-normal leading-[140%]"
              >
                Homepage
              </Link>
              <span className="mx-1">{"/"}</span>
              <span className="font-semibold text-[13px] leading-[140%]">
                Careers
              </span>
            </nav>

            <h1 className="text-[40px] md:text-[48px] font-normal lg:text-[64px] lg:font-medium leading-[123%]">
              Work With Us
            </h1>

            <p className="text-[20px] md:text-[24px] leading-[150%] max-w-[300px] md:max-w-[460px] lg:max-w-[510px] 3xl:max-w-[500px] tracking-[-0.2]">
              We’re growing across Europe and we’re building a team that’s ready to grow with us.
            </p>

          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden flex items-center justify-center 
        py-[8px] 3xl:py-[10px]
        bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639]"
      >
        <Marquee speed={50} gradient={false} className="">
          {MARQUEE_ITEMS.map((item, index) => (
            <span
              key={index}
              className="text-white font-medium xl:text-[48px] lg:text-[32px] text-[28px] uppercase tracking-wider ml-[40px] lg:ml-[80px]"
            >
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CareerHeroSection;
