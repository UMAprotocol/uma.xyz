export const maxSectionWidth = "1140px";
export const BREAKPOINTS = {
  xs: 400,
  sm: 576,
  md: 640,
  tb: 1024,
  lg: 1300,
};

const breakpoint = (width: number) => ({
  andDown: `(max-width: ${width}px)`,
  andUp: `(min-width: ${width}px)`,
});

export const QUERIES = {
  xs: breakpoint(BREAKPOINTS.xs),
  sm: breakpoint(BREAKPOINTS.sm),
  md: breakpoint(BREAKPOINTS.md),
  lg: breakpoint(BREAKPOINTS.lg),
  tb: breakpoint(BREAKPOINTS.tb),
};
