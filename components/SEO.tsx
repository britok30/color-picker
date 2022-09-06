import React from "react";
import Head from "next/head";

interface SEOProps {
  pageTitle: string;
  description: string;
  hex: string;
}

export const SEO = ({ pageTitle, description, hex }: SEOProps) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta content="Kelvin Brito" name="author" />
      <meta name="theme-color" content={hex} />
      <meta
        name="keywords"
        content="color picker, hex color picker, rgb color picker, color conversions, hex, colour, color hue picker"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />

      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
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
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.colorhuepicker.com/main.png"
      />
    </Head>
  );
};
