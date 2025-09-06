"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Domain Models
interface OurValuesProps {
  className?: string;
}

interface ValueCard {
  id: string;
  title: string;
  description: string;
  bgStyle: React.CSSProperties;
  textColor: string;
}

interface ValuesContent {
  sectionTitle: string;
  mainHeading: string;
  description: string;
  highlightedTerms: string[];
}

interface MarqueeItem {
  id: string;
  text: string;
}

interface MarqueeTextProps {
  className?: string;
}

interface TransitionConfig {
  duration: string;
  easing: string;
  properties: string[];
}

// Configuration
const VALUES_CONTENT: ValuesContent = {
  sectionTitle: "OUR VALUES",
  mainHeading: "Our Main Values",
  description:
    "At Danske Gas, our mission is to deliver top-tier energy products while contributing to a more sustainable, innovative, and digitally connected future for the industries we serve across Europe.",
  highlightedTerms: ["top-tier energy", "future", "across Europe."],
};

const VALUE_CARDS: ValueCard[] = [
  {
    id: "1",
    title: "Quality",
    description:
      "We deliver the highest quality products that are carefully controlled at every stage of production and distribution.",
    bgStyle: {
      background:
        "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
    },
    textColor: "text-white",
  },
  {
    id: "2",
    title: "Safety",
    description:
      "We use cutting-edge technology and adhere to strict safety standards to protect our employees, clients and the environment.",
    bgStyle: {
      backgroundColor: "#f9f7f7",
    },
    textColor: "text-black",
  },
  {
    id: "3",
    title: "Innovation",
    description:
      "We invest in research and development to constantly improve our products and introduce new, innovative solutions to the market.",
    bgStyle: {
      backgroundColor: "#B50F0F",
    },
    textColor: "text-white",
  },
];

const MARQUEE_ITEMS: MarqueeItem[] = [
  { id: "1", text: "QUALITY" },
  { id: "2", text: "INNOVATION" },
  { id: "3", text: "SAFETY" },
  { id: "4", text: "QUALITY" },
  { id: "5", text: "INNOVATION" },
];

const TRANSITION_CONFIG: TransitionConfig = {
  duration: "0.6s", // Smooth transition duration
  easing: "ease-in-out", // Smooth easing
  properties: ["background", "opacity", "-webkit-text-fill-color"],
};

