"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrivacyPolicyHeroSection from "@/components/pages/privacy_policy/privacyPolicyHeroSection";

const headingClass = "font-medium text-[32px] leading-[133%] max-w-[450px] w-full";
const paragraphClass = "text-[#171515] text-[16px] leading-[140%] -tracking-[0.15px] lg:-tracking-[0.18px]";
const listHeadingClass = "text-[20px] leading-[150%] -tracking-[0.2px] font-semibold";

// Sections data
const sections = [
    {
        id: "protection",
        label: "Protection of Personal Data at Danske Gas S.A.",
        content: (
            <div className="text-black space-y-[40px] md:space-y-[60px]">
                <div className="w-full space-y-[40px] lg:space-y-11">
                    <div className="w-full space-y-[22px] md:space-y-8">
                        <div className={headingClass}>Protection of Personal Data at Danske Gas S.A.</div>
                        <div className={paragraphClass}>
                            Danske Gas Spółka Akcyjna processes personal data in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 — also known as the General Data Protection Regulation (GDPR). This ensures the protection of natural persons with regard to the processing of personal data and the free movement of such data, while repealing Directive 95/46/EC.
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "who_is",
        label: "Who Is the Data Controller?",
        content: (
            <div className="w-full space-y-[15px] md:space-y-8 text-black">
                <div className={headingClass}>Who Is the Data Controller?</div>

                <div className={paragraphClass}>
                    <div className="pb-[16px] md:pb-[22px]">
                        The data controller responsible for processing your personal data is:
                    </div>
                    <div className="">
                        Danske Gas Spółka Akcyjna <br />
                        ul. Słomińskiego 7, lok. 215, <br />
                        00-195 Warszawa, Poland <br />
                        VAT: PL 525-283-81-36 <br />
                        REGON: 387197468 <br />
                        KRS: 0000861970
                    </div>
                </div>

            </div>
        ),
    },
    {
        id: "contact",
        label: "Contact with the Data Protection Officer (DPO)",
        content: (
            <div className="w-full space-y-[9px] md:space-y-[28px] lg:space-y-8 text-black">
                <div className={headingClass}>Contact with the Data Protection Officer (DPO)</div>
                <div className="space-y-4">
                    <div className={paragraphClass}>
                        If you have any questions about how we process your personal data, or if you would like to exercise your rights under GDPR (such as access, rectification, erasure, restriction of processing, data portability, or objection), you can contact our Data Protection Officer:
                    </div>
                    <div className={paragraphClass}>
                        Email: ochronadanych@danskegas.com <br />
                        Mail: Danske Gas S.A., ul. Słomińskiego 7, lok. 215, 00-195 Warszawa <br />
                        (please include “Data Protection Officer” in the subject line)
                    </div>
                </div>
            </div>
        ),
    }
];

export default function PrivacyPolicy() {
    const [activeId, setActiveId] = useState<string>("");

    // Observe sections to update activeId
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Filter visible entries
                const visibleSections = entries.filter((entry) => entry.isIntersecting);

                if (visibleSections.length > 0) {
                    // Pick the one closest to the top
                    const topMost = visibleSections.reduce((prev, current) =>
                        prev.boundingClientRect.top < current.boundingClientRect.top
                            ? prev
                            : current
                    );
                    setActiveId(topMost.target.id);
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -60% 0px", // triggers when top enters 40% viewport
                threshold: 0.25, // 25% of section visible
            }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);


    return (
        <div className="w-full pb-[102px]">
            <PrivacyPolicyHeroSection />
            <div className="container-custom">
                <div className="3xl:px-[12px]">
                    {/* Main Section */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-5 items-start gap-10 pt-[62px] lg:pt-[100px] relative">
                        {/* Sidebar */}
                        <div className="hidden lg:flex flex-col sticky top-[100px] max-w-[200px] w-full border-l">
                            {sections.map((section) => (
                                <Link
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`text-[#716B6B] px-4 py-[19px] relative
                                        text-[16px] leading-[140%]
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
                                {sections.map((section) => (
                                    <div
                                        key={section.id}
                                        id={section.id}
                                        className="scroll-mt-[150px]"
                                    >
                                        <div>{section.content}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
