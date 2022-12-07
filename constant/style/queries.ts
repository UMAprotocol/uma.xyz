import { laptop, mobile, tablet } from "./breakpoints";

export const mobileAndUnder = `(max-width: ${mobile}px)`;
export const tabletAndUnder = `(max-width: ${tablet}px)`;
export const laptopAndUnder = `(max-width: ${laptop}px)`;
export const onlyTablet = `(min-width: ${mobile + 1}px) and (max-width: ${tablet}px)`;
