/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.menucool.com',
        port: '3000',
      },
    ],
  },
};

export default nextConfig;
