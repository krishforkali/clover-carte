"use client";

import React, { useEffect } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  const [loadAnalytics, setLoadAnalytics] = React.useState(false);

  useEffect(() => {
    if (!GA_ID) return;

    let loaded = false;

    const load = () => {
      if (loaded) return;

      loaded = true;
      setLoadAnalytics(true);

      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("pointerdown", load);
      window.removeEventListener("keydown", load);
      window.removeEventListener("scroll", load);
      window.removeEventListener("touchstart", load);
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(load, {
        timeout: 4000,
      });

      return () => {
        window.cancelIdleCallback(idleId);
        cleanup();
      };
    }

    const timeoutId = window.setTimeout(load, 3000);

    window.addEventListener("pointerdown", load, { once: true });
    window.addEventListener("keydown", load, { once: true });
    window.addEventListener("scroll", load, { once: true });
    window.addEventListener("touchstart", load, { once: true });

    return () => {
      window.clearTimeout(timeoutId);
      cleanup();
    };
  }, []);

  if (!loadAnalytics || !GA_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}