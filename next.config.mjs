/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      axios: "axios/dist/browser/axios.cjs", // axios를 브라우저 전용으로 강제 설정
    };
    return config;
  },
};

export default nextConfig;
