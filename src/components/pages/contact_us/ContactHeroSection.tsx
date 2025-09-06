"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

interface ContactHeroSectionProps {
  className?: string;
}

const MARQUEE_ITEMS = [
  "INDUSTRIAL FOCUS",
  "RELIABLE DELIVERY",
  "CERTIFIED IMPORTS",
];

const BREAKPOINTS = {
  MOBILE_LOGO: 786,
  MOBILE_MENU: 1025,
} as const;

const ContactHeroSection: React.FC<ContactHeroSectionProps> = ({
  className = "",
}) => {
  const [windowWidth, setWindowWidth] = useState(1200);

  const isMobileMenu = windowWidth <= BREAKPOINTS.MOBILE_MENU;
  const isMobileLogo = windowWidth <= BREAKPOINTS.MOBILE_LOGO;

  const backgroundStyle = {
    backgroundImage: isMobileLogo
      ? "url('/assets/Backgrounds/ContactUsMobileBackground.webp')"
      : "url('/assets/Backgrounds/ContactUsBackground.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

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
            3xl:bg-[url('/assets/contract-page/bg-1920.png')] 3xl:h-[560px]
            lg:bg-[url('/assets/contract-page/bg-1440.png')] lg:h-[490px]
            md:bg-[url('/assets/contract-page/bg-834.png')] md:h-[493px]
            bg-[url('/assets/contract-page/bg-402.png')] h-[410px]
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
              pb-[64px] md:pb-[86px] lg:pb-[96px] 3xl:pb-[96px] 
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
                Contact Us
              </span>
            </nav>

            <h1 className="text-[48px] font-normal lg:text-[64px] lg:font-medium leading-[123%]">
              Let’s Talk
            </h1>

            <p className="text-[20px] md:text-[24px] leading-[150%] max-w-[568px]">
              Reach out to start a conversation about tailored fuel, gas or chemical supply for your business.
            </p>

          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden flex items-center justify-center 
        py-[8px] 3xl:py-[10px]
        bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639]"
      >
        <Marquee speed={50} gradient={false} className="flex">
          {MARQUEE_ITEMS.map((item, index) => (
            <span
              key={index}
              className="text-white font-medium xl:text-[48px] lg:text-[32px] text-[28px] uppercase tracking-wider mr-[100px]"
            >
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ContactHeroSection;
