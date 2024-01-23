import { cn } from "@/utils/styleUtils";
import Footer from "./Footer";
import Header from "./Header";
import VoteTicker from "./VoteTicker";
import { PortalContainer } from "./Portal";
import OvalBanner from "./OvalBanner";
import { headers } from "next/headers";
import { Page, Pages, Platforms } from "@/constant/pages";

export type LayoutProps = {
  children: React.ReactNode;
  page?: Page;
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
  page = Pages.HOME,
  className,
}: LayoutProps) {
  const platform = getPlatform();

  return (
    <main
      data-platform={platform.toLowerCase()}
      data-color-scheme={page.toLowerCase()}
      className={cn("relative h-[100%] overflow-clip", className)}
    >
      {showOvalBanner && <OvalBanner page={page} />}
      {showTicker && <VoteTicker className="z-20" />}
      <Header />
      {children}
      {showFooter && <Footer />}
      <PortalContainer />
    </main>
  );
}
