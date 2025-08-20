"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  useTransform,
  motion,
  useScroll,
  useMotionValue,
  animate,
} from "framer-motion";
import { Icons } from "../Icons";

interface ValuesContent {
  sectionTitle: string;
  mainHeading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface ValueCard {
  id: string;
  title: string;
  description: string;
  textColor: string;
  number: string;
}

const OurSupply = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionTitleGradient = {
    background:
      "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const OUR_SUPPLY_CONTENT: ValuesContent = {
    sectionTitle: "OUR PRODUCTS",
    mainHeading: "What We Supply",
    description:
      "Danske Gas powers industries, engines, and champions. From high-performance racing fuels to technical gases and industrial",
    buttonText: "Learn More",
    buttonHref: "/products",
  };

  const VALUE_CARDS: ValueCard[] = [
    {
      id: "1",
      title: "Diesel",
      description:
        "Low-emission, high-efficiency diesel fuels designed for commercial fleets, public transport, and eco-sensitive zones.",
      textColor: "text-light-gray",
      number: "01",
    },
    {
      id: "2",
      title: "LPG",
      description:
        "Liquefied petroleum gas for residential, industrial, and automotive use — flexible, efficient and clean-burning.",
      textColor: "text-black",
      number: "02",
    },
    {
      id: "3",
      title: "Petroleum",
      description:
        "Unleaded 95, 98 and alkylate fuels — reliable energy for everyday driving and cleaner combustion.",
      textColor: "text-black",
      number: "03",
    },
    {
      id: "4",
      title: "Racing fuel",
      description:
        "Premium fuel blends from the world's top brands, optimized for high-performance motorsport engines.",
      textColor: "text-black",
      number: "04",
    },
    {
      id: "5",
      title: "Solid fuels",
      description:
        "Biomass and coal for large-scale energy and heating plants — stable, industrial-grade solid energy sources.",
      textColor: "text-black",
      number: "05",
    },
    {
      id: "6",
      title: "Technical gases",
      description:
        "Nitrogen, argon, nitrous oxide and more — for food processing, welding, medical use, and high-tech industries.",
      textColor: "text-black",
      number: "06",
    },
    {
      id: "7",
      title: "Chemical products",
      description:
        "Alcohols, acids, monomers and plastics — industrial-grade chemicals for manufacturing and processing.",
      textColor: "text-black",
      number: "07",
    },
    {
      id: "8",
      title: "Aviation lubricants",
      description:
        "Specialized oils and lubricants engineered for the critical demands of aircraft and helicopter engines.",
      textColor: "text-black",
      number: "08",
    },
  ];

  // Calculate which card should be active (have gradient) - triggers at 50% of animation
  const activeCardIndex = useTransform(scrollYProgress, (progress) => {
    if (progress <= 0.1) return 0;

    const remainingCards = VALUE_CARDS.length - 1;
    const step = 0.8 / remainingCards;

    for (let i = 1; i < VALUE_CARDS.length; i++) {
      const cardStart = 0.1 + (i - 1) * step;
      const cardMidpoint = cardStart + 0.04; // 50% of the 0.08 animation duration

      if (progress >= cardMidpoint && progress < cardMidpoint + 0.09) {
        return i;
      }
    }

    return Math.min(
      Math.floor((progress - 0.1) / step) + 1,
      VALUE_CARDS.length - 1
    );
  });

  const calculateCardTiming = (cardIndex: number, totalCards: number) => {
    if (cardIndex === 0) {
      return { start: 0, end: 0.1 };
    }

    const remainingCards = totalCards - 1;
    const step = 0.8 / remainingCards;
    const cardPosition = cardIndex - 1;

    const start = 0.1 + cardPosition * step;
    const end = start + 0.08;

    return { start, end };
  };

  const AnimatedCard = ({
    card,
    index,
  }: {
    card: ValueCard;
    index: number;
  }) => {
    const timing = calculateCardTiming(index, VALUE_CARDS.length);

    const staticOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);
    const animatedY = useTransform(
      scrollYProgress,
      [timing.start, timing.end],
      [300, 0]
    );
    const animatedOpacity = useTransform(
      scrollYProgress,
      [timing.start, timing.end],
      [0, 1]
    );

