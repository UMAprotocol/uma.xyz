"use client";

import NextLink from "next/link";
import { CSSProperties, useState } from "react";
import { FocusOn } from "react-focus-on";
import { Icon } from "../Icon";
import MobileMenu from "./MobileMenu";

type Props = {
  isLightTheme: boolean;
  links: { label: string; href: string }[];
};

export default function MobileHeader({ isLightTheme, links }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenuBarTransition = `
  top 300ms, 
  bottom 300ms, 
  transform 300ms 300ms`;

  const openMenuBarTransition = `
  top 300ms 300ms, 
  bottom 300ms 300ms, 
  transform 300ms`;

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
        className="relative h-3 w-6 justify-self-start"
        aria-label="Open navigation menu"
        onClick={toggleShowMenu}
        style={
          {
            "--background": isLightTheme ? "var(--grey-900)" : "var(--grey-500)",
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
        <Icon name="uma-logo" className={`w-[63px] h-[16px] ${isLightTheme ? "text-black" : "text-white"}`} />
      </NextLink>
      <div className="justify-self-end">
        <NextLink
          className="inline-flex items-center justify-center gap-1 text-sm text-[--color] no-underline transition hover:opacity-50"
          aria-label="Link to voter dapp"
          href="https://vote.uma.xyz/"
          target="_blank"
          style={
            {
              "--color": isLightTheme ? "var(--grey-500)" : "var(--white)",
            } as CSSProperties
          }
        >
          App
          <Icon name="arrow" className="text-[--color] -rotate-45 w-5 h-5" />
        </NextLink>
      </div>
      <MobileMenu links={links} isLightTheme={isLightTheme} show={showMenu} hide={hideMenu} />
    </FocusOn>
  );
}
