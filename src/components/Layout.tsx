import { cn } from "@/utils/styleUtils";
import Footer from "./Footer";
import Header from "./Header";
import VoteTicker from "./VoteTicker";
import { PortalContainer } from "./Portal";
import OvalBanner from "./OvalBanner";
import { headers } from "next/headers";

const ColorSchemes = {
  HOME: "HOME",
  OSNAP: "OSNAP",
  OVAL: "OVAL",
} as const;

const Platforms = {
  MAC: "MAC",
  WINDOWS: "WINDOWS",
} as const;

type ColorScheme = keyof typeof ColorSchemes;

export type LayoutProps = {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  showTicker?: boolean;
  showFooter?: boolean;
  showOvalBanner?: boolean;
  className?: string;
};

const getPlatform = () => {
  const headersList = headers();
  const ua = headersList.get("user-agent");
  const platform = ua?.toLowerCase()?.includes("win") ? Platforms.WINDOWS : Platforms.MAC;
  return platform;
};

export function Layout({
  children,
  showTicker = true,
  showFooter = true,
  showOvalBanner = true,
  colorScheme = ColorSchemes.HOME,
  className,
}: LayoutProps) {
  const platform = getPlatform();

  return (
    <main
      data-platform={platform.toLowerCase()}
      data-color-scheme={colorScheme.toLowerCase()}
      className={cn("relative h-[100%] overflow-clip", className)}
    >
      {showOvalBanner && <OvalBanner />}
      {showTicker && <VoteTicker className="z-20" />}
      <Header />
      {children}
      {showFooter && <Footer />}
      <PortalContainer />
    </main>
  );
}
