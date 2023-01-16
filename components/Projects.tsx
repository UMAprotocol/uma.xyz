import { mobileAndUnder } from "constant";
import { useAddHashToUrl } from "hooks/helpers/useAddHashToUrl";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import AcrossLogo from "public/assets/across.svg";
import BobaLogo from "public/assets/boba.svg";
import CozyLogo from "public/assets/cozy.svg";
import JarvisLogo from "public/assets/jarvis.svg";
import OutcomeLogo from "public/assets/outcome.svg";
import PolymarketLogo from "public/assets/polymarket.svg";
import ShapeshiftLogo from "public/assets/shapeshift.svg";
import SherlockLogo from "public/assets/sherlock.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { useRef } from "react";
import styled, { CSSProperties } from "styled-components";
import { Divider } from "./Divider";
import { BaseOuterWrapper } from "./Wrappers";

const AnimatedLink = dynamic(() => import("./AnimatedLink"));

type Project = {
  name: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  link: string;
};

export default function Projects() {
  const id = "projects";
  const ref = useRef<HTMLDivElement>(null);
  useAddHashToUrl(id, ref);

  const topRow = [
    {
      name: "Across",
      Icon: AcrossIcon,
      link: "https://across.to",
    },
    {
      name: "Outcome",
      Icon: OutcomeIcon,
      link: "https://outcome.finance",
    },
  ];

  const middleRow = [
    {
      name: "Polymarket",
      Icon: PolymarketIcon,
      link: "https://polymarket.com",
    },
    {
      name: "Boba",
      Icon: BobaIcon,
      link: "https://boba.network",
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
      name: "Jarvis",
      Icon: JarvisIcon,
      link: "https://jarvis.network",
    },
    {
      name: "Sherlock",
      Icon: SherlockIcon,
      link: "https://www.sherlock.xyz",
    },
  ];

  return (
    <OuterWrapper id={id} ref={ref}>
      <InnerWrapper>
        <TextWrapper>
          <Header>Projects built with the OO</Header>
          <DividerWrapper>
            <Divider />
          </DividerWrapper>
          <AnimatedLink href="https://projects.uma.xyz/">All projects</AnimatedLink>
        </TextWrapper>
        <ProjectsWrapper>
          <ProjectRow projects={topRow} line="top" />
          <ProjectRow projects={middleRow} line="middle" />
          <ProjectRow projects={bottomRow} line="bottom" />
        </ProjectsWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

function ProjectRow({ projects, line }: { projects: Project[]; line: "top" | "middle" | "bottom" }) {
  return (
    <ProjectRowWrapper
      style={
        {
          "--num-columns": line === "top" ? 2 : 3,
        } as CSSProperties
      }
    >
      {projects.map(({ name, link, Icon }) => (
        <ProjectWrapper key={name} href={link} target="_blank">
          <ArrowLink>
            <ArrowIcon />
          </ArrowLink>
          <ProjectInnerWrapper>
            <IconWrapper>
              <Icon />
            </IconWrapper>
            <ProjectName>{name}</ProjectName>
          </ProjectInnerWrapper>
        </ProjectWrapper>
      ))}
    </ProjectRowWrapper>
  );
}

const ArrowIcon = styled(UpRightArrow)``;

const AcrossIcon = styled(AcrossLogo)``;

const OutcomeIcon = styled(OutcomeLogo)``;

const BobaIcon = styled(BobaLogo)`
  margin-top: -20px;
`;

const CozyIcon = styled(CozyLogo)``;

const JarvisIcon = styled(JarvisLogo)`
  margin-top: -18px;
`;

const PolymarketIcon = styled(PolymarketLogo)``;

const ShapeshiftIcon = styled(ShapeshiftLogo)``;

const SherlockIcon = styled(SherlockLogo)``;

const OuterWrapper = styled(BaseOuterWrapper)`
  background: var(--white);
  padding-top: 228px;
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
  border: 0.5px solid var(--grey-600);

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
  --icon-color: var(--grey-100);
  --indicator-opacity: 0;
  --border-color: var(--grey-600);
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
