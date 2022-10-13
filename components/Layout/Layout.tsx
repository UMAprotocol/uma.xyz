import { ReactNode } from "react";
import styled from "styled-components";
/** Used to wrap pages.
 *
 * Add headers, footers, and other common elements here.
 */
export function Layout({ children }: { children: ReactNode }) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  min-height: 100vh;
  background: var(--black);
`;
