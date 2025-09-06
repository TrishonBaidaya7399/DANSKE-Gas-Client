"use client";

import ProductCard from "@/components/pages/our_products/ProductCard";
import React, { useState } from "react";

function OurProducts() {
  const [showLeftOverlay, setShowLeftOverlay] = useState(false);
  const [showRightOverlay, setShowRightOverlay] = useState(false);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <ProductCard
        title="Conventional"
        subtitle="Energy"
        description="Reliable, large-scale fuel solutions for today’s industrial demands."
        image="/assets/OurProduct-page/conventional-energy.png"
        link="/our-products/conventional-energy"
        overlayColor="rgba(156,42,8,0.68)"
        direction="left"
        hovered={showLeftOverlay}
        otherHovered={showRightOverlay}
        setHovered={setShowLeftOverlay}
      />

      <ProductCard
        title="Sustainable"
        subtitle="Energy"
        description="Clean alternatives to reduce emissions and support your energy transition."
        image="/assets/OurProduct-page/sustainable-energy.png"
        link="/our-products/sustainable-energy"
        overlayColor="rgba(38,80,2,0.68)"
        direction="right"
        hovered={showRightOverlay}
        otherHovered={showLeftOverlay}
        setHovered={setShowRightOverlay}
      />
    </div>
  );
}

export default OurProducts;
