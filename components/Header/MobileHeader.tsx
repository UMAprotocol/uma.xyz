import styled from "styled-components";
import { QUERIES } from "constants/breakpoints";
import Link from "next/link";
import Logo from "public/assets/uma-logo.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";
import Twitter from "public/assets/twitter.svg";
import Discord from "public/assets/discord.svg";
import Github from "public/assets/github.svg";
import Discourse from "public/assets/discourse.svg";
import BlackCircle from "public/assets/black-circle.svg";
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
        <AppBlock>
          <a href="https://vote.umaproject.org/" target="_blank" rel="noreferrer">
            <span>App</span>
            <UpRightArrow />
          </a>
        </AppBlock>
      </Wrapper>
      <MobileMenuComponent show={showMobileMenu} onClickLink={onToggle} />
    </Section>
  );
};

const MobileMenuComponent: React.FC<{
  show: boolean;
  onClickLink: () => void;
}> = ({ show, onClickLink }) => {
  return (
    <MobileMenuContainer show={show}>
      {links.map(({ href, label }, i) => (
        <MobileNavLink onClick={onClickLink} key={i} href={href} target="_blank">
          {label}
        </MobileNavLink>
      ))}
      <SocialLinks>
        {socialLinks.map(({ href, Icon }, i) => (
          <SocialLink key={i} href={href} rel="noreferrer" target="_blank">
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
    href: "#",
  },
  {
    label: "For Voters",
    href: "#",
  },
  {
    label: "For Builders",
    href: "#",
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
  width: calc(100% - 32px);
  margin: 0 auto;
`;
const Wrapper = styled.div<IStyledProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: ${({ isLightTheme }) => {
    return isLightTheme ? "blur(6px)" : "none";
  }};
`;

export const MenuToggleButton = styled.button<{ toggled?: boolean; isLightTheme: boolean }>`
  display: block;
  position: relative;
  height: 18px;
  width: 25px;
  background: var(--grey-900);
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

export const MobileMenuContainer = styled.div<{ show: boolean }>`
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 120px 20px;
  background-color: var(--grey-200);
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-20px)")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  z-index: 5;
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileNavLink = styled.a<{ active?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 25px 0 4px;
  font: var(--body-sm);
  color: var(--white);
  text-decoration: none;
  &:visited {
    color: var(--white);
  }
  &:hover {
    opacity: 0.75;
  }
  svg {
    path {
      stroke: var(--white);
    }
  }
  @media ${QUERIES.sm.andUp} {
    font-size: ${18 / 16}rem;
    line-height: 24px;
  }
`;

const AppBlock = styled.div`
  a {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    text-decoration: none;
    font: var(--body-sm);
    color: var(--white);
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

const SocialLink = styled.a`
  path {
    fill: var(--white);
  }
  &:hover {
    opacity: 0.5;
  }
`;
