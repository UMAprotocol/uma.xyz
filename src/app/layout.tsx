import { GlobalStyle } from "@/components/GlobalStyle";
import StyledComponentsRegistry from "@/components/style-registry";
import { ScrollProvider } from "@/contexts";
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
      <body>
        {/* @ts-expect-error todo: investigate why this type is erroring */}
        <GlobalStyle />
        <StyledComponentsRegistry>
          <ScrollProvider>{children}</ScrollProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
