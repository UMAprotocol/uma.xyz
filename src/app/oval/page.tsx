import { Metadata } from "next";
import { CaptureOev, Hero, OevLost, ReclaimOev, BuildSafely, OevCreation } from "@/components/Oval";
import { Layout } from "@/components/Layout";

const title = "Oval";
const description = "TODO: get copy for description";

// TODO: assets for OG metadata
export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    site: "@UMAprotocol",
    title,
    images: "/assets/osnap-twitter-card.png",
  },
  openGraph: {
    title,
    description,
    images: "/assets/osnap-twitter-card.png",
    url: "https://uma.xyz",
  },
};

export default function Page() {
  return (
    <Layout showTicker={false} colorScheme="OVAL" className="pb-[96px]">
      <Hero />
      <OevLost />
      <CaptureOev />
      <ReclaimOev />
      <BuildSafely />
      <OevCreation />
    </Layout>
  );
}
