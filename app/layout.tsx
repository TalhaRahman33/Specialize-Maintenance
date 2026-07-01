import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { tajawal } from "./fonts";

export const metadata: Metadata = {
  title: "Specialize Maintenance",
  description: "Specialize Maintenance website",
  keywords: ["maintenance", "services", "repair"],
  authors: [{ name: "Specialize Maintenance" }],
  robots: "index, follow",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head>
        {/* External CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/loader.min.css" />
        <link rel="stylesheet" href="/css/flaticon.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/skin-1.css" />
        <link rel="stylesheet" href="/css/switcher.css" />
        <link rel="stylesheet" href="/css/settings.css" />
        <link rel="stylesheet" href="/css/navigation.css" />


        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),
            dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })
          (window,document,'script','dataLayer','GTM-N75JLWCL');
          `}
        </Script>

      </head>


      <body className={tajawal.variable}>

        {/* Google Tag Manager No Script */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N75JLWCL"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>


        {children}


        {/* JS Files */}
        <Script src="/js/jquery-3.6.1.min.js" strategy="beforeInteractive" />

        <Script src="/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />

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


        {/* Revolution Slider */}
        <Script
          src="/js/jquery.themepunch.tools.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/jquery.themepunch.revolution.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/revolution-plugin.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/rev-script-1.js"
          strategy="afterInteractive"
        />

      </body>

    </html>
  );
}




// import React from "react";
// import type { Metadata } from "next";
// import "./globals.css";
// import Script from "next/script";
// import { tajawal } from "./fonts";

// export const metadata: Metadata = {
//   title: "Specialize Maintenance",
//   description: " ",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="keywords" content="" />
//         <meta name="author" content="" />
//         <meta name="robots" content="" />
//         <meta name="description" content="" />

//         <link rel="icon" href="/images/favicon-32x32.png" type="image/x-icon" />
//         <link
//           rel="shortcut icon"
//           type="image/x-icon"
//           href="/images/favicon.png"
//         />


//         <meta name="viewport" content="width=device-width, initial-scale=1" />

//         <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="/css/font-awesome.min.css"
//         />
//         <link rel="stylesheet" type="text/css" href="/css/owl.carousel.min.css" />
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="/css/magnific-popup.min.css"
//         />
//         <link rel="stylesheet" type="text/css" href="/css/loader.min.css" />
//         <link rel="stylesheet" type="text/css" href="/css/flaticon.min.css" />
//         <link rel="stylesheet" type="text/css" href="/css/style.css" />
//         <link
//           rel="stylesheet"
//           className="skin"
//           type="text/css"
//           href="/css/skin-1.css"
//         />
//         <link rel="stylesheet" type="text/css" href="/css/switcher.css" />

//         <link rel="stylesheet" type="text/css" href="/css/settings.css" />
//         <link rel="stylesheet" type="text/css" href="/css/navigation.css" />

//         <Script id="gtm-script" strategy="afterInteractive">
//           {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-N75JLWCL');`}
//         </Script>
//       </head>

//       <body
//         className={`${tajawal.variable}`}
//       >
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-N75JLWCL"
//             height="0"
//             width="0"
//             style={{ display: 'none', visibility: 'hidden' }}
//           />
//         </noscript>
//         {children}

//         {/* JAVASCRIPT FILES */}
//         <Script src="/js/jquery-3.6.1.min.js" strategy="beforeInteractive" />
//         <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
//         <Script src="/js/popper.min.js" strategy="afterInteractive" />
//         <Script src="/js/magnific-popup.min.js" strategy="afterInteractive" />
//         <Script src="/js/waypoints.min.js" strategy="afterInteractive" />
//         <Script src="/js/counterup.min.js" strategy="afterInteractive" />
//         <Script src="/js/waypoints-sticky.min.js" strategy="afterInteractive" />
//         <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
//         <Script src="/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
//         <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
//         <Script src="/js/jquery.owl-filter.js" strategy="afterInteractive" />
//         <Script src="/js/custom.js" strategy="afterInteractive" />
//         <Script src="/js/shortcode.js" strategy="afterInteractive" />
//         <Script src="/js/jquery.bgscroll.js" strategy="afterInteractive" />
//         <Script src="/js/switcher.js" strategy="afterInteractive" />

//         {/* REVOLUTION JS */}
//         <Script
//           src="/js/jquery.themepunch.tools.min.js"
//           strategy="afterInteractive"
//         />
//         <Script
//           src="/js/jquery.themepunch.revolution.min.js"
//           strategy="afterInteractive"
//         />
//         <Script src="/js/revolution-plugin.js" strategy="afterInteractive" />
//         <Script src="/js/rev-script-1.js" strategy="afterInteractive" />
//       </body>
//     </html>
//   );
// }
