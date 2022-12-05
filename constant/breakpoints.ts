export const maxSectionWidth = 1140;

export const extraSmall = 400;
export const small = 576;
export const medium = 640;
export const tablet = 1024;
export const large = 1300;

function makeBreakpoint(width: number, isAndOver = false) {
  if (isAndOver) return `(min-width: ${width + 1}px)`;
  return `(max-width: ${width}px)`;
}

export const extraSmallAndUnder = makeBreakpoint(extraSmall);
export const smallAndUnder = makeBreakpoint(small);
export const mediumAndUnder = makeBreakpoint(medium);
export const largeAndUnder = makeBreakpoint(large);
export const tabletAndUnder = makeBreakpoint(tablet);

export const extraSmallAndOver = makeBreakpoint(extraSmall, true);
export const smallAndOver = makeBreakpoint(small, true);
export const mediumAndOver = makeBreakpoint(medium, true);
export const largeAndOver = makeBreakpoint(large, true);
export const tabletAndOver = makeBreakpoint(tablet, true);
