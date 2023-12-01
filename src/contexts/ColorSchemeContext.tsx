import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ColorSchemes = {
  home: "home",
  osnap: "osnap",
  oval: "oval",
} as const;

type ColorScheme = keyof typeof ColorSchemes;

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("home");
  const pathname = usePathname();
  // we only change the color when on the home page

  const page = pathname?.split("#")[0];
  const isHomePage = page === "/";
  const isOvalPage = page === "/oval";
  const isOsnapPage = page === "/osnap";

  useEffect(() => {
    if (isHomePage) {
      setColorScheme(ColorSchemes.home);
    }
    if (isOvalPage) {
      setColorScheme(ColorSchemes.oval);
    }
    if (isOsnapPage) {
      setColorScheme(ColorSchemes.osnap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return colorScheme;
};
