import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import NextLink from "next/link";
import { CSSProperties, useRef } from "react";
import AnimatedLink from "../AnimatedLink";
import { Divider } from "../Divider";
import { Icon } from "../Icon";

type Project = {
  name: string;
  icon: string;
  link: string;
};

export default function Projects() {
  const id = "projects";
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, id);

  const topRow = [
    {
      name: "Across",
      icon: "across",
      link: "https://across.to",
    },
    {
      name: "Polymarket",
      icon: "polymarket",
      link: "https://polymarket.com",
    },
  ];

  const middleRow = [
    {
      name: "Outcome",
      icon: "outcome",
      link: "https://outcome.finance",
    },
    {
      name: "Rated",
      icon: "rated",
      link: "https://www.rated.network",
    },
    {
      name: "Shapeshift",
      icon: "shapeshift",
      link: "https://shapeshift.com",
    },
  ];

  const bottomRow = [
    {
      name: "Cozy",
      icon: "cozy",
      link: "https://www.cozy.finance",
    },
    {
      name: "Snapshot",
      icon: "snapshot",
      link: "https://snapshot.org",
    },
    {
      name: "Sherlock",
      icon: "sherlock",
      link: "https://www.sherlock.xyz",
    },
  ];

  return (
    <section className="bg-white px-[--page-padding] pb-[128px] pt-[--header-blur-height]" id={id} ref={ref}>
      <div className="mx-auto grid max-w-[--page-width] grid-cols-[1fr] grid-rows-[auto,auto] gap-12 lg:grid-cols-[1fr,1fr] lg:grid-rows-[1fr]">
        <div className="row-start-1 lg:col-start-2 lg:max-w-[366px] lg:justify-self-end">
          <h2 className="mb-3 text-4xl md:text-6xl lg:mb-6">Projects built with the OO</h2>
          <div className="mb-6">
            <Divider />
          </div>
          <AnimatedLink href="https://projects.uma.xyz/">All projects</AnimatedLink>
        </div>
        <div className="row-start-2 grid grid-cols-[1fr] grid-rows-[auto,auto,auto] lg:col-start-1 lg:row-start-1">
          <ProjectRow projects={topRow} line="top" />
          <ProjectRow projects={middleRow} line="middle" />
          <ProjectRow projects={bottomRow} line="bottom" />
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ projects, line }: { projects: Project[]; line: "top" | "middle" | "bottom" }) {
  return (
    <div
      className="grid grid-cols-[repeat(var(--num-columns),1fr)] grid-rows-[1fr]"
      style={
        {
          "--num-columns": line === "top" ? 2 : 3,
        } as CSSProperties
      }
    >
      {projects.map(({ name, link, icon }) => (
        <NextLink
          className="group relative grid aspect-square place-items-center border-[0.5px] border-grey-400 transition hover:border-red"
          key={name}
          href={link}
          target="_blank"
        >
          <div className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-md opacity-0 transition group-hover:opacity-100 lg:right-4 lg:top-4 lg:bg-red text-red lg:text-white">
            <Icon name="arrow" className="-rotate-45 w-5 h-5" />
          </div>
          <div className="relative grid w-full place-items-center gap-4">
            <Icon
              name={icon}
              className="w-[25%] group-hover:-translate-y-3 text-grey-900 transition [&_path] group-hover:text-red"
            />
            <span className="absolute -bottom-[40px] uppercase text-red opacity-0 transition group-hover:-translate-y-3 group-hover:opacity-100">
              {name}
            </span>
          </div>
        </NextLink>
      ))}
    </div>
  );
}
