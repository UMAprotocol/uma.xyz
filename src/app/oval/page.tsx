import { Metadata } from "next";
import {
  CaptureOev,
  Hero,
  OevLost,
  ReclaimOev,
  BuildSafely,
  Faq,
  InitialLoadIntegrateOvalModal,
} from "@/components/Oval";
import { Layout } from "@/components/Layout";

const title = "Oval | Built by UMA";
const description =
  "Oval is an MEV capture technology that wraps price oracles and generates protocol revenue by auctioning the right to conduct liquidations";

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
    <Layout showOvalBanner showTicker={false} page="OVAL" className="pb-[96px]">
      <InitialLoadIntegrateOvalModal />
      <Hero />
      <OevLost />
      <CaptureOev />
      <ReclaimOev />
      <BuildSafely />
      <Faq />
    </Layout>
  );
}
