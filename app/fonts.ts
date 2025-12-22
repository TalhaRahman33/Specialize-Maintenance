 // app/fonts.ts

import localFont from "next/font/local";

export const tajawal = localFont({
  src: [
    {
      path: "../public/fonts/Tajawal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Tajawal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Tajawal-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tajawal",
  display: "swap",
});
