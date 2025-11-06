"use client";
import { socialLinks } from "@/constant";
import { useScrollContext } from "@/hooks/contexts/useScrollContext";
import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { CSSProperties, useEffect, useState } from "react";
import { Icon } from "../Icon";
import { cn } from "@/utils/styleUtils";
import { Portal } from "../Portal";

const LottieAnimation = dynamic(() => import("../LottieAnimation"), { ssr: false });

type Props = {
  show: boolean;
  hide: () => void;
  isLightTheme: boolean;
  menuBg: string;
  links: { label: string; href: string }[];
};

export default function MobileMenu({ show, hide, menuBg, isLightTheme, links }: Props) {
  const [animationData, setAnimationData] = useState<object>();
  const { scrollY } = useScrollContext();
  const pathName = usePathname();

  const showTicker = pathName?.split("#")[0] === "/" || pathName?.split("#")[0] === "/osnap";

  useEffect(() => {
    if (show && !animationData) {
      void import("public/assets/lottie/hero.json").then(setAnimationData);
    }
  }, [show, animationData]);

  return (
    <Portal>
      <nav
        className={cn(
          "fixed left-0  flex  w-screen flex-col content-center items-center bg-[--header-menu] transition",
          show ? "opacity-100" : "opacity-0",
          showTicker && scrollY <= 68
            ? "top-vote-ticker-height h-[calc(100%-var(--vote-ticker-height))]"
            : "top-header-height h-[calc(100%-var(--header-height))]",
        )}
        aria-label="Mobile Menu"
        style={
          {
            background: menuBg,
            "--link-color": isLightTheme ? "var(--grey-500)" : "var(--white)",
            pointerEvents: show ? "auto" : "none",
            transform: show ? "translateY(0)" : "translateY(+20px)",
          } as CSSProperties
        }
      >
        <div className="absolute bottom-0 left-0 right-0 opacity-[0.15]">
          {animationData && <LottieAnimation play={show} animationData={animationData} />}
        </div>
        <div className="flex h-full flex-col place-items-center items-center justify-center gap-4">
          {links.map(({ href, label }) => (
            <NextLink
              className="relative inline-flex items-center text-sm text-[--link-color] no-underline hover:opacity-80"
              onClick={hide}
              key={href}
              href={href}
              target={isExternalLink(href) ? "_blank" : undefined}
            >
              {label}{" "}
              {isExternalLink(href) ? (
                <Icon name="arrow" className="ml-1 h-5 w-5 -rotate-45 text-[--link-color]" />
              ) : null}
            </NextLink>
          ))}
        </div>
        <div className="flex h-fit items-center gap-[22px] pb-[22px]">
          {socialLinks.map(({ href, icon, label }) => (
            <NextLink className="group z-10" onClick={hide} key={href} href={href} target="_blank" aria-label={label}>
              <Icon name={icon} className="h-6 w-6 text-[--link-color]" />
            </NextLink>
          ))}
        </div>
      </nav>
    </Portal>
  );
}
