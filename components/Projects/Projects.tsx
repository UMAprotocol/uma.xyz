import styled from "styled-components";
import AcrossLogo from "public/assets/across-logo.svg";
import ShellLogo from "public/assets/shell-logo.svg";
import UpRightArrowRed from "public/assets/up-right-arrow-red.svg";
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
                  <UpRightArrowRed />
                </LinkButton>
                <AcrossLogo />
                <BigProjectText>Across.to</BigProjectText>
              </BigProject>
              <BigProject>
                <LinkButton href="https://www.google.ca" target="_blank" rel="noreferrer">
                  <UpRightArrowRed />
                </LinkButton>
                <ShellLogo />
                <BigProjectText>HeckifIknow.org</BigProjectText>
              </BigProject>
            </BigProjects>
            <SmallProjects>
              <SmallProject>
                <SmallLinkButton href="https://polymarket.com" target="_blank" rel="noreferrer">
                  <UpRightArrowRed />
                </SmallLinkButton>
                <PolymarketLogo />
                <SmallProjectText>Polymarket</SmallProjectText>
              </SmallProject>
              <SmallProject>
                <SmallLinkButton href="https://www.sushi.com/swap" target="_blank" rel="noreferrer">
                  <UpRightArrowRed />
                </SmallLinkButton>
                <SushiSwapLogo />
                <SmallProjectText>Sushi Swap</SmallProjectText>
              </SmallProject>
              <SmallProject>
                <SmallLinkButton href="https://shapeshift.com" target="_blank" rel="noreferrer">
                  <UpRightArrowRed />
                </SmallLinkButton>
                <ShapeshiftLogo />
                <SmallProjectText>Shapeshift</SmallProjectText>
              </SmallProject>
            </SmallProjects>
            <SmallProjects>
              <SmallProject>
                <SmallLinkButton href="https://polymarket.com" target="_blank" rel="noreferrer">
                  <UpRightArrowRed />
                </SmallLinkButton>
                <PolymarketLogo />
                <SmallProjectText>Polymarket</SmallProjectText>
              </SmallProject>
              <SmallProject>
                <SmallLinkButton href="https://www.sushi.com/swap" target="_blank" rel="noreferrer">
                  <UpRightArrowRed />
                </SmallLinkButton>
                <SushiSwapLogo />
                <SmallProjectText>Sushi Swap</SmallProjectText>
              </SmallProject>
              <SmallProject>
                <SmallLinkButton href="https://shapeshift.com" target="_blank" rel="noreferrer">
                  <UpRightArrowRed />
                </SmallLinkButton>
                <ShapeshiftLogo />
                <SmallProjectText>Shapeshift</SmallProjectText>
              </SmallProject>
            </SmallProjects>
          </ProjectsColumn>
          <ProjectsBlurb></ProjectsBlurb>
        </ProjectsRow>
      </Wrapper>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  width: 100%;
  background: var(--white);
`;
const Wrapper = styled.div`
  padding: 128px 0 117px;
  background: inherit;
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;
`;

const ProjectsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProjectsColumn = styled.div``;
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
    background-color: var(--red-500);
    h3,
    a {
      display: flex;
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
const ProjectsBlurb = styled.div``;

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
  border: 1px solid var(--black);
  border-radius: 8px;
  background: var(--black);
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

const SmallProject = styled(BigProject)`
  padding: 40px;
  width: 186px;
  height: 186px;
  &:hover {
    background-color: var(--red-500);
    h3,
    a {
      display: flex;
    }
    svg {
      fill: var(--red-500);
    }
  }
  svg {
    fill: var(--white);
  }
`;

const SmallProjectText = styled(BigProjectText)`
  display: block;
  font-size: 14px;
`;

const SmallLinkButton = styled(LinkButton)`
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
`;
