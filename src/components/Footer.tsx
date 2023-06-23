import { footerLinks, socialLinks } from "@/constant";
import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import { isExternalLink } from "@/utils";
import NextLink from "next/link";
import UmaLogo from "public/assets/uma-logo.svg";
import UpRightArrowBlack from "public/assets/up-right-arrow-black.svg";
import { useRef } from "react";
import MailChimpForm from "./MailChimpForm";
import VoteTicker from "./VoteTicker";

export default function Footer() {
  const id = "contact";
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, id);

  return (
    <footer
      className="grid grid-rows-[auto_1fr_auto] bg-grey-700 px-[--page-padding] pt-4 lg:pt-16 xl:pt-[--header-blur-height]"
      style={{ backgroundImage: "url('assets/footer-lines-grey.png')" }}
      id={id}
      ref={ref}
    >
      <div className="-mb-1 -mt-4 lg:m-0">
        <VoteTicker isLightTheme />
      </div>
      <div className="mx-auto flex w-full max-w-[--page-width] flex-col-reverse pt-12 lg:grid lg:grid-cols-[1fr_1fr]">
        <div className="row-start-2 my-14 grid h-fit grid-rows-3 justify-center justify-items-start lg:row-start-auto lg:h-auto lg:grid-rows-none lg:justify-normal xl:grid-cols-3 xl:grid-rows-none">
          <NextLink className="hidden lg:mb-4 lg:block xl:mb-8" href="#">
            <UmaLogo className="[&>*]:fill-red" />
          </NextLink>
          <LinksList links={footerLinks.internal} />
          <LinksList links={footerLinks.external} />
        </div>
        <div className="flex w-full flex-col items-center gap-6 lg:mb-[96px] lg:items-start lg:gap-0 xl:mb-0 xl:items-end">
          <NextLink className="lg:hidden" href="#">
            <UmaLogo className="[&>*]:fill-black" />
          </NextLink>
          <h3 className="w-full text-center text-xl text-grey-300 lg:mb-8 lg:max-w-[640px] lg:text-left xl:max-w-[338px]">
            Receive the latest UMA and OO news, straight to your inbox.
          </h3>
          <MailChimpForm />
        </div>
      </div>
      <div className="mx-auto mb-16 flex w-full max-w-[--page-width] flex-col-reverse items-center justify-between gap-6 lg:flex-row lg:gap-0">
        <p className="text-grey-500">© {new Date().getFullYear()} Risk Labs Foundation</p>
        <div className="flex items-center gap-6">
          {socialLinks.map(({ href, Icon, label }) => (
            <NextLink className="group" key={href} href={href} target="_blank" aria-label={label}>
              <Icon className="transition [&>path]:fill-grey-200 [&>path]:transition group-hover:[&>path]:fill-red" />
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
          <NextLink href={href} target={isExternalLink(href) ? "_blank" : undefined}>
            {label}
            {isExternalLink(href) && <UpRightArrowBlack className="ml-1 inline-block" />}
          </NextLink>
        </li>
      ))}
    </ul>
  );
}
