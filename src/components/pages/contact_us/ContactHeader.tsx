"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { Icons } from "@/components/icons/icons";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface ContactHeaderProps {
  className?: string;
}

interface Language {
  code: string;
  name: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "#" },
  { label: "Our Products", href: "#" },
  { label: "Art", href: "#" },
  { label: "Career", href: "#" },
  { label: "Contact Us", href: "/contact", isActive: true },
];

const LANGUAGES: Language[] = [
  { code: "EN", name: "English" },
  { code: "PL", name: "Polish" },
  { code: "DE", name: "German" },
  { code: "FR", name: "French" },
];

const MARQUEE_ITEMS = [
  "INDUSTRIAL FOCUS",
  "RELIABLE DELIVERY",
  "CERTIFIED IMPORTS",
];

const BREAKPOINTS = {
  MOBILE_LOGO: 786,
  MOBILE_MENU: 1025,
  DESKTOP_LARGE: 1275,
} as const;

const IMAGES = {
  DESKTOP_LOGO: "/assets/logos/light-logo.svg",
  MOBILE_LOGO: "/assets/logos/mobile-light-logo.svg",
} as const;

const ContactUsHeader: React.FC<ContactHeaderProps> = ({ className = "" }) => {
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

  const backgroundStyle = {
    backgroundImage: isMobileLogo
      ? "url('/assets/Backgrounds/ContactUsMobileBackground.webp')"
      : "url('/assets/Backgrounds/ContactUsBackground.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

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

  useEffect(() => {
    if (!isMobileMenu) {
      setIsMenuOpen(false);
    }
  }, [isMobileMenu]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (langCode: string) => {
    setSelectedLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className={`w-full relative ${className}`}>
      <div
        className={`w-full relative bg-cover bg-center bg-no-repeat overflow-hidden lg:h-[480px] md:h-[400px] ${
          (isMobileMenu && isMenuOpen) ? "h-[420px]" : "h-[344px]"
        }`}
        style={backgroundStyle}
      >
        <div className="flex app-container justify-center w-full h-full">
          <div className="flex flex-col w-full relative h-full">
            <div className="relative z-10 flex flex-col h-full">
              {/* header part */}
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`w-full transition-all duration-300 relative`}
              >
                <div className="lg:mt-[32px] mt-[16px]">
                  <nav className="flex items-center justify-between">
                    <div
                      className="flex-shrink-0 cursor-pointer"
                      onClick={() => router.push("/")}
                    >
                      <Image
                        src={
                          isMobileLogo
                            ? IMAGES.MOBILE_LOGO
                            : IMAGES.DESKTOP_LOGO
                        }
                        alt="Danske Gas"
                        width={isMobileLogo ? 35 : 244}
                        height={isMobileLogo ? 30 : 40}
                        priority
                        className="transition-all duration-300 only-lg:w-[200px] md:w-[224px] md:h-[44px]"
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
                              className={`cursor-pointer font-normal text-[20px] only-lg:text-[18px] transition-all duration-300 whitespace-nowrap relative group ${
                                item.isActive
                                  ? "text-white font-bold"
                                  : "text-white"
                              }`}
                            >
                              <span
                                className={`transition-opacity duration-300 ${
                                  item.isActive ? "" : "group-hover:opacity-0"
                                }`}
                              >
                                {item.label}
                              </span>

                              {!item.isActive && (
                                <span className="absolute inset-0 font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                  {item.label}
                                </span>
                              )}

                              <span
                                className={`absolute left-0 -bottom-0 h-[1px] bg-white transition-all duration-300 ${
                                  item.isActive
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                }`}
                              ></span>
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
              </motion.div>

              {/* Mobile Menu */}
              {isMobileMenu && isMenuOpen && (
                <div className="absolute top-[90px] left-0 right-0 rounded-b-2xl bg-off-white backdrop-blur-lg shadow-2xl border border-white/30 z-40">
                  <div className="mt-4 mb-2">
                    {NAV_ITEMS.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={closeMenu}
                        className={`block px-6 py-2 font-normal text-[20px] transition-all duration-300 relative group ${
                          item.isActive
                            ? "text-charcoal font-bold"
                            : "text-charcoal"
                        }`}
                      >
                        <span className="relative inline-block">
                          <span
                            className={`transition-opacity duration-300 ${
                              item.isActive ? "" : "group-hover:opacity-0"
                            }`}
                          >
                            {item.label}
                          </span>

                          {!item.isActive && (
                            <span className="absolute inset-0 font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              {item.label}
                            </span>
                          )}

                          <span
                            className={`absolute left-0 -bottom-0 h-[1px] bg-charcoal transition-all duration-300 ${
                              item.isActive
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }`}
                          ></span>
                        </span>
                      </Link>
                    ))}

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

              {/* Hero Section */}
              {!(isMobileMenu && isMenuOpen) && (
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

                      {/* <h1 className="text-white lg:text-[164px] only-lg:text-[164px] md:text-[148px] text-[72px] lg:font-medium md:font-normal leading-[123%] font-medium">
                        Contact Us
                      </h1> */}
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
              )}
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

export default ContactUsHeader;
