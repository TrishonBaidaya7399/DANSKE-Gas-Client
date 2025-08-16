"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { Icons } from "../Icons";
import { useRouter } from "next/navigation";

// Domain Models
interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  className?: string;
}

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Language {
  code: string;
  name: string;
}

// Configuration
const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "#" },
  { label: "Our Products", href: "#" },
  { label: "Art", href: "#" },
  { label: "Career", href: "#" },
  { label: "Contact Us", href: "/contact" },
];

const LANGUAGES: Language[] = [
  { code: "EN", name: "English" },
  { code: "PL", name: "Polish" },
  { code: "DE", name: "German" },
  { code: "FR", name: "French" },
];

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
  DESKTOP_LOGO: "/assets/logos/light-logo.svg",
  MOBILE_LOGO: "/assets/logos/mobile-light-logo.svg",
} as const;

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  // Simple state
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [windowWidth, setWindowWidth] = useState(1200);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  // Responsive Logic
  const isMobileMenu = windowWidth <= BREAKPOINTS.MOBILE_MENU;
  const isMobileLogo = windowWidth <= BREAKPOINTS.MOBILE_LOGO;
  const isMobile = windowWidth <= 768; // Mobile breakpoint
  const isTablet = windowWidth > 768 && windowWidth <= 1025; // Tablet breakpoint
  const isDesktop = windowWidth > 1025; // Desktop breakpoint
  const isCardsNormal = windowWidth <= BREAKPOINTS.CARDS_NORMAL;

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

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  // Toggle function
  const toggleMenu = () => {
    console.log("Toggle clicked! Current state:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on links
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Language functions
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (langCode: string) => {
    setSelectedLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className={`w-full relative ${className}`}>
      {/* Header Container - Fixed height */}
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
              {/* Navigation */}
              <div className="2xl:mt-[45px] lg:mt-[36px] mt-[24px]">
                <nav className="flex items-center justify-between">
                  {/* Logo */}
                  <div
                    className="flex-shrink-0 cursor-pointer"
                    onClick={() => router.push("/")}
                  >
                    <Image
                      src={
                        isMobileLogo ? IMAGES.MOBILE_LOGO : IMAGES.DESKTOP_LOGO
                      }
                      alt="Danske Gas"
                      width={isMobileLogo ? 35 : 244}
                      height={isMobileLogo ? 30 : 40}
                      priority
                      className="transition-all duration-300 only-lg:w-[200px] md:w-[224px] md:h-[44px] "
                    />
                  </div>

                  {/* Desktop Navigation */}
                  {!isMobileMenu && (
                    <>
                      <div className="flex justify-center items-center gap-5 lg:gap-10 flex-1 max-w-fit only-lg:px-3 only-lg:ml-0 ml-[150px] ">
                        {NAV_ITEMS.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="text-white cursor-pointer font-normal text-[20px] only-lg:text-[18px] transition-all duration-300 whitespace-nowrap relative group"
                          >
                            {/* Original text */}
                            <span className="transition-opacity duration-300 group-hover:opacity-0">
                              {item.label}
                            </span>

                            {/* Bold text overlay - positioned absolutely */}
                            <span className="absolute inset-0 font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              {item.label}
                            </span>

                            <span className="absolute left-0 -bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        ))}
                      </div>

                      <div
                        className="flex-shrink-0 relative"
                        ref={languageDropdownRef}
                      >
                        <button
                          onClick={toggleLanguageDropdown}
                          className="flex items-center text-white font-normal text-[18px] transition-opacity duration-300 hover:opacity-80 only-lg:text-[16px]  cursor-pointer"
                        >
                          {selectedLanguage}
                          <ChevronDown
                            className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                              isLanguageDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Language Dropdown */}
                        {isLanguageDropdownOpen && (
                          <div className="absolute top-full left-1/2 transform -translate-x-[61.4%] mt-2 py-2 min-w-[80px] z-50">
                            {LANGUAGES.map((language) => (
                              <button
                                key={language.code}
                                onClick={() => selectLanguage(language.code)}
                                className="block w-full text-center px-1 py-1 text-white font-normal text-[18px] leading-[150%] uppercase transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                                style={{
                                  fontWeight: 400,
                                  fontSize: "18px",
                                  lineHeight: "150%",
                                  letterSpacing: "0%",
                                  textTransform: "uppercase",
                                }}
                              >
                                {language.code}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* Mobile Hamburger */}
                  {isMobileMenu && (
                    <button
                      onClick={toggleMenu}
                      aria-label="Toggle menu"
                      className="cursor-pointer z-50"
                    >
                      <Icons.HamBurger />
                    </button>
                  )}
                </nav>
              </div>

              {/* Mobile Menu - Fixed positioning */}
              {isMobileMenu && isMenuOpen && (
                <div className="absolute top-[90px] left-0 right-0 rounded-b-2xl bg-off-white backdrop-blur-lg shadow-2xl border border-white/30 z-40">
                  {/* Menu Items */}
                  <div className="mt-4 mb-2">
                    {NAV_ITEMS.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-6 py-2 font-normal text-[20px] text-charcoal transition-all duration-300 relative group"
                      >
                        <span className="relative inline-block">
                          {/* Original text */}
                          <span className="transition-opacity duration-300 group-hover:opacity-0">
                            {item.label}
                          </span>

                          {/* Bold text overlay */}
                          <span className="absolute inset-0 font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {item.label}
                          </span>

                          <span className="absolute left-0 -bottom-0 w-0 h-[1px] bg-charcoal transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    ))}

                    {/* Language Selector Mobile */}
                    <div className="relative" ref={languageDropdownRef}>
                      <button
                        onClick={toggleLanguageDropdown}
                        className="flex items-center px-6 py-3 font-normal text-[18px] text-charcoal transition-opacity duration-300 hover:opacity-80 w-full text-left cursor-pointer"
                      >
                        {selectedLanguage}
                        <ChevronDown
                          className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                            isLanguageDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Language Dropdown */}
                      {isLanguageDropdownOpen && (
                        <div className="px-6 pb-2">
                          {LANGUAGES.filter(
                            (lang) => lang.code !== selectedLanguage
                          ).map((language) => (
                            <button
                              key={language.code}
                              onClick={() => selectLanguage(language.code)}
                              className="block w-full text-left py-1 text-charcoal font-normal text-[18px] leading-[150%] uppercase transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                              style={{
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "150%",
                                letterSpacing: "0%",
                                textTransform: "uppercase",
                              }}
                            >
                              {language.code}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Learn More Button - Fixed positioning to bottom with 40px margin */}
              <div className="absolute lg:hidden  block bottom-[40px] left-0 right-0  z-30">
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
                      <h1 className="text-white lg:text-[64px]  only-lg:text-[58px] md:text-[48px] text-[38px] lg:font-medium md:font-normal  leading-[130%] only-lg:w-[668px] md:w-[596px] lg:w-[668px] ma-w-[370px] font-medium">
                        Global Fuels. Local Delivery. Industrial Precision.
                      </h1>
                      <p className="lg:hidden md:block block text-white  mt-[16px] md:text-[24px] text-[20px] font-normal  md:w-[596px] max-w-[370px] tracking-[-1%] leading-[150%]">
                        Supplying high-performance energy solutions to
                        industries, businesses, and global motorsports.
                      </p>
                    </div>
                  </div>

                  <div className="pb-8 md:pb-10 lg:block md:hidden hidden relative">
                    <Button
                      className="w-[254px] h-[54px] only-lg:w-[220px]  group absolute bottom-[40px]"
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

export default Header;
