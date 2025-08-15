"use client";

import { useState, useEffect } from "react";

export default function MapSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const backgroundStyle = {
    backgroundImage: "url(/assets/map.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    // Set a timeout to handle slow loading
    const timer = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="flex app-container justify-center w-full h-full mt-[60px]">
      <section className="w-full lg:h-[550px] md:h-[430px] h-[560px] relative rounded-[40px]"  style={backgroundStyle}>
        {/* Loading or Error State - Show Fallback Image */}
        {(isLoading || hasError) && (
          <div className="absolute inset-0 z-10 rounded-[40px]">
            {isLoading && (
              <div
                className="absolute inset-0 bg-black/10 flex items-center justify-center rounded-[40px]"
                style={backgroundStyle}
              >
                <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-gray-900 font-semibold text-xl">
                    Loading live map...
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Google Maps Iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2458.2073667354407!2d20.998235676490534!3d52.21711585861033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWawelska%2045%2F58%2C%2002-034%20Warszawa%2C%20Poland!5e1!3m2!1sen!2sbd!4v1755268039023!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: 40 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          className={`w-full h-full ${
            isLoading || hasError ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
          title="DANSKE GAS Office Location - Wawelska 45/58, Warsaw, Poland"
        />
      </section>
    </div>
  );
}
