import { SandPackCSS } from "@/components/sandpack-styles";
import { ScrollProvider } from "@/contexts";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/sandpack-override.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SandPackCSS />
      </head>
      <body className="h-full">
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
