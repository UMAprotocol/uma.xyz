import { cn } from "@/utils/styleUtils";
import Header from "./Header";
import VoteTicker from "./VoteTicker";
import { PortalContainer } from "./Portal";
import OvalBanner from "./OvalBanner";
import { Page, Pages, Platforms } from "@/constant/pages";
import { headers } from "next/headers";

const platformsColorA = ["windows", "iphone", "ipad"];

const getPlatform = () => {
  const headersList = headers();
  const ua = headersList.get("user-agent");

  const platform = platformsColorA.some((platform) => ua?.toLowerCase()?.includes(platform))
    ? Platforms.WINDOWS
    : Platforms.MAC;
  return platform;
};

export type LayoutProps = {
  children: React.ReactNode;
  page?: Page;
  showTicker?: boolean;
  showOvalBanner?: boolean;
  className?: string;
};

export function Layout({
  children,
  showTicker = true,
  showOvalBanner = true,
  page = Pages.HOME,
  className,
}: LayoutProps) {
  return (
    <main
      data-platform={getPlatform().toLowerCase()}
      data-color-scheme={page.toLowerCase()}
      className={cn("relative h-[100%] overflow-clip", className)}
    >
      {showOvalBanner && <OvalBanner page={page} />}
      {showTicker && <VoteTicker className="z-20" />}
      <Header />
      {children}
      <PortalContainer />
    </main>
  );
}
