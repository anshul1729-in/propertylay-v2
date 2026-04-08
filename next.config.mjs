/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.propertylay.com',
        pathname: '/assets/images/**',
      },
    ],
  },
};

export default nextConfig;
