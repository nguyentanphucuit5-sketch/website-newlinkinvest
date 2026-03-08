/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fsgn5-8.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "scontent.fsgn5-10.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "scontent.fsgn5-14.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "lahome.com.vn",
      },
      {
        protocol: "https",
        hostname: "w.ladicdn.com",
      },
      {
        protocol: "https",
        hostname: "dienphucthanh.com",
      },
      {
        protocol: "https",
        hostname: "legacy.lancaster.com.vn",
      },
      {
        protocol: "https",
        hostname: "tpiland.com",
      },
      {
        protocol: "https",
        hostname: "delasolvn.vn",
      },
      {
        protocol: "https",
        hostname: "eatonpark.site",
      },
      {
        protocol: "https",
        hostname: "duantheglobalcity.vn",
      },
      {
        protocol: "https",
        hostname: "celadoncity.net",
      },
      {
        protocol: "https",
        hostname: "muagi.com.vn",
      },
      {
        protocol: "https",
        hostname: "gqcpthirugibortsrptn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
