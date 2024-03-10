/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['media.istockphoto.com', 'images.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
      env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      },
  };
  
  export default nextConfig;
  
