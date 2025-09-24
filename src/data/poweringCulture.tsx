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
  sections?: EventSection[];
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
    title: "Supporting the Young Art Biennale",
    description:"Danske Gas fosters cultural engagement by sponsoring emerging talent at Poland’s leading contemporary art showcase — connecting energy with artistic vision.",
    imageUrl: "/assets/art-page/poweringCulture/1.png",
    compressedImageUrl: "/assets/art-page/poweringCulture/1.png",
    imageAlt: "Industry Summit Meeting",
  },
  {
    id: "2",
    date: "15 Oct 2025",
    title: "Partnering with the Museum of Modern Art",
    description:"Danske Gas is proud to support regional exhibitions through ongoing collaboration with key institutions like MoMA Warsaw — empowering access to art across Poland.",
    imageUrl: "/assets/art-page/poweringCulture/2.png",
    compressedImageUrl: "/assets/art-page/poweringCulture/2.png",
    imageAlt: "Energy Conference",
  },
  {
    id: "3",
    date: "12 Sept 2025",
    title: "Energy Meets Expression: Sponsoring Art Talks Series",
    description:"We co-hosted a series of public dialogues between energy leaders and contemporary artists, exploring sustainability, innovation, and creative responsibility.",
    imageUrl: "/assets/art-page/poweringCulture/3.png",
    compressedImageUrl: "/assets/art-page/poweringCulture/3.png",
    imageAlt: "Gas Symposium",
  },
];
