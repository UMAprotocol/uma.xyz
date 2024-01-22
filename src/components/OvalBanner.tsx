"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";
import { Icon } from "./Icon";

export default function OvalBanner({ isLightTheme: isLightTheme_ = false }) {
  const pathname = usePathname();
  const isHomePage = pathname?.split("#")[0] === "/";
  const isLightTheme = !isHomePage || isLightTheme_;

  return (
    <motion.div
      className="grid h-[--vote-ticker-height] place-items-center bg-[--background] bg-cover bg-no-repeat pb-1 pt-4 lg:px-[--page-padding]"
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
        className="isolate flex w-full max-w-[--page-width] items-center justify-between gap-4 rounded-lg bg-cover bg-no-repeat p-2 pr-4"
        style={{
          backgroundColor: isLightTheme ? "var(--grey-200)" : "var(--grey-700)",
          backgroundImage: isLightTheme ? `url("/assets/white-lines.png")` : `url("/assets/black-lines.png")`,
        }}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center gap-2 rounded-full">
            <Icon name="info" className="h-4 w-4 text-red" />
          </div>
          <div className="text-[--color]">
            <span className="hidden sm:inline">
              Introducing UMA Oval: An MEV capture tool that allows you to monetize liquidations in your protocol.
            </span>
            <span className="sm:hidden">Introducing UMA Oval</span>
          </div>
        </div>
        <div>
          <NextLink
            className="flex items-center gap-1 text-[--color] transition hover:opacity-50"
            href="/oval"
            aria-label="Link to Oval"
          >
            <span className="hidden text-[--color] sm:inline">Learn More</span>
            <Icon name="arrow" className="h-5 w-5" />
          </NextLink>
        </div>
      </div>
    </motion.div>
  );
}
