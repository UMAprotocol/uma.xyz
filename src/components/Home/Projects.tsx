import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import NextLink from "next/link";
import AcrossLogo from "public/assets/across.svg";
import CozyLogo from "public/assets/cozy.svg";
import OutcomeLogo from "public/assets/outcome.svg";
import PolymarketLogo from "public/assets/polymarket.svg";
import RatedLogo from "public/assets/rated.svg";
import ShapeshiftLogo from "public/assets/shapeshift.svg";
import SherlockLogo from "public/assets/sherlock.svg";
import SnapshotLogo from "public/assets/snapshot.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { CSSProperties, useRef } from "react";
import AnimatedLink from "../AnimatedLink";
import { Divider } from "../Divider";

type Project = {
  name: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  link: string;
};

export default function Projects() {
  const id = "projects";
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, id);

  const topRow = [
    {
      name: "Across",
      Icon: AcrossLogo,
      link: "https://across.to",
    },
    {
      name: "Polymarket",
      Icon: PolymarketLogo,
      link: "https://polymarket.com",
    },
  ];

  const middleRow = [
    {
      name: "Outcome",
      Icon: OutcomeLogo,
      link: "https://outcome.finance",
    },
    {
      name: "Rated",
      Icon: RatedLogo,
      link: "https://www.rated.network",
    },
    {
      name: "Shapeshift",
      Icon: ShapeshiftLogo,
      link: "https://shapeshift.com",
    },
  ];

  const bottomRow = [
    {
      name: "Cozy",
      Icon: CozyLogo,
      link: "https://www.cozy.finance",
    },
    {
      name: "Snapshot",
      Icon: SnapshotLogo,
      link: "https://snapshot.org",
    },
    {
      name: "Sherlock",
      Icon: SherlockLogo,
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
        <div className="row-start-2 grid grid-cols-[1fr] grid-rows-[auto,auto,auto] border-[0.5px] border-grey-400 lg:col-start-1 lg:row-start-1">
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
      {projects.map(({ name, link, Icon }) => (
        <NextLink
          className="group relative grid aspect-square place-items-center border-[0.5px] border-grey-400 transition duration-300 hover:border-red"
          key={name}
          href={link}
          target="_blank"
        >
          <div className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-md opacity-0 transition duration-300 group-hover:opacity-100 lg:right-4 lg:top-4 lg:bg-red [&_path]:stroke-red lg:[&_path]:stroke-white">
            <UpRightArrow />
          </div>
          <div className="relative grid w-full place-items-center gap-4">
            <div className="w-[25%] transition duration-300 group-hover:-translate-y-3 [&_path]:fill-grey-900 [&_path]:transition [&_path]:duration-300 [&_path]:group-hover:fill-red">
              <Icon />
            </div>
            <h4 className="absolute -bottom-[40px] uppercase text-red opacity-0 transition duration-300 group-hover:-translate-y-3 group-hover:opacity-100">
              {name}
            </h4>
          </div>
        </NextLink>
      ))}
    </div>
  );
}
