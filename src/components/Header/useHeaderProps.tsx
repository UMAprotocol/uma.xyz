import { homePageLinks, osnapPageLinks, ovalPageLinks } from "@/constant";
import { useScrollContext } from "@/hooks/contexts/useScrollContext";
import { usePathname } from "next/navigation";

export const useHeaderProps = () => {
  const { isLightTheme: isLightThemeFromScroll } = useScrollContext();
  const pathname = usePathname();
  // we only change the color when on the home page

  const page = pathname?.split("#")[0];
  const isHomePage = page === "/";
  const isOvalPage = page === "/oval";
  const isOsnapPage = page === "/osnap";

  // the home page switches theme based on scroll
  if (isHomePage) {
    return {
      bg: isLightThemeFromScroll ? "var(--white)" : "var(--hero-video-background)",
      menuBg: isLightThemeFromScroll ? "var(--white)" : "var(--hero-video-background)",
      isLightTheme: isLightThemeFromScroll,
      links: homePageLinks,
      activePath: page,
      launchAppLink: "https://vote.uma.xyz",
    } as const;
  }
  // the osnap page is all light theme
  if (isOsnapPage) {
    return {
      bg: "transparent",
      menuBg: "var(--background-page)",
      isLightTheme: true,
      links: osnapPageLinks,
      activePath: page,
      launchAppLink: "https://vote.uma.xyz",
    } as const;
  }
  // the oval page is all dark theme
  if (isOvalPage) {
    return {
      bg: "transparent",
      menuBg: "var(--background-page)",
      isLightTheme: false,
      links: ovalPageLinks,
      activePath: page,
    } as const;
  }
  // default to homepage props
  return {
    bg: "transparent",
    menuBg: "var(--background-page)",
    isLightTheme: false,
    links: homePageLinks,
    activePath: page,
  } as const;
};
