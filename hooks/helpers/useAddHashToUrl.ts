import { useInView } from "framer-motion";
import { RefObject, useEffect } from "react";

export function useAddHashToUrl(id: string, wrapperRef: RefObject<HTMLDivElement>, amount = 0.1) {
  const isInView = useInView(wrapperRef, { amount });

  useEffect(() => {
    if (isInView) {
      window.history.pushState({}, "", `#${id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
}
