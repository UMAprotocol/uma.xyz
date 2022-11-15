import styled from "styled-components";
import { QUERIES } from "constants/breakpoints";

export const Title = styled.div`
  font: var(--header-sm);
  color: var(--grey-200);
  border-bottom: 1px solid var(--grey-600);
  padding-bottom: 16px;
  @media ${QUERIES.tb.andDown} {
    margin: 0 16px;
  }
  @media ${QUERIES.md.andDown} {
    font: var(--body-lg);
  }
  > span {
    color: var(--red);
  }
`;
export const Wrapper = styled.div`
  background: inherit;
  width: 100%;
  max-width: var(--max-section-width);
  margin: 0 auto;
`;

// WIP for red effect
export const Header = styled.div`
  font: var(--header-lg);
  letter-spacing: -0.01em;
  position: relative;
  /* background: -webkit-radial-gradient(center, 50% 50%, red, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  /* background: radial-gradient(circle at 50% 100%, #e66465 50%, black 50%); */
`;
