export const Pages = {
  HOME: "HOME",
  TERMS_OF_SERVICE: "TERMS_OF_SERVICE",
} as const;

export const Platforms = {
  MAC: "MAC",
  WINDOWS: "WINDOWS",
} as const;

export type Page = keyof typeof Pages;
export type Platform = keyof typeof Platforms;
