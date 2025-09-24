import React from "react";
import ArtHeroSection from "@/components/pages/art/ArtHeroSection";
import OurCollection from "@/components/pages/art/OurCollections";
import Image from "next/image";
import FreshPerspectives from "@/components/pages/art/FreshPerspectives";
import PoweringCulture from "@/components/pages/art/PoweringCulture";

function sustainableEnergy() {
    return (
        <div className="w-full">

            <ArtHeroSection />

            <div className="w-full pt-[70px] pb-[110px] md:pt-[100px] md:pb-[90px] xl:pt-[170px] xl:pb-[105px]">
                <OurCollection className="container-custom" />
            </div>

            <div className="w-full h-[199px] md:h-[213px] xl:h-[489px]">
                <Image
                    src={"/assets/art-page/art.png"}
                    overrideSrc={"/assets/art-page/art-board.png"}
                    placeholder='blur'
                    blurDataURL={"/assets/art-page/art-board.png"}
                    alt={"img"}
                    width={1918}
                    height={489}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="pt-[105px] md:pt-[100px] lg:pt-[100px]">
                <FreshPerspectives/>
            </div>

            <div className="pt-[98px] lg:pt-[170px] pb-[118px] lg:pb-[197px] 3xl:pb-[192px]">
                <PoweringCulture PoweringCulturePage />
            </div>
        </div>
    );
}

export default sustainableEnergy;
