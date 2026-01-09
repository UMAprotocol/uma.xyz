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
      name: "Story Protocol",
      icon: "story",
      link: "https://www.story.foundation",
    },
    {
      name: "Rated",
      icon: "rated",
      link: "https://www.rated.network",
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
        </div>
        <div className="row-start-2 grid grid-cols-[1fr] grid-rows-[auto,auto,auto] lg:col-start-1 lg:row-start-1">
          <ProjectRow projects={topRow} line="top" />
          <ProjectRow projects={middleRow} line="middle" />
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
          <div className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-md text-red opacity-0 transition group-hover:opacity-100 lg:right-4 lg:top-4 lg:bg-red lg:text-white">
            <Icon name="arrow" className="h-5 w-5 -rotate-45" />
          </div>
          <div className="relative grid h-full w-full place-items-center gap-4">
            <Icon
              name={icon}
              className="[&_path] h-[20%] w-[20%] text-grey-900 transition group-hover:-translate-y-3 group-hover:text-red"
            />
            <span className="absolute bottom-[20%] uppercase text-red opacity-0 transition group-hover:-translate-y-3 group-hover:opacity-100">
              {name}
            </span>
          </div>
        </NextLink>
      ))}
    </div>
  );
}
