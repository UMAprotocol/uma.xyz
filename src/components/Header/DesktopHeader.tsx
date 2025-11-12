import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import { Icon } from "../Icon";
import { cn } from "@/utils/styleUtils";
import { useHeaderProps } from "./useHeaderProps";
import { launchAppTrigger } from "@/lib/analytics";

type Props = Pick<ReturnType<typeof useHeaderProps>, "activePath" | "links" | "launchAppLink" | "isLightTheme">;

export default function DesktopHeader({ isLightTheme, links, activePath, launchAppLink }: Props) {
  function isActive(href: string) {
    return href === activePath;
  }

  return (
    <div className="hidden h-full grid-cols-[1fr_auto_1fr] items-center lg:grid">
      <NextLink href="/" aria-label="Back to top" className="flex cursor-pointer items-baseline gap-2">
        <Icon name="uma-logo" className={`h-[16px] w-[63px] ${isLightTheme ? "text-black" : "text-white"}`} />
      </NextLink>
      <div className="grid grid-flow-col items-center gap-5">
        {links.map(({ label, href }) => (
          <NextLink
            className={cn(
              "group flex items-center no-underline transition",
              isActive(href) ? "text-primary-500" : "text-grey-400",
            )}
            key={href}
            href={href}
            target={isExternalLink(href) ? "_blank" : undefined}
          >
            <span className="mr-2 inline-block aspect-square w-2 -translate-x-4 rounded-full bg-[--color] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-80" />{" "}
            <span className="text-inherit text-lg opacity-100 group-hover:opacity-80">{label}</span>{" "}
            {isExternalLink(href) ? (
              <Icon name="arrow" className="text-inherit ml-1 h-5 w-5 -rotate-45 transition group-hover:opacity-80" />
            ) : null}
          </NextLink>
        ))}
      </div>
      {launchAppLink && (
        <NextLink
          onClick={launchAppTrigger}
          className={cn(
            "grid h-[40px] w-[118px] place-items-center gap-0.5 justify-self-end rounded-lg text-lg no-underline transition hover:opacity-75",
            isLightTheme ? "text-white" : "text-grey-900",
            isLightTheme ? "bg-grey-900" : "bg-white",
          )}
          href={launchAppLink}
          target="_blank"
        >
          Launch app
        </NextLink>
      )}
    </div>
  );
}
