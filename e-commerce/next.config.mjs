/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
          },
          {
            protocol: 'https',
            hostname: 'img.spoonacular.com',
            pathname: '/menu-items/**',
          },
        ],
      }
};

export default nextConfig;
