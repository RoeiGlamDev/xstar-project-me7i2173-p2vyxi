import { withPlugins } from 'next-compose-plugins';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'], // Replace with your image domain
    formats: ['image/avif', 'image/webp']
},
  optimization: {
    minimize: true,
    minimizer: [
      // Custom minimizer configuration to enhance loading speed and performance
    ]
},
  webpack: (config) => {
    // Custom webpack configuration for luxury 3D designs and effects
    return config;
  }
};

export default withPlugins([[optimizedImages]], nextConfig);