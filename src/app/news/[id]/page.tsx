"use client";

import { useState, useEffect, use } from "react";
import { eventData } from "@/data/article";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import News from "@/components/sections/News";
import ContactUs from "@/components/sections/ContactUs";

interface NewsPageProps {
  params: Promise<{ id: string }>;
}

export default function NewsPage({ params }: NewsPageProps) {
  const { id } = use(params);

  const article = eventData.find((item) => item.id === id);
  const [activeId, setActiveId] = useState<string>("");


  useEffect(() => {
    if (!article) return; // Early return inside useEffect

    const handleScroll = () => {
      let currentId = "";
      article.sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.getBoundingClientRect().top;
          if (offsetTop <= 200) {
            currentId = section.id;
          }
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [article]); // Use article instead of article.sections for dependency

  // Handle not found case after hooks
  if (!article) {
    notFound();
  }

  return (
    <div className="w-full">
      <div className="pt-[116px] md:pt-[150px] lg:pt-[156px] 3xl:pt-[152px] container-custom">
        {/* Breadcrumb */}
        <nav className="text-black -tracking-[0.3px] 3xl:px-[12px]">
          <Link
            href="/"
            className="hover:underline transition-all duration-300 text-[13px] font-normal leading-[140%]"
          >
            Homepage
          </Link>
          <span className="mx-1">/</span>
          <span className="text-[13px] leading-[140%]">News</span>
          <span className="mx-1">/</span>
          <span className="font-semibold text-[13px] leading-[140%]">
            {article.title}
          </span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-[7px] md:gap-5 justify-between 3xl:px-[12px]">
          <div className="text-[34px] lg:text-[48px] leading-[133%] max-w-[450px] lg:max-w-[738px] w-full pt-[3px] md:pt-[8px] lg:pt-[5px] lg:pb-[3px]">
            {article.title}
          </div>
          <div className="">
            <div className="text-[12px] lg:text-[16px] leading-[140%] font-[600] gradientText">
              DATE
            </div>
            <div className="text-[16px] lg:text-[20px] leading-[140%] lg:leading-[150%] -tracking-[0.2px]">
              {article.date}
            </div>
          </div>
        </div>

        <div className="3xl:px-[12px]">
          {/* Hero Image */}
          <div className="w-full relative h-[173px] md:h-[353px] lg:h-[600px] rounded-[12px] overflow-hidden mt-[37px] lg:mt-[60px]">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Section */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-5 items-start gap-10 pt-[62px] lg:pt-[100px] relative">
            {/* Sidebar */}
            <div className="hidden lg:flex flex-col sticky top-[100px] max-w-[217px] w-full border-l">
              {article.sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={`text-[#716B6B] px-4 py-[19px] relative
                    text-[16px] leading-[140%] -tracking-[0.2px]
                    transition-all duration-300
                    before:transition-all before:duration-300
                    before:h-full before:w-[1px] before:absolute 
                    before:left-[-1px] before:top-0
                    ${activeId === section.id
                      ? "before:bg-gradient-to-t before:from-[#A01800] before:via-[#D80A00] before:to-[#F99639] font-medium text-black"
                      : "before:bg-transparent hover:before:bg-[#D80A00] hover:text-black"
                    }
                  `}
                >
                  {section.label}
                </Link>
              ))}
            </div>

            {/* Content */}
            <div className="col-span-1 lg:col-span-3">
              <div className="lg:max-w-[670px] mx-auto w-full space-y-[38px] md:space-y-[62px] lg:space-y-[58px]">
                {article.sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-[150px]">
                    <div>{section.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* new area start */}
      <div className="pt-[105px] md:pt-[100px] lg:pt-[168px]">
        <News NewsPage />
      </div>

      <div className="container-custom">
        <div className="lg:py-[170px] md:py-[100px] py-[112px] max-w-[1280px] mx-auto">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
