import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  images: {
    domains: ["buly.kr"], // ✅ 여기에 허용할 도메인 추가
  },
};

export default nextConfig;
