import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Full Stack Tech provides cutting-edge AI solutions for rapid business growth."
        />
        <meta
          property="og:image"
          content="https://fullstacktechnyc.com/elephant.svg"
        />
        <meta
          name="twitter:image"
          content="https://fullstacktechnyc.com/ogimage.png"
        />
        <meta
          property="og:description"
          content="Full Stack Tech provides cutting-edge AI solutions for rapid business growth."
        />
    <meta property="og:site_name" content="fullstacktechnyc.com" />
    <meta name="keywords" content="AI, Business Solutions, AI Implementation, Business Growth, Full Stack Tech" />
    <meta property="og:title" content="Full Stack Tech - Intelligent Software Solutions" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Full Stack Tech - AI Solutions for Businesses" />
    </Head>
    <body className="bg-gray-100">
    <Main />
    <NextScript />
    </body></Html>
  );
}
