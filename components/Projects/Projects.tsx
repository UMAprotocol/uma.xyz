import styled from "styled-components";
import AcrossLogo from "public/assets/across-logo.svg";
import ShellLogo from "public/assets/shell-logo.svg";
const Projects = () => {
  return (
    <Section>
      <Wrapper>
        <ProjectsRow>
          <ProjectsColumn>
            <BigProjects>
              <BigProject>
                <AcrossLogo />
                <BigProjectText>Across.to</BigProjectText>
              </BigProject>
              <BigProject>
                <ShellLogo />
                <BigProjectText>HeckifIknow.org</BigProjectText>
              </BigProject>
            </BigProjects>
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
    h3 {
      display: block;
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
