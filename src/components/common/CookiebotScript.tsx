"use client";

import Script from "next/script";

const domainGroupId = "b7172fe2-e48f-4a74-ad70-75b96c2daa16";

export default function CookiebotManual() {
  return (
    <>
      <Script
        id="cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid={domainGroupId}
        data-blockingmode="auto"
        type="text/javascript"
        strategy="beforeInteractive"
      />
    </>
  );
}