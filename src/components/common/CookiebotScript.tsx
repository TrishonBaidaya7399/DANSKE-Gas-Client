"use client";

import Script from "next/script";

export default function CookiebotScript() {
  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid="b7172fe2-e48f-4a74-ad70-75b96c2daa16"
      data-blockingmode="manual"
      strategy="beforeInteractive"
      onLoad={() => {
        if (typeof window !== "undefined" && window.Cookiebot?.show) {
          window.Cookiebot.show();
        }
      }}
    />
  );
}
