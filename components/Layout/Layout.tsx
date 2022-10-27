import { ReactNode } from "react";
import styled from "styled-components";
import { HeaderProvider } from "contexts";
/** Used to wrap pages.
 *
 * Add headers, footers, and other common elements here.
 */

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Main>
      <HeaderProvider>{children}</HeaderProvider>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  background: var(--grey-200);
`;
