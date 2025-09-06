import React from "react";
import Link from "next/link";
import Image from "next/image";

// Domain models - defining our data structures first
interface LinkItem {
  name: string;
  href: string;
}

interface OfficeInfo {
  address: string[];
  phone: string;
  email: string;
}

interface FooterData {
  links: LinkItem[];
  legal: LinkItem[];
  office: OfficeInfo;
}

// Constants
const LOGO_DIMENSIONS = {
  width: 224,
  height: 44,
  className: "w-[223.9991302490234px] h-[44.000694274902344px]",
} as const;

const COMMON_CLASSES = {
  sectionTitle: "font-medium mb-[16px]",
  linkBase: "text-white hover:text-white transition-colors duration-200",
  linkSpacing: "space-y-[2px]",
  officeSpacing:
    "leading-[140%] lg:space-y-[8px] md:space-y-[8px] space-y-[12px]",
  legalSpacing: "space-y-[8px]",
} as const;

// Extracted LinkedIn Icon component
const LinkedInIcon: React.FC = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_144_1137)">
      <path
        d="M16 0.578125C7.16344 0.578125 0 7.74156 0 16.5781C0 25.4147 7.16344 32.5781 16 32.5781C24.8366 32.5781 32 25.4147 32 16.5781C32 7.74156 24.8366 0.578125 16 0.578125ZM11.4647 24.4948H7.89881V13.3064H11.4647V24.4948ZM9.68175 11.8411C9.28495 11.8411 8.89706 11.7235 8.56714 11.503C8.23721 11.2826 7.98006 10.9692 7.82822 10.6026C7.67637 10.236 7.63664 9.83265 7.71405 9.44347C7.79146 9.0543 7.98254 8.69682 8.26312 8.41624C8.5437 8.13566 8.90118 7.94459 9.29035 7.86717C9.67952 7.78976 10.0829 7.82949 10.4495 7.98134C10.8161 8.13319 11.1294 8.39034 11.3499 8.72026C11.5703 9.05019 11.688 9.43808 11.688 9.83488C11.688 10.367 11.4766 10.8773 11.1004 11.2535C10.7241 11.6298 10.2138 11.8411 9.68175 11.8411ZM24.325 24.4948H20.825V18.3772C20.825 18.0664 20.8741 16.0054 19.1238 16.0054C18.8128 15.9976 18.5045 16.0651 18.2251 16.2019C17.9456 16.3387 17.7034 16.5409 17.5187 16.7914C17.1973 17.2203 17.0256 17.7429 17.0301 18.2789V24.4946H13.5344V13.3064H16.8604V14.8767C17.6564 13.6554 18.6597 13.2083 19.6465 13.0284C21.3982 12.709 24.3247 13.7754 24.3247 16.9596L24.325 24.4948Z"
        fill="#FDFCFC"
      />
    </g>
    <defs>
      <clipPath id="clip0_144_1137">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0 0.578125)"
        />
      </clipPath>
    </defs>
  </svg>
);

// Reusable components
const FooterLogo: React.FC = () => (
  <div className="mb-4">
    <Link href="/">
      <Image
        src="/assets/logos/light-logo.svg"
        alt="Danske Gas Logo"
        {...LOGO_DIMENSIONS}
      />
    </Link>
  </div>
);

const FooterDescription: React.FC<{ className?: string }> = ({
  className = "text-[16px]",
}) => (
  <div>
    <p
      className={`${className} md:w-[394px] lg:block md:block hidden md:text-[16px] text-white leading-[140%] lg:tracking-[-0.2px]`}
    >
      Danske Gas powers industries, engines, and champions. From
      high-performance racing fuels to technical gases.
    </p>{" "}
    <p
      className={`${className} lg:hidden md:hidden block lg:w-full md:w-full max-w-[354px] w-full text-[16px] text-white leading-[140%] lg:tracking-[-0.2px]`}
    >
      Danske Gas powers industries, engines, and champions. From
      high-performance racing fuels to technical gases.
    </p>
  </div>
);

interface LinksSectionProps {
  title: string;
  links: LinkItem[];
  titleClass?: string;
  linkClass?: string;
  containerClass?: string;
}

