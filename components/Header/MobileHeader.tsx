import styled from "styled-components";
import { QUERIES } from "constants/breakpoints";
import Link from "next/link";
import Logo from "public/assets/uma-logo.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";

interface Props {
  showMobileMenu: boolean;
  onToggle: () => void;
  inDarkSection: boolean;
}
const MobileHeader: React.FC<Props> = ({ showMobileMenu, onToggle, inDarkSection }) => {
  return (
    <Section>
      <Wrapper>
        <MenuToggle toggled={showMobileMenu} onToggle={onToggle} />
        <Link href="/">{inDarkSection ? <BlackLogo /> : <Logo />}</Link>
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
        <MobileNavLink key={i} href={href} target="_blank">
          {label}
        </MobileNavLink>
      ))}
    </MobileMenuContainer>
  );
};

const MenuToggle: React.FC<{ toggled: boolean; onToggle: () => void }> = ({ toggled, onToggle }) => {
  return (
    <MenuToggleButton onClick={onToggle} toggled={toggled}>
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

const Section = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuToggleButton = styled.button<{ toggled?: boolean }>`
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
    background-color: ${({ toggled }) => (toggled ? "var(--white)" : "var(--white)")};
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
  font-weight: 600;
  font-size: ${16 / 16}rem;
  line-height: 22px;
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
