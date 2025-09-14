"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const BenefitsSection: React.FC = () => {
    return (
        <div className="w-full">
            <div className="w-full">
                <h2 className="gradientText font-medium text-[12px] md:text-[16px] leading-[140%] uppercase">
                    Benefits
                </h2>
                <div className="text-[34px] lg:text-[48px] leading-[133%] font-medium -tracking-[0.5px]">
                    Our Perks and Benefits
                </div>
                <p className="text-[20px] leading-[140%] tracking-[-0.2] lg:tracking-[-0.2] max-w-[517px] w-full pt-[10px] lg:pt-[10px]">
                    We believe that long-term growth comes from long-term people. That’s why we offer more than just contracts.
                </p>
            </div>


            <div className="w-full h-[2px] bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] my-[40px]"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-9 lg:gap-y-15">
                <div className="w-full lg:flex items-start gap-6">
                    {/* icon start */}
                    <div className="flex items-center gap-2">
                        <div className="rounded-full size-9 lg:size-12 flex items-center justify-center bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] shrink-0">
                            <svg className="size-5 lg:size-[25px]" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 0C5.8725 0 0.5 5.3725 0.5 12C0.5 18.6275 5.8725 24 12.5 24C19.1275 24 24.5 18.6275 24.5 12C24.5 5.3725 19.1275 0 12.5 0ZM12.5 4.80021C12.9419 4.80021 13.2999 5.15832 13.2999 5.60016V11.6751L17.025 15.4001C17.3374 15.7125 17.3374 16.2127 17.025 16.5251C16.7126 16.8375 16.2124 16.8375 15.9 16.5251L12.0499 12.6625C11.8599 12.4806 11.7323 12.3096 11.6998 12.0001V5.60016C11.6998 5.15831 12.0579 4.80021 12.4998 4.80021H12.5Z" fill="#FDFCFC" />
                            </svg>
                        </div>
                        <h3 className="text-[22px] block lg:hidden lg:text-[32px] leading-[150%]">
                            Flexible Working Hours
                        </h3>
                    </div>

                    <div className="space-y-3 lg:space-y-2">
                        <h3 className="text-[22px] hidden lg:block lg:text-[32px] leading-[150%]">
                            Flexible Working Hours
                        </h3>
                        <p className="text-[16px] leading-[140%] tracking-[-0.1] max-w-[450px] w-full pt-[15px] lg:pt-0">
                            We believe productivity doesn’t follow a fixed clock. Our teams enjoy flexible scheduling that supports both business needs and personal balance.
                        </p>
                    </div>
                </div>

                <div className="flex md:items-end md:justify-end w-full">
                    <div className="lg:flex items-start gap-6">
                        {/* icon start */}
                        <div className="flex items-center gap-2">
                            <div className="rounded-full size-9 lg:size-12 flex items-center justify-center bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] shrink-0">
                                <svg className="w-[17px] h-[14px] lg:w-[25px] lg:h-[21px]" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.75 6.5V17.875C24.75 19.3188 23.5688 20.5 22.125 20.5H2.875C1.43125 20.5 0.25 19.3188 0.25 17.875V6.5C0.25 9.87727 2.9975 12.625 6.375 12.625H9.875V13.5C9.875 14.4625 10.6625 15.25 11.625 15.25H13.375C14.3375 15.25 15.125 14.4625 15.125 13.5V12.625H18.625C22.0023 12.625 24.75 9.8775 24.75 6.5ZM22.125 3.875H18.625V3C18.625 2.335 18.3713 1.71375 17.9513 1.25C17.47 0.71625 16.77 0.375 16 0.375H9C8.23 0.375 7.53 0.71625 7.04875 1.25C6.62875 1.71375 6.375 2.335 6.375 3V3.875H2.875C2.56875 3.875 2.27125 3.9275 2 4.0325V6.5C2 8.915 3.96 10.875 6.375 10.875H18.625C21.04 10.875 23 8.915 23 6.5V4.0325C22.7288 3.9275 22.4312 3.875 22.125 3.875ZM8.125 3H16.875V3.875H8.125V3Z" fill="#FDFCFC" />
                                </svg>
                            </div>
                            <h3 className="text-[22px] block lg:hidden lg:text-[32px] leading-[150%]">
                                Powered by a Capital Group
                            </h3>
                        </div>

                        <div className="space-y-3 lg:space-y-2">
                            <h3 className="text-[22px] hidden lg:block lg:text-[32px] leading-[150%]">
                                Powered by a Capital Group
                            </h3>
                            <p className="text-[16px] leading-[140%] tracking-[-0.1] max-w-[450px] w-full pt-[15px] lg:pt-0">
                                Group-level stability allows us to scale operations, invest in innovation, and weather changing market conditions — while keeping our team supported at every step.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:flex items-start gap-6">
                    {/* icon start */}
                    <div className="flex items-center gap-2">
                        <div className="rounded-full size-9 lg:size-12 flex items-center justify-center bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] shrink-0">
                            <svg className="size-5 lg:size-6" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0977 1.32597V9.07397C14.6577 9.04799 16.1917 8.89201 17.6477 8.60593C16.8677 4.73193 15.1257 1.81993 13.0977 1.32593V1.32597Z" fill="#FDFCFC" />
                                <path d="M11.9035 10.296C10.2655 10.27 8.65352 10.088 7.17152 9.802C7.04152 10.816 6.9375 11.908 6.9375 13C6.9375 14.118 7.01553 15.184 7.17152 16.198C8.67956 15.912 10.2915 15.73 11.9035 15.704V10.296Z" fill="#FDFCFC" />
                                <path d="M11.9016 9.07393V1.32593C9.87352 1.81995 8.13156 4.70593 7.35156 8.57993C8.78156 8.89188 10.3416 9.04797 11.9016 9.07395V9.07393Z" fill="#FDFCFC" />
                                <path d="M5.9725 16.484C5.81652 15.3921 5.73848 14.222 5.73848 13C5.73848 11.7781 5.81651 10.634 5.9725 9.51601C5.89447 9.49003 5.81652 9.49003 5.73848 9.46404C4.04848 8.996 2.59248 8.37209 1.39648 7.64404C0.616481 9.256 0.148438 11.076 0.148438 13C0.148438 14.924 0.590394 16.744 1.39648 18.356C2.59246 17.628 4.04848 16.978 5.73848 16.536C5.79045 16.5101 5.89446 16.4841 5.9725 16.4841V16.484Z" fill="#FDFCFC" />
                                <path d="M19.0273 9.51608C19.1833 10.608 19.2614 11.7781 19.2614 13.0001C19.2614 14.222 19.1833 15.3661 19.0273 16.4841C19.1054 16.5101 19.2093 16.5101 19.2873 16.536C20.9514 17.0041 22.4073 17.628 23.6033 18.356C24.3833 16.7441 24.8514 14.924 24.8514 13C24.8514 11.076 24.4094 9.25604 23.6033 7.64404C22.4074 8.39806 20.9513 9.02209 19.2873 9.46404C19.2094 9.49003 19.1314 9.51601 19.0273 9.51601V9.51608Z" fill="#FDFCFC" />
                                <path d="M11.9016 24.674V16.926C10.3416 16.952 8.80756 17.108 7.35156 17.3941C8.13156 21.2681 9.87356 24.1801 11.9016 24.6741V24.674Z" fill="#FDFCFC" />
                                <path d="M6.15475 17.68C6.10279 17.68 6.07672 17.706 6.02475 17.706C4.43877 18.148 3.06075 18.72 1.96875 19.4219C3.73679 22.3079 6.62275 24.4139 10.0548 25.1159C8.26073 23.8159 6.83075 21.1119 6.15475 17.6799V17.68Z" fill="#FDFCFC" />
                                <path d="M6.05075 8.29405C6.10272 8.29405 6.12878 8.32003 6.18075 8.32003C6.85673 4.88803 8.26075 2.18403 10.0808 0.884033C6.62275 1.58599 3.73675 3.69203 1.96875 6.57803C3.06071 7.27999 4.43875 7.85197 6.05075 8.29401V8.29405Z" fill="#FDFCFC" />
                                <path d="M18.9753 17.7059C18.9233 17.7059 18.8973 17.6799 18.8453 17.6799C18.1693 21.1379 16.7653 23.8159 14.9453 25.1159C18.3773 24.44 21.2633 22.3079 23.0313 19.4219C21.9394 18.72 20.5613 18.1219 18.9753 17.706V17.7059Z" fill="#FDFCFC" />
                                <path d="M13.0977 16.9261V24.6741C15.1257 24.18 16.8677 21.2941 17.6477 17.3941C16.2177 17.1081 14.6577 16.952 13.0977 16.926V16.9261Z" fill="#FDFCFC" />
                                <path d="M18.8453 8.31999C18.8973 8.31999 18.9233 8.29401 18.9753 8.29401C20.5613 7.85206 21.9393 7.27999 23.0313 6.57803C21.2633 3.69203 18.3773 1.58603 14.9453 0.884033C16.7393 2.18403 18.1693 4.88803 18.8453 8.32003V8.31999Z" fill="#FDFCFC" />
                                <path d="M17.857 9.802C16.349 10.114 14.763 10.27 13.125 10.296V15.704C14.763 15.73 16.349 15.886 17.857 16.198C17.987 15.184 18.091 14.0921 18.091 13C18.065 11.9081 17.987 10.816 17.857 9.80205V9.802Z" fill="#FDFCFC" />
                            </svg>

                        </div>
                        <h3 className="text-[22px] block lg:hidden lg:text-[32px] leading-[150%]">
                            International Work Environment
                        </h3>
                    </div>

                    <div className="space-y-3 lg:space-y-2">
                        <h3 className="text-[22px] hidden lg:block lg:text-[32px] leading-[150%]">
                            International Work Environment
                        </h3>
                        <p className="text-[16px] leading-[140%] tracking-[-0.1] max-w-[450px] w-full pt-[15px] lg:pt-0">
                            At Danske Gas, you’ll collaborate with colleagues, partners, and clients from across Europe. Our cross-border operations create a dynamic, multicultural setting where every project connects you to a broader energy market.
                        </p>
                    </div>
                </div>

                <div className="flex md:items-end md:justify-end w-full">
                    <div className="lg:flex items-start gap-6">
                        {/* icon start */}
                        <div className="flex items-center gap-2">
                            <div className="rounded-full size-9 lg:size-12 flex items-center justify-center bg-gradient-to-r from-[#A01800] via-[#D80A00] to-[#F99639] shrink-0">
                                <svg className="w-[14px] h-[14px] lg:w-[21px] lg:h-[20px]" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5 1.31155C20.5 0.587416 19.9229 0 19.2097 0H15.9839C15.2707 0 14.6935 0.587416 14.6935 1.31155V18.6883C14.6935 19.4124 15.2707 19.9998 15.9839 19.9998H19.2097C19.9229 19.9998 20.5 19.4124 20.5 18.6883V1.31155ZM0.5 18.6885C0.5 19.4126 1.07713 20 1.79033 20H5.01614C5.72934 20 6.30647 19.4126 6.30647 18.6885V15.4097C6.30647 14.6856 5.72934 14.0982 5.01614 14.0982H1.79033C1.07713 14.0982 0.5 14.6856 0.5 15.4097V18.6885ZM7.59679 18.6885C7.59679 19.4126 8.17392 20 8.88712 20H12.1129C12.8261 20 13.4033 19.4126 13.4033 18.6885V8.19733C13.4033 7.4732 12.8261 6.88579 12.1129 6.88579H8.88712C8.17392 6.88579 7.59679 7.4732 7.59679 8.19733V18.6885Z" fill="#FDFCFC" />
                                </svg>

                            </div>
                            <h3 className="text-[22px] block lg:hidden lg:text-[32px] leading-[150%]">
                                Growth & Development
                            </h3>
                        </div>

                        <div className="space-y-3 lg:space-y-2">
                            <h3 className="text-[22px] hidden lg:block lg:text-[32px] leading-[150%]">
                                Growth & Development
                            </h3>
                            <p className="text-[16px] leading-[140%] tracking-[-0.1] max-w-[450px] w-full pt-[15px] lg:pt-0">
                                As Danske Gas expands across Europe, we offer real opportunities for career growth and skill development. Our team members regularly take part in industry conferences and training programs to stay ahead in the fast-changing energy sector.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;
