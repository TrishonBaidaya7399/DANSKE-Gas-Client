"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/common/Footer";

export default function FooterWrapper() {
    const pathname = usePathname();

    // ✅ Add all paths where footer should be hidden
    const noFooterPaths = ["/our-products"];

    if (noFooterPaths.includes(pathname)) return null;

    return <Footer />;
}
