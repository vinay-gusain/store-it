"use client";

import React from "react";

/**
 * Google Tag Manager script – placed inside <head>.
 */
export const GTMScript = () => (
  <>
    {/* Google Tag Manager */}
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M62GFQNQ');`,
      }}
    />
    {/* End Google Tag Manager */}
  </>
);

/**
 * Google Tag Manager noscript fallback – placed at top of <body>.
 */
export const GTMNoScript = () => (
  <>
    {/* Google Tag Manager (noscript) */}
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-M62GFQNQ"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
    {/* End Google Tag Manager (noscript) */}
  </>
);
