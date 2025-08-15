"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface EventCard {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  compressedImageUrl?: string;
  imageAlt: string;
}

const News = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMdBreakpoint, setIsMdBreakpoint] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const eventData: EventCard[] = [
    {
      id: "1",
      date: "12 Sept 2025",
      title: "Fuel Innovation Talk at Industry Summit",
      description:
        "Danske Gas powers industries, engines, and champions. From high-performance racing fuels to technical gases and industrial",
      imageUrl: "/assets/news-pic-1.webp",
      compressedImageUrl: "/assets/news-pic-1-compressed.webp",
      imageAlt: "Industry Summit Meeting",
    },
    {
      id: "2",
      date: "15 Oct 2025",
      title: "Speaking at the Chemical Safety Conference",
      description:
        "Danske Gas powers industries, engines, and champions. From high-performance racing fuels to technical gases and industrial.",
      imageUrl: "/assets/news-pic-2.webp",
      compressedImageUrl: "/assets/news-pic-2-compressed.webp",
      imageAlt: "Energy Conference",
    },
    {
      id: "3",
      date: "20 Nov 2025",
      title: "Partnering at the Sustainable Transport Forum",
      description:
        "Danske Gas powers industries, engines, and champions. From high-performance racing fuels to technical gases and industrial.",
      imageUrl: "/assets/news-pic-3.webp",
      compressedImageUrl: "/assets/news-pic-3-compressed.webp",
      imageAlt: "Gas Symposium",
    },
  ];

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsMdBreakpoint(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ArrowIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15.2222L12.9091 2.38604L3.45455 2.38604V0.849315C3.45455 0.758919 3.63636 0.578126 3.72727 0.578126L15.7273 0.578126C15.8182 0.578126 15.9091 0.668524 16 0.849315L16 12.7815C16 12.8719 15.9091 13.0527 15.7273 13.0527H14.1818V3.83236L1.36364 16.5781"
        fill="url(#paint0_linear_139_679)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_139_679"
          x1="-5.03703"
          y1="-1.68113"
          x2="-3.6481"
          y2="20.933"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F99639" />
          <stop offset="0.552885" stopColor="#D80A00" />
          <stop offset="1" stopColor="#A01800" />
        </linearGradient>
      </defs>
    </svg>
  );

  // Reorder cards for md layout only
  const getCardOrder = (index: number) => {
    if (index === 2) return 0; // Third card first
    if (index === 0) return 1; // First card second
    if (index === 1) return 2; // Second card third
    return index;
  };

  // Get ordered cards based on breakpoint
  const getOrderedCards = () => {
    const cardsWithIndex = eventData.map((event, index) => ({
      event,
      originalIndex: index,
    }));

    if (isMdBreakpoint) {
      return cardsWithIndex.sort(
        (a, b) => getCardOrder(a.originalIndex) - getCardOrder(b.originalIndex)
      );
    }

    return cardsWithIndex; // Keep original order for mobile and lg
  };

  return (
    <div className="app-container lg:mt-0 mt-[100px]" ref={sectionRef}>
      <div>
        {/* Header Section */}
        <div
          className={`flex lg:justify-center lg:items-center lg:text-center flex-col mb-10 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="text-[16px] font-medium tracking-wide inline-block capitalize bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MEET THE TEAM
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[48px] font-normal text-black leading-tight lg:block hidden ">
            From the Stage. <br /> From the Field. From Us.
          </h2>{" "}
          <h2 className="text-2xl md:text-3xl lg:text-[48px] font-normal text-black leading-tight lg:hidden md:block hidden">
            From the Stage.From the Field. From Us.
          </h2>{" "}
          <h2 className="text-[34px] md:text-3xl lg:text-[48px] font-normal text-black leading-tight lg:hidden md:hidden block">
            From the Stage. <br /> From the Field. From Us.
          </h2>
          <p className="lg:text-[20px] md:text-lg text-[16px] text-black max-w-xl mt-2 ">
            Our leadership team brings decades of expertise in fuel import,
            logistics and energy distribution across Europe.
          </p>
        </div>

        {/* Event Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[20px] lg:gap-[32px] mx-auto ">
          {getOrderedCards().map(({ event, originalIndex }, sortedIndex) => (
            <div
              key={event.id}
              className={`bg-off-white p-[20px] rounded-2xl transition-all duration-600 ease-out overflow-hidden w-full h-full cursor-pointer hover:-translate-y-1 ${
                originalIndex === 2
                  ? "md:flex md:flex-row md:col-span-2 md:mb-[32px] lg:flex lg:flex-col lg:col-span-1 lg:mb-0"
                  : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${sortedIndex * 150}ms` : "0ms",
                transitionProperty: "all",
                transitionDuration: "0.3s",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image-Container */}
              <div
                className={`relative ${
                  originalIndex === 2
                    ? "md:w-[347px] md:h-[242px] w-full md:flex-shrink-0 md:order-2 lg:w-full lg:h-[242px] lg:order-none h-[242px]"
                    : "h-[242px] md:h-[240px] lg:h-[240px]"
                }`}
              >
                <div className="relative rounded-lg">
                  <Image
                    src={event.imageUrl}
                    overrideSrc={event.imageUrl}
                    placeholder="blur"
                    blurDataURL={event.compressedImageUrl}
                    alt={event.imageAlt}
                    className={`rounded-[10px] ${
                      originalIndex === 2
                        ? "md:w-[347px] w-full h-[242px] md:h-[242px] lg:w-[100%] lg:h-[242px]"
                        : "w-[100%] h-[242px] md:h-[241px] lg:h-[241px]"
                    }`}
                    priority={event.id === "1"}
                    height={242}
                    width={originalIndex === 2 ? 347 : 357}
                  />
                </div>
              </div>
              {/* Content Container */}
              <div
                className={`flex flex-col ${
                  originalIndex === 2
                    ? "md:flex-1 md:order-1 md:pr-6 lg:pr-0 lg:order-none"
                    : ""
                }`}
              >
                {/* Date with Vending Machine Animation */}
                <div className="text-[16px] text-dark-gray font-normal mt-[12px] mb-[10px] h-5 overflow-hidden relative">
                  <div
                    className={`transform transition-transform duration-400 ease-in-out ${
                      hoveredCard === event.id
                        ? "-translate-y-5"
                        : "translate-y-0"
                    }`}
                  >
                    {event.date}
                  </div>
                  <div
                    className={`absolute top-5 left-0 transform transition-transform duration-400 ease-in-out ${
                      hoveredCard === event.id
                        ? "-translate-y-5"
                        : "translate-y-0"
                    }`}
                  >
                    <Link
                      href="/about"
                      className="text-dark-gray hover:bg-gradient-to-r hover:from-[#A01800] hover:via-[#D80A00] hover:to-[#F99639] hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:underline underline-offset-2"
                    >
                      By Danske Gas
                    </Link>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-normal text-black leading-tight mb-1">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-black leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>

                {/* Read More Button */}
                <Link
                  href={`/news/${event.id}`}
                  className="inline-flex items-center gap-2 transition-all duration-300 self-start group"
                >
                  <span className="text-[16px] font-medium tracking-wide bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] bg-clip-text text-transparent">
                    READ MORE
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
