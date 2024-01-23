export const Pages = {
  HOME: "HOME",
  OSNAP: "OSNAP",
  OVAL: "OVAL",
} as const;

export const Platforms = {
  MAC: "MAC",
  WINDOWS: "WINDOWS",
} as const;

export type Page = keyof typeof Pages;
export type Platform = keyof typeof Platforms;
