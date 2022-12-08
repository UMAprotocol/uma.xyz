import { grey100, grey500, tabletAndUnder, white } from "constant";
import NextLink from "next/link";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-logo.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { MobileMenu } from "./MobileMenu";
interface Props {
  isLightTheme: boolean;
}

export function MobileHeader({ isLightTheme }: Props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const transitionWhenShow = "background 200ms, top 200ms, opacity 200ms, transform 200ms 250ms";
  const transitionWhenHide = "top 200ms 250ms, opacity 200ms 250ms, transform 200ms";

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <Wrapper>
      <MenuToggleButton
        onClick={toggleMobileMenu}
        style={
          {
            "--background": isLightTheme ? grey100 : white,
            "--transition": showMobileMenu ? transitionWhenShow : transitionWhenHide,
          } as CSSProperties
        }
      >
        <ToggleButtonBar
          style={
            {
              "--top": showMobileMenu ? "9px" : 0,
              "--transform": showMobileMenu ? "rotate(45deg)" : "rotate(0)",
            } as CSSProperties
          }
        />
        <ToggleButtonBar
          style={
            {
              "--top": showMobileMenu ? "9px" : "16px",
              "--transform": showMobileMenu ? "rotate(-45deg)" : "rotate(0)",
            } as CSSProperties
          }
        />
      </MenuToggleButton>
      <Link href="/">{isLightTheme ? <BlackLogo /> : <Logo />}</Link>
      <AppBlock>
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
      </AppBlock>
      <MobileMenu isLightTheme={isLightTheme} show={showMobileMenu} onClickLink={toggleMobileMenu} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
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

const AppBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
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
