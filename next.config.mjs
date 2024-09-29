/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ryddel.com',
        port: '',
        pathname: '/**',
      },  
    ],
    // domains: ['via.placeholder.com']
  }
};

export default nextConfig;
