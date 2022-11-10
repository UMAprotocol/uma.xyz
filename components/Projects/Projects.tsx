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
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import UpRightArrowRed from "public/assets/up-right-arrow-red.svg";
import { useWindowSize } from "hooks";
import Image from "next/image";
import SmArrow from "public/assets/sm-arrow.svg";

const Projects = () => {
  const { width } = useProjects();
  return (
    <Section>
      <Wrapper>
        <ProjectsRow>
          <ProjectsColumn>
            {width > BREAKPOINTS.md ? (
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
              {width > BREAKPOINTS.md
                ? smallProjects.map(({ name, link, src }, index) => {
                    return (
                      <SmallProject key={index}>
                        <SmallLinkButton href={link} target="_blank" rel="noreferrer">
                          {width > BREAKPOINTS.lg ? <UpRightArrowWhite /> : <SmArrow />}
                        </SmallLinkButton>
                        <SmallImageWrapper>
                          <Image
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                            src={src}
                            alt="logo"
                          />
                        </SmallImageWrapper>
                        <SmallProjectText>{name}</SmallProjectText>
                      </SmallProject>
                    );
                  })
                : null}
            </SmallProjects>
          </ProjectsColumn>
          {width <= BREAKPOINTS.md ? (
            <MobileProjects>
              {mobileSmallProjects.map(({ name, link, src }, index) => {
                return (
                  <MobileContainer href={link} key={index} target="_blank" rel="noreferrer">
                    <MobileImageWrapper>
                      <Image width="33px" height="33px" objectFit="contain" src={src} alt="logo" />
                    </MobileImageWrapper>
                    <MobileImageText>{name}</MobileImageText>
                  </MobileContainer>
                );
              })}
            </MobileProjects>
          ) : null}
          <ProjectsBlurb>
            <ProjectsBlurbHeader>Projects built with the OO</ProjectsBlurbHeader>
            <ProjectsBlurbSubheader>UMA’s oracle serves diverse use cases</ProjectsBlurbSubheader>
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

export default Projects;

function useProjects() {
  const { width } = useWindowSize();
  return { width };
}

const smallProjects = [
  {
    name: "Polymarket",
    Logo: PolymarketLogo,
    src: "/assets/polymarket.svg",
    link: "https://polymarket.com",
  },
  {
    name: "Boba",
    Logo: BobaLogo,
    src: "/assets/boba.svg",
    link: "https://boba.network",
  },
  {
    name: "Shapeshift",
    Logo: ShapeshiftLogo,
    src: "/assets/shapeshift.svg",
    link: "https://shapeshift.com",
  },
  {
    name: "Cozy",
    Logo: CozyLogo,
    src: "/assets/cozy.svg",
    link: "https://www.cozy.finance",
  },
  {
    name: "Jarvis",
    Logo: JarvisLogo,
    src: "/assets/jarvis.svg",
    link: "https://jarvis.network",
  },
  {
    name: "Sherlock",
    Logo: SherlockLogo,
    src: "/assets/sherlock.svg",
    link: "https://www.sherlock.xyz",
  },
];

const mobileSmallProjects = [
  {
    name: "Across",
    src: "/assets/across.svg",
    link: "https://across.to",
  },
  {
    name: "Outcome",
    src: "/assets/outcome.svg",
    link: "https://outcome.finance",
  },
  {
    name: "Sherlock",
    Logo: SherlockLogo,
    src: "/assets/sherlock.svg",
    link: "https://www.sherlock.xyz",
  },
  ...smallProjects,
];

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
  margin-left: 15px;
  margin-right: 15px;
  @media ${QUERIES.tb.andDown} {
    gap: 96px;
  }
  @media ${QUERIES.md.andDown} {
    flex-direction: column-reverse;
  }
`;

const ProjectsColumn = styled.div`
  max-width: 560px;
  @media ${QUERIES.tb.andDown} {
    width: 100%;
    max-width: 438px;
  }
  @media ${QUERIES.md.andDown} {
    max-width: 100%;
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
  isolation: isolate;
  border: 1px solid var(--grey-600);
  order: 1;
  flex-grow: 1;
  width: 280px;
  height: 280px;
  justify-content: center;
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
      visibility: visible;
    }
    > div {
      path {
        fill: var(--red);
      }
    }
  }
`;
const BigProjectText = styled.h3`
  visibility: hidden;
  font: var(--body-sm);
  letter-spacing: 0.09em;
  text-transform: uppercase;
  margin-top: 24px;
  position: absolute;
  bottom: 60px;
  @media ${QUERIES.tb.andDown} {
    bottom: 24px;
  }
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
  @media ${QUERIES.tb.andDown} {
    max-width: 560px;
  }
  @media ${QUERIES.md.andDown} {
    max-width: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const SmallImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-top: 40px;

  @media ${QUERIES.tb.andDown} {
    height: 30px;
    width: 40px;
  }
  @media ${QUERIES.sm.andDown} {
    max-width: 60.37px;
    max-height: 30.31px;
  }
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
  justify-content: center;
  @media ${QUERIES.tb.andDown} {
    max-width: 145.48px;
    max-height: 145.48px;
    width: 33%;
  }
  @media ${QUERIES.md.andDown} {
    flex: 1 0 auto;
    height: auto;
    max-width: none;
    max-height: none;
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
      visibility: visible;
    }
    img {
      filter: invert(47%) sepia(65%) saturate(5018%) hue-rotate(336deg) brightness(111%) contrast(103%);
    }
  }
  svg {
    fill: var(--white);
  }
`;

const SmallProjectText = styled(BigProjectText)`
  font-size: 14px;
  position: relative;
  bottom: 0;
  @media ${QUERIES.md.andDown} {
    margin-top: 8px;
    font-size: 12px;
  }
`;

const SmallLinkButton = styled(LinkButton)`
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
  @media ${QUERIES.tb.andDown} {
    width: 26px;
    height: 26px;
    top: 12px;
    right: 12px;
  }
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
  @media screen and (max-width: 740px) {
    font: var(--header-sm);
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
  text-align: left;
  @media ${QUERIES.tb.andDown} {
    width: 100%;
    max-width: 100%;
    font: var(--body-md);
  }
  @media screen and (max-width: 740px) {
    font: var(--body-md);
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

const MobileProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  justify-content: space-around;
`;
const MobileContainer = styled.a`
  flex: 1 0 calc(33% - 16px);
  border: 1px solid var(--grey-600);
  height: auto;
  border: 1;
  text-decoration: none;
  &::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  &:hover {
    h3 {
      visibility: visible;
      color: var(--red);
    }
    img {
      filter: invert(47%) sepia(65%) saturate(5018%) hue-rotate(336deg) brightness(111%) contrast(103%);
    }
  }
`;

const MobileImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
  align-content: center;
  align-self: end;
  justify-content: center;
`;

const MobileImageText = styled.h3`
  visibility: visible;
  font: var(--body-sm);
  letter-spacing: 0.09em;
  text-transform: uppercase;
  text-align: center;
  margin: -20px;
  color: var(--grey-200);
`;
