import { createContext, ReactNode } from "react";

interface HeaderContextState {
  light: object;
  dark: object;
}
export const HeaderContext = createContext<HeaderContextState>({
  light: {},
  dark: {},
});

const defaultState = {
  light: {},
  dark: {},
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  return <HeaderContext.Provider value={defaultState}>{children}</HeaderContext.Provider>;
};
