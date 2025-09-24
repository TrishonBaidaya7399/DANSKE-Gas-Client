"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const members = [
    { id: 1, name: "James Bond", role: "Lorem Ipsum Name of Painting", image: "/assets/art-page/art-1.png" },
    { id: 2, name: "James Bond", role: "Lorem Ipsum Name of Painting", image: "/assets/art-page/art-2.png" },
    { id: 3, name: "James Bond", role: "Lorem Ipsum Name of Painting", image: "/assets/art-page/art-3.png" },
    { id: 4, name: "James Bond", role: "Lorem Ipsum Name of Painting", image: "/assets/art-page/art-2.png" },
];

export default function Swiper1({
    prevEl,
    nextEl,
    setIsBeginning,
    setIsEnd,
}: {
    prevEl: React.RefObject<HTMLButtonElement | null>;
    nextEl: React.RefObject<HTMLButtonElement | null>;
    setIsBeginning: (val: boolean) => void;
    setIsEnd: (val: boolean) => void;
}) {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            autoplay = {true}
            navigation={{
                prevEl: prevEl.current,
                nextEl: nextEl.current,
            }}
            onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation !== "boolean") {
                    const navigation = swiper.params.navigation;
                    if (navigation) {
                        navigation.prevEl = prevEl.current;
                        navigation.nextEl = nextEl.current;
                    }
                }
            }}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
                320: { slidesPerView: 1.50, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 43 },
                1500: { slidesPerView: 3, spaceBetween: 24 },
            }}
            onSlideChange={(swiper) => { 
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
            }}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
            }}
        >
            {members.map((member) => (
                <SwiperSlide key={member.id}>
                    <div className="space-y-[16px] md:space-y-[19px]">
                        <div className="relative w-full h-[238px] lg:h-[413px] bg-[rgba(204,14,14,0.05)]">
                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-[20px] leading-[150%]">{member.name}</h3>
                            <p className="text-[16px] leading-[140%] -tracking-[0.2px]">{member.role}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
