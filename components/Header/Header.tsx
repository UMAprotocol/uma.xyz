import { useState, useContext } from "react";
import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import { VoteTicker } from "components";
import { useScrollPosition } from "hooks";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";
import Headroom from "react-headroom";
import { HeaderContext } from "contexts";

interface Props {
  isIntersecting: boolean;
  activeLink: number;
}

const Header: React.FC<Props> = ({ isIntersecting, activeLink }) => {
  const { scrollPosition } = useHeader();
  return (
    <>
      <VoteTicker theme="dark" numVotes={2} phase="commit" />
      <Headroom style={{ paddingTop: "24px" }}>
        <Wrapper scrollPosition={scrollPosition} isIntersecting={isIntersecting}>
          <a href="/">{isIntersecting ? <BlackLogo /> : <Logo />}</a>
          <Links>
            {/* TODO: Get links */}
            {links.map(({ label, href }, i) => (
              <Link active={activeLink === i} isIntersecting={isIntersecting} key={i} href={href}>
                <LinkWrapper>
                  {activeLink === i ? <RedDot /> : <Dot />} {label}
                </LinkWrapper>
              </Link>
            ))}
          </Links>
          <LaunchButton isIntersecting={isIntersecting} onClick={() => null}>
            Launch app
          </LaunchButton>
        </Wrapper>
      </Headroom>
    </>
  );
};

function useHeader() {
  const headerContext = useContext(HeaderContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  useScrollPosition(({ currPos }) => {
    setScrollPosition(Math.abs(currPos.y));
  }, []);
  return {
    scrollPosition,
  };
}

export default Header;

const LinkWrapper = styled.div`
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
      <>
        Docs <SmUpRightArrow style={{ marginLeft: "4px" }} />
      </>
    ),
    href: "#",
  },
  {
    label: (
      <>
        Projects <SmUpRightArrow style={{ marginLeft: "4px" }} />
      </>
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  max-width: var(--max-section-width);
  margin: 0 auto;
  z-index: 100;
  margin-top: 24px;
  backdrop-filter: ${({ isIntersecting }) => {
    return isIntersecting ? "blur(6px)" : "none";
  }};
  background: ${({ isIntersecting }) => {
    return isIntersecting ? "var(--grey-900)" : "var(--grey-200)";
  }};
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

const Dot = styled.div`
  width: 6px;
  height: 6px;
  margin-right: 8px;
  border-radius: 3px;
  visibility: hidden;
`;
const RedDot = styled(Dot)`
  background: var(--red);
  visibility: visible;
`;
