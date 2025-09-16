"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Testimonial = {
    name: string;
    role: string;
    message: string;
    image: string;   // image path
    heading: string; // heading text
};

const testimonials: Testimonial[] = [
    {
        name: "James Bond",
        role: "CEO of Danske Gas",
        message: "We care for the natural environment...",
        image: "/assets/AboutUs-page/sliderPerson-1.png",
        heading: "Who is behind Danske Gas",
    },
    {
        name: "Alice Johnson",
        role: "Head of Operations",
        message: "Efficiency and sustainability are at the core...",
        image: "/assets/AboutUs-page/sliderPerson-1.png",
        heading: "Meet the Operations Team",
    },
    {
        name: "Michael Smith",
        role: "Senior Engineer",
        message: "Innovation drives our solutions...",
        image: "/assets/AboutUs-page/sliderPerson-1.png",
        heading: "Engineering Minds",
    },
    {
        name: "Sophia Lee",
        role: "Marketing Director",
        message: "We believe in transparency...",
        image: "/assets/AboutUs-page/sliderPerson-1.png",
        heading: "Marketing Experts",
    },
];

export default function WhoIsBehind() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 787); 
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div className="w-full max-w-[1378px] rounded-[28px] md:rounded-[40px] overflow-hidden mx-auto relative bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639]">
            <div className="w-full flex flex-col lg:flex-row justify-between items-stretch h-full">
                {/* Image Section */}
                <div className="relative xl:max-w-[540px] w-full h-[258px] md:h-[465px] lg:h-[600px] bg-gray-600">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={testimonials[activeIndex].image}
                                alt={testimonials[activeIndex].name}
                                fill
                                className="object-cover object-top"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Text Area */}
                <div className="relative w-full lg:w-[61%] ml-auto">
                    <div className="absolute bottom-[66px] md:bottom-0 -right-[33%] md:right-0 h-full">
                        <svg className="h-full w-full" viewBox="0 0 462 625" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M0.494203 372.557C1.38535 357.942 -0.712275 342.016 0.494203 327.579C5.16931 271.469 33.6861 213.679 71.7313 172.853L244.477 0.480469H245.848C288.157 43.7512 291.159 110.433 251.359 156.572L6.66369 399.779C3.46927 399.847 3.40072 375.521 0.494203 372.543V372.557Z" fill="white" fillOpacity="0.07" /> <path d="M341.001 126.069C344.591 125.442 357.854 145.318 360.019 149.066C379.956 183.705 380.353 226.019 362.308 261.558C350.962 283.901 331.122 299.346 314.076 317.04C242.058 391.771 167.382 464.348 94.3086 538.193C92.678 539.801 91.4311 539.72 89.4717 538.847C87.2657 537.852 77.0576 523.416 75.1805 520.321C46.7623 473.672 54.5862 416.772 90.7871 376.885L341.001 126.069Z" fill="white" fillOpacity="0.07" /> <path d="M421.389 278.501C424.611 277.64 430.357 285.768 432.678 288.609C458.75 320.49 471.226 367.97 452.566 406.53C443.257 425.776 415.479 448.314 399.931 464.364C348.347 517.635 295.985 570.469 243.774 623.263C238.573 627.251 232.075 616.256 228.84 612.144C199.302 574.608 189.61 517.908 222.52 479.362L421.389 278.515V278.501Z" fill="white" fillOpacity="0.07" /> </svg>
                    </div>

                    <div className="w-full h-full space-y-[36px] md:space-y-[32px] xl:space-y-[60px] pb-[55px] md:pb-[88px] xl:pb-0 overflow-hidden">
                        {/* Heading */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                                className="pt-[51px] md:pt-[61px] xl:pt-[80px] px-5 md:px-[78px] xl:px-[96px] text-white"
                            >
                                <h1 className="text-[12px] md:text-[16px] leading-[140%] font-medium tracking-[0.3]">
                                    {testimonials[activeIndex].role.toUpperCase()}
                                </h1>
                                <div className="pt-[4px] xl:pt-0 text-[34px] md:text-[40px] xl:text-[48px] leading-[133%]">
                                    {testimonials[activeIndex].heading}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Swiper */}
                        <div className="bg-[rgba(37,34,34,0.64)]">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                autoplay={{ delay: 5000 }}
                                navigation={!isMobile} 
                                pagination={isMobile ? { clickable: true } : false}
                                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
