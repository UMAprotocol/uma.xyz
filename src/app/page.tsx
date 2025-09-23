import Footer from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { OracleTvsChip } from "@/components/Home/OracleTvsChip";
import { Home } from "@/components/pages/Home";
import { Metadata } from "next";

const title = "UMA";
const description = "UMA is a blockchain oracle which trustlessly records any verifiable data on the blockchain.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://uma.xyz"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: ["/favicon-32x32.png", "/favicon-16x16.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@UMAprotocol",
    title,
    images: "/assets/twitter-card.png",
  },
  openGraph: {
    title,
    description,
    images: "/assets/twitter-card.png",
    url: "/",
  },
};

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Layout page="HOME">
      <Home>
        <OracleTvsChip />
      </Home>
      <Footer />
    </Layout>
  );
}
