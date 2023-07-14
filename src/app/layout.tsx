import { Layout } from "@/components/Layout";
import { SandPackCSS } from "@/components/sandpack-styles";
import { ScrollProvider } from "@/contexts";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/sandpack-override.css";
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
    card: "summary",
    site: "@UMAprotocol",
    title,
    images: "/uma_square_red_logo.png",
  },
  openGraph: {
    title,
    description,
    images: "/uma_square_red_logo.png",
    url: "https://uma.xyz",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SandPackCSS />
      </head>
      <body>
        <ScrollProvider>
          <Layout>{children}</Layout>
        </ScrollProvider>
      </body>
    </html>
  );
}
