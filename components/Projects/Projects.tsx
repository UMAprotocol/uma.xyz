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
import PolymarketSmLogo from "public/assets/polymarket-sm.svg";
import BobaSmLogo from "public/assets/boba-sm.svg";
import ShapeshiftSmLogo from "public/assets/shapeshift-sm.svg";
import CozySmLogo from "public/assets/cozy-sm.svg";
import JarvisSmLogo from "public/assets/jarvis-sm.svg";
import SherlockSmLogo from "public/assets/sherlock-sm.svg";
import { Wrapper as BaseWrapper } from "components/Widgets";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import UpRightArrowRed from "public/assets/up-right-arrow-red.svg";
import { useWindowSize } from "hooks";

const Projects = () => {
  const { width } = useProjects();
  return (
    <Section>
      <Wrapper>
        <ProjectsRow>
          <ProjectsColumn>
            {width > BREAKPOINTS.sm ? (
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
            ) : null}
            <SmallProjects>
              {width > BREAKPOINTS.lg
                ? smallProjects.map(({ name, link, Logo }, index) => {
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
                  })
                : width > BREAKPOINTS.sm
                ? tabletSmallProjects.map(({ name, link, Logo }, index) => {
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
                  })
                : mobileSmallProjects.map(({ name, link, Logo }, index) => {
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
            <RemixWrapper>
              <span>All projects</span>
              <RemixLink href="https://projects.umaproject.org/" target="_blank" rel="noreferrer">
                <UpRightArrowRed />
              </RemixLink>
            </RemixWrapper>
          </ProjectsBlurb>
        </ProjectsRow>
      </Wrapper>
    </Section>
  );
};

function useProjects() {
  const { width } = useWindowSize();
  return { width };
}

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

const tabletSmallProjects = [
  {
    name: "Polymarket",
    Logo: PolymarketSmLogo,
    link: "https://polymarket.com",
  },
  {
    name: "Boba",
    Logo: BobaSmLogo,
    link: "https://boba.network",
  },
  {
    name: "Shapeshift",
    Logo: ShapeshiftSmLogo,
    link: "https://shapeshift.com",
  },
  {
    name: "Cozy",
    Logo: CozySmLogo,
    link: "https://www.cozy.finance",
  },
  {
    name: "Jarvis",
    Logo: JarvisSmLogo,
    link: "https://jarvis.network",
  },
  {
    name: "Sherlock",
    Logo: SherlockSmLogo,
    link: "https://www.sherlock.xyz",
  },
];

const mobileSmallProjects = [
  {
    name: "Across",
    Logo: AcrossLogo,
    link: "https://across.to",
  },
  {
    name: "Outcome",
    Logo: OutcomeLogo,
    link: "https://outcome.finance",
  },
  ...smallProjects,
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
  @media ${QUERIES.md.andDown} {
    flex-direction: column-reverse;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const ProjectsColumn = styled.div`
  max-width: 560px;
  @media ${QUERIES.tb.andDown} {
    width: 100%;
    max-width: 438px;
  }
`;
const BigProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media ${QUERIES.sm.andDown} {
    flex-direction: column;
  }
`;
const BigProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  isolation: isolate;
  border: 1px solid var(--grey-600);
  order: 1;
  flex-grow: 1;
  width: 280px;
  height: 280px;
  @media ${QUERIES.tb.andDown} {
    width: 218px;
    height: 218px;
  }
  @media ${QUERIES.md.andDown} {
    flex-grow: 0;
    width: 50%;
  }
  @media ${QUERIES.sm.andDown} {
    flex-direction: column;
    width: 100%;
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
  min-width: 0;
  @media ${QUERIES.tb.andDown} {
    width: 145.48px;
    height: 145.48px;
  }
  @media ${QUERIES.sm.andDown} {
    min-width: 50%;
    width: 50%;
  }
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
  @media ${QUERIES.tb.andDown} {
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 362px;
  }
`;

const ProjectsBlurbHeader = styled.h2`
  font: var(--header-md);
  letter-spacing: -0.01em;

  color: var(--grey-200);
  max-width: 366px;
  @media ${QUERIES.tb.andDown} {
    width: 100%;
    max-width: 100%;
  }
`;

const ProjectsBlurbSubheader = styled.h3`
  margin-top: 24px;
  font: var(--body-lg);
  line-height: 140%;
  padding-bottom: 48px;
  color: var(--grey-200);
  max-width: 366px;
  border-bottom: 1px solid var(--grey-700);
  @media ${QUERIES.tb.andDown} {
    width: 100%;
    max-width: 100%;
  }
`;

const RemixWrapper = styled.div`
  margin-top: 26px;
  display: flex;
  font: var(--body-lg);
  color: var(--red);
  justify-content: center;
  gap: 20px;
  cursor: default;
  @media ${QUERIES.tb.andDown} {
    justify-content: flex-start;
    margin-bottom: 44px;
    font: var(--body-md);
    align-items: end;
  }
  &:hover {
    span {
      color: var(--grey-100);
    }
    a {
      border-color: var(--grey-100);
      path {
        stroke: var(--grey-100);
      }
    }
  }
`;

const RemixLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border: 1px solid var(--red);
  border-radius: 8px;
  @media ${QUERIES.tb.andDown} {
    width: 32px;
    height: 32px;
  }
`;
