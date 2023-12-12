import { Layout } from "@/components/Layout";
import { Home } from "@/components/pages/Home";
import { Metadata } from "next";

const title = "UMA";
const description = "UMA is a blockchain oracle which trustlessly records any verifiable data on the blockchain.";

export const metadata: Metadata = {
  title,
  description,
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
    url: "https://uma.xyz",
  },
};

export default function Page() {
  return (
    <Layout colorScheme="HOME">
      <Home />
    </Layout>
  );
}
