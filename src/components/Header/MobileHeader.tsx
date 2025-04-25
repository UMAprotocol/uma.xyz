"use client";

import NextLink from "next/link";
import { CSSProperties, useState } from "react";
import { FocusOn } from "react-focus-on";
import { Icon } from "../Icon";
import MobileMenu from "./MobileMenu";
import { useHeaderProps } from "./useHeaderProps";

type Props = Pick<
  ReturnType<typeof useHeaderProps>,
  "activePath" | "links" | "launchAppLink" | "isLightTheme" | "menuBg"
>;

export default function MobileHeader({ isLightTheme, menuBg, activePath, links, launchAppLink }: Props) {
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
        className="relative h-3 w-6 justify-self-start p-1"
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
      <NextLink href="/" aria-label="Back to page top" className="flex items-baseline gap-2">
        <Icon name="uma-logo" className={`h-[16px] w-[63px] ${isLightTheme ? "text-black" : "text-white"}`} />
        {activePath === "/oval" && <span className="text-gradient-oval align-bottom text-[16px] leading-4">Oval</span>}
      </NextLink>
      {launchAppLink && (
        <div className="justify-self-end">
          <NextLink
            className="inline-flex items-center justify-center gap-1 text-sm text-[--color] no-underline transition hover:opacity-50"
            aria-label="Launch voter dapp"
            href="https://vote.uma.xyz/"
            target="_blank"
            style={
              {
                "--color": isLightTheme ? "var(--grey-500)" : "var(--white)",
              } as CSSProperties
            }
          >
            App
            <Icon name="arrow" className="h-5 w-5 -rotate-45 text-[--color]" />
          </NextLink>
        </div>
      )}
      <MobileMenu menuBg={menuBg} links={links} isLightTheme={isLightTheme} show={showMenu} hide={hideMenu} />
    </FocusOn>
  );
}
