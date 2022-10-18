import styled from "styled-components";
import { Title, Wrapper as DefaultWrapper } from "components/Widgets";

const Builder = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          Participate as a <span>Builder</span>
        </Title>
      </Wrapper>
    </Section>
  );
};

export default Builder;

const Section = styled.section`
  width: 100%;
  background: var(--white);
`;

const Wrapper = styled(DefaultWrapper)`
  padding: 100px 0 113px;
`;
