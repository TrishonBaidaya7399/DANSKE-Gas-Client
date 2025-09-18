import Image from "next/image";

export interface EventSection {
  id: string;
  label: string;
  content: React.ReactNode;
  img_src?: string;
}

export interface EventCard {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  compressedImageUrl?: string;
  imageAlt: string;
  sections: EventSection[];
}

const headingClass = "font-medium text-[32px] leading-[133%]";
const paragraphClass = "text-[#171515] text-[16px] leading-[140%] -tracking-[0.15px] lg:-tracking-[0.18px]";
const listHeadingClass = "text-[20px] leading-[150%] -tracking-[0.2px] font-semibold";
const gradientText = {
  background: "linear-gradient(to right, #ff6a00, #ee0979)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const eventData: EventCard[] = [
  {
    id: "1",
    date: "12 Sept 2025",
    title: "Fuel Innovation Talk at Industry Summit",
    description:
      "Danske Gas powers industries, engines, and champions. From high-performance racing fuels to technical gases and industrial",
    imageUrl: "/assets/Articles/Article-1/hero.webp",
    compressedImageUrl: "/assets/Articles/Article-1/hero-compressed.webp",
    imageAlt: "Industry Summit Meeting",
    sections: [
      {
        id: "two_energy",
        label: "Two Energy Paths, One Mission",
        content: (
          <div className="text-black space-y-[40px] md:space-y-[60px]">
            <div className="text-[20px] md:text-[24px] leading-[150%] -tracking-[0.2px] md:-tracking-[0.25px] lg:-tracking-[0.3px]">
              Danske Gas proudly took part in this year’s Future of Energy Forum, one of Europe’s most influential gatherings of energy leaders, innovators, and policymakers. Held in Berlin, the event united companies from over 30 countries to explore how the energy sector can respond to today’s most urgent challenges—decarbonization, energy security, and sustainable growth.
            </div>

            <div className="w-full space-y-[40px] lg:space-y-11">
              <div className="w-full space-y-[22px] md:space-y-8">
                <div className={headingClass}>
                  Two Energy Paths, One Mission
                </div>
                <div className={paragraphClass}>
                  <div className="space-y-[19px]">
                    <div>
                      Our CEO opened the session by highlighting Danske Gas’ two-pronged strategy: maintaining high-performance delivery of conventional fuels while investing in scalable green energy solutions. With the European energy mix evolving rapidly, the company emphasized that a hybrid approach is not only realistic—but essential.
                    </div>
                    <div>
                      Danske Gas also presented its framework for <b>integrated energy procurement,</b> allowing clients to combine conventional fuel contracts with renewable certificates, CO₂ offsets, or biomass solutions under one agreement. This flexible model gives clients a realistic path to greener operations — without compromising performance or delivery.
                    </div>
                    <div>
                      With operations expanding across Central and Northern Europe, the company reaffirmed its commitment to infrastructure investment, cross-sector collaboration, and innovation — not just in what energy is delivered, but how it’s delivered.
                    </div>
                  </div>
                </div>
              </div>

              {/* img area start */}
              <div className="w-full relative h-[200px] md:h-[409px] lg:h-[364px] rounded-[12px] overflow-hidden">
                <Image
                  src={'/assets/Articles/Article-1/1.webp'}
                  alt={'img'}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* img area end */}

            </div>
          </div>
        ),
      },
      {
        id: "key_take",
        label: "Key Takeaways from the Conference",
        content: (
          <div className="w-full space-y-[15px] md:space-y-8 text-black">
            <div className={headingClass}>
              Key Takeaways from the Conference
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <div className={listHeadingClass}>
                  1. Collaboration Is the New Currency
                </div>
                <div className={paragraphClass}>
                  Panels repeatedly reinforced the idea that no one actor can shift the energy model alone. Danske Gas announced new talks with cross-border logistics networks and emerging green tech startups to accelerate joint innovation.
                </div>
              </div>


              <div className="space-y-3">
                <div className={listHeadingClass}>
                  2. Logistics Matter as Much as the Fuel Itself
                </div>
                <div className={paragraphClass}>
                  Danske Gas presented its case study on distribution efficiency, showing how digitization in logistics cut delivery times by 17% across the DACH region. That sparked lively discussion on the operational side of sustainability.
                </div>
              </div>

              <div className="space-y-3">
                <div className={listHeadingClass}>
                  3. Green Energy Needs Infrastructure, Not Just Ideals
                </div>
                <div className={paragraphClass}>
                  Our experts weighed in on practical barriers to renewable integration. Danske Gas’ investment in storage infrastructure and grid partnerships was presented as a blueprint for balancing ambition with readiness.
                </div>
              </div>

            </div>

          </div>
        ),
      },
      {
        id: "driving",
        label: "Driving Innovation Through Dialogue",
        content: (
          <div className="w-full space-y-[9px] md:space-y-[28px] lg:space-y-8 text-black">
            <div className={headingClass}>
              Driving Innovation Through Dialogue
            </div>

            <div className="space-y-4">
              <div className={paragraphClass}>
                One of the most valuable aspects of the Future of Energy Forum was the opportunity for real, open conversation between industry stakeholders. From startup founders to government regulators and corporate energy buyers, the event fostered a space where challenges were met with solutions — and ideas turned into partnerships.
              </div>
              <div className={paragraphClass}>
                For Danske Gas, it reinforced the belief that innovation doesn’t happen in isolation. It requires collaboration, shared responsibility, and the courage to rethink outdated models. Throughout the event, our team engaged in discussions on topics ranging from carbon certification to real-time emissions tracking, exploring how technology and transparency can go hand in hand.
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "looking",
        label: "Looking Ahead",
        content: (
          <div className="text-black space-y-[60px]">
            <div className="w-full space-y-[36px] lg:space-y-[41px]">

              <div className="w-full space-y-[20px] md:space-y-8">
                <div className={headingClass}>
                  Looking Ahead
                </div>
                <div className={paragraphClass}>
                  <div className="space-y-5">
                    <div>
                      For Danske Gas, the Future of Energy Forum wasn’t just another industry meetup—it was a milestone.
                    </div>
                    <div>
                      We’ve returned from Berlin with new partners, clearer strategies, and a reinforced belief in our dual-energy mission. Whether it’s LPG for logistics or green guarantees for corporate sustainability, our goal remains the same: Delivering what matters—when it matters.
                    </div>
                  </div>
                </div>
              </div>

              {/* img area start */}
              <div className="w-full relative h-[200px] md:h-[409px] lg:h-[364px] rounded-[12px] overflow-hidden">
                <Image
                  src={'/assets/Articles/Article-1/2.webp'}
                  alt={'img'}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* img area end */}

            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "2",
    date: "15 Oct 2025",
    title: "Speaking at the Chemical Safety Conference",
    description:
      "Danske Gas powers industries, engines, and champions. From high-performance racing fuels to technical gases and industrial.",
    imageUrl: "/assets/news-pic-2.webp",
    compressedImageUrl: "/assets/news-pic-2-compressed.webp",
    imageAlt: "Energy Conference",
    sections: [
      {
        id: "two_energy",
        label: "Two Energy Paths, One Mission",
        content: (
          <p className={paragraphClass}>
            At the Chemical Safety Conference, we explored strategies for safe
            industrial energy use and the importance of compliance.
          </p>
        ),
      },
      {
        id: "key_take",
        label: "Key Takeaways",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Improved regulatory frameworks.</li>
            <li>Best practices in chemical safety.</li>
            <li>Future-proof solutions for hazardous industries.</li>
          </ul>
        ),
      },
      {
        id: "driving",
        label: "Driving Innovation",
        content: (
          <p className={paragraphClass}>
            Innovation in safety technologies ensures reliability and industry
            resilience.
          </p>
        ),
      },
      {
        id: "looking",
        label: "Looking Ahead",
        content: (
          <p className={paragraphClass}>
            Expanding partnerships with safety authorities worldwide.
          </p>
        ),
      },
    ],
  },
  {
    id: "3",
    date: "20 Nov 2025",
    title: "Partnering at the Sustainable Transport Forum",
    description:
      "Danske Gas powers industries, engines, and champions. From high-performance racing fuels to technical gases and industrial.",
    imageUrl: "/assets/news-pic-3.webp",
    compressedImageUrl: "/assets/news-pic-3-compressed.webp",
    imageAlt: "Gas Symposium",
    sections: [
      {
        id: "two_energy",
        label: "Two Energy Paths, One Mission",
        content: (
          <p className={paragraphClass}>
            At the forum, we demonstrated how sustainable fuels align with
            Europe’s energy transition goals.
          </p>
        ),
      },
      {
        id: "key_take",
        label: "Key Takeaways",
        content: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Cleaner energy options for transport.</li>
            <li>Collaboration is key to decarbonization.</li>
            <li>Innovation leads the way forward.</li>
          </ul>
        ),
      },
      {
        id: "driving",
        label: "Driving Innovation",
        content: (
          <p className={paragraphClass}>
            Our R&D team is investing heavily in hydrogen and LNG for mobility.
          </p>
        ),
      },
      {
        id: "looking",
        label: "Looking Ahead",
        content: (
          <p className={paragraphClass}>
            We aim to contribute significantly to carbon neutrality by 2040.
          </p>
        ),
      },
    ],
  },
];
