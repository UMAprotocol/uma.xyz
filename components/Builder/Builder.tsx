import styled from "styled-components";

const Builder = () => {
  return (
    <Section>
      <Wrapper></Wrapper>
    </Section>
  );
};

export default Builder;

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
