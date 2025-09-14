import Image from "next/image";
import Link from "next/link";
import React from "react";


const GrowingHiring = () => {
    return (
        <div className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden   
            lg:bg-[url('/assets/career-page/growingHiring-1440.png')]
            md:bg-[url('/assets/career-page/growingHiring-834.png')]
            bg-[url('/assets/career-page/growingHiring-402.png')]
             text-white rounded-3xl overflow-hidden"
        >
            <div className="px-4 py-[32px] md:py-[30px] md:px-[32px] lg:px-[72px] lg:py-[53px]">
                <div className="w-full space-y-1">
                    <h1 className="max-w-[200px] md:max-w-full w-full text-[28px] md:text-[34px] lg:text-[48px] leading-[133%]">
                        We’re growing. We’re hiring.
                    </h1>
                    <p className="text-[16px] lg:text-[20px] leading-[140%] lg:leading-[150%] md:max-w-[450px]">
                        Supplying high-performance energy solutions to industries, businesses, and global motorsports.
                    </p>
                </div>
                <div className="pb-[164px] md:pb-0 pt-[32px]">
                    <Link href={'#form'} className="inline-flex items-center justify-center gap-[10px] bg-white text-black font-medium p-[15px] min-w-full md:min-w-[251px] rounded-full text-[18px] leading-[140%] ">
                        <span>
                            Fill the Form
                        </span>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 1H13.5M13.5 1L13.5 10M13.5 1L1.5 13" stroke="#171515" stroke-width="1.5" />
                        </svg>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GrowingHiring;
