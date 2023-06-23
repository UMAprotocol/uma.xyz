import { grey200, white } from "@/constant";
import { useScrollContext } from "@/hooks/contexts/useScrollContext";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CSSProperties } from "react";

const MobileHeader = dynamic(() => import("./MobileHeader"));
const DesktopHeader = dynamic(() => import("./DesktopHeader"));

export default function Header() {
  const { isLightTheme } = useScrollContext();
  return (
    <motion.header
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 0.3, delay: 0.8 }}
      style={
        {
          "--background": isLightTheme ? white : grey200,
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
