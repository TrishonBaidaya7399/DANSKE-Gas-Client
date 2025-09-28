"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface OurCollectionProps {
    className?: string;
}


const OurCollection: React.FC<OurCollectionProps> = ({ className = "" }) => {
    return (
        <div className={`relative ${className}`}>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2,
                }}
                className="w-full flex items-center md:items-end lg:items-start flex-col-reverse sm:flex-row-reverse lg:flex-row gap-[41px] sm:gap-[60px] lg:gap-[108px]"
            >

                <div className="space-y-[11px]">
                    <div className="relative md:w-[258px] max-w-auto lg:max-w-[523px] lg:w-full aspect-square">
                        <Image
                            src={"/assets/art-page/art-board.png"}
                            overrideSrc={"/assets/art-page/art-board.png"}
                            placeholder='blur'
                            blurDataURL={"/assets/art-page/art-board.png"}
                            alt={"img"}
                            width={523}
                            height={523}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-black">
                        <div className="text-[20px] font-semibold leading-[150%] tracking-[-0.2px]">
                            James Bond
                        </div>
                        <p className="text-[16px] leading-[140%] tracking-[-0.2px]">
                            Lorem Ipsum Name of Painting
                        </p>
                    </div>
                </div>

                <div className="max-w-[650px] w-full space-y-[22px] lg:space-y-4 md:pb-[7px] lg:pb-0">
                    <div className="w-full">
                        <div className="gradientText font-medium text-xs sm:text-base">
                            OUR COLLECTION
                        </div>
                        <h2 className="text-[34px] lg:text-[48px] leading-[133%] max-w-[300px] sm:max-w-full">
                            Where Business Meets Art
                        </h2>
                    </div>
                    <div className="w-full text-[16px] leading-[136%] sm:leading-[140%] lg:text-[20px] lg:leading-[150%] -tracking-[0.17px] lg:-tracking-[0.2px] space-y-[16px] sm:space-y-[38px] lg:space-y-[73px]">
                        <p>
                            Danske Gas Group proudly maintains a curated collection of modern art, featuring works by acclaimed Polish and international artists. Among the highlights are pieces by <b>Wojciech Fangor, Jerzy Nowosielski,</b> and other prominent figures of the contemporary art scene. The collection, focused primarily on painting, includes several dozen works that span a variety of styles and artistic movements.
                        </p>
                        <p className="px-4 lg:px-5 py-4 lg:py-6 bg-[#F9F7F7]">
                            “We believe that a workplace should inspire more than productivity — it should also stimulate thought, creativity, and cultural appreciation. For us, art is a meaningful bridge between energy, innovation, and human expression.”
                        </p>
                    </div>
                </div>


            </motion.div>
        </div>
    );
};

export default OurCollection;
