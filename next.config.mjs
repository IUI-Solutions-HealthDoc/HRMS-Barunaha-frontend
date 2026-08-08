/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: `${process.env.BACKEND_URL || "https://hrms-barunaha-backend-production.up.railway.app"}/:path*`,
      },
    ];
  },
};

export default nextConfig;
