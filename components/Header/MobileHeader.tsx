import styled from "styled-components";
import { QUERIES } from "constants/breakpoints";
import Image from "next/image";

interface Props {
  showMobileMenu: boolean;
  onToggle: () => void;
}
const MobileHeader: React.FC<Props> = ({ showMobileMenu, onToggle }) => {
  return (
    <div>
      <MenuToggle toggled={showMobileMenu} onToggle={onToggle} />
      <MobileMenuComponent show={showMobileMenu} onClickLink={onToggle} />
    </div>
  );
};

const MobileMenuComponent: React.FC<{
  show: boolean;
  onClickLink: () => void;
}> = ({ show, onClickLink }) => {
  return (
    <MobileMenuContainer show={show}>
      {MOBILE_HEADER_LINKS.map((link) => link.component({ path: "#", onClick: onClickLink }))}
      <MobileCommunityLinks>
        {COMMUNITY_LINKS.map((link, idx) => (
          <MobileCommunityLink key={idx} href={link.href} target="_blank">
            <Image src={link.iconSrc} alt={link.alt} width={25} height={25} />
          </MobileCommunityLink>
        ))}
      </MobileCommunityLinks>
    </MobileMenuContainer>
  );
};

const MenuToggle: React.FC<{ toggled: boolean; onToggle: () => void }> = ({ toggled, onToggle }) => {
  return (
    <MenuToggleButton onClick={onToggle} toggled={toggled}>
      <span></span>
      <span></span>
      <span></span>
    </MenuToggleButton>
  );
};

interface IHeaderLink {
  key: string;
  component: (args: { path: string; onClick?: () => void }) => JSX.Element;
}

const MOBILE_HEADER_LINKS: IHeaderLink[] = [
  {
    key: "Projects",
    component: () => <MobileNavLink href="https://projects.umaproject.org/">Projects</MobileNavLink>,
  },
  {
    key: "Products",
    component: ({ path, onClick }) => (
      <MobileNavLink href="/products" active={path === "/products"} onClick={onClick}>
        Products
      </MobileNavLink>
    ),
  },
  {
    key: "Docs",
    component: () => (
      <MobileNavLink href="https://docs.umaproject.org/" target="_blank">
        Docs
      </MobileNavLink>
    ),
  },
  {
    key: "Vote",
    component: () => <MobileNavLink href="https://vote.umaproject.org/">Vote</MobileNavLink>,
  },
];

export default MobileHeader;

export const MenuToggleButton = styled.button<{ toggled?: boolean }>`
  display: block;
  position: relative;
  height: 18px;
  width: 25px;

  span {
    position: absolute;
    display: block;
    height: 2px;
    width: 25px;
    background-color: ${({ toggled }) => (toggled ? "var(--gray-600)" : "var(--gray-700)")};
    transition: ${({ toggled }) =>
      toggled
        ? "background .2s, top .2s, opacity .2s, transform .2s .25s"
        : "top .2s .25s, opacity .2s .25s, transform .2s"};

    :nth-of-type(1) {
      top: ${({ toggled }) => (toggled ? "9px" : 0)};
      transform: ${({ toggled }) => (toggled ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-of-type(2) {
      top: 8px;
      opacity: ${({ toggled }) => (toggled ? 0 : 1)};
    }

    :nth-of-type(3) {
      top: ${({ toggled }) => (toggled ? "9px" : "16px")};
      transform: ${({ toggled }) => (toggled ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const MobileMenuContainer = styled.div<{ show: boolean }>`
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  padding: 0 20px;
  background-color: var(--white);
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-20px)")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  z-index: 5;
  pointer-events: ${({ show }) => (show ? "all" : "none")};

  ::after {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    opacity: 0;
    content: "";
    height: 99999px;
    background: #000;
    opacity: 0.5;
    pointer-events: none;
  }
`;

const MobileNavLink = styled.a<{ active?: boolean }>`
  position: relative;
  display: block;
  font-weight: 600;
  font-size: ${16 / 16}rem;
  line-height: 22px;
  padding: 25px 0 4px;
  border-bottom: 1px solid;
  border-color: ${({ active }) => (active ? "var(--primary)" : "var(--gray-500)")};

  @media ${QUERIES.sm.andUp} {
    font-size: ${18 / 16}rem;
    line-height: 24px;
  }
`;

const MobileCommunityLinks = styled.div`
  display: flex;
  padding: 30px 0 25px;
`;

const MobileCommunityLink = styled.a`
  margin-right: 25px;
`;
const COMMUNITY_LINKS = [
  {
    name: "Medium",
    href: "https://medium.com/uma-project",
    iconSrc: "/images/social//medium.svg",
    alt: "medium",
  },
  {
    name: "Github",
    href: "https://github.com/umaprotocol",
    iconSrc: "/images/social//github.svg",
    alt: "github",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/umaprotocol",
    iconSrc: "/images/social//twitter.svg",
    alt: "twitter",
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/jsb9XQJ",
    iconSrc: "/images/social//discord.svg",
    alt: "discord",
  },
  {
    name: "Discourse",
    href: "https://discourse.umaproject.org/",
    iconSrc: "/images/social//discourse.svg",
    alt: "discourse",
  },
];
