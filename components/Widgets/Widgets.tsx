import styled from "styled-components";

export const Title = styled.div`
  font: var(--header-sm);
  color: var(--black);
  > span {
    color: var(--red-500);
  }
`;
export const Wrapper = styled.div`
  background: inherit;
  width: 100%;
  max-width: var(--max-section-width);
  margin: 0 auto;
`;
