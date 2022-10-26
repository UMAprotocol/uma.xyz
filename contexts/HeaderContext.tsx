import { useState, createContext, ReactNode, MutableRefObject, createRef } from "react";

// Once the app crosses below this certain element, assume it can go light mode so we only need to track 1 ref.
type RefType = MutableRefObject<HTMLDivElement | null>;
export interface HeaderContextState {
  lightRef: RefType;
  updateRef: (ref: RefType) => void;
}

export const HeaderContext = createContext<HeaderContextState>({
  lightRef: createRef(),
  updateRef: () => null,
});

const defaultState = {
  lightRef: createRef(),
  updateRef: () => null,
};

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [ref, setRef] = useState<RefType>(createRef());

  function updateRef(r: RefType) {
    setRef(r);
  }

  return (
    <HeaderContext.Provider
      value={{
        lightRef: ref,
        updateRef,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
