import { css } from "styled-components";

const weight = 400;

const fontFamily = "'Halyard Display', sans-serif";

export const subHeader = `${weight} ${16 / 16}rem/19px ${fontFamily}`;
export const subHeaderSm = `${weight} ${12 / 16}rem/16px ${fontFamily}`;
export const headerLg = `${weight} ${96 / 16}rem/112px ${fontFamily}`;
export const headerMd = `${weight} ${64 / 16}rem/72px ${fontFamily}`;
export const headerSm = `${weight} ${40 / 16}rem/55px ${fontFamily}`;
export const headerXs = `${weight} ${32 / 16}rem/45px ${fontFamily}`;

export const lgFluidFontSize = `
  clamp(4rem, 6vw + 2rem, 6rem)
`;

export const lgFluidLineHeight = `
  clamp(72px, 6vw + 2rem, 112px)
`;

export const lgFluid = css`
  font-size: ${lgFluidFontSize};
  line-height: ${lgFluidLineHeight};
`;

export const mdFluidFontSize = `
  clamp(2.5rem, 6vw + 2rem, 4rem)
`;

export const mdFluidLineHeight = `
  clamp(55px, 6vw + 2rem, 72px)
`;

export const mdFluid = css`
  font-size: ${mdFluidFontSize};
  line-height: ${mdFluidLineHeight};
`;

export const smFluidFontSize = `
  clamp(2rem, 7vw + 1.18rem, 2.5rem)
`;

export const smFluidLineHeight = `
  clamp(45px, 5vw + 2.5rem, 55px)
`;

export const smFluid = css`
  font-size: ${smFluidFontSize};
  line-height: ${smFluidLineHeight};
`;

export const bodyXl = `${weight} ${26 / 16}rem/32px ${fontFamily}`;
export const bodyLg = `${weight} ${20 / 16}rem/28px ${fontFamily}`;
export const bodyMd = `${weight} ${18 / 16}rem/24px ${fontFamily}`;
export const bodySm = `${weight} ${16 / 16}rem/22px ${fontFamily}`;
export const bodyXs = `${weight} ${12 / 16}rem/17px ${fontFamily}`;
