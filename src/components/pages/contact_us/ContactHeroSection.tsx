"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
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
  const marqueeRef = useRef<HTMLDivElement>(null);

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
    if (marqueeRef.current) {
      const marqueeItems = marqueeRef.current.children;
      const itemWidth = 300;
      const totalWidth = itemWidth * MARQUEE_ITEMS.length;

      gsap.set(marqueeRef.current, { x: 0 });

      gsap.to(marqueeRef.current, {
        x: -totalWidth,
        duration: 15,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => Number.parseFloat(x) % totalWidth),
        },
      });
    }
  }, []);

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
        className={`w-full relative bg-cover bg-center bg-no-repeat overflow-hidden lg:h-[480px] md:h-[400px] h-[344px]`}
        style={backgroundStyle}
      >
        <div className="flex app-container justify-center w-full h-full">
          <div className="flex flex-col w-full relative h-full">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-end justify-start mt-auto">
                  <div className="lg:mb-[60px] md:mb-[20px] mb-[23px]">
                    <nav className="text-gray-200 text-[14px] font-normal">
                      <Link
                        href="/"
                        className="hover:underline transition-all duration-300"
                      >
                        Homepage
                      </Link>
                      <span className="mx-2">{"/"}</span>
                      <span className="font-semibold">Contact Us</span>
                    </nav>

                    <motion.h1
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      className="text-white lg:text-[164px] only-lg:text-[164px] md:text-[148px] text-[72px] lg:font-medium md:font-normal leading-[123%] font-medium"
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

      <div className="bg-red-800 py-4 overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap gap-[100px]"
          style={{ width: "max-content" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, index) => (
              <span
                key={index}
                className="text-white font-bold xl:text-[48px] lg:text-[32px] text-[28px]  uppercase tracking-wider"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
