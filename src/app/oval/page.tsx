import { Metadata } from "next";
import { CaptureOev, Hero, OevLost, EarnOev, BuildSafer, OevCreation } from "@/components/Oval";
import { Layout } from "@/components/Layout";

const title = "Oval";
const description = "TODO: get copy for description";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    site: "@UMAprotocol",
    title,
    images: "/assets/oval-twitter-card.jpg",
  },
  openGraph: {
    title,
    description,
    images: "/assets/oval-twitter-card.jpg",
    url: "https://uma.xyz/oval",
  },
};

export default function Page() {
  return (
    <Layout showTicker={false} colorScheme="OVAL" className="pb-[96px]">
      <Hero />
      <OevLost />
      <CaptureOev />
      <EarnOev />
      <BuildSafer />
      <OevCreation />
    </Layout>
  );
}
