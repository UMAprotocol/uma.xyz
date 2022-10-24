import styled from "styled-components";
import { Wrapper as BaseWrapper } from "components/Widgets";
const HowItWorks = () => {
  return (
    <Section>
      <Wrapper></Wrapper>
    </Section>
  );
};

export default HowItWorks;

const Section = styled.section`
  width: 100%;
  background: linear-gradient(180deg, var(--white-200) 0%, var(--white) 100%);
`;
const Wrapper = styled(BaseWrapper)``;
