import { useRef } from "react";
import styled from "styled-components";
import { Wrapper as BaseWrapper, Title as BaseTitle } from "components/Widgets";
import Illustration from "public/assets/illustration.svg";
import { useIntersectionObserver, useScrollPosition } from "hooks";
const HowItWorks = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useScrollPosition(({ prevPos, currPos }) => {
    console.log("currPoss", currPos);
  }, []);
  return (
    <Section>
      <Wrapper>
        <Title>How it works</Title>
        <Header>The Optimistic Oracle verifies data in stages </Header>
        <IntersectionWrapper ref={ref}>
          <TrackWrapper>
            <TrackItem>01</TrackItem>
            <RedSeperator />
            <Seperator />
            <TrackItem>02</TrackItem>
            <RedSeperator />
            <Seperator />
          </TrackWrapper>
          <TopWrapper>
            <AnimationRow>
              <AnimationTextBlock>
                <AnimationHeader>Statement</AnimationHeader>
                <AnimationBody>A statement is proposed to initiate the process</AnimationBody>
                <AnimationSubBody>
                  Someone proposes an answer to a request made by another party. This answer is then processed and sent
                  to the next step.
                </AnimationSubBody>
              </AnimationTextBlock>
              <IllustrationColumn>
                <Illustration />
              </IllustrationColumn>
            </AnimationRow>
          </TopWrapper>
          <AnimationWrapper>
            <AnimationRow>
              <AnimationTextBlock>
                <AnimationHeader>Challenge period</AnimationHeader>
                <AnimationBody>Challenge periods allow for disputes</AnimationBody>
                <AnimationSubBody>
                  Someone proposes an answer to a request made by another party. This answer is then processed and sent
                  to the next step.
                </AnimationSubBody>
              </AnimationTextBlock>
              <IllustrationColumn>
                <Illustration />
              </IllustrationColumn>
            </AnimationRow>
          </AnimationWrapper>
        </IntersectionWrapper>
      </Wrapper>
    </Section>
  );
};

export default HowItWorks;

const Section = styled.section`
  width: 100%;
  background: linear-gradient(180deg, var(--white-200) 0%, var(--white) 100%);
`;

const Wrapper = styled(BaseWrapper)`
  padding-top: 100px;
  padding-bottom: 26px;
`;

const Title = styled(BaseTitle)`
  border-bottom: 1px solid var(--grey-600);
  padding-bottom: 16px;
`;

const Header = styled.div`
  padding-top: 48px;
  font: var(--header-lg);
  color: var(--grey-100);
  max-width: 1020px;
`;

const AnimationWrapper = styled.div`
  position: relative;
  margin-top: 31px;
`;

const TopWrapper = styled(AnimationWrapper)`
  margin-top: 231px;
`;

const AnimationRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const AnimationTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

const AnimationHeader = styled.div`
  color: var(--red);
  font: var(--body-sm);
  text-transform: uppercase;
`;

const AnimationBody = styled.div`
  margin-top: 24px;
  color: var(--grey-100);
  font: var(--header-md);
  max-width: 465px;
`;

const AnimationSubBody = styled.div`
  margin-top: 24px;
  color: var(--grey-100);
  font: var(--body-lg);
  max-width: 367px;
`;

const IllustrationColumn = styled.div`
  display: flex;
  align-items: flex-end;
  svg {
    margin-top: 30px;
  }
`;

const IntersectionWrapper = styled.div`
  position: relative;
`;

export const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;
  position: absolute;
  top: -30px;
  left: -100px;
  height: 102.5%;
`;

export const TrackItem = styled.div`
  flex: 0 0 48px;
  z-index: 5;
  display: flex;
  background: var(--red);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  color: var(--white);
  font: var(--body-sm);
`;

export const Seperator = styled.div`
  width: 2px;
  flex: 1 1 0;
  margin: 0 12px;
  background-color: var(--grey-500);
  height: 50%;
`;

export const RedSeperator = styled(Seperator)`
  background-color: var(--red);
  height: 50%;
`;
