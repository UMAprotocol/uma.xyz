import styled from "styled-components";
import AcrossLogo from "public/assets/across-logo.svg";
import OutcomeLogo from "public/assets/outcome-logo.svg";
import UpRightArrowWhite from "public/assets/up-right-arrow-white.svg";
import PolymarketLogo from "public/assets/polymarket-logo.svg";
import SushiSwapLogo from "public/assets/sushi-swap-logo.svg";
import ShapeshiftLogo from "public/assets/shapeshift-logo.svg";

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
    name: "Sushi Swap",
    Logo: SushiSwapLogo,
    link: "https://www.sushi.com/swap",
  },
  {
    name: "Shapeshift",
    Logo: ShapeshiftLogo,
    link: "https://shapeshift.com",
  },
  {
    name: "Polymarket",
    Logo: PolymarketLogo,
    link: "https://polymarket.com",
  },
  {
    name: "Sushi Swap",
    Logo: SushiSwapLogo,
    link: "https://www.sushi.com/swap",
  },
  {
    name: "Shapeshift",
    Logo: ShapeshiftLogo,
    link: "https://shapeshift.com",
  },
];

export default Projects;

const Section = styled.section`
  width: 100%;
  background: var(--white);
`;
const Wrapper = styled.div`
  padding: 128px 0 117px;
  background: inherit;
  width: 100%;
  max-width: var(--max-section-width);
  margin: 0 auto;
`;

const ProjectsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;

const ProjectsColumn = styled.div`
  max-width: 560px;
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
  padding: 80px;
  isolation: isolate;
  border: 1px solid #e7e7e7;
  order: 1;
  flex-grow: 1;
  width: 280px;
  height: 280px;
  &:hover {
    border: 1px solid var(--red-500);
    color: var(--red-500);
    h3,
    a {
      display: flex;
    }
    > div {
      path {
        fill: var(--red-500);
      }
    }
  }
`;
const BigProjectText = styled.h3`
  display: none;
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
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
  background: var(--black);
  border: 1px solid var(--red-500);
  border-radius: 8px;
  background: var(--red-500);
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
  border: 1px solid #e7e7e7;
  order: 1;
  flex-grow: 1;
  padding: 40px;
  width: 186px;
  height: 186px;
  // Properly styling current logos, might be deletable later.
  &:nth-of-type(3n + 1) {
    &:hover {
      > div path {
        stroke: var(--red-500);
      }
    }
  }

  &:nth-of-type(3n + 2) {
    &:hover {
      path:not(:nth-of-type(5)) {
        fill: var(--red-500);
      }
    }
  }
  &:nth-of-type(3n + 3) {
    &:hover {
      path {
        fill: var(--red-500);
      }
    }
  }

  &:hover {
    color: var(--red-500);

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
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 115%;
  letter-spacing: -0.01em;

  color: var(--black);
  max-width: 366px;
`;

const ProjectsBlurbSubheader = styled.h3`
  margin-top: 24px;
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;

  color: var(--black);
  max-width: 366px;
`;

const StyledAcrossLogo = styled(AcrossLogo)``;