    // Smooth background transition based on active card
    const backgroundStyle = useTransform(
      [scrollYProgress, activeCardIndex],
      ([progress, activeIndex]) => {
        const isActive = activeIndex === index;

        if (isActive) {
          return "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)";
        } else {
          return "#F9F7F7";
        }
      }
    );

    // Smooth text color transition
    const textColor = useTransform(activeCardIndex, (activeIndex) =>
      activeIndex === index ? "#F9F7F7" : "#000000"
    );

    const cardContent = (
      <>
        <div className="w-full">
          <div className="text-end">
            <motion.span
              className={`text-[18px] lg:text-[22px] leading-[110%] font-medium`}
              style={{ color: textColor }}
            >
              {card.number}
            </motion.span>
          </div>
          
          <motion.h3
            className={`text-[18px] lg:text-[22px] leading-[110%] font-bold`}
            style={{ color: textColor }}
          >
            {card.title}
          </motion.h3>

          <motion.p
            className={`text-[16px] leading-[140%] lg:text-[20px] pt-[7px] lg:leading-[150%] tracking-[-0.2px] max-w-[502px] w-full`}
            style={{ color: textColor }}
          >
            {card.description}
          </motion.p>
        </div>
      </>
    );

    if (index === 0) {
      return (
        <motion.div
          style={{ opacity: staticOpacity, zIndex: 10 }}
          className="rounded-[8px] md:rounded-[16px] overflow-hidden w-full"
        >
          <motion.div
            className="w-full pl-[14px] pr-[19px] pt-[13px] pb-[32px]
              lg:pl-[32px] lg:pr-[24px] lg:pt-[32px] lg:pb-[56px]"
            style={{
              background: backgroundStyle,
            }}
          >
            {cardContent}
          </motion.div>
        </motion.div>
      );
    }

    const zIndex = 10 + index;

    return (
      <motion.div
        style={{
          y: animatedY,
          opacity: animatedOpacity,
          zIndex,
        }}
        className="absolute top-0 w-full right-0"
        key={`motion-${card.id}`}
      >
        <motion.div
          className="w-full pl-[14px] pr-[19px] pt-[13px] pb-[32px]
              lg:pl-[32px] lg:pr-[24px] lg:pt-[32px] lg:pb-[56px]
              rounded-[8px] md:rounded-[16px] overflow-hidden"
          style={{
            background: backgroundStyle,
          }}
        >
          {cardContent}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={"container-custom mt-[110px] md:mt-0"}
      style={{ height: "610vh" }}
    >
      <div className="items-center max-w-[1280px] grid md:grid-cols-2 grid-cols-1 
        sticky top-0 lg:h-[94vh] md:h-[94vh] h-[63vh]
        gap-[42px] md:gap-[30px] lg:gap-[123px]"
      >
        {/* Column 1 - Main Heading */}
        <div className="md:col-span-1">
          <span
            className="text-[12px] md:text-[16px] leading-[140%] lg:pl-[7px] font-medium inline-block"
            style={{
              background:
                "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {OUR_SUPPLY_CONTENT.sectionTitle}
          </span>
          <h2 className="text-[34px] lg:text-[48px] leading-[133%] lg:pl-[6px] lg:pt-[6px]">
            {OUR_SUPPLY_CONTENT.mainHeading}
          </h2>
          <p className="text-[16px] leading-[140%] lg:text-[20px] lg:leading-[150%] tracking-[-0.2px] lg:pl-[6px] pt-[5px] lg:pt-[9px]">
            {OUR_SUPPLY_CONTENT.description}
          </p>
          <div className="mt-[30px] lg:mt-[40px] lg:ml-[8px]">
            <Button
              variant="cta-gradient"
              size="cta"
              className="font-medium lg:w-[205px] md:w-[226px] w-full h-[54px] text-[16px]"
            >
              <Link
                href={OUR_SUPPLY_CONTENT.buttonHref}
                className="inline-flex items-center gap-2 relative z-10"
              >
                <span className="relative z-10 text-[18px]">
                  {OUR_SUPPLY_CONTENT.buttonText}
                </span>
                <span className="relative z-10">
                  <Icons.UpRightArrowLight />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Column 2 - Stacked Cards */}
        <div className="w-full md:max-w-[367px] lg:max-w-[577px] flex flex-col md:items-end justify-center md:col-span-1 relative h-[162px] lg:h-[234px]">
          {VALUE_CARDS.map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSupply;
