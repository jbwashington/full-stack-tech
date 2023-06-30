import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
    <Head>
    <link rel="icon" href="/favicon.ico" />
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:wght@300&family=Epilogue:wght@300;400;600&display=swap" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-jQmgOB5BdNT2NnBBZzAM07odTzb2F+nW7+mEl6ED1rnZTfI7eqgpNFT9BIwTRFHKy/7ttjTCQ6t2q0EFRFDWLQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    </Head>
    <body >
    <Main />
    <NextScript />
    </body>
    </Html>
  );
}
