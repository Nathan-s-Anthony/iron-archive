import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
          protocol: 'https',
        hostname: 'www.archives.gov',
      },
      {
           protocol: 'https',
        hostname: 'broaden-horizons.fr',
      },
    {
           protocol: 'https',
        hostname: 'www.neh.gov',
      },
      {
        protocol: 'https',
        hostname: 'tankmuseum.org',
      },
           {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      
      },
      {
        protocol: 'https',
        hostname: 'thumb.wikimedia.org',
      
      }
     
     
  
    ],
  },
};
export default nextConfig;
