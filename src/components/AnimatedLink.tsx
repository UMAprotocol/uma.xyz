import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { ReactNode } from "react";

export default function AnimatedLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <NextLink
      className="group flex items-baseline text-xl text-red transition duration-300 hover:text-grey-900"
      href={href}
      target={isExternalLink(href) ? "_blank" : undefined}
    >
      {children}
      <div className="relative left-0 ml-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-red transition-all duration-300 group-hover:ml-3 group-hover:border-grey-900 group-hover:bg-grey-900">
        <UpRightArrow className="[&_path]:transition-[stroke] [&_path]:duration-300 [&_path]:group-hover:stroke-white" />
      </div>
    </NextLink>
  );
}
