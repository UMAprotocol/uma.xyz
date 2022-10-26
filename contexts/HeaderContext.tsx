import { useState, createContext, ReactNode, MutableRefObject, createRef, useEffect } from "react";

// Once the app crosses below this certain element, assume it can go light mode so we only need to track 1 ref.
type RefType = MutableRefObject<HTMLDivElement | null>;
type RefKeys = "heroSection" | "header";

export interface HeaderContextState {
  lightRefs: { [key: string]: RefType };
  updateRef: (ref: RefType, key: RefKeys) => void;
  boundingHeight: number;
}

export const HeaderContext = createContext<HeaderContextState>({
  lightRefs: {
    heroSection: createRef(),
    header: createRef(),
  },
  boundingHeight: 0,
  updateRef: () => null,
});

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [refs, setRefs] = useState<{ [key in RefKeys]: RefType }>({
    heroSection: createRef(),
    header: createRef(),
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

  function updateHeight(refs: { heroSection: RefType; header: RefType }) {
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
    <HeaderContext.Provider
      value={{
        lightRefs: refs,
        updateRef,
        boundingHeight,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
