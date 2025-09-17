import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,

//   async redirects() {
//     return [
//       {
//         source: "/(.*)",
//         has: [
//           {
//             type: "host",
//             value: "ke-me-lak-website.vercel.app", // αλλάξε το με το πραγματικό vercel domain σου
//           },
//         ],
//         destination: "https://kemelak.gr/:path*",
//         permanent: true,
//       },
//       {
//         source: "/(.*)",
//         has: [
//           {
//             type: "host",
//             value: "www.kemelak.gr",
//           },
//         ],
//         destination: "https://kemelak.gr/:path*",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;
