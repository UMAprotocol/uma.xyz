import { useState } from "react";
import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import { VoteTicker } from "components";
import { useScrollPosition } from "hooks";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";

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
  useScrollPosition(({ currPos }) => {
    setScrollPosition(Math.abs(currPos.y));
  }, []);
  return {
    scrollPosition,
  };
}

export default Header;

const ArrowWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

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
  {
    label: (
      <ArrowWrapper>
        Docs <SmUpRightArrow style={{ marginLeft: "4px" }} />
      </ArrowWrapper>
    ),
    href: "#",
  },
  {
    label: (
      <ArrowWrapper>
        Projects <SmUpRightArrow style={{ marginLeft: "4px" }} />
      </ArrowWrapper>
    ),
    href: "#",
  },
];

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

interface ILinkProps extends IStyledProps {
  active?: boolean;
}

const Link = styled.a<ILinkProps>`
  color: ${({ active }) => {
    return active ? "var(--red)" : "var(--grey-400)";
  }};
  text-decoration: none;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const LaunchButton = styled.button<IStyledProps>`
  padding: 8px 16px 12px;
  height: 40px;
  gap: 2px;
  width: 118px;
  border-radius: 8px;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  color: ${({ isIntersecting }) => {
    return isIntersecting ? "var(--white)" : "var(--grey-100)";
  }};
  background-color: ${({ isIntersecting }) => {
    return isIntersecting ? "var(--grey-100)" : "var(--white)";
  }};
  &:hover {
    opacity: 0.8;
  }
`;
