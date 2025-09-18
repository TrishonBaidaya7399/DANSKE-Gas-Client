"use client";

import { useState, useEffect } from "react";
import { eventData } from "@/data/article";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import News from "@/components/sections/News";
import ContactUs from "@/components/sections/ContactUs";

interface NewsPageProps {
  params: { id: string };
}

export default function NewsPage({ params }: NewsPageProps) {
  const article = eventData.find((item) => item.id === params.id);
  const [activeId, setActiveId] = useState<string>("");

  if (!article) return notFound();

  // Scroll-spy logic
  useEffect(() => {
    const handleScroll = () => {
      let currentId = "";
      article.sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.getBoundingClientRect().top;
          if (offsetTop <= 200) { // navbar offset
            currentId = section.id;
          }
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [article.sections]);

  return (
    <div className="w-full">
      <div className="pt-[155px] px-[14px]">
        {/* Breadcrumb */}
        <nav className="text-black -tracking-[0.3px] mb-6 container-custom">
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
        <div className="flex items-end gap-5 justify-between container-custom">
          <div className="text-[48px] leading-[133%] max-w-[738px] w-full pt-[5px] pb-[3px]">
            {article.title}
          </div>
          <div className="">
            <div className="text-[16px] leading-[140%] font-[600] gradientText">
              DATE
            </div>
            <div className="text-[20px] leading-[150%] -tracking-[0.2px]">
              {article.date}
            </div>
          </div>
        </div>

        <div className="container-custom">
          {/* Hero Image */}
          <div className="w-full relative h-[600px] rounded-[12px] overflow-hidden mt-[60px]">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Section */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-5 items-start gap-10 pt-[100px] relative">
            {/* Sidebar */}
            <div className="hidden lg:flex flex-col sticky top-[100px] max-w-[217px] w-full border-l">
              {article.sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={`text-[#716B6B] px-4 py-[19px] relative
                    before:transition-all before:duration-300
                    before:h-full before:w-[2px] before:absolute 
                    before:left-0 before:top-0
                    ${activeId === section.id
                      ? "before:bg-red-400 font-medium text-black"
                      : "before:bg-transparent"
                    }
                  `}
                >
                  {section.label}
                </Link>
              ))}
            </div>

            {/* Content */}
            <div className="col-span-1 lg:col-span-3">
              <div className="max-w-[670px] mx-auto w-full space-y-12">
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
      <div className="pt-[170px]">
        <News />
      </div>

      <div className="container-custom">
        <div className="lg:py-[170px] md:py-[100px] py-[112px] max-w-[1280px] mx-auto">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
