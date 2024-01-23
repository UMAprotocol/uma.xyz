import { cn } from "@/utils/styleUtils";
import Footer from "./Footer";
import Header from "./Header";
import VoteTicker from "./VoteTicker";
import { PortalContainer } from "./Portal";
import OvalBanner from "./OvalBanner";

export const Pages = {
  HOME: "HOME",
  OSNAP: "OSNAP",
  OVAL: "OVAL",
} as const;

export type Page = keyof typeof Pages;

export type LayoutProps = {
  children: React.ReactNode;
  page?: Page;
  showTicker?: boolean;
  showFooter?: boolean;
  showOvalBanner?: boolean;
  className?: string;
};

export function Layout({
  children,
  showTicker = true,
  showFooter = true,
  showOvalBanner = true,
  page = Pages.HOME,
  className,
}: LayoutProps) {
  return (
    <main data-color-scheme={page.toLowerCase()} className={cn("relative h-[100%] overflow-clip", className)}>
      {showOvalBanner && <OvalBanner page={page} />}
      {showTicker && <VoteTicker className="z-20" />}
      <Header />
      {children}
      {showFooter && <Footer />}
      <PortalContainer />
    </main>
  );
}
