import styled from "styled-components";
import UpRightArrowWhite from "public/assets/up-right-arrow-white.svg";
import AcrossLogo from "public/assets/across.svg";
import OutcomeLogo from "public/assets/outcome.svg";
import PolymarketLogo from "public/assets/polymarket.svg";
import BobaLogo from "public/assets/boba.svg";
import ShapeshiftLogo from "public/assets/shapeshift.svg";
import CozyLogo from "public/assets/cozy.svg";
import JarvisLogo from "public/assets/jarvis.svg";
import SherlockLogo from "public/assets/sherlock.svg";
import { Wrapper as BaseWrapper } from "components/Widgets";
import { QUERIES } from "constants/breakpoints";

const Projects = () => {
  return (
    <Section>
      <Wrapper>
        <ProjectsRow>
          <ProjectsColumn>
            <BigProjects>
              <BigProject>
                <LinkButton href="https://across.to" target="_blank" rel="noreferrer">
                  <UpRightArrowWhite />
                </LinkButton>
                <div>
                  <AcrossLogo />
                </div>
                <BigProjectText>Across.to</BigProjectText>
              </BigProject>
              <BigProject>
                <LinkButton href="https://outcome.finance" target="_blank" rel="noreferrer">
                  <UpRightArrowWhite />
                </LinkButton>
                <div>
                  <OutcomeLogo />
                </div>
                <BigProjectText>Outcome.finance</BigProjectText>
              </BigProject>
            </BigProjects>
            <SmallProjects>
              {smallProjects.map(({ name, link, Logo }, index) => {
                return (
                  <SmallProject key={index}>
                    <SmallLinkButton href={link} target="_blank" rel="noreferrer">
                      <UpRightArrowWhite />
                    </SmallLinkButton>
                    <div>
                      <Logo />
                    </div>
                    <SmallProjectText>{name}</SmallProjectText>
                  </SmallProject>
                );
              })}
            </SmallProjects>
          </ProjectsColumn>
          <ProjectsBlurb>
            <ProjectsBlurbHeader>Real projects built with our products</ProjectsBlurbHeader>
            <ProjectsBlurbSubheader>
              Being in the cross-chain bridging space, for us it’s important to lorem ipsum of centralized authorities
              and (potentially) biased third-parties.
            </ProjectsBlurbSubheader>
          </ProjectsBlurb>
        </ProjectsRow>
      </Wrapper>
    </Section>
  );
};

const smallProjects = [
  {
    name: "Polymarket",
    Logo: PolymarketLogo,
    link: "https://polymarket.com",
  },
  {
    name: "Boba",
    Logo: BobaLogo,
    link: "https://boba.network",
  },
  {
    name: "Shapeshift",
    Logo: ShapeshiftLogo,
    link: "https://shapeshift.com",
  },
  {
    name: "Cozy",
    Logo: CozyLogo,
    link: "https://www.cozy.finance",
  },
  {
    name: "Jarvis",
    Logo: JarvisLogo,
    link: "https://jarvis.network",
  },
  {
    name: "Sherlock",
    Logo: SherlockLogo,
    link: "https://www.sherlock.xyz",
  },
];

export default Projects;

const Section = styled.section`
  width: 100%;
  background: var(--white);
`;

const Wrapper = styled(BaseWrapper)`
  padding: 128px 0 117px;
`;

const ProjectsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  margin-left: 0;
  margin-right: 0;
  @media ${QUERIES.tb.andDown} {
    flex-direction: column-reverse;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const ProjectsColumn = styled.div`
  max-width: 560px;
  @media ${QUERIES.tb.andDown} {
    max-width: 100%;
  }
`;
const BigProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const BigProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 80px;
  isolation: isolate;
  border: 1px solid var(--grey-600);
  order: 1;
  flex-grow: 1;
  width: 280px;
  height: 280px;
  @media ${QUERIES.tb.andDown} {
    flex-grow: 0;
    width: 50%;
  }
  &:hover {
    border: 1px solid var(--red);
    color: var(--red);
    h3,
    a {
      display: flex;
    }
    > div {
      path {
        fill: var(--red);
      }
    }
  }
`;
const BigProjectText = styled.h3`
  display: none;
  font: var(--body-sm);
  letter-spacing: 0.09em;
  text-transform: uppercase;
  margin-top: 24px;
`;
const LinkButton = styled.a`
  display: none;
  position: absolute;
  top: 20px;
  right: 24px;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: var(--grey-200);
  border: 1px solid var(--red);
  border-radius: 8px;
  background: var(--red);
  padding: 8px;
  gap: 8px;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const SmallProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const SmallProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  isolation: isolate;
  border: 1px solid var(--grey-600);
  order: 1;
  flex-grow: 1;
  padding: 40px;
  width: 186px;
  height: 186px;
  &:hover {
    path {
      fill: var(--red);
    }
  }

  &:hover {
    color: var(--red);

    h3,
    a {
      display: flex;
    }
    svg {
      fill: var(--white);
    }
  }
  svg {
    fill: var(--white);
  }
`;

const SmallProjectText = styled(BigProjectText)`
  font-size: 14px;
`;

const SmallLinkButton = styled(LinkButton)`
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
`;

const ProjectsBlurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsBlurbHeader = styled.h2`
  font: var(--header-md);
  letter-spacing: -0.01em;

  color: var(--grey-200);
  max-width: 366px;
`;

const ProjectsBlurbSubheader = styled.h3`
  margin-top: 24px;
  font: var(--body-lg);
  line-height: 140%;

  color: var(--grey-200);
  max-width: 366px;
`;
