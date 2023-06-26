import { useScrollContext } from "@/hooks/contexts/useScrollContext";
import { RefObject, useEffect } from "react";

export function useLoadSectionRefAndId(ref: RefObject<HTMLDivElement>, id: string) {
  const { loadSectionRefAndId } = useScrollContext();

  useEffect(() => {
    if (ref.current) {
      loadSectionRefAndId(id, ref);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);
}
