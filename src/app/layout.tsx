import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Header";
import FooterWrapper from "@/components/common/FooterWrapper";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Danske Gas - Industrial Gas Supply & Reliable Delivery Solutions",
    template: "%s | Danske Gas",
  },
  description:
    "Leading industrial gas supplier providing certified imports, reliable delivery, and comprehensive gas solutions. Powering industries, engines, and champions with premium gas products and services.",
  keywords: [
    "industrial gas supply",
    "gas delivery",
    "certified gas imports",
    "reliable gas delivery",
    "industrial focus",
    "gas solutions",
    "energy supply",
    "gas distribution",
    "commercial gas",
    "industrial energy",
    "gas services",
    "fuel supply",
    "energy solutions",
  ],
  authors: [{ name: "Danske Gas" }],
  creator: "Danske Gas",
  publisher: "Danske Gas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://danske-gas.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Danske Gas - Industrial Gas Supply & Reliable Delivery Solutions",
    description:
      "Leading industrial gas supplier providing certified imports, reliable delivery, and comprehensive gas solutions. Powering industries, engines, and champions.",
    url: "https://danske-gas.vercel.app",
    siteName: "Danske Gas",
    images: [
      {
        url: "/assets/heroSectionImg.webp",
        width: 1200,
        height: 630,
        alt: "Danske Gas - Industrial Gas Supply Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danske Gas - Industrial Gas Supply & Reliable Delivery Solutions",
    description:
      "Leading industrial gas supplier providing certified imports, reliable delivery, and comprehensive gas solutions.",
    images: ["/assets/heroSectionImg.webp"],
    creator: "@danskegas",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "business",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* ✅ Cookiebot script */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="b7172fe2-e48f-4a74-ad70-75b96c2daa16"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
