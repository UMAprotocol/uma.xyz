import styled from "styled-components";
import { Wrapper as BaseWrapper, Title as BaseTitle } from "components/Widgets";
import UpRightArrowLg from "public/assets/up-right-arrow-lg.svg";
import { QUERIES } from "constants/breakpoints";

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
        <ButtonColumn>
          <ButtonGroup>
            <ButtonLink href="https://jobs.lever.co/umaproject" target="_blank" rel="noreferrer">
              <UpRightArrowLg />
            </ButtonLink>
            <ButtonText>Careers</ButtonText>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonLink href="https://docs.umaproject.org/" target="_blank" rel="noreferrer">
              <UpRightArrowLg />
            </ButtonLink>
            <ButtonText>About</ButtonText>
          </ButtonGroup>
        </ButtonColumn>
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
  @media ${QUERIES.tb.andDown} {
    padding-top: 130px;
    padding-bottom: 118px;
  }
`;

const Title = styled(BaseTitle)`
  max-width: 562px;
  font: var(--header-md);
`;

const Subtitle = styled.h3`
  font: var(--body-lg);
  max-width: 466px;
  margin-left: 0;
  margin-right: 0;
  @media ${QUERIES.tb.andDown} {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 0;
  margin-right: 0;
  @media ${QUERIES.tb.andDown} {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 74px;
  gap: 16px;
  margin-left: 0;
  margin-right: 0;
  @media ${QUERIES.tb.andDown} {
    margin-top: 36px;
    margin-left: 15px;
    margin-right: 15px;
    gap: 23px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  @media ${QUERIES.tb.andDown} {
    margin-left: 15px;
    margin-right: 15px;
  }
  &:hover {
    span {
      color: var(--red);
    }
    a {
      background: var(--red);
      border-color: var(--red);
    }
    path {
      stroke: var(--white);
    }
  }
`;

const ButtonLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--grey-200);
  border-radius: 10px;
  path {
    stroke: var(--grey-200);
  }
`;

const ButtonText = styled.span`
  font: var(--header-sm);
  color: var(--grey-200);
  line-height: 115%;
`;
