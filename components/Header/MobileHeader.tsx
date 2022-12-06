import { grey100, grey500, tabletAndUnder, white } from "constant";
import NextLink from "next/link";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-logo.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import styled, { CSSProperties } from "styled-components";
import { MobileMenu } from "./MobileMenu";
interface Props {
  showMobileMenu: boolean;
  isLightTheme: boolean;
  onToggle: () => void;
}

export function MobileHeader({ showMobileMenu, onToggle, isLightTheme }: Props) {
  const transitionWhenShow = "background 200ms, top 200ms, opacity 200ms, transform 200ms 250ms";
  const transitionWhenHide = "top 200ms 250ms, opacity 200ms 250ms, transform 200ms";

  return (
    <OuterWrapper>
      <InnerWrapper
        style={
          {
            "--blur": isLightTheme ? "6px" : "0px",
          } as CSSProperties
        }
      >
        <MenuToggleButton
          onClick={onToggle}
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
      </InnerWrapper>
      <MobileMenu isLightTheme={isLightTheme} show={showMobileMenu} onClickLink={onToggle} />
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 48px;
  display: none;
  @media ${tabletAndUnder} {
    display: block;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 16px;
  backdrop-filter: blur(var(--blur));
  @media ${tabletAndUnder} {
    width: calc(100% - 40px);
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
  margin-left: 16px;
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
  margin-right: 28px;
`;
