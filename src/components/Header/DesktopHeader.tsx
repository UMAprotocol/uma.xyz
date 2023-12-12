import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import { CSSProperties } from "react";
import { Icon } from "../Icon";

type Props = {
  isLightTheme: boolean;
  links: { label: string; href: string }[];
  activePath: string | undefined;
};

export default function DesktopHeader({ isLightTheme, links, activePath }: Props) {
  function isActive(href: string) {
    return href === activePath;
  }

  return (
    <div className="hidden h-full grid-cols-[1fr_auto_1fr] items-center lg:grid">
      <NextLink href="/" aria-label="Back to top" className="cursor-pointer">
        <Icon name="uma-logo" className={`h-[16px] w-[63px] ${isLightTheme ? "text-black" : "text-white"}`} />
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
                "--color": isActive(href) ? "var(--primary-500)" : "var(--grey-400)",
              } as CSSProperties
            }
          >
            <span className="mr-2 inline-block aspect-square w-2 -translate-x-4 rounded-full bg-[--color] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-80" />{" "}
            <span className="text-lg text-[--color] opacity-100 group-hover:opacity-80">{label}</span>{" "}
            {isExternalLink(href) ? (
              <Icon name="arrow" className="ml-1 h-5 w-5 -rotate-45 text-[--color] transition group-hover:opacity-80" />
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
            color: isLightTheme ? "var(--white)" : "var(--grey-900)",
            background: isLightTheme ? "var(--grey-900)" : "var(--white)",
          } as CSSProperties
        }
      >
        Launch app
      </NextLink>
    </div>
  );
}
