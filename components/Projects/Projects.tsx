import { Wrapper as BaseWrapper } from "components/Widgets";
import { extraSmallAndUnder, largeAndUnder, mediumAndUnder, smallAndUnder, tabletAndUnder } from "constant";
import NextLink from "next/link";
import AcrossLogo from "public/assets/across.svg";
import BobaLogo from "public/assets/boba.svg";
import CozyLogo from "public/assets/cozy.svg";
import JarvisLogo from "public/assets/jarvis.svg";
import OutcomeLogo from "public/assets/outcome.svg";
import PolymarketLogo from "public/assets/polymarket.svg";
import ShapeshiftLogo from "public/assets/shapeshift.svg";
import SherlockLogo from "public/assets/sherlock.svg";
import SmArrow from "public/assets/sm-arrow.svg";
import UpRightArrowRed from "public/assets/up-right-arrow-red.svg";
import UpRightArrowWhite from "public/assets/up-right-arrow-white.svg";
import styled, { keyframes } from "styled-components";

// excludes Across and Outcome because we have custom components for them on desktop
const projects = [
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

const mobileProjects = [
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
  ...projects,
];

export function Projects() {
  return (
    <Section>
      <OuterWrapper>
        <InnerWrapper>
          <DesktopProjects>
            <BigProjectsWrapper>
              <BigProject>
                <LinkButton href="https://across.to" target="_blank">
                  <DesktopArrowIcon />
                </LinkButton>
                <AcrossLogoIcon />
                <BigProjectText>Across.to</BigProjectText>
              </BigProject>
              <BigProject>
                <LinkButton href="https://outcome.finance" target="_blank">
                  <DesktopArrowIcon />
                </LinkButton>
                <OutcomeLogoIcon />
                <BigProjectText>Outcome.finance</BigProjectText>
              </BigProject>
            </BigProjectsWrapper>
            <SmallProjectsWrapper>
              {projects.map(({ name, link, Logo }, index) => {
                return (
                  <SmallProject key={index}>
                    <SmallLinkButton href={link} target="_blank">
                      <>
                        <DesktopArrowIcon />
                        <MobileArrowIcon />
                      </>
                    </SmallLinkButton>
                    <SmallImageWrapper>
                      <Logo />
                    </SmallImageWrapper>
                    <SmallProjectText>{name}</SmallProjectText>
                  </SmallProject>
                );
              })}
            </SmallProjectsWrapper>
          </DesktopProjects>
          <MobileProjects>
            {mobileProjects.map(({ name, link, Logo }, index) => {
              return (
                <MobileContainer href={link} key={index} target="_blank" rel="noreferrer">
                  <MobileImageWrapper>
                    <Logo />
                  </MobileImageWrapper>
                  <MobileImageText>{name}</MobileImageText>
                </MobileContainer>
              );
            })}
          </MobileProjects>
          <ProjectsBlurb>
            <ProjectsBlurbHeader>Projects built with the OO</ProjectsBlurbHeader>
            <ProjectsBlurbSubheader>UMA&apos;s oracle serves diverse use cases</ProjectsBlurbSubheader>
            <ProjectLinkWrapper>
              <ProjectLink href="https://projects.umaproject.org/" target="_blank" rel="noreferrer">
                All Projects
                <div>
                  <UpRightArrowRed />
                </div>
              </ProjectLink>
            </ProjectLinkWrapper>
          </ProjectsBlurb>
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
}

const DesktopArrowIcon = styled(UpRightArrowWhite)``;

const MobileArrowIcon = styled(SmArrow)``;

const AcrossLogoIcon = styled(AcrossLogo)``;

const OutcomeLogoIcon = styled(OutcomeLogo)``;

const Section = styled.section`
  width: 100%;
  background: var(--white);
`;

const OuterWrapper = styled(BaseWrapper)`
  padding: 128px 0 117px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  margin-left: 16px;
  margin-right: 16px;
  @media ${largeAndUnder} {
    margin: 0;
    padding-left: 24px;
    padding-right: 24px;
    gap: 100px;
  }
  @media ${tabletAndUnder} {
    gap: 96px;
  }
  // todo: use real breakpoint
  @media screen and (max-width: 780px) {
    gap: 40px;
  }
  @media ${mediumAndUnder} {
    flex-direction: column-reverse;
  }
`;

const DesktopProjects = styled.div`
  max-width: 560px;
  @media ${tabletAndUnder} {
    width: 100%;
    max-width: 438px;
  }
  @media ${mediumAndUnder} {
    display: none;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BigProjectsWrapper = styled(ProjectsWrapper)``;

const SmallProjectsWrapper = styled.div`
  @media ${tabletAndUnder} {
    max-width: 560px;
  }
`;

const textSlideUp = keyframes`
  0% {bottom: calc(33% - 36px); opacity: 0;}
  100% {bottom: 33%; opacity: 1;}
`;

const textSlideUpSmall = keyframes`
  0% {bottom: 0; opacity: 0;}
  100% {bottom: 36px; opacity: 1;}
`;

const Project = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  isolation: isolate;
  border: 1px solid var(--grey-600);
  order: 1;
  flex-grow: 1;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  path {
    transition: fill 0.2s ease-in-out;
  }
  h3 {
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  a {
    visibility: hidden;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
    cursor: default;
  }
  &:hover {
    border: 1px solid var(--red);
    color: var(--red);
    padding-bottom: 48px;
    h3,
    a {
      display: flex;
    }
    h3 {
      animation: ${textSlideUp} 0.2s ease-in-out forwards;
    }
    a {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      cursor: pointer;
    }
    path {
      fill: var(--red);
    }
  }
`;

const BigProject = styled(Project)`
  width: 280px;
  height: 280px;
  @media ${tabletAndUnder} {
    width: 218px;
    height: 218px;
  }
  @media ${mediumAndUnder} {
    flex-grow: 0;
    width: 50%;
  }
  @media ${smallAndUnder} {
    flex-direction: column;
    width: 100%;
  }
`;

const SmallProject = styled(Project)`
  width: 186px;
  height: 186px;
  min-width: 0;
  @media ${tabletAndUnder} {
    max-width: 145.48px;
    max-height: 145.48px;
    width: 33%;
  }
  @media ${mediumAndUnder} {
    flex: 1 0 auto;
    height: auto;
    max-width: none;
    max-height: none;
  }
  &:hover {
    padding-bottom: 36px;
    h3 {
      animation: ${textSlideUpSmall} 0.2s ease-in-out forwards;
    }
  }
`;

const ProjectText = styled.h3`
  display: none;
  font: var(--body-sm);
  letter-spacing: 0.09em;
  text-transform: uppercase;
  position: absolute;
  bottom: calc(33% - 16px);
  color: var(--red);
`;

const BigProjectText = styled(ProjectText)``;

const SmallProjectText = styled(ProjectText)`
  font-size: 14px;
  bottom: 40px;
  @media ${mediumAndUnder} {
    margin-top: 8px;
    font-size: 12px;
  }
`;

const LinkButton = styled(NextLink)`
  opacity: 0;
  display: flex;
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
`;

const SmallImageWrapper = styled.div`
  width: 60px;
  height: 60px;

  @media ${tabletAndUnder} {
    height: 30px;
    width: 40px;
  }
  @media ${smallAndUnder} {
    max-width: 60.37px;
    max-height: 30.31px;
  }
`;

const SmallLinkButton = styled(LinkButton)`
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
  @media ${tabletAndUnder} {
    width: 26px;
    height: 26px;
    top: 12px;
    right: 12px;
  }
  ${DesktopArrowIcon} {
    display: block;
  }
  ${MobileArrowIcon} {
    display: none;
  }
  @media ${largeAndUnder} {
    ${DesktopArrowIcon} {
      display: none;
    }
    ${MobileArrowIcon} {
      display: block;
    }
  }
`;

const ProjectsBlurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${tabletAndUnder} {
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
  @media ${tabletAndUnder} {
    width: 100%;
    max-width: 100%;
  }
  // todo: use real breakpoint
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
  align-self: flex-start;
  @media ${tabletAndUnder} {
    width: 100%;
    max-width: 100%;
    font: var(--body-md);
  }
  // todo: use real breakpoint
  @media screen and (max-width: 740px) {
    font: var(--body-md);
  }
`;

const ProjectLinkWrapper = styled.div`
  margin-top: 26px;
  display: flex;
  font: var(--body-lg);
  color: var(--red);
  justify-content: center;
  gap: 20px;
  cursor: default;
  align-self: flex-start;

  @media ${tabletAndUnder} {
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

const MobileProjects = styled.div`
  display: none;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  justify-content: space-around;

  @media ${mediumAndUnder} {
    display: flex;
  }
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
  &:hover,
  &:focus {
    div {
      height: 75%;
    }
    h3 {
      display: block;
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
  height: 100%;
  align-content: center;
  align-self: end;
  justify-content: center;
`;

const MobileImageText = styled.h3`
  display: none;
  font: var(--body-sm);
  letter-spacing: 0.09em;
  text-transform: uppercase;
  text-align: center;
  margin: -10px;
  color: var(--grey-200);
  @media ${extraSmallAndUnder} {
    font: var(--body-xs);
  }
`;

const ProjectLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  text-decoration: none;
  color: var(--red);
  div {
    position: relative;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--red);
    border-radius: 8px;
    transition: margin 0.3s ease, border-color 0.3s ease;
  }
  &:visited {
    color: var(--red);
  }
  &:hover {
    color: var(--grey-100);
    div {
      border-color: var(--grey-100);
      background-color: var(--grey-100);
      margin-left: -4px;

      path {
        stroke: var(--white);
      }
    }
  }
`;
