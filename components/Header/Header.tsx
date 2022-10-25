import { useState, useEffect, MutableRefObject } from "react";
import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import { VoteTicker } from "components";
import { useScrollPosition } from "hooks";

interface Props {
  isIntersecting: boolean;
}

const Header: React.FC<Props> = ({ isIntersecting }) => {
  const { scrollPosition } = useHeader();
  return (
    <>
      <VoteTicker theme="dark" numVotes={2} phase="commit" />
      <Wrapper scrollPosition={scrollPosition} isIntersecting={isIntersecting}>
        <a href="/">{isIntersecting ? <BlackLogo /> : <Logo />}</a>
        <Links>
          {/* TODO: Get links */}
          {links.map(({ label, href }, i) => (
            <Link isIntersecting={isIntersecting} key={i} href={href}>
              {label}
            </Link>
          ))}
          <LaunchButton isIntersecting={isIntersecting} onClick={() => null}>
            Launch app
          </LaunchButton>
        </Links>
      </Wrapper>
    </>
  );
};

function useHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const entry = useIntersectionObserver(headerRef, {
  //   threshold: 0.5,
  // });
  // console.log("entry", entry);
  useScrollPosition(({ currPos }) => {
    setScrollPosition(Math.abs(currPos.y));
  }, []);
  return {
    scrollPosition,
    // isIntersecting: !!entry?.isIntersecting
  };
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

interface IStyledProps {
  isIntersecting: boolean;
}

interface IWrapper extends IStyledProps {
  scrollPosition: number;
}

const Wrapper = styled.div<IWrapper>`
  background: ${({ isIntersecting }) => {
    return isIntersecting ? "var(--grey-900)" : "var(--grey-200)";
  }};
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
  z-index: 100;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 32px;
`;

const Link = styled.a<IStyledProps>`
  color: var(--grey-500);
  color: ${({ isIntersecting }) => {
    return isIntersecting ? "var(--red)" : "var(--grey-400)";
  }};
  text-decoration: none;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const LaunchButton = styled.button<IStyledProps>`
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
