import { mobileAndUnder, tabletAndUnder } from "constant";
import styled from "styled-components";

export const Title = styled.div`
  font: var(--header-sm);
  color: var(--grey-200);
  border-bottom: 1px solid var(--grey-600);
  padding-bottom: 16px;
  @media ${tabletAndUnder} {
    margin: 0 16px;
  }
  @media ${mobileAndUnder} {
    font: var(--body-lg);
  }
`;
export const Wrapper = styled.div`
  max-width: var(--page-width);
  margin-inline: auto;
`;

// WIP for red effect
export const Header = styled.div`
  font: var(--header-lg);
  letter-spacing: -0.01em;
`;
