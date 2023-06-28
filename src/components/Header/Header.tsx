"use client";

import { grey800, white } from "@/constant";
import { useScrollContext } from "@/hooks/contexts/useScrollContext";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const { isLightTheme: isLightThemeFromScroll } = useScrollContext();
  const pathname = usePathname();
  // we only change the color when on the home page
  // the osnap page is all light theme
  const isNotHomePage = pathname?.split("#")[0] !== "/";
  const isLightTheme = isNotHomePage || isLightThemeFromScroll;

  return (
    <motion.header
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 0.2, delay: 0.7 }}
      style={
        {
          "--background": isLightTheme ? white : grey800,
        } as CSSProperties
      }
      className="sticky top-0 z-[2] grid h-[--header-height] items-center bg-[--background] px-[--page-padding] pt-4 shadow-[0px_24px_24px_24px_var(--background)] backdrop-blur-sm transition"
    >
      <div className="mx-auto w-full max-w-[--page-width] overflow-hidden">
        <DesktopHeader isLightTheme={isLightTheme} />
        <MobileHeader isLightTheme={isLightTheme} />
      </div>
    </motion.header>
  );
}
