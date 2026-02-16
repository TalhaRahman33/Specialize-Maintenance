import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   turbo: false,
  // },
};

export default nextConfig;


// import type { NextConfig } from "next";
// import withExportImageOptimizer from "next-image-export-optimizer";

// const nextConfig: NextConfig = {
//   output: "export",
//   images: {
//     loader: "custom",
//     loaderFile: "./node_modules/next-image-export-optimizer/loader.js",
//   },
// };

// export default withExportImageOptimizer(nextConfig);
