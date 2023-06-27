/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
      },
    ],
  },
}

export default nextConfig
