"use client";
import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const PrivacyPolicyHeroSection: React.FC = () => {

    return (
        <div
            className={`w-full relative bg-cover bg-center bg-no-repeat overflow-hidden   
            bg-[url('/assets/privacy-policy/hero.webp')] 
            3xl:h-[476px] lg:h-[479px] md:h-[414px] h-[411px]
        `}
        >
            <div className="container-custom w-full h-full text-white">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                    }}
                    className="flex flex-col justify-end items-start h-full  
                    pb-[75px] md:pb-[51px] lg:pb-[96px] 3xl:pb-[91px] 
                    space-y-1"
                >
                    <nav
                        className="text-gray-200 "
                        style={{ letterSpacing: "-1%" }}
                    >
                        <Link
                            href="/"
                            className="hover:underline transition-all duration-300 text-[13px] font-normal leading-[140%]"
                        >
                            Homepage
                        </Link>
                        <span className="mx-1">{"/"}</span>
                        <span className="font-semibold text-[13px] leading-[140%]">
                            Privacy Policy
                        </span>
                    </nav>

                    <h1 className="text-[40px] md:text-[48px] font-normal lg:text-[64px] lg:font-medium leading-[123%]">
                        Privacy Policy
                    </h1>

                    <p className="text-[20px] md:text-[24px] leading-[150%] max-w-[450px] lg:max-w-[510px] 3xl:max-w-[568px] tracking-[-0.2]">
                        We are committed to protecting your personal data with full transparency, in accordance with European data protection standards.
                    </p>

                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicyHeroSection;
