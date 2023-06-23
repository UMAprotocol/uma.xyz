import { grey100, grey400, links, red, white } from "@/constant";
import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-white-logo.svg";
import { CSSProperties } from "react";

interface Props {
  isLightTheme: boolean;
}

export default function DesktopHeader({ isLightTheme }: Props) {
  function isActive(href: string) {
    if (typeof window === "undefined") return false;
    return window.location.href.includes(href);
  }

  return (
    <div className="hidden h-full grid-cols-[1fr_auto_1fr] items-center lg:grid">
      <NextLink href="/" aria-label="Back to top" className="cursor-pointer">
        {isLightTheme ? <BlackLogo /> : <Logo />}
      </NextLink>
      <div className="grid grid-flow-col items-center gap-5">
        {links.map(({ label, href }) => (
          <NextLink
            className="group flex items-center no-underline transition"
            key={href}
            href={href}
            target={isExternalLink(href) ? "_blank" : undefined}
            style={
              {
                "--color": isActive(href) ? red : grey400,
              } as CSSProperties
            }
          >
            <span className="mr-2 inline-block aspect-square w-2 -translate-x-4 rounded-full bg-[--color] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-80" />{" "}
            <span className="text-lg text-[--color] group-hover:opacity-80">{label}</span>{" "}
            {isExternalLink(href) ? <SmUpRightArrow className="ml-2" /> : null}
          </NextLink>
        ))}
      </div>
      <NextLink
        className="h-[40px] w-[118px] gap-0.5 justify-self-end rounded-lg bg-[--background] p-[8px_16px_12px] text-lg text-[--color] no-underline transition hover:opacity-75"
        href="https://vote.uma.xyz"
        target="_blank"
        style={
          {
            "--color": isLightTheme ? white : grey100,
            "--background": isLightTheme ? grey100 : white,
          } as CSSProperties
        }
      >
        Launch app
      </NextLink>
    </div>
  );
}
