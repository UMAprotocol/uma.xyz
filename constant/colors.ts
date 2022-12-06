// Reds
export const red = "hsla(0, 100%, 65%, 1)";
export const redOpacity5 = "hsla(0, 100%, 65%, 0.05)";
export const red510Opacity15 = "rgba(255, 74, 74, 0.15)";
export const red550 = "hsla(352, 23%, 25%, 1)";

// Whites
export const white = "hsla(0, 0%, 100%, 1)"; // #FFFFFF
export const whiteOpacity10 = "hsla(0, 0%, 100%, 0.1)";
export const white200 = "	hsl(0, 0%, 98%, 1)"; // #FAFAFA

// Greys
export const grey100 = "hsla(288, 4%, 25%, 1)"; // #272528
export const grey100Opacity20 = "hsla(288, 4%, 25%, 0.2)";
export const grey200 = "hsla(280, 4%, 15%, 1)"; // #322f33
export const grey300 = "	hsla(285, 4%, 19%, 1)"; // #413D42
export const grey400 = "hsl(255, 2%, 64%, 1)"; // #A3A2A6
export const grey400Opacity20 = "hsla(255, 2%, 64%, 0.2)";
export const grey500 = "hsla(255, 3%, 69%, 1)"; // #B0AFB3
export const grey600 = "hsla(0, 0%, 91%,1)"; // #E9E9E9
export const grey700 = "hsla(0, 0%, 94%,1)"; // #F0F0F0
export const grey800 = "hsla(0, 0%, 99%,1)"; // #FDFDFD

export const black = "hsla(0, 0%, 12%, 1)";
// Helper function for adding opacity.
export function addOpacityToHsl(hsl: string, opacity: number) {
  const betweenParens = hsl.match(/\(([^)]+)\)/)?.[1];
  const [h, s, l] = betweenParens?.split(",") ?? [];
  return `hsla(${h}, ${s}, ${l}, ${opacity})`;
}
