import { grey100, grey500, tabletAndUnder, white } from "constant";
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
  const transitionWhenShow = "background 200ms, top 200ms, opacity 200ms, transform 200ms 250ms";
  const transitionWhenHide = "top 200ms 250ms, opacity 200ms 250ms, transform 200ms";

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
            "--background": isLightTheme ? grey100 : white,
            "--transition": showMenu ? transitionWhenShow : transitionWhenHide,
          } as CSSProperties
        }
      >
        <ToggleButtonBar
          style={
            {
              "--top": showMenu ? "9px" : 0,
              "--transform": showMenu ? "rotate(45deg)" : "rotate(0)",
            } as CSSProperties
          }
        />
        <ToggleButtonBar
          style={
            {
              "--top": showMenu ? "9px" : "16px",
              "--transform": showMenu ? "rotate(-45deg)" : "rotate(0)",
            } as CSSProperties
          }
        />
      </MenuToggleButton>
      <Link href="/">{isLightTheme ? <BlackLogo /> : <Logo />}</Link>
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
  justify-content: space-between;
  align-items: center;
  pointer-events: all;
  @media ${tabletAndUnder} {
    display: flex;
  }
`;

const ToggleButtonBar = styled.span`
  position: absolute;
  display: block;
  height: 2px;
  width: 25px;
  background: var(--background);
  transition: var(--transition);
  top: var(--top);
  transform: var(--transform);
`;

export const MenuToggleButton = styled.button`
  display: block;
  position: relative;
  height: 18px;
  width: 25px;
  background: var(--grey-900);
`;

const VoteLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-right: 16px;
`;

const ArrowIcon = styled(UpRightArrow)`
  margin-left: 8px;
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
  text-decoration: none;
  font: var(--body-sm);
  color: var(--color);
`;
