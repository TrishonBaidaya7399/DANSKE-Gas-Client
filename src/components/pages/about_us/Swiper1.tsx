"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "James Bond",
    role: "CEO of Danske Gas",
    message:
      "We care for the natural environment by introducing ecological solutions in production and transport processes. We care for the natural environment by introducing ecological solutions in production and transport processes.",
  },
  {
    name: "Alice Johnson",
    role: "Head of Operations",
    message:
      "Efficiency and sustainability are at the core of everything we do.",
  },
  {
    name: "Michael Smith",
    role: "Senior Engineer",
    message:
      "Innovation drives our solutions for a cleaner and better future.",
  },
  {
    name: "Sophia Lee",
    role: "Marketing Director",
    message:
      "We believe in transparency and trust with our clients worldwide.",
  },
];

export default function Swiper1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 787);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={true}
      navigation={!isMobile}
      pagination={isMobile ? { clickable: true } : false}
      className="mySwiper1"
    >
      {testimonials.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="px-5 md:px-[77px] xl:px-[96px] py-6 md:py-10 text-white space-y-[12px] md:space-y-[22px] min-h-[230px] md:min-h-[242px] w-full max-w-[750px]">
            <div>
              <h1 className="text-[18px] md:text-[22px] xl:text-[24px] font-bold leading-[150%] tracking-[-0.2]">
                {item.name}
              </h1>
              <p className="text-[16px] md:text-[20px] leading-[140%] md:leading-[150%] tracking-[-0.2]">
                {item.role}
              </p>
            </div>
            <div className="text-[16px] leading-[140%] tracking-[-0.2] xl:tracking-[-0.2] max-w-[541px] xl:max-w-full w-full">
              {item.message}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
