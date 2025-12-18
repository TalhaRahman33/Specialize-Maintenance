import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { geistSans, geistMono, arabicFont } from "./fonts"; // ✅ fonts.ts se

export const metadata: Metadata = {
  title: "Specialize Maintenance",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="robots" content="" />
        <meta name="description" content="" />

        <link rel="icon" href="/images/favicon-32x32.png" type="image/x-icon" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.png"
        />
      

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/font-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/owl.carousel.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/magnific-popup.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/loader.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/flaticon.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link
          rel="stylesheet"
          className="skin"
          type="text/css"
          href="/css/skin-1.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/switcher.css" />

        <link rel="stylesheet" type="text/css" href="/css/settings.css" />
        <link rel="stylesheet" type="text/css" href="/css/navigation.css" />

        {/* ✅ OPTIONAL: you can remove Roboto/Poppins if you want full control via next/font */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
      </head>

      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable} ${arabicFont.variable}`}
      >
        {children}

        {/* JAVASCRIPT FILES */}
        <Script src="/js/jquery-3.6.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/waypoints-sticky.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.owl-filter.js" strategy="afterInteractive" />
        <Script src="/js/custom.js" strategy="afterInteractive" />
        <Script src="/js/shortcode.js" strategy="afterInteractive" />
        <Script src="/js/jquery.bgscroll.js" strategy="afterInteractive" />
        <Script src="/js/switcher.js" strategy="afterInteractive" />

        {/* REVOLUTION JS */}
        <Script
          src="/js/jquery.themepunch.tools.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/jquery.themepunch.revolution.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/revolution-plugin.js" strategy="afterInteractive" />
        <Script src="/js/rev-script-1.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
