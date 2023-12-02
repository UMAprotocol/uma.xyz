"use client";
import { Layout } from "@/components/Layout";
import { SandPackCSS } from "@/components/sandpack-styles";
import { ScrollProvider } from "@/contexts";
import { useColorScheme } from "@/contexts/ColorSchemeContext";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/sandpack-override.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // TODO: ideally we should not make the entire app a client component, but every page has a diff color scheme and the pages rely on the body tag having styles applied. In the future we should remove this logic and don't rely on body tag styles
  const colorScheme = useColorScheme();
  return (
    <html lang="en">
      <head>
        <SandPackCSS />
      </head>
      <body data-color-scheme={colorScheme}>
        <ScrollProvider>
          <Layout>{children}</Layout>
        </ScrollProvider>
      </body>
    </html>
  );
}
