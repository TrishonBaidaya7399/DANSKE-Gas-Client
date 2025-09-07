"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

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
      "We care for the natural environment by introducing ecological solutions in production and transport processes.",
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
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper1">
      {testimonials.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="px-[96px] py-10 text-white space-y-[22px] min-h-[242px]">
            <div>
              <h1 className="text-[24px] font-bold leading-[150%] tracking-[-0.2]">
                {item.name}
              </h1>
              <p className="text-[20px] leading-[150%] tracking-[-0.2]">
                {item.role}
              </p>
            </div>
            <div className="text-[16px] leading-[140%] tracking-[-0.2]">
              {item.message}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
