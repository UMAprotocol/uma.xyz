export function isExternalLink(href: string) {
  if (href.startsWith("/") || href.startsWith("#")) return false;
  return true;
}

/**
 * Adds an opacity value to an hsl string
 * @param color - a css color string or variable
 * @param opacity - a number between 0 and 1
 * @returns a color-mix css color with transparency added
 */
export function addOpacityToColor(color: string, opacity: number) {
  const alpha = 100 - opacity * 100;
  return `color-mix(in srgb, transparent ${alpha}%, ${color})`;
}

export function wait(timeoutMilliseconds: number) {
  return new Promise((res) => {
    setTimeout(res, timeoutMilliseconds);
  });
}

export const isDevEnvironment = process.env.NODE_ENV === "production";

export function roundToNearestMillion(value: number): string {
  const nearestMillion = Math.round(value / 1000000);
  return nearestMillion.toLocaleString();
}
