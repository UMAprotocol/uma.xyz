import Footer from "./Footer";
import Header from "./Header";
import VoteTicker from "./VoteTicker";

const ColorSchemes = {
  HOME: "HOME",
  OSNAP: "OSNAP",
  OVAL: "OVAL",
} as const;

type ColorScheme = keyof typeof ColorSchemes;

export type LayoutProps = {
  colorScheme?: ColorScheme;
  showTicker?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
};

export function Layout({
  children,
  showTicker = true,
  showFooter = true,
  colorScheme = ColorSchemes.HOME,
}: LayoutProps) {
  return (
    <main data-color-scheme={colorScheme.toLowerCase()} className="overflow-clip">
      {showTicker ? <VoteTicker /> : null}
      <Header />
      {children}
      {showFooter && <Footer />}
    </main>
  );
}
