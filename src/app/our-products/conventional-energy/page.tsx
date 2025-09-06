import ConventionalHero from "@/components/pages/our_products/conventionalEnergy/ConventionalHero";
import React from "react";
import ProductTabs from "../productTabs";
import WhyChooseUs from "../whyChooseUs";
import ContactUs from "@/components/sections/ContactUs";


type Product = {
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


const products: Product[] = [
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


function conventionalEnergy() {
  return (
    <div className="w-full">
      <ConventionalHero />

      <div className="pt-[58px] md:pt-[82px] 3xl:pt-[150px]">
        <ProductTabs projects={products}/>
      </div>

      <div className="container-custom pt-[110px] md:pt-[98px] lg:pt-[169.5px] 3xl:pt-[148.5px] pb-[134px] md:pb-[100px] lg:pb-[170px]">
        <div className="w-full max-w-[1240px] mx-auto">
          <WhyChooseUs />
        </div>
      </div>

      <div className="container-custom">
        <div className="w-full max-w-[1280px] mx-auto pb-[110px] md:pb-[100px] lg:pb-[170px]">
          <ContactUs />
        </div>
      </div>

    </div>
  );
}

export default conventionalEnergy;
