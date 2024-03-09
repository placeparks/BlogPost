/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['media.istockphoto.com', 'images.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
  };
  
  export default nextConfig;
  