import { headerBlurHeight } from "@/constant";
import { useMounted } from "@/hooks";
import { createContext, ReactNode, RefObject, useEffect, useState } from "react";

interface ScrollContextState {
  loadSectionRefAndId: (id: string, ref: RefObject<HTMLDivElement>) => void;
  colorChangeSectionRef: RefObject<HTMLDivElement>;
  setColorChangeSectionRef: (ref: RefObject<HTMLDivElement>) => void;
  isLightTheme: boolean;
  setIsLightTheme: (isLightTheme: boolean) => void;
}

export const ScrollContext = createContext<ScrollContextState>({
  loadSectionRefAndId: () => null,
  isLightTheme: false,
  setIsLightTheme: () => null,
  colorChangeSectionRef: { current: null },
  setColorChangeSectionRef: () => null,
});

type SectionRefsById = Record<string, RefObject<HTMLDivElement>>;

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [sectionRefsById, setSectionRefsById] = useState<SectionRefsById>({});
  const [previousSectionId, setPreviousSectionId] = useState("");
  const [colorChangeSectionRef, setColorChangeSectionRef] = useState<RefObject<HTMLDivElement>>({ current: null });
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const mounted = useMounted();

  function loadSectionRefAndId(id: string, ref: RefObject<HTMLDivElement>) {
    setSectionRefsById((prev) => ({ ...prev, [id]: ref }));
  }

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    Object.entries(sectionRefsById).forEach(([id, ref]) => {
      if (id === previousSectionId) return;

      if (isMiddleOfScreenIntersecting(ref)) {
        addHashToUrl(id);
        setPreviousSectionId(id);
      }
    });

    function addHashToUrl(id: string) {
      window.history.pushState({}, "", `#${id}`);
    }

    function isMiddleOfScreenIntersecting(ref: RefObject<HTMLDivElement>) {
      if (!ref.current) return false;

      const middleOfScreen = window.innerHeight / 2;
      const { top, bottom } = ref.current.getBoundingClientRect();

      return top < middleOfScreen && bottom > middleOfScreen;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  useEffect(() => {
    updateTheme();

    function updateTheme() {
      if (hasEnteredColorChangeSection()) {
        setIsLightTheme(true);
      } else {
        setIsLightTheme(false);
      }
    }

    function hasEnteredColorChangeSection() {
      if (colorChangeSectionRef.current?.offsetTop === undefined) return false;

      return scrollY > colorChangeSectionRef.current.offsetTop - headerBlurHeight * 1.8;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  return (
    <ScrollContext.Provider
      value={{
        loadSectionRefAndId,
        isLightTheme,
        setIsLightTheme,
        colorChangeSectionRef,
        setColorChangeSectionRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
