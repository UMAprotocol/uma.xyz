import styled from "styled-components";

const Projects = () => {
  return (
    <Section>
      <Wrapper>
        <ProjectsRow>
          <ProjectsColumn>
            <BigProjects>
              <BigProject></BigProject>
            </BigProjects>
          </ProjectsColumn>
          <ProjectsText></ProjectsText>
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
  background: inherit;
  width: 100%;
  max-width: 1144px;
  margin: 128px auto 117px;
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
  flex-basis: 50%;
`;
const ProjectsText = styled.div``;
