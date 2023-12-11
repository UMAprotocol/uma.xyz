import { Layout } from "@/components/Layout";
import { SandPackCSS } from "@/components/sandpack-styles";
import { ScrollProvider } from "@/contexts";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/sandpack-override.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
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
