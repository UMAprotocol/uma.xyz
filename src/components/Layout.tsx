import { cn } from "@/utils/styleUtils";
import Footer from "./Footer";
import Header from "./Header";
import VoteTicker from "./VoteTicker";
import { PortalContainer } from "./Portal";

const ColorSchemes = {
  HOME: "HOME",
  OSNAP: "OSNAP",
  OVAL: "OVAL",
} as const;

type ColorScheme = keyof typeof ColorSchemes;

export type LayoutProps = {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  showTicker?: boolean;
  showFooter?: boolean;
  className?: string;
};

export function Layout({
  children,
  showTicker = true,
  showFooter = true,
  colorScheme = ColorSchemes.HOME,
  className,
}: LayoutProps) {
  return (
    <main data-color-scheme={colorScheme.toLowerCase()} className={cn("relative h-[100%] overflow-clip", className)}>
      {showTicker && <VoteTicker className="z-20" />}
      <Header />
      {children}
      {showFooter && <Footer />}
      <PortalContainer />
    </main>
  );
}
