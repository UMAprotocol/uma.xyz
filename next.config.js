/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    serverComponentsExternalPackages: ["airtable"],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  redirects: async () => {
    return [
      {
        source: "/jobs",
        destination: "https://jobs.lever.co/risklabs",
        permanent: false,
      },
      {
        source: "/products",
        destination: "https://projects.uma.xyz",
        permanent: false,
      },
      {
        source: "/faq",
        destination: "https://docs.uma.xyz/protocol-overview/dvm-2.0-faq",
        permanent: false,
      },
      {
        source: "/uma.tokenlist.json",
        destination: "https://raw.githubusercontent.com/UMAprotocol/website/master/public/uma.tokenlist.json",
        permanent: false,
      },
    ];
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(nextConfig);
