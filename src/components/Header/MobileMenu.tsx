import { grey500, socialLinks, white } from "@/constant";
import { useScrollContext } from "@/hooks/contexts/useScrollContext";
import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";
import { CSSProperties, useEffect, useState } from "react";
import LottieAnimation from "../LottieAnimation";

type Props = {
  show: boolean;
  hide: () => void;
  isLightTheme: boolean;
  links: { label: string; href: string }[];
};

export default function MobileMenu({ show, hide, isLightTheme, links }: Props) {
  const [animationData, setAnimationData] = useState<object>();
  const { scrollY } = useScrollContext();
  const pathname = usePathname();
  const isHomePage = pathname.split("#")[0] === "/";

  useEffect(() => {
    if (show && !animationData) {
      void import("public/assets/lottie/hero.json").then(setAnimationData);
    }
  }, [show, animationData]);

  return (
    <nav
      className="absolute left-0 top-[56px] flex h-[--height] w-full flex-col content-center items-center bg-[--background] opacity-[--opacity] transition"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Menu"
      style={
        {
          "--height": `calc(100dvh - ${scrollY === 0 && isHomePage ? "124px" : "44px"})`,
          "--background": isLightTheme ? white : "var(--hero-video-background)",
          "--opacity": show ? 1 : 0,
          "--link-color": isLightTheme ? grey500 : white,
          pointerEvents: show ? "auto" : "none",
          transform: show ? "translateY(0)" : "translateY(-20px)",
        } as CSSProperties
      }
    >
      <div className="absolute bottom-0 left-0 right-0 opacity-[0.15]">
        {animationData && <LottieAnimation play={show} animationData={animationData} />}
      </div>
      <div className="mb-auto mt-[25%] grid place-items-center gap-4">
        {links.map(({ href, label }) => (
          <NextLink
            className="relative inline-flex items-center text-sm text-[--link-color] no-underline hover:opacity-80"
            onClick={hide}
            key={href}
            href={href}
            target={isExternalLink(href) ? "_blank" : undefined}
          >
            {label} {isExternalLink(href) ? <SmUpRightArrow className="ml-2 [&>path]:stroke-[--link-color]" /> : null}
          </NextLink>
        ))}
      </div>
      <div className="flex h-fit items-center gap-[22px] pb-[22px]">
        {socialLinks.map(({ href, Icon, label }) => (
          <NextLink className="group z-10" onClick={hide} key={href} href={href} target="_blank" aria-label={label}>
            <Icon className="[&>path]:fill-[--link-color]" />
          </NextLink>
        ))}
      </div>
    </nav>
  );
}
