import { grey500, white } from "constant";
import NextLink from "next/link";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-logo.svg";
import ToggleOpenHamburgerIcon from "public/assets/hamburger.svg";
import ToggleCloseHamburgerIcon from "public/assets/hamburger-close.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { useState } from "react";
import { FocusOn } from "react-focus-on";
import styled, { CSSProperties } from "styled-components";
import { MobileMenu } from "./MobileMenu";

interface Props {
  isLightTheme: boolean;
}

export function MobileHeader({ isLightTheme }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }

  function hideMenu() {
    setShowMenu(false);
  }

  return (
    <Wrapper enabled={showMenu} onEscapeKey={hideMenu} onClickOutside={hideMenu} preventScrollOnFocus>
      <MenuToggleButton onClick={toggleShowMenu}>
        {showMenu ? <ToggleCloseHamburgerIconStyled /> : <ToggleOpenHamburgerIconStyled />}
      </MenuToggleButton>
      <NextLink href="/">{isLightTheme ? <BlackLogo /> : <Logo />}</NextLink>
      <VoteLinkWrapper>
        <Link
          href="https://vote.umaproject.org/"
          target="_blank"
          style={
            {
              "--color": isLightTheme ? grey500 : white,
            } as CSSProperties
          }
        >
          App
          <ArrowIcon />
        </Link>
      </VoteLinkWrapper>
      <MobileMenu isLightTheme={isLightTheme} show={showMenu} hide={hideMenu} />
    </Wrapper>
  );
}

const Wrapper = styled(FocusOn)`
  display: none;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  pointer-events: all;
  @media (max-width: 880px) {
    display: grid;
  }
`;

const ToggleOpenHamburgerIconStyled = styled(ToggleOpenHamburgerIcon)`
  flex-shrink: 0;
`;

const ToggleCloseHamburgerIconStyled = styled(ToggleCloseHamburgerIcon)`
  flex-shrink: 0;
`;

export const MenuToggleButton = styled.button`
  display: block;
  position: relative;
  justify-self: start;
  height: 18px;
  width: 100%;
  background: var(--grey-900);
`;

const VoteLinkWrapper = styled.div`
  justify-self: end;
`;

const ArrowIcon = styled(UpRightArrow)`
  path {
    stroke: var(--grey-500);
  }
  &:hover {
    opacity: 0.5;
  }
`;

const Link = styled(NextLink)`
  display: inline-flex;
  justify-content: center;
  align-items: baseline;
  gap: 4px;
  text-decoration: none;
  font: var(--body-sm);
  color: var(--color);
`;
