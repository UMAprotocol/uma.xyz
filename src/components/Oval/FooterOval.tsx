"use client";

import { footerLinksOval, socialLinks } from "@/constant";
import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import { useRef } from "react";
import { Icon } from "../Icon";
import MailChimpForm from "../MailChimpForm";

export function FooterOval() {
  const id = "contact";
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, id);

  return (
    <footer
      className="relative grid grid-rows-[auto_1fr_auto] bg-background px-[--page-padding] pt-16 xl:pt-[--header-blur-height]"
      id={id}
      ref={ref}
    >
      <div className="mx-auto flex w-full max-w-[--page-width] flex-col-reverse pt-12 md:grid md:grid-cols-[1fr_1fr]">
        <div className="row-start-2 my-14 grid h-fit grid-rows-2 justify-center justify-items-start md:row-start-auto md:h-auto md:grid-rows-none md:justify-normal xl:grid-cols-3 xl:grid-rows-none">
          <NextLink className="hidden md:mb-4 md:block" href="#" aria-label="Home">
            <Icon name="uma-logo" className="h-4 w-16 text-red" />
          </NextLink>
          <LinksList links={footerLinksOval.internal} />
          <LinksList links={footerLinksOval.external} />
        </div>
        <div className="flex w-full flex-col items-center gap-6 md:items-start md:gap-0 xl:items-end">
          <NextLink className="md:hidden" href="#" aria-label="Home">
            <Icon name="uma-logo" className="h-4 w-16 text-red" />
          </NextLink>
          <h3 className="w-fit text-center text-xl text-text/75 md:mb-8 lg:max-w-[640px] lg:text-left">
            Receive the latest UMA Oval news, straight to your inbox.
          </h3>
          <MailChimpForm />
        </div>
      </div>
      <div className="mx-auto mb-16 flex w-full max-w-[--page-width] flex-col-reverse items-center justify-between gap-6 lg:flex-row lg:gap-0">
        <p className="text-grey-500">© {new Date().getFullYear()} Risk Labs Foundation</p>
        <div className="flex items-center gap-6">
          {socialLinks.map(({ href, icon, label }) => (
            <NextLink className="group" key={href} href={href} target="_blank" aria-label={label}>
              <Icon name={icon} className="h-6 w-6 text-white transition group-hover:text-red" />
            </NextLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

function LinksList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="mb-4 h-fit w-fit list-none">
      {links.map(({ label, href }) => (
        <li className="mb-4 last:mb-0" key={label}>
          <NextLink
            href={href}
            target={isExternalLink(href) ? "_blank" : undefined}
            className="group flex items-center gap-1 transition-all hover:text-red"
          >
            {label}
            {isExternalLink(href) && (
              <Icon name="arrow" className=" h-4 w-4 -rotate-45 transition-transform group-hover:-translate-x-[2px]" />
            )}
          </NextLink>
        </li>
      ))}
    </ul>
  );
}
