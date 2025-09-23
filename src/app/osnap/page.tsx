import Footer from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { OsnapV2 } from "@/components/pages/OsnapV2";
import { ONE_DAY_SECONDS } from "@/lib/constants";
import { Metadata } from "next";

const title = "oSnap | Secured by UMA";
const description =
  "oSnap is a DAO governance tool that replaces multisigs for decentralized treasury management and contract deployment.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://uma.xyz"),
  alternates: {
    canonical: "/osnap",
  },
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
    url: "/osnap",
  },
};

export const revalidate = ONE_DAY_SECONDS;
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Layout page="OSNAP">
      <OsnapV2 />
      <Footer />
    </Layout>
  );
}
