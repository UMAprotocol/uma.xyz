"use client";
import NextLink from "next/link";
import { CSSProperties } from "react";
import { Icon } from "./Icon";
import { cn } from "@/utils/styleUtils";
import { Page, Pages } from "@/constant/pages";
import { motion } from "framer-motion";

type OvalBannerProps = {
  page: Page;
  isLightTheme?: boolean;
};

const pageData = {
  [Pages.HOME]: {
    copy: "Introducing Oval: create protocol revenue by capturing MEV",
    link: {
      href: "/oval",
      external: false,
    },
  },
  [Pages.OVAL]: {
    copy: "Introducing Oval: read the launch blog to learn more about Oval, MEV and OEV",
    link: {
      href: "https://medium.com/uma-project/announcing-oval-earn-protocol-revenue-by-capturing-oracle-mev-877192c51fe2",
      external: true,
    },
  },
  [Pages.OSNAP]: {
    copy: "Introducing Oval: create protocol revenue by capturing MEV",
    link: {
      href: "/oval",
      external: false,
    },
  },
} as const;

const Link = motion(NextLink);

export default function OvalBanner({ isLightTheme: isLightTheme_ = false, page }: OvalBannerProps) {
  const isHomePage = page === "HOME";
  const isLightTheme = !isHomePage || isLightTheme_;

  const { copy, link } = pageData[page];

  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      aria-label="Link to Oval"
      className="group grid h-[--vote-ticker-height] w-full place-items-center bg-[--background] bg-cover bg-no-repeat pb-1 pt-4 lg:px-[--page-padding]"
      initial={{ opacity: 0, y: "-20px" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.3, delay: 0.8 }}
      style={
        {
          "--background": isLightTheme ? "transparent" : "var(--hero-video-background)",
          "--color": isLightTheme ? "var(--grey-900)" : "var(--grey-300)",
        } as CSSProperties
      }
    >
      <div
        className="isolate flex w-full max-w-[--page-width] items-center justify-start gap-4 rounded-lg bg-cover bg-no-repeat p-2 pr-4"
        style={{
          backgroundColor: isLightTheme ? "var(--grey-200)" : "var(--grey-700)",
          backgroundImage: isLightTheme ? `url("/assets/white-lines.png")` : `url("/assets/black-lines.png")`,
        }}
      >
        <div className="flex h-8 w-8 items-center justify-center gap-2 rounded-full">
          <Icon name="info" className="h-4 w-4 text-red" />
        </div>
        <div className="min-w-0 text-[--color]">
          <span className="text-truncate hidden md:inline ">{copy}</span>
          <span className="text-truncate md:hidden">Introducing UMA Oval</span>
        </div>

        <div className="ml-auto flex items-center gap-1 text-[--color] transition group-hover:text-red">
          <span className="text-inherit hidden sm:inline">Learn More</span>
          <Icon
            name="arrow"
            className={cn("h-5 w-5 transition-transform  group-hover:scale-110", {
              "-rotate-45 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]": link.external,
              "group-hover:translate-x-1": !link.external,
            })}
          />
        </div>
      </div>
    </Link>
  );
}