// Marquee Text Component
const MarqueeText: React.FC<MarqueeTextProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !marqueeRef.current) return;

    const container = containerRef.current;
    const marquee = marqueeRef.current;

    // Clear any existing content
    marquee.innerHTML = "";

    // Create original set with smooth transitions
    MARQUEE_ITEMS.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item.text;
      span.className =
        "text-[38px] md:text-[48px] lg:text-[64px] tracking-wide text-gray-300 inline-block";
      span.style.fontWeight = "500";
      span.style.marginRight = "70px";

      // 🎯 ADD SMOOTH TRANSITIONS HERE - like a dimmer switch!
      span.style.transition = `all ${TRANSITION_CONFIG.duration} ${TRANSITION_CONFIG.easing}`;

      marquee.appendChild(span);
    });

    // Wait a frame for layout
    requestAnimationFrame(() => {
      // Get the width of one complete set
      const singleSetWidth = marquee.scrollWidth;

      // Clone the entire set to create seamless loop
      const clone = marquee.cloneNode(true) as HTMLElement;
      clone.querySelectorAll("span").forEach((span) => {
        // 🎯 ENSURE CLONED ELEMENTS ALSO HAVE SMOOTH TRANSITIONS
        (
          span as HTMLElement
        ).style.transition = `all ${TRANSITION_CONFIG.duration} ${TRANSITION_CONFIG.easing}`;
        marquee.appendChild(span);
      });

      // Set initial position
      gsap.set(marquee, { x: 0 });

      // SMOOTH gradient transition function - like a butter-smooth dimmer! 🎯
      const updateGradients = () => {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.width / 2;

        let closestChild: HTMLElement | null = null;
        let closestDistance = Infinity;

        // Find the text closest to center
        Array.from(marquee.children).forEach((child) => {
          const childRect = child.getBoundingClientRect();
          const containerLeft = containerRect.left;
          const childCenter =
            childRect.left - containerLeft + childRect.width / 2;
          const distanceFromCenter = Math.abs(childCenter - containerCenter);

          if (distanceFromCenter < closestDistance) {
            closestDistance = distanceFromCenter;
            closestChild = child as HTMLElement;
          }
        });

        // Apply gradient with SMOOTH transitions! 🌟
        Array.from(marquee.children).forEach((child) => {
          if (child === closestChild) {
            // 🌟 SMOOTH gradient transition (like slowly turning up brightness)
            (
              child as HTMLElement
            ).style.background = `linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)`;
            (child as HTMLElement).style.webkitBackgroundClip = "text";
            (child as HTMLElement).style.webkitTextFillColor = "transparent";
            (child as HTMLElement).style.backgroundClip = "text";
            (child as HTMLElement).style.opacity = "1";
          } else {
            // 🌟 SMOOTH gray transition (like slowly dimming down)
            (child as HTMLElement).style.background = "none";
            (child as HTMLElement).style.webkitBackgroundClip = "initial";
            (child as HTMLElement).style.webkitTextFillColor = "#D1D5DB";
            (child as HTMLElement).style.backgroundClip = "initial";
            (child as HTMLElement).style.opacity = "0.4";
          }
        });
      };

      // Create infinite loop animation
      // 🎯 SPEED CONTROL: Change duration value (higher = slower, lower = faster)
      const tween = gsap.to(marquee, {
        x: -singleSetWidth,
        duration: 20, // 🎯 CONTROL SPEED HERE
        ease: "none",
        repeat: -1,
        onUpdate: updateGradients,
        onRepeat: () => {
          gsap.set(marquee, { x: 0 });
        },
      });

      // Initial gradient setup
      updateGradients();
    });

    // Cleanup
    return () => {
      gsap.killTweensOf(marquee);
    };
  }, []);

  return (
    <div className={`  ${className}`}>
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full h-[40px] lg:h-[50px] "
      >
        <div
          ref={marqueeRef}
          className="flex items-center whitespace-nowrap absolute top-1/2 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};

// Main OurValues Component
const OurValues: React.FC<OurValuesProps> = ({ className = "" }) => {
  const sectionTitleGradient = {
    background:
      "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // Function to highlight specific terms in the description
  const renderHighlightedText = (text: string) => {
    let result = text;

    VALUES_CONTENT.highlightedTerms.forEach((term) => {
      const regex = new RegExp(`(${term})`, "gi");
      result = result.replace(
        regex,
        `<span style="background: linear-gradient(266.49deg, rgba(249, 150, 57, 0.1) -15.12%, rgba(216, 10, 0, 0.1) 58.77%, rgba(104, 16, 0, 0.1) 118.54%); padding: 1px 10px 6px 10px; border-radius: 60px; font-weight: 500; ">$1</span>`
      );
    });

    return result;
  };

  return (
    <div className="pt-[128px] md:pt-[105px] lg:pt-[167px]">
      {/* 3 Column Grid - 1 col for heading, 2 cols for description + cards */}
      <div className="container-custom grid grid-cols-1 xl:grid-cols-4">
        {/* Column 1 - Main Heading */}
        <div className="col-span-1">
          <span
            className="text-[12px] md:text-[16px] leading-[140%] font-medium inline-block"
            style={sectionTitleGradient}
          >
            {VALUES_CONTENT.sectionTitle}
          </span>
          <h2 className="text-black text-[34px] lg:text-[48px] leading-[133%]">
            {VALUES_CONTENT.mainHeading}
          </h2>
        </div>

        {/* Column 2-3 - Description + Cards */}
        <div className="lg:col-span-3">
          {/* Description */}
          <div className="text-black text-[22px] md:text-[28px] lg:text-[32px] leading-[150%] md:leading-[133%] pt-[21.5px] md:pt-[27px] xl:pt-[2px] tracking-[-0.1px] md:tracking-[0px] 3xl:tracking-[-0.1px]">
            At Danske Gas, our mission is to deliver  <span className="bg-red-100 font-[500] rounded-full px-[10px] pb-[4px]">top-tier energy</span>  products while contributing to a more sustainable, innovative, and digitally connected  <span className="bg-red-100 font-[500] rounded-full px-[10px] pb-[4px]">future</span>  for the industries we serve  <span className="bg-red-100 font-[500] rounded-full px-[10px] pb-[4px]">across Europe.</span>
          </div>

          {/* Value Cards - Only under the description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] md:gap-[19px] 3xl:gap-0 pt-[38px] md:pt-[44px] 3xl:pr-[8px]">
            {VALUE_CARDS.map((card) => (
              <div
                key={card.id}
                className="w-full rounded-[16px] overflow-hidden px-[13px] mx:px-4 py-6 md:max-w-[307px]"
                style={card.bgStyle}
              >
                <div className="pt-[1px] md:pt-[34px]">
                  <h3
                    className={`text-[18px] md:text-[22px] leading-[110%] font-bold ${card.textColor}`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-[16px] leading-[140%] pt-[8px] tracking-[-0.2px] md:max-w-[263px] w-full ${card.textColor} `}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Text Component */}
      <div className="lg:mt-[60px] md:mt-[26px] mt-[24px] h-[102px] grid items-center">
        <MarqueeText />
      </div>
    </div>
  );
};

export default OurValues;
