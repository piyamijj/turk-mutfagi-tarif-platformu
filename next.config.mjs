/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Ensures easy static hosting or Vercel deployment without image optimization limits
  },
};

export default nextConfig;