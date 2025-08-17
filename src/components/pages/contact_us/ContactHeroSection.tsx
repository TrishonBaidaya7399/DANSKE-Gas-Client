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
        className={`w-full relative bg-cover bg-center bg-no-repeat overflow-hidden 3xl:h-[480px] lg:h-[400px] h-[344px]`}
        style={backgroundStyle}
      >
        <div className="flex container-custom justify-center w-full h-full">
          <div className="flex flex-col w-full relative h-full">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-end justify-start mt-auto">
                  <div className="lg:mb-[60px] md:mb-[20px] mb-[23px]">
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
                      <span className="font-semibold text-[13px] leading-[140%]">Contact Us</span>
                    </nav>

                    <motion.h1
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      className="text-white 3xl:text-[164px] lg:text-[120px] text-[72px] leading-[123%] font-normal tracking-[0]"
                    >
                      Contact Us
                    </motion.h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-800 py-4 overflow-hidden flex">
        <Marquee speed={50} gradient={false} className="flex">
          {MARQUEE_ITEMS.map((item, index) => (
            <span
              key={index}
              className="text-white font-bold xl:text-[48px] lg:text-[32px] text-[28px] uppercase tracking-wider mr-[100px]"
            >
              {item}
            </span>
          ))}
        </Marquee>
        s
      </div>
    </div>
  );
};

export default ContactHeroSection;
