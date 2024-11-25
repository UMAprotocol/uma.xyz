import { cn } from "@/utils/styleUtils";
import Header from "./Header";
import VoteTicker from "./VoteTicker";
import { PortalContainer } from "./Portal";
import OvalBanner from "./OvalBanner";
import { Page, Pages } from "@/constant/pages";

export type LayoutProps = {
  children: React.ReactNode;
  page?: Page;
  showTicker?: boolean;
  showOvalBanner?: boolean;
  className?: string;
};

export function Layout({ children, showTicker = true, page = Pages.HOME, className }: LayoutProps) {
  return (
    <main
      id="app-root-main"
      data-color-scheme={page.toLowerCase()}
      className={cn("relative h-[100%] overflow-clip", className)}
    >
      {showTicker && <VoteTicker className="z-20" />}
      <Header />
      {children}
      <PortalContainer />
    </main>
  );
}
