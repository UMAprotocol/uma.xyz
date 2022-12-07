import { Footer, Header } from "components";
import { VoteTicker } from "components/VoteTicker/VoteTicker";
import { ReactNode } from "react";
import styled from "styled-components";
/** Used to wrap pages.
 *
 * Add headers, footers, and other common elements here.
 */

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <VoteTicker />
      <Header />
      <Main>
        {children}
        <Footer />
      </Main>
    </Wrapper>
  );
}

const Main = styled.main`
  height: 100%;
`;

const Wrapper = styled.div`
  background: var(--grey-200);
  scroll-behavior: smooth;
`;
