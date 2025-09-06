"use client";

import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  MutableRefObject,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Project = {
  title: string;
  content: React.ReactNode;
  src_lg?: string,
  src_sm?: string,
  link: string;
  color: string;
};

const headingClass = "font-bold text-[18px] md:text-[22px] leading-[110%] uppercase";
const paragraphClass = "text-[16px] leading-[140%] tracking-[-0.1]";
const warningClass = "text-[16px] leading-[140%] font-medium uppercase";
const gradientText = {
  background: "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  display: "inline-block"
};
const dotClass = "inline-block bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] size-[6px] rounded-full";


const projects: Project[] = [
  {
    title: "DISEL",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-[16px] lg:gap-y-6 pb-4">
        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>EKODIESEL ULTRA</h3>
          <p className={`${paragraphClass}`}>
            Ekodiesel Ultra is intended for compression-ignition engines used in
            land transport vehicles, especially in large urban centers and
            ecologically protected areas.
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>CLASS 2 EKODIESEL ULTRA</h3>
          <p className={`${paragraphClass}`}>
            Class 2 Ekodiesel Ultra is intended for compression-ignition engines,
            predominantly during winter, when temperature may even drop below
            -20°C.
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>BIO100</h3>
          <p className={`${paragraphClass}`}>
            BIO100 biofuel is intended for compression-ignition engines (Diesel)
            adapted to run on this fuel. It is recommended for drivers fueling
            BIO100 to consult the possibility of using it with the vehicle
            manufacturer.
          </p>
        </div>

        <div className="md:max-w-[301px] w-full place-content-end">
          <p className={`${warningClass}`} style={gradientText}>
            THE ABOVE PRODUCTS ARE IMPORTED TO POLAND MAINLY BY SEA.
          </p>
        </div>

      </div>
    ),
    src_lg: "disel-lg.png",
    src_sm: "disel.png",
    link: "#",
    color: "#FFF",
  },
  {
    title: "LPG",
    content: (
      <div className="space-y-4 lg:space-y-6">
        <p className={`${paragraphClass} max-w-[600px]`}>
          Liquefied petroleum gas (LPG) is a product of petroleum refining, used as a gas, but
          stored and transported in pressurized containers in liquid form. It is one of the most
          versatile sources of energy.
        </p>
        <div className="md:max-w-[301px] w-full">
          <p className={`${warningClass}`} style={gradientText}>
            The above products are imported to Poland mainly by sea.
          </p>
        </div>
      </div>
    ),
    src_lg: "lpg-lg.png",
    src_sm: "lpg.png",
    link: "#",
    color: "#FFF",
  },
  {
    title: "PETROLEUM",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-[16px] lg:gap-y-6 pb-4">
        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Unleaded 98</h3>
          <p className={`${paragraphClass}`}>
            Fuel is to be used with spark-ignition petrol engines, the design of which allows for the use of unleaded petroleum benzine.
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Alkylate fuel</h3>
          <p className={`${paragraphClass}`}>
            Contains chemically stable paraffinic and isoparaffinic hydrocarbons. Their complete combustion produces only carbon dioxide and water, helping to reduce air pollution.
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Unleaded 95</h3>
          <p className={`${paragraphClass}`}>
            Fuel is to be used with spark-ignition petrol engines, the design of which allows for the use of unleaded petroleum benzine.
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Avgas 100 LL</h3>
          <p className={`${paragraphClass}`}>
            It is an aviation fuel used in aircraft with spark-ignited internal combustion engines.
          </p>
        </div>
      </div>
    ),
    src_lg: "petroleum-lg.png",
    src_sm: "petroleum.png",
    link: "#",
    color: "#FFF",
  },
  {
    title: "RACING FUEL",
    content: (
      <div className="space-y-4 lg:space-y-6">
        <p className={`${paragraphClass} max-w-[560px]`}>
          It is characterized by a higher octane number, which ensures optimal combustion
          in high-performance engines.
        </p>
        <div className="w-full">
          <p className={`${paragraphClass}`}>
            <span className="inline">
              We are a distributor of world’s five largest racing fuels brands -
            </span>
            <span className={`${warningClass} !inline pl-1`} style={gradientText}>
              P1, ETS Racing Fuels, VP Racing Fuels, MOL Racing, Sunoco.
            </span>
          </p>
        </div>
      </div>
    ),
    src_lg: "racingFuel-lg.png",
    src_sm: "racingFuel.png",
    link: "#",
    color: "#FFF",
  },
  {
    title: "SOLID FUELS",
    content: (
      <div className="space-y-4 lg:space-y-6">
        <p className={`${paragraphClass} max-w-[580px]`}>
          The capital group of which Danske Gas is a part is a qualified supplier of biomass
          and coal to the largest heat and power plants in Central Europe.
        </p>
        <div className="md:max-w-[301px] w-full">
          <p className={`${warningClass}`} style={gradientText}>
            The above products are imported to Poland mainly by sea ANd Rail.
          </p>
        </div>
      </div>
    ),
    src_lg: "solidFuel-lg.png",
    src_sm: "solidFuel.png",
    link: "#",
    color: "#FFF",
  },
  {
    title: "TECHNICAL GASES",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-[16px] lg:gap-y-6 pb-4">
        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Nitrous oxide</h3>
          <p className={`${paragraphClass}`}>
            Nitrous oxide is a colorless, non-flammable gas with a sweet taste, used as a preservative and whipping agent in food, for welding and engine performance in industry, and as an anesthetic in medicine.
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Nitrogen</h3>
          <p className={`${paragraphClass}`}>
            Nitrogen is a colorless, odorless gas found in compounds like ammonia, nitric acid, and nucleic acids. In liquid form, it serves as a cooling agent below –100 °C, while in gaseous form, it is used as a protective atmosphere in industry.
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Argon</h3>
          <p className={`${paragraphClass}`}>
            Argon is a colorless, non-flammable, non-toxic noble gas, heavier than air. Its inert nature makes it ideal as a shielding gas in welding, an extinguishing agent where other methods can’t be used, and a carrier gas in chromatography.
          </p>
        </div>

        <div className="md:max-w-[301px] w-full place-content-end">
          <p className={`${warningClass}`} style={gradientText}>
            The above products are imported to Poland mainly by sea.
          </p>
        </div>

      </div>
    ),
    src_lg: "technicalGases-lg.png",
    src_sm: "technicalGases.png",
    link: "#",
    color: "#FFF",
  },
  {
    title: "AVIATION LUBRICANTS",
    content: (
      <div className="space-y-4 lg:space-y-6">
        <p className={`${paragraphClass} max-w-[600px]`}>
          Specialized products, designed to ensure the proper functioning and protection
          of various mechanical elements of helicopters and other aircraft.
        </p>
        <div className="md:max-w-[301px] w-full">
          <p className={`${warningClass}`} style={gradientText}>
            The above products are imported to Poland mainly by sea ANd Rail.
          </p>
        </div>
      </div>
    ),
    src_lg: "aviation-lg.png",
    src_sm: "aviation.png",
    link: "#",
    color: "#FFF",
  },
  {
    title: "CHEMICAL PRODUCTS",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-[16px] lg:gap-y-6 pb-4">

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Alcohols</h3>
          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Methanol
            </span>
            <span>
              |
            </span>
            <span>
              Brand: A
            </span>
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Amines</h3>
          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Melamine
            </span>
            <span>
              |
            </span>
            <span>
              Brand: A
            </span>
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Acids</h3>

          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Terephthalic Acid
            </span>
            <span>
              |
            </span>
            <span>
              Brand: -
            </span>
          </p>

          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Terephthalic Acid
            </span>
            <span>
              |
            </span>
            <span>
              Brand: -
            </span>
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Monomers</h3>
          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Vinyl Acetate
            </span>
            <span>
              |
            </span>
            <span>
              Brand: A
            </span>
          </p>
        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Paraffins</h3>

          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Paraffin
            </span>
            <span>
              |
            </span>
            <span>
              Brand: NS
            </span>
          </p>

          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Paraffin Gas
            </span>
            <span>
              |
            </span>
            <span>
              Brand: Lightweight
            </span>
          </p>

          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              T1 Paraffin
            </span>
            <span>
              |
            </span>
            <span>
              Brand: 1–2
            </span>
          </p>

        </div>

        <div className="md:max-w-[301px] w-full space-y-2">
          <h3 className={`${headingClass}`}>Inorganic Chemical Compounds</h3>
          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Ammonia
            </span>
            <span>
              |
            </span>
            <span>
              Brand: -
            </span>
          </p>
        </div>

        <div className="w-full md:col-span-2 space-y-2">
          <h3 className={`${headingClass}`}>Plastics</h3>

          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Polyethylene
            </span>
            <span>
              |
            </span>
            <span>
              Brand: 15313-003; Brand: 15803-020; Brand: Buplen 6131;
            </span>
          </p>

          <p className={`${paragraphClass} space-y-2`}>
            <p>
              Brand: Buplen 6231; Brand: Buplen 6331; Brand: Buplen 6331 CAST; Brand: Buplen 6431;
            </p>
            <p>
              Brand: Buplen 6531; Brand: Buplen 6531 BOPP.
            </p>
          </p>

          <p className={`${paragraphClass} flex items-center gap-2`}>
            <span className={`${dotClass}`}></span>
            <span className="font-bold">
              Polyvinyl Chloride
            </span>
            <span>
              |
            </span>
            <span>
              Brand: -
            </span>
          </p>

        </div>

      </div>
    ),
    src_lg: "chemical-lg.png",
    src_sm: "chemical.png",
    link: "#",
    color: "#FFF",
  },
];

