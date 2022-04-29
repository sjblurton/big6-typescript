/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
};

const settings = {
  env: {},
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
  },
  nextConfig,
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
