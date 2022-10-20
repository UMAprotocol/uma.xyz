import styled from "styled-components";
import { Wrapper as BaseWrapper, Title as BaseTitle } from "components/Widgets";

const SupportSection = () => {
  return (
    <Section>
      <Wrapper>
        <TextColumn>
          <Title>Supported by the Risk Labs Foundation</Title>
          <Subtitle>
            Tortor id tellus tellus vel. In consectetur consectetur non in amet orci amet dui. Leo dictum in vitae
            blandit quisque. Amet eu enim orci gravida semper est.
          </Subtitle>
        </TextColumn>
      </Wrapper>
    </Section>
  );
};

export default SupportSection;

const Section = styled.div`
  width: 100%;
  background: linear-gradient(359.87deg, #f0f0f0 0.14%, rgba(248, 248, 248, 0.45) 52.48%, var(--white) 99.91%),
    url("/assets/temp-support.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
`;

const Wrapper = styled(BaseWrapper)`
  padding: 261px 0 234px;
  background: transparent;
`;

const Title = styled(BaseTitle)`
  max-width: 562px;
`;

const Subtitle = styled.h3`
  font: var(--body-lg);
  max-width: 466px;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
