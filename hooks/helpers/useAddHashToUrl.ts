import { RefObject, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { useMounted } from "./useMounted";

export function useAddHashToUrl(id: string, wrapperRef: RefObject<HTMLDivElement>) {
  const [scrollY, setScrollY] = useState(0);
  const debouncedScrollY = useDebounce(scrollY, 500);
  const mounted = useMounted();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    const middleOfScreenY = window.innerHeight / 2;

    if (wrapperRef.current && isIntersecting(wrapperRef.current)) {
      window.history.pushState({}, "", `#${id}`);
    }

    function isIntersecting(element: HTMLDivElement) {
      if (typeof window === "undefined") return false;
      const { top, bottom } = element.getBoundingClientRect();
      return top < middleOfScreenY && bottom > middleOfScreenY;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedScrollY, wrapperRef.current]);
}
