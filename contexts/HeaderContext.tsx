import { useState, useEffect, createContext, ReactNode } from "react";

export interface HeaderContextState {
  light: object;
  dark: object;
  updateTheme: (theme: Theme) => void;
}
interface Theme {
  light: {};
  dark: {};
}
export const HeaderContext = createContext<HeaderContextState>({
  light: {},
  dark: {},
  updateTheme: (theme: Theme) => null,
});

const defaultState = {
  light: {},
  dark: {},
  updateTheme: (theme: Theme) => null,
};

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState({ light: {}, dark: {} });

  function updateTheme(theme: Theme) {
    setTheme(theme);
  }

  return (
    <HeaderContext.Provider
      value={{
        ...theme,
        updateTheme,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
