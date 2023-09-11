import { Osnap } from "@/components/pages/Osnap";
import { Metadata } from "next";

const title = "oSnap | Secured by UMA";
const description =
  "oSnap is a DAO governance tool that replaces multisigs for decentralized treasury management and contract deployment.";

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
  return <Osnap />;
}
