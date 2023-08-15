import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import { ReactNode } from "react";
import { Icon } from "./Icon";

export default function AnimatedLink({
  href,
  children,
  asATag = false,
}: {
  href: string;
  children: ReactNode;
  asATag?: boolean;
}) {
  const Link = asATag ? "a" : NextLink;
  return (
    <Link
      className="group flex items-center text-xl text-red transition hover:text-grey-900"
      href={href}
      target={isExternalLink(href) ? "_blank" : undefined}
    >
      {children}
      <div className="relative left-0 ml-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-red transition-all group-hover:ml-3 group-hover:border-grey-900 group-hover:bg-grey-900">
        <Icon name="arrow" className="transition text-red group-hover:text-white -rotate-45 w-6 h-6" />
      </div>
    </Link>
  );
}
