"use client";

import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  MutableRefObject,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  content: React.ReactNode;
  src_lg?: string,
  src_sm?: string,
  link: string;
  color: string;
};

type ProductTabsProps = {
  projects: Project[];
};

const gradientText = {
  background: "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  display: "inline-block"
};

const MAX_STACK = 2;

const ProductTabs = ({ projects }: ProductTabsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsXL(window.innerWidth >= 1280); // xl breakpoint
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  // Compute activeIndex from scroll (only when not navigating)
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || isNavigating) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const vh = typeof window !== "undefined" ? window.innerHeight : 1;
      const idx = Math.min(
        projects.length - 1,
        Math.floor(scrolled / vh + 0.0001)
      );
      setActiveIndex(idx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isNavigating]);

  const handleScrollTo = (index: number) => {
    if (isNavigating || index === activeIndex) return;
    setIsNavigating(true);

    if (isXL) {
      // ✅ old logic for xl
      if (containerRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const vh = window.innerHeight;
        const targetScrollPosition = containerTop + (index * vh) + 80;

        setActiveIndex(index);
        window.scrollTo({ top: targetScrollPosition, behavior: "smooth" });

        let scrollCheckCount = 0;
        const maxChecks = 30;
        const checkScrollComplete = () => {
          scrollCheckCount++;
          const currentScroll = window.scrollY;
          const scrollDiff = Math.abs(currentScroll - targetScrollPosition);

          if (scrollDiff < 10 || scrollCheckCount >= maxChecks) {
            setIsNavigating(false);
          } else {
            setTimeout(checkScrollComplete, 100);
          }
        };
        setTimeout(checkScrollComplete, 200);
      }
    } else {
      // ✅ simple native scroll for <xl
      const el = document.getElementById(`card-${index}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveIndex(index);
        setTimeout(() => setIsNavigating(false), 800);
      }
    }
  };


  return (
    <main ref={containerRef} className="relative w-full container-custom">
      {/* Navigation buttons */}
      <div className="max-w-[1280px] mx-auto sticky top-0 z-50 bg-white/80 backdrop-blur
        lg:pl-[4px] 3xl:pl-[7px] 3xl:pr-[7px] py-4
        flex flex-wrap items-center 
        justify-normal lg:justify-center 3xl:justify-normal 
        gap-x-[10px] md:gap-x-[19px] lg:gap-x-[20px] 
        gap-y-[10px] md:gap-y-[16px] lg:gap-y-[20px]"
      >
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => handleScrollTo(i)}
            className={`cursor-pointer text-[12px] md:text-[14px] inline-block p-[1px] leading-[140%] font-medium rounded-full uppercase 
                bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] transition duration-300
              `}
          >
            <span
              className={`w-full h-full px-[16px] md:px-[21px] lg:px-[20px] py-[6px] md:py-2 inline-block rounded-full transition duration-300
                ${i === activeIndex
                  ? " text-white bg-transparent"
                  : " text-[#716B6B] bg-white hover:bg-transparent hover:text-white"
                }
              `}
            >
              {p.title}
            </span>
          </button>
        ))}
      </div>

      {/* Cards */}
      {projects.map((project, i) => {
        const firstInStack = Math.max(0, activeIndex - (MAX_STACK - 1));
        const relativeIndex = i - firstInStack;
        const isVisible = relativeIndex >= 0 && relativeIndex < MAX_STACK;

        const yOffset = relativeIndex * 100; // stack spacing
        const zIndex = isVisible ? 100 - relativeIndex : 0;

        let opacity = 1;

        if (i === activeIndex - 2) {
          opacity = 0.3
        }
        else if (i <= activeIndex - 2) {
          opacity = 0;
        }

        // console.log("active index -----",activeIndex);

        const animateState = isXL
          ? {
            y: isVisible ? yOffset : relativeIndex < 0 ? -140 : 140,
            opacity,
            pointerEvents: isVisible ? ("auto" as const) : ("none" as const),
          }
          : {
            y: 0,
            opacity: 1,
            pointerEvents: "auto" as const,
          };


        return (
          <Card
            key={i}
            {...project}
            i={i}
            animateState={animateState}
            zIndex={zIndex}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            id={`card-${i}`}
          />
        );
      })}
    </main>
  );
};

type CardProps = Project & {
  i: number;
  id: any;
  animateState: any;
  zIndex: number;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ i, id, title, content, src_lg, src_sm, link, color, animateState, zIndex }, ref) => {
    const localRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
      target: localRef,
      offset: ["start end", "start start"],
    });
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

    return (
      <div
        id={id}
        ref={(el) => {
          if (typeof ref === "function") {
            ref(el);
          } else if (ref && typeof ref === "object") {
            (ref as MutableRefObject<HTMLDivElement | null>).current = el;
          }
          localRef.current = el;
        }}
        className="xl:h-screen flex items-start justify-center 3xl:justify-normal 
          z-0 relative xl:sticky 3xl:top-[100px] xl:top-0
          pt-[40px] xl:pt-[82px] pl-[7px]"
      >
        <motion.div
          animate={animateState}
          transition={{ type: "spring", stiffness: 200, damping: 28 }}
          style={{ backgroundColor: color, zIndex }}
          className="relative min-h-[380px] max-w-[1240px] w-full 
            rounded-[12px] md:rounded-[24px] transform-origin-top overflow-hidden drop-shadow-lg
            grid grid-cols-1 lg:grid-cols-3 gap-[0px] md:gap-[8px] lg:gap-[30px]"
        >
          <div className="lg:col-span-2 py-6 md:py-[32px] lg:py-[40px] px-4 md:px-[35.5px] lg:px-[60px] space-y-4 lg:space-y-6">
            <h2 className="text-[30px] md:text-[34px] lg:text-[44px] font-medium leading-[133%] inline-block"
              style={gradientText}
            >
              {title}
            </h2>
            <div className="prose prose-sm max-w-none">{content}</div>
          </div>

          <div className="relative w-full h-[220px] lg:h-full shrink-0 overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>

              <Image
                src={`/assets/OurProduct-page/conventional-energy/${src_lg}`}
                overrideSrc={`/assets/OurProduct-page/conventional-energy/${src_lg}`}
                placeholder='blur'
                blurDataURL={`/assets/OurProduct-page/conventional-energy/${src_lg}`}
                alt={"img"}
                fill
                className="w-full h-full object-cover object-center hidden lg:block"
              />

              <Image
                src={`/assets/OurProduct-page/conventional-energy/${src_sm}`}
                overrideSrc={`/assets/OurProduct-page/conventional-energy/${src_sm}`}
                placeholder='blur'
                blurDataURL={`/assets/OurProduct-page/conventional-energy/${src_sm}`}
                alt={"img"}
                fill
                className="w-full h-full object-cover object-center block lg:hidden"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default ProductTabs;