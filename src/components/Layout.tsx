import dynamic from "next/dynamic";
import { ReactNode } from "react";
import styled from "styled-components";
/** Used to wrap pages.
 *
 * Add headers, footers, and other common elements here.
 */

const VoteTicker = dynamic(() => import("./VoteTicker"));
const Header = dynamic(() => import("./Header"));

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <VoteTicker />
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}

const Main = styled.main`
  overflow: clip;
`;

const Wrapper = styled.div`
  /* 
    background color slightly adjusted to match video.
    color-correcting the video is super hard and this is much simpler.
    you'd need to be a color genius to see the difference.
  */
  background: #2a252a;
`;