const MAX_STACK = 2;

const ProductTabs: React.FC = () => {
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

    // Calculate exact scroll position
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const vh = window.innerHeight;
      const targetScrollPosition = containerTop + (index * vh) + 80;

      // Immediately update activeIndex to prevent conflicts
      setActiveIndex(index);

      // Force scroll to exact position
      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth"
      });

      // Monitor scroll completion for more precise timing
      let scrollCheckCount = 0;
      const maxChecks = 30; // Max 3 seconds at 100ms intervals

      const checkScrollComplete = () => {
        scrollCheckCount++;
        const currentScroll = window.scrollY;
        const scrollDiff = Math.abs(currentScroll - targetScrollPosition);

        // If we're close enough to target or we've waited long enough
        if (scrollDiff < 10 || scrollCheckCount >= maxChecks) {
          setIsNavigating(false);
        } else {
          setTimeout(checkScrollComplete, 100);
        }
      };

      // Start monitoring after a brief delay
      setTimeout(checkScrollComplete, 200);
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

          />
        );
      })}
    </main>
  );
};

type CardProps = Project & {
  i: number;
  animateState: any;
  zIndex: number;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ i, title, content, src_lg, src_sm, link, color, animateState, zIndex }, ref) => {
    const localRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
      target: localRef,
      offset: ["start end", "start start"],
    });
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

    return (
      <div
        ref={(el) => {
          if (typeof ref === "function") {
            ref(el);
          } else if (ref && typeof ref === "object") {
            (ref as MutableRefObject<HTMLDivElement | null>).current = el;
          }
          localRef.current = el;
        }}
        className="xl:h-screen flex items-start justify-center 3xl:justify-normal 
          z-0 relative xl:sticky xl:top-[100px] lg:top-0
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

          <div className="relative w-full h-[220px] md:h-full shrink-0 overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={`/assets/OurProduct-page/conventional-energy/${src_lg}`}
                alt={title}
                className="w-full h-full object-cover object-center hidden lg:block"
              />
              <img
                src={`/assets/OurProduct-page/conventional-energy/${src_sm}`}
                alt={title}
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