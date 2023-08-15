import { grey400, grey900, red, white } from "@/constant";
import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import { CSSProperties } from "react";
import { Icon } from "../Icon";

type Props = {
  isLightTheme: boolean;
  links: { label: string; href: string }[];
};

export default function DesktopHeader({ isLightTheme, links }: Props) {
  function isActive(href: string) {
    if (typeof window === "undefined") return false;
    if (href === "/") return window.location.pathname === "/";
    return window.location.href.includes(href);
  }

  return (
    <div className="hidden h-full grid-cols-[1fr_auto_1fr] items-center lg:grid">
      <NextLink href="/" aria-label="Back to top" className="cursor-pointer">
        <Icon name="uma-logo" className={`w-[63px] h-[16px] ${isLightTheme ? "text-black" : "text-white"}`} />
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
            {isExternalLink(href) ? (
              <Icon name="arrow" className="ml-1 transition -rotate-45 w-5 h-5 group-hover:opacity-80 text-[--color]" />
            ) : null}
          </NextLink>
        ))}
      </div>
      <NextLink
        className="grid h-[40px] w-[118px] place-items-center gap-0.5 justify-self-end rounded-lg bg-[--background] text-lg text-[--color] no-underline transition hover:opacity-75"
        href="https://vote.uma.xyz"
        target="_blank"
        style={
          {
            "--color": isLightTheme ? white : grey900,
            "--background": isLightTheme ? grey900 : white,
          } as CSSProperties
        }
      >
        Launch app
      </NextLink>
    </div>
  );
}
