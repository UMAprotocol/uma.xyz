import { useState, createContext, ReactNode, MutableRefObject, createRef, useEffect } from "react";

// Adjust stylings as user scrolls through app on mobile.
type RefType = MutableRefObject<HTMLDivElement | null>;
type RefKeys = "stake" | "earn" | "vote";

export interface HeaderContextState {
  elementRefs: { [key: string]: RefType };
  updateRef: (ref: RefType, key: RefKeys) => void;
  boundingHeight: number;
}

export const VoteParticipationContext = createContext<HeaderContextState>({
  elementRefs: {
    heroSection: createRef(),
    header: createRef(),
  },
  boundingHeight: 0,
  updateRef: () => null,
});

export const VoteParticipationProvider = ({ children }: { children: ReactNode }) => {
  const [refs, setRefs] = useState<{ [key in RefKeys]: RefType }>({
    stake: createRef(),
    earn: createRef(),
    vote: createRef(),
  });
  const [boundingHeight, setBoundingHeight] = useState(0);

  function updateRef(r: RefType, key: RefKeys) {
    setRefs((pv) => {
      return { ...pv, [key]: r };
    });
  }

  useEffect(() => {
    updateHeight(refs);
  }, [refs]);

  function updateHeight(refs: { stake: RefType; earn: RefType; vote: RefType }) {
    const initialValue = 0;
    const heights = Object.values(refs).reduce((pv, cv) => {
      if (cv.current) {
        return cv.current.getBoundingClientRect().height + pv;
      } else {
        return pv;
      }
    }, initialValue);
    setBoundingHeight(heights);
  }

  return (
    <VoteParticipationContext.Provider
      value={{
        elementRefs: refs,
        updateRef,
        boundingHeight,
      }}
    >
      {children}
    </VoteParticipationContext.Provider>
  );
};
