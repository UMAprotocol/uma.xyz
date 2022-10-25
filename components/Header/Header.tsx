import { useState, MutableRefObject } from "react";
import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import { VoteTicker } from "components";
import { useScrollPosition, useIntersectionObserver } from "hooks";

interface Props {
  headerRef: MutableRefObject<HTMLDivElement | null>;
}

const Header: React.FC<Props> = () => {
  const { scrollPosition } = useHeader();
  return (
    <>
      <VoteTicker theme="dark" numVotes={2} phase="commit" />
      <Wrapper scrollPosition={scrollPosition}>
        <a href="/">
          <Logo />
        </a>
        <Links>
          {/* TODO: Get links */}
          {links.map(({ label, href }, i) => (
            <Link key={i} href={href}>
              {label}
            </Link>
          ))}
          <LaunchButton onClick={() => null}>Launch app</LaunchButton>
        </Links>
      </Wrapper>
    </>
  );
};

function useHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useScrollPosition(({ currPos }) => {
    setScrollPosition(Math.abs(currPos.y));
  }, []);
  return { scrollPosition };
}

export default Header;

const links = [
  {
    label: "How it works",
    href: "#",
  },
  {
    label: "For voters",
    href: "#",
  },
  {
    label: "For builders",
    href: "#",
  },
];

/*
    Note: This code segment utilizes the scroll position to create
          a dynamic fade that increases to a maximum of 94% opacity
          as the user scrolls down the page. 

          The opacity function is set as O = MIN(0.94, 2*{pixels_from_top}/255)
          background-color: ${({ transparentHeader, scrollPosition }) =>
          transparentHeader
            ? `#2d2e33${Math.min(240, Math.floor(2.5 * scrollPosition))
                .toString(16)
                .padStart(2, "0")}`
            : "#2d2e33"};
      
        height: 72px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        color: #c5d5e0;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 1000;
        border-bottom: ${({ scrollPosition }) => {
          return scrollPosition > 0 ? "1px solid #4d4f56" : "1px solid transparent";
        }};
      
        @media (max-width: 428px) {
          height: 64px;
          padding: 0 12px;
        }
*/

interface IWrapper {
  scrollPosition: number;
}
const Wrapper = styled.div<IWrapper>`
  background: var(--grey-200);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  max-width: var(--max-section-width);
  padding-top: 24px;
  margin: 0 auto;
  position: ${({ scrollPosition }) => (scrollPosition > 24 ? "sticky" : "static")};
  top: 0;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 32px;
`;

const Link = styled.a`
  color: var(--grey-500);
  text-decoration: none;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const LaunchButton = styled.button`
  color: var(--grey-200);
  padding: 8px 16px 12px;
  height: 40px;
  gap: 2px;
  width: 118px;
  background-color: var(--white);
  border-radius: 8px;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
