"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const members = [
    { id: 1, name: "James Bond", role: "CEO of Danske Gas", image: "/assets/AboutUs-page/slider-2Img/1.png" },
    { id: 2, name: "James Bond", role: "CEO of Danske Gas", image: "/assets/AboutUs-page/slider-2Img/2.png" },
    { id: 3, name: "James Bond", role: "CEO of Danske Gas", image: "/assets/AboutUs-page/slider-2Img/3.png" },
    { id: 4, name: "James Bond", role: "CEO of Danske Gas", image: "/assets/AboutUs-page/slider-2Img/4.png" },
    { id: 5, name: "James Bond", role: "CEO of Danske Gas", image: "/assets/AboutUs-page/slider-2Img/5.png" },
    { id: 6, name: "James Bond", role: "CEO of Danske Gas", image: "/assets/AboutUs-page/slider-2Img/5.png" },
];

export default function Swiper2({
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
                320: { slidesPerView: 1.92, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4.92, spaceBetween: 43 },
                1500: { slidesPerView: 5, spaceBetween: 24 },
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
                    <div className="space-y-[14px] md:space-y-[19px]">
                        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[295px] 3xl:h-[270px] bg-[rgba(204,14,14,0.05)] rounded-2xl overflow-hidden">
                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-[18px] md:text-[24px] leading-[110%] md:leading-[150%] font-medium text-black tracking-[-0.1]">{member.name}</h3>
                            <p className="text-[16px] md:text-[20px] leading-[140%] md:leading-[150%] tracking-[-0.1]">{member.role}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
