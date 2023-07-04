import { mobileAndUnder } from "@/constant";
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
import styled from "styled-components";
import AnimatedLink from "../AnimatedLink";
import { Divider } from "../Divider";
import { BaseOuterWrapper } from "../Wrappers";

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
      Icon: AcrossIcon,
      link: "https://across.to",
    },
    {
      name: "Polymarket",
      Icon: PolymarketIcon,
      link: "https://polymarket.com",
    },
  ];

  const middleRow = [
    {
      name: "Outcome",
      Icon: OutcomeIcon,
      link: "https://outcome.finance",
    },
    {
      name: "Rated",
      Icon: RatedIcon,
      link: "https://www.rated.network",
    },
    {
      name: "Shapeshift",
      Icon: ShapeshiftIcon,
      link: "https://shapeshift.com",
    },
  ];

  const bottomRow = [
    {
      name: "Cozy",
      Icon: CozyIcon,
      link: "https://www.cozy.finance",
    },
    {
      name: "Snapshot",
      Icon: SnapshotIcon,
      link: "https://snapshot.org",
    },
    {
      name: "Sherlock",
      Icon: SherlockIcon,
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
            <ArrowIcon />
          </div>
          <div className="relative grid w-full place-items-center gap-4">
            <div className="w-[25%] transition duration-300 group-hover:-translate-y-3 [&_path]:fill-grey-900 [&_path]:transition [&_path]:duration-300 [&_path]:group-hover:fill-red">
              <Icon />
            </div>
            <h4 className="absolute -bottom-[40px] mx-auto uppercase text-red opacity-0 transition duration-300 group-hover:-translate-y-3 group-hover:opacity-100">
              {name}
            </h4>
          </div>
        </NextLink>
      ))}
    </div>
  );
}

const ArrowIcon = styled(UpRightArrow)``;

const AcrossIcon = styled(AcrossLogo)``;

const OutcomeIcon = styled(OutcomeLogo)``;

const CozyIcon = styled(CozyLogo)``;

const PolymarketIcon = styled(PolymarketLogo)``;

const ShapeshiftIcon = styled(ShapeshiftLogo)``;

const SherlockIcon = styled(SherlockLogo)``;

const RatedIcon = styled(RatedLogo)``;

const SnapshotIcon = styled(SnapshotLogo)``;

const OuterWrapper = styled(BaseOuterWrapper)`
  background: var(--white);
  padding-bottom: 128px;
`;

const InnerWrapper = styled.div`
  max-width: var(--page-width);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: min(6vw, 18px);

  @media ${mobileAndUnder} {
    gap: 44px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 1fr;
  grid-row-start: 1;
  grid-column-start: 1;
  border: 0.5px solid var(--grey-400);

  @media ${mobileAndUnder} {
    grid-column-start: unset;
    grid-row-start: 2;
  }
`;

const ProjectRowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--num-columns), 1fr);
  grid-template-rows: 1fr;
`;

const ProjectWrapper = styled(NextLink)`
  --icon-color: var(--grey-900);
  --indicator-opacity: 0;
  --border-color: var(--grey-400);
  --translate-y: 0;
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 1/1;
  border: 0.5px solid var(--border-color);
  &:hover {
    --icon-color: var(--red);
    --indicator-opacity: 1;
    --border-color: var(--red);
    --translate-y: -12px;
  }
`;

const ProjectInnerWrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 16px;
  width: 100%;
  position: relative;
`;

const ProjectName = styled.h4`
  font: var(--body-sm);
  color: var(--red);
  text-transform: uppercase;
  position: absolute;
  bottom: -40px;
  opacity: var(--indicator-opacity);
  transform: translateY(var(--translate-y));
  transition: opacity var(--animation-duration), transform var(--animation-duration);
`;

const IconWrapper = styled.div`
  width: 25%;
  transform: translateY(var(--translate-y));
  transition: transform var(--animation-duration);

  path {
    fill: var(--icon-color);
    transition: fill var(--animation-duration);
  }
`;

const TextWrapper = styled.div`
  max-width: 366px;
  justify-self: end;
  grid-row-start: 1;
  grid-column-start: 2;

  @media ${mobileAndUnder} {
    max-width: unset;
    grid-column-start: unset;
    grid-row-start: 1;
    justify-self: unset;
  }
`;

const Header = styled.h2`
  font: var(--header-md);
  margin-bottom: 24px;

  @media ${mobileAndUnder} {
    margin-bottom: 12px;
    font: var(--header-sm);
  }
`;

const DividerWrapper = styled.div`
  margin-bottom: 24px;
`;

const ArrowLink = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  background: var(--red);
  border-radius: 6px;
  opacity: var(--indicator-opacity);
  transition: opacity var(--animation-duration);

  path {
    stroke: var(--white);
  }

  @media ${mobileAndUnder} {
    top: 4px;
    right: 4px;
    background: transparent;
    path {
      stroke: var(--red);
    }
  }
`;
