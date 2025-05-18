import React from "react";
import Script from "next/script";

const AdSense = () => {
  return (
    <Script
      rel="preconnect"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3263489207628471`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    ></Script>
  );
};

export default AdSense;
