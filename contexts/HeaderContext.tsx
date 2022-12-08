import { desktopHeaderHeight } from "constant";
import { useMounted } from "hooks";
import { createContext, ReactNode, RefObject, useEffect, useState } from "react";

export interface HeaderContextState {
  colorChangeSectionRef: RefObject<HTMLDivElement>;
  isLightTheme: boolean;
  setColorChangeSectionRef: (ref: RefObject<HTMLDivElement>) => void;
  setIsLightTheme: (isLightTheme: boolean) => void;
}

export const HeaderContext = createContext<HeaderContextState>({
  isLightTheme: true,
  setIsLightTheme: () => null,
  colorChangeSectionRef: { current: null },
  setColorChangeSectionRef: () => null,
});

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [colorChangeSectionRef, setColorChangeSectionRef] = useState<RefObject<HTMLDivElement>>({ current: null });
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const mounted = useMounted();

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    console.log(scrollY, colorChangeSectionRef.current?.offsetTop, isLightTheme);
    if (colorChangeSectionRef.current?.offsetTop === undefined) return;

    if (scrollY > colorChangeSectionRef.current.offsetTop - desktopHeaderHeight) {
      setIsLightTheme(true);
    } else {
      setIsLightTheme(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY, colorChangeSectionRef.current]);

  return (
    <HeaderContext.Provider
      value={{
        isLightTheme,
        setIsLightTheme,
        colorChangeSectionRef,
        setColorChangeSectionRef,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
