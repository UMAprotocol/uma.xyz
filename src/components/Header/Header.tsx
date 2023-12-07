"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { useHeaderProps } from "./useHeaderProps";

export default function Header() {
  const { bg, ...headerProps } = useHeaderProps();

  // Wrap the motion element in regular tag to avoid bug where css vars fail to get set after animation completed
  return (
    <header
      style={
        {
          "--background": bg,
        } as CSSProperties
      }
      className="sticky top-0 z-20 grid h-[--header-height] items-center bg-[--background] px-[--page-padding] pt-4 shadow-[0px_24px_24px_24px_var(--background)] backdrop-blur-sm"
    >
      <motion.div
        key={headerProps.activePath}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.2, delay: 0.7 }}
      >
        <div className="mx-auto w-full max-w-[--page-width] overflow-hidden">
          <DesktopHeader {...headerProps} />
          <MobileHeader {...headerProps} />
        </div>
      </motion.div>
    </header>
  );
}
