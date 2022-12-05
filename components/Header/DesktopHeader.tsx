import { largeAndUnder } from "constant";
import Link from "next/link";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-white-logo.svg";
import styled from "styled-components";

interface Props {
  activeLink: number;
  scrollPosition: number;
  isLightTheme: boolean;
}

const DesktopHeader: React.FC<Props> = ({ scrollPosition, isLightTheme, activeLink }) => {
  return (
    <Wrapper scrollPosition={scrollPosition} isLightTheme={isLightTheme}>
      <Link href="/">{isLightTheme ? <StyledLogoBlack /> : <StyledLogo />}</Link>
      <Links>
        {links.map(({ label, href }, i) => (
          <StyledLink
            active={activeLink === i}
            isLightTheme={isLightTheme}
            key={i}
            href={href}
            target={i > 2 ? "_blank" : undefined}
            rel={i > 2 ? "norefferer" : undefined}
          >
            <LinkWrapper>
              {activeLink === i ? <RedDot /> : i <= 2 ? <Dot /> : null} {label}
            </LinkWrapper>
          </StyledLink>
        ))}
      </Links>
      <LaunchButton isLightTheme={isLightTheme} onClick={() => null}>
        Launch app
      </LaunchButton>
    </Wrapper>
  );
};

export default DesktopHeader;

const LinkWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const links = [
  {
    label: "How it works",
    href: "#howItWorks",
  },
  {
    label: "For voters",
    href: "#voter",
  },
  {
    label: "For builders",
    href: "#builder",
  },
  {
    label: (
      <>
        Docs <SmUpRightArrow style={{ marginLeft: "8px" }} />
      </>
    ),
    href: "https://docs.umaproject.org/",
  },
  {
    label: (
      <>
        Projects <SmUpRightArrow style={{ marginLeft: "8px" }} />
      </>
    ),
    href: "https://projects.umaproject.org/",
  },
];

interface IStyledProps {
  isLightTheme: boolean;
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
  border-radius: 12px;
  padding: 32px 0;
  backdrop-filter: blur(6px);
  background: ${({ isLightTheme }) => {
    return isLightTheme ? "var(--grey-900)" : "var(--grey-200)";
  }};
  transition: all 0.2s ease-in-out;
  @media ${largeAndUnder} {
    width: calc(100% - 64px);
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 20px;
`;

interface ILinkProps extends IStyledProps {
  active?: boolean;
}

const StyledLink = styled.a<ILinkProps>`
  position: relative;
  left: 0;
  color: ${({ active }) => {
    return active ? "var(--red)" : "var(--grey-400)";
  }};
  text-decoration: none;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  text-decoration: none;
  span {
    transition: all 0.1s ease-in-out;
  }
  &:hover {
    opacity: 0.8;
    span {
      visibility: visible;
      left: -12px;
    }
  }
`;

const LaunchButton = styled.button<IStyledProps>`
  padding: 8px 16px 12px;
  height: 40px;
  gap: 2px;
  width: 118px;
  border-radius: 8px;
  font: var(--body-md);
  transition: opacity 0.2s ease-in-out;
  color: ${({ isLightTheme }) => {
    return isLightTheme ? "var(--white)" : "var(--grey-100)";
  }};
  background-color: ${({ isLightTheme }) => {
    return isLightTheme ? "var(--grey-100)" : "var(--white)";
  }};
  &:hover {
    opacity: 0.75;
  }
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  margin-right: 8px;
  border-radius: 3px;
  visibility: hidden;
  background-color: var(--grey-400);
  position: absolute;
  left: -16px;
  opacity: 0.8;
`;
const RedDot = styled(Dot)`
  background: var(--red);
  visibility: visible;
  left: -12px;
  opacity: 1;
`;

const StyledLogoBlack = styled(BlackLogo)`
  cursor: pointer;
`;

const StyledLogo = styled(Logo)`
  cursor: pointer;
`;
