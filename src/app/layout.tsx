import { SandPackCSS } from "@/components/sandpack-styles";
import { ScrollProvider } from "@/contexts";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/sandpack-override.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_TAG } from "@/constant";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SandPackCSS />
      </head>
      <body className="overflow-x-clip">
        <ScrollProvider>{children}</ScrollProvider>
        <Analytics />
      </body>
      {GA_TAG && <GoogleAnalytics gaId={GA_TAG} />}
    </html>
  );
}
