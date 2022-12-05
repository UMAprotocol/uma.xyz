import { smallAndOver, tabletAndUnder } from "constant";
import Link from "next/link";
import BlackCircle from "public/assets/black-circle.svg";
import Discord from "public/assets/discord.svg";
import Discourse from "public/assets/discourse.svg";
import Github from "public/assets/github.svg";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";
import Twitter from "public/assets/twitter.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-logo.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import styled from "styled-components";
interface Props {
  showMobileMenu: boolean;
  onToggle: () => void;
  isLightTheme: boolean;
}
const MobileHeader: React.FC<Props> = ({ showMobileMenu, onToggle, isLightTheme }) => {
  return (
    <Section>
      <Wrapper isLightTheme={isLightTheme}>
        <MenuToggle isLightTheme={isLightTheme} toggled={showMobileMenu} onToggle={onToggle} />
        <Link href="/">{isLightTheme ? <BlackLogo /> : <Logo />}</Link>
        <AppBlock isLightTheme={isLightTheme}>
          <a href="https://vote.umaproject.org/" target="_blank" rel="noreferrer">
            <span>App</span>
            <UpRightArrow />
          </a>
        </AppBlock>
      </Wrapper>
      <MobileMenuComponent isLightTheme={isLightTheme} show={showMobileMenu} onClickLink={onToggle} />
    </Section>
  );
};

const MobileMenuComponent: React.FC<{
  show: boolean;
  onClickLink: () => void;
  isLightTheme: boolean;
}> = ({ show, onClickLink, isLightTheme }) => {
  return (
    <MobileMenuContainer isLightTheme={isLightTheme} show={show}>
      {links.map(({ href, label }, i) => (
        <MobileNavLink
          isLightTheme={isLightTheme}
          onClick={onClickLink}
          key={i}
          href={href}
          target={i > 2 ? "_blank" : undefined}
          rel={i > 2 ? "norefferer" : undefined}
        >
          {label}
        </MobileNavLink>
      ))}
      <SocialLinks>
        {socialLinks.map(({ href, Icon }, i) => (
          <SocialLink isLightTheme={isLightTheme} key={i} href={href} rel="noreferrer" target="_blank">
            <Icon />
          </SocialLink>
        ))}
      </SocialLinks>
    </MobileMenuContainer>
  );
};

const MenuToggle: React.FC<{ toggled: boolean; onToggle: () => void; isLightTheme: boolean }> = ({
  toggled,
  onToggle,
  isLightTheme,
}) => {
  return (
    <MenuToggleButton isLightTheme={isLightTheme} onClick={onToggle} toggled={toggled}>
      <span></span>
      <span></span>
    </MenuToggleButton>
  );
};

const links = [
  {
    label: "How it works",
    href: "#howItWorks",
  },
  {
    label: "For Voters",
    href: "#voter",
  },
  {
    label: "For Builders",
    href: "#builder",
  },
  {
    label: (
      <>
        Oracle <SmUpRightArrow style={{ marginLeft: "8px" }} />
      </>
    ),
    href: "#",
  },
  {
    label: (
      <>
        Docs <SmUpRightArrow style={{ marginLeft: "8px" }} />
      </>
    ),
    href: "#",
  },
  {
    label: (
      <>
        Projects <SmUpRightArrow style={{ marginLeft: "8px" }} />
      </>
    ),
    href: "#",
  },
];

export default MobileHeader;

const socialLinks = [
  {
    href: "http://discord.umaproject.org",
    Icon: Discord,
  },
  {
    href: "https://twitter.com/UMAprotocol",
    Icon: BlackCircle,
  },
  {
    href: "https://twitter.com/UMAprotocol",
    Icon: Twitter,
  },
  {
    href: "https://discourse.umaproject.org/",
    Icon: Discourse,
  },
  {
    href: "https://github.com/UMAprotocol",
    Icon: Github,
  },
];

interface IStyledProps {
  isLightTheme: boolean;
}

const Section = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 48px;
`;

const Wrapper = styled.div<IStyledProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 16px;
  backdrop-filter: ${({ isLightTheme }) => {
    return isLightTheme ? "blur(6px)" : "none";
  }};
  @media ${tabletAndUnder} {
    width: calc(100% - 40px);
  }
`;

export const MenuToggleButton = styled.button<{ toggled?: boolean; isLightTheme: boolean }>`
  display: block;
  position: relative;
  height: 18px;
  width: 25px;
  background: var(--grey-900);
  margin-left: 16px;
  span {
    position: absolute;
    display: block;
    height: 2px;
    width: 25px;
    background-color: ${({ isLightTheme }) => {
      return isLightTheme ? "var(--grey-100)" : "var(--white)";
    }};
    transition: ${({ toggled }) =>
      toggled
        ? "background .2s, top .2s, opacity .2s, transform .2s .25s"
        : "top .2s .25s, opacity .2s .25s, transform .2s"};

    :nth-of-type(1) {
      top: ${({ toggled }) => (toggled ? "9px" : 0)};
      transform: ${({ toggled }) => (toggled ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-of-type(2) {
      top: ${({ toggled }) => (toggled ? "9px" : "16px")};
      transform: ${({ toggled }) => (toggled ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const MobileMenuContainer = styled.div<{ show: boolean; isLightTheme: boolean }>`
  width: 100%;
  position: absolute;
  top: 56px;
  left: 0;
  padding: 120px 20px;
  background-color: ${({ isLightTheme }) => (isLightTheme ? "var(--white)" : "var(--grey-200)")};
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-20px)")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  z-index: 5;
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileNavLink = styled.a<{ active?: boolean; isLightTheme: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 25px 0 4px;
  font: var(--body-sm);
  color: ${({ isLightTheme }) => (isLightTheme ? "var(--grey-500)" : "var(--white)")};
  text-decoration: none;
  &:visited {
    color: ${({ isLightTheme }) => (isLightTheme ? "var(--grey-500)" : "var(--white)")};
  }
  &:hover {
    opacity: 0.75;
  }
  svg {
    path {
      stroke: ${({ isLightTheme }) => (isLightTheme ? "var(--grey-500)" : "var(--white)")};
    }
  }
  @media ${smallAndOver} {
    font-size: ${18 / 16}rem;
    line-height: 24px;
  }
`;

const AppBlock = styled.div<IStyledProps>`
  a {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    text-decoration: none;
    font: var(--body-sm);
    color: ${({ isLightTheme }) => (isLightTheme ? "var(--grey-500)" : "var(--white)")};
    margin-right: 28px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  svg {
    margin-left: 8px;
  }
  path {
    stroke: var(--grey-500);
  }
  &:hover {
    opacity: 0.5;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  flex-basis: 32%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 64px;
`;

const SocialLink = styled.a<{ isLightTheme: boolean }>`
  path {
    fill: ${({ isLightTheme }) => (isLightTheme ? "var(--grey-500)" : "var(--white)")};
  }
  &:hover {
    path {
      fill: var(--red);
    }
  }
`;
