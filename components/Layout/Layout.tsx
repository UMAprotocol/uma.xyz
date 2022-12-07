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
    <Main>
      <VoteTicker />
      <Header />
      {children}
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  background: var(--grey-200);
  height: 100%;
`;
