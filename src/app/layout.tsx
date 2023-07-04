import { Layout } from "@/components/Layout";
import { SandPackCSS } from "@/components/sandpack-styles";
import { ScrollProvider } from "@/contexts";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/sandpack-override.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UMA - Universal Market Access",
  description: "An optimistic oracle built for web3",
  icons: {
    icon: ["/favicon-32x32.png", "/favicon-16x16.png"],
  },
  twitter: {
    card: "summary",
    site: "@UMAprotocol",
    title: "UMA - Universal Market Access",
    images: "/uma_square_red_logo.png",
  },
  openGraph: {
    title: "UMA - Universal Market Access",
    images: "/uma_square_red_logo.png",
    description: "An optimistic oracle built for web3",
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
