/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co', 'i.ibb.co'], // Add 'i.ibb.co' here
  },
};

export default nextConfig; // Use export default for .mjs files, or module.exports = nextConfig; for .js files