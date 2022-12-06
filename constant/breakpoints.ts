export const maxSectionWidth = 1140;

export const medium = 640;
export const tablet = 1024;
export const large = 1300;

function makeBreakpoint(width: number, isAndOver = false) {
  if (isAndOver) return `(min-width: ${width + 1}px)`;
  return `(max-width: ${width}px)`;
}

export const mediumAndUnder = makeBreakpoint(medium);
export const tabletAndUnder = makeBreakpoint(tablet);
export const largeAndUnder = makeBreakpoint(large);

export const mediumAndOver = makeBreakpoint(medium, true);
export const tabletAndOver = makeBreakpoint(tablet, true);
export const largeAndOver = makeBreakpoint(large, true);