const LinksSection: React.FC<LinksSectionProps> = ({
  title,
  links,
  titleClass = "text-[20px]",
  linkClass = "text-[16px] font-normal leading-[132%] tracking-tight",
  containerClass = COMMON_CLASSES.linkSpacing,
}) => (
  <div className={` ${title === "Legal" ? "lg:mt-0 lg:ml-0 md:mt-[22px] md:ml-[-16px]" : ""}`}>
    <h3 className={`${COMMON_CLASSES.sectionTitle} ${titleClass}`}>{title}</h3>
    <ul className={containerClass}>
      {links.map((link, index) => (
        <li key={`${title}-${index}`}>
          <Link
            href={link.href}
            className={`${linkClass} ${COMMON_CLASSES.linkBase}`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

interface OfficeSectionProps {
  office: OfficeInfo;
  titleClass?: string;
  textClass?: string;
  containerClass?: string;
}

const OfficeSection: React.FC<OfficeSectionProps> = ({
  office,
  titleClass = "text-[20px]",
  textClass = "text-[16px]",
  containerClass = COMMON_CLASSES.officeSpacing,
}) => (
  <div className="2xl:w-[170px] lg:mt-0 lg:ml-0 md:mt-[6px] md:ml-[10px]">
    <h3 className={`${COMMON_CLASSES.sectionTitle} ${titleClass}`}>Office</h3>
    <div className={containerClass}>
      <div>
        {office.address.map((line, index) => (
          <p key={`address-${index}`} className={`${textClass} text-white`}>
            {line}
          </p>
        ))}
      </div>
      <p className="text-[16px] text-white lg:mt-[20px]">{office.phone}</p>
      <Link
        href={`mailto:${office.email}`}
        className={`${textClass} ${COMMON_CLASSES.linkBase}`}
      >
        {office.email}
      </Link>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const footerData: FooterData = {
    links: [
      { name: "Products", href: "#" },
      { name: "News", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Art", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms and Conditions", href: "#" },
      { name: "Cookies Settings", href: "#" },
    ],
    office: {
      address: ["Wawelska 45/58,", "02-034 Warszawa"],
      phone: "+48 780 751 724",
      email: "email@danskegas.com",
    },
  };

  return (
    <footer className="bg-brown text-white">
      <div className="container-custom">
        {/* Desktop Layout */}
        <div className="hidden lg:block pt-[56px] pb-[42px] 3xl:ml-[-9px] 2xl:ml-0">
          <div className="flex  flex-row ">
            <div className="2xl:mr-[247px]">
              <FooterLogo />
              <FooterDescription />
            </div>
            <div className=" flex 2xl:gap-[100px] 3xl:mt-[3px] 2xl:mt-[-1px] gap-[110px]">
              <div className="2xl:w-[117px]">
                <LinksSection
                  title="Links"
                  links={footerData.links}
                  containerClass={COMMON_CLASSES.linkSpacing}
                />
              </div>
              <OfficeSection
                office={footerData.office}
                containerClass={COMMON_CLASSES.officeSpacing}
              />
              <LinksSection
                title="Legal"
                links={footerData.legal}
                containerClass={COMMON_CLASSES.legalSpacing}
              />
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden 2xl:pt-[56px] md:pt-10 pb-[42px]">
          <div className="">
            <FooterLogo />
            <FooterDescription />
          </div>
          <div className="flex lg:gap-[146px] md:gap-[129px] mt-[40px]">
            <LinksSection
              title="Links"
              links={footerData.links}
              linkClass="text-[16px]"
            />
            <OfficeSection
              office={footerData.office}
              titleClass="text-lg"
              textClass="text-[16px]"
            />
            <LinksSection
              title="Legal"
              links={footerData.legal}
              titleClass="text-lg"
              linkClass="text-[16px]"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block sm:hidden pt-[56px] pb-[65px] lg:ml-0 xs:ml-[9px]">
          <div className="mb-[60px]">
            <FooterLogo />
            <FooterDescription className="text-sm" />
          </div>
          <div className="">
            <div className="flex ">
              <div className="flex-1">
                <LinksSection
                  title="Links"
                  links={footerData.links}
                  titleClass="text-lg"
                />
              </div>
              <div className="flex-1">
                <OfficeSection
                  office={footerData.office}
                  titleClass="text-lg"
                />
              </div>
            </div>
            <div className="mt-[60px]">
              <LinksSection
                title="Legal"
                links={footerData.legal}
                titleClass="text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop and Tablet - Border with container spacing */}
      <div className="hidden lg:block md:block">
        <div className="container-custom 2xl:w-[1280px] lg:mt-0 md:mt-[-3px]">
          <div className="border-t border-dark-gray pt-[14px] lg:pb-[56px] pb-[40px] 3xl:ml-[-22px] 2xl:ml-[-79px] 2xl:mt-[-5px] 2xl:w-[1280px]">
            <div className="flex flex-row justify-between items-center gap-4">
              <p className="text-[16px] text-white">
                © 2025. All rights reserved.
              </p>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 "
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile - Full width border, content with container spacing */}
      <div className="block lg:hidden md:hidden">
        <div className="border-t border-dark-gray lg:pt-[14px] xs:pt-[22px] lg:pb-[40px] xs:pb-[64px] mt-2 ml-2">
          <div className="container-custom">
            <div className="flex flex-row justify-between items-center gap-4 -mt-2">
              <p className="text-[16px] text-white">
                © 2025. All rights reserved.
              </p>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 mr-2"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
