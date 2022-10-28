export const maxSectionWidth = "1140px";
// Configures the V2 breakpoints
export const BREAKPOINTS = {
  xs: 400,
  sm: 576,
  md: 714,
  tb: 1024,
};
const breakpoint = (width: number) => ({
  andDown: `(max-width: ${width}px)`,
  andUp: `(min-width: ${width}px)`,
});
export const QUERIES = {
  xs: breakpoint(BREAKPOINTS.xs),
  sm: breakpoint(BREAKPOINTS.sm),
  md: breakpoint(BREAKPOINTS.md),
  tb: breakpoint(BREAKPOINTS.tb),
};
