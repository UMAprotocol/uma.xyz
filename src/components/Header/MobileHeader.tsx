import { animationDuration, grey100, grey500, white } from "@/constant";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-logo.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { CSSProperties, useState } from "react";
import { FocusOn } from "react-focus-on";
interface Props {
  isLightTheme: boolean;
}

const MobileMenu = dynamic(() => import("./MobileMenu"));

export default function MobileHeader({ isLightTheme }: Props) {
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
    <FocusOn
      className="pointer-events-auto grid w-full grid-cols-3 items-center justify-items-center lg:hidden"
      enabled={showMenu}
      onEscapeKey={hideMenu}
      onClickOutside={hideMenu}
      preventScrollOnFocus
    >
      <button
        className="bg-grey-900 relative h-3 w-6 justify-self-start"
        aria-label="Open navigation menu"
        onClick={toggleShowMenu}
        style={
          {
            "--background": isLightTheme ? grey100 : grey500,
            "--animation-delay": showMenu ? "1s" : "0s",
          } as CSSProperties
        }
      >
        <span
          className="absolute block h-[1.5px] w-6 bg-[--background]"
          style={{
            top: showMenu ? "calc(50% - 0.5px)" : 0,
            transform: showMenu ? "rotate(45deg)" : "rotate(0)",
            transition: buttonBarTransition,
          }}
        />
        <span
          className="absolute block h-[1.5px] w-6 bg-[--background]"
          style={{
            bottom: showMenu ? "calc(50% - 0.5px)" : 0,
            transform: showMenu ? "rotate(-45deg)" : "rotate(0)",
            transition: buttonBarTransition,
          }}
        />
      </button>
      <NextLink href="/" aria-label="Back to page top">
        {isLightTheme ? <BlackLogo /> : <Logo />}
      </NextLink>
      <div className="justify-self-end">
        <NextLink
          className="inline-flex items-baseline justify-center gap-1 text-sm text-[--color] no-underline transition hover:opacity-50"
          aria-label="Link to voter dapp"
          href="https://vote.uma.xyz/"
          target="_blank"
          style={
            {
              "--color": isLightTheme ? grey500 : white,
            } as CSSProperties
          }
        >
          App
          <UpRightArrow className="[&>path]:stroke-grey-500" />
        </NextLink>
      </div>
      <MobileMenu isLightTheme={isLightTheme} show={showMenu} hide={hideMenu} />
    </FocusOn>
  );
}
