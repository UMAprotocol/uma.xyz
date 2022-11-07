import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Link from "next/link";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";

interface Props {
  activeLink: number;
  scrollPosition: number;
  isLightTheme: boolean;
}

const DesktopHeader: React.FC<Props> = ({ scrollPosition, isLightTheme, activeLink }) => {
  return (
    <Wrapper scrollPosition={scrollPosition} isLightTheme={isLightTheme}>
      <Link href="/">{isLightTheme ? <BlackLogo /> : <Logo />}</Link>
      <Links>
        {links.map(({ label, href }, i) => (
          <StyledLink active={activeLink === i} isLightTheme={isLightTheme} key={i} href={href}>
            <LinkWrapper>
              {activeLink === i ? <RedDot /> : <Dot />} {label}
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
        Oracle <SmUpRightArrow style={{ marginLeft: "4px" }} />
      </>
    ),
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
  margin-top: 24px;
  backdrop-filter: ${({ isLightTheme }) => {
    return isLightTheme ? "blur(6px)" : "none";
  }};
  background: ${({ isLightTheme }) => {
    return isLightTheme ? "var(--grey-900)" : "var(--grey-200)";
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

const StyledLink = styled.a<ILinkProps>`
  color: ${({ active }) => {
    return active ? "var(--red)" : "var(--grey-400)";
  }};
  text-decoration: none;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  margin: 0 15px;
`;

const LaunchButton = styled.button<IStyledProps>`
  padding: 8px 16px 12px;
  height: 40px;
  gap: 2px;
  width: 118px;
  border-radius: 8px;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
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
