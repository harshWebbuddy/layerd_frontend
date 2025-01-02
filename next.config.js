/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "growstackai.s3.amazonaws.com",
      "other-domain.com",
     ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "growstackai.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
