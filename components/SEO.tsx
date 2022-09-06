import React from "react";
import Head from "next/head";

export const Seo = () => {
  const pageTitle = `Color Picker | HTML Color Codes | RGB Color Picker | Color Conversions`;
  const pageDesc = `Color Picker: Get useful color conversions about any color.`;

  const canonicalUrl = "https://colorhuepicker.com";
  const twitterHandle = "@britoszn";

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta content="Kelvin Brito" name="author" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={pageDesc} key="desc" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} key="ogdesc" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.colorhuepicker.com/"
        key="ogurl"
      />
      <meta
        property="og:image"
        content="https://www.colorhuepicker.com/main.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta
        name="twitter:image"
        content="https://www.colorhuepicker.com/main.png"
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" key="canonical" href={canonicalUrl} />
    </Head>
  );
};
