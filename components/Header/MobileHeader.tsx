import { animationDuration, grey100, grey500, tabletAndUnder, white } from "constant";
import NextLink from "next/link";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-logo.svg";
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

  const closeMenuBarTransition = `
  top ${animationDuration}, 
  bottom ${animationDuration}, 
  transform ${animationDuration} ${animationDuration}`;

  const openMenuBarTransition = `
  top ${animationDuration} ${animationDuration}, 
  bottom ${animationDuration} ${animationDuration}, 
  transform ${animationDuration}`;

  const buttonBarTransition = showMenu ? closeMenuBarTransition : openMenuBarTransition;

  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }

  function hideMenu() {
    setShowMenu(false);
  }

  return (
    <Wrapper enabled={showMenu} onEscapeKey={hideMenu} onClickOutside={hideMenu} preventScrollOnFocus>
      <MenuToggleButton
        onClick={toggleShowMenu}
        style={
          {
            "--background": isLightTheme ? grey100 : grey500,
            "--animation-delay": showMenu ? "1s" : "0s",
          } as CSSProperties
        }
      >
        <ToggleButtonBar
          style={
            {
              "--top": showMenu ? "calc(50% - 0.5px)" : 0,
              "--transform": showMenu ? "rotate(45deg)" : "rotate(0)",
              "--transition": buttonBarTransition,
            } as CSSProperties
          }
        />
        <ToggleButtonBar
          style={
            {
              "--bottom": showMenu ? "calc(50% - 0.5px)" : 0,
              "--transform": showMenu ? "rotate(-45deg)" : "rotate(0)",
              "--transition": buttonBarTransition,
            } as CSSProperties
          }
        />
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
  @media ${tabletAndUnder} {
    display: grid;
  }
`;

export const MenuToggleButton = styled.button`
  display: block;
  position: relative;
  justify-self: start;
  height: 9px;
  width: 24px;
  background: var(--grey-900);
`;

const ToggleButtonBar = styled.span`
  position: absolute;
  display: block;
  height: 1.5px;
  width: 24px;
  background: var(--background);
  top: var(--top);
  bottom: var(--bottom);
  transform: var(--transform);
  transition: var(--transition);
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
