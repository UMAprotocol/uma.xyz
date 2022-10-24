import { useRef, useState } from "react";
import styled from "styled-components";
import { Wrapper as BaseWrapper, Title as BaseTitle } from "components/Widgets";
import Illustration from "public/assets/illustration.svg";
import { useIntersectionObserver, useScrollPosition } from "hooks";
const HowItWorks = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const refTwo = useRef<HTMLDivElement | null>(null);
  const entryOne = useIntersectionObserver(ref, {});
  const entryTwo = useIntersectionObserver(ref, {});
  const isOneVisible = !!entryOne?.isIntersecting;

  const [entryScrollY, setEntryScrollY] = useState(0);
  const [topRedHeight, setRedTopHeight] = useState(0);
  if (entryOne) console.log(entryOne);
  // WIP on animation here.
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (isOneVisible) {
        if (entryScrollY === 0) {
          setEntryScrollY(Math.abs(currPos.y));
        }
        console.log("currPos", Math.abs(currPos.y) - entryScrollY);
      } else {
        setEntryScrollY(0);
      }
    },
    [entryOne, entryScrollY]
  );
  return (
    <Section>
      <Wrapper>
        <Title>How it works</Title>
        <Header>The Optimistic Oracle verifies data in stages </Header>
        <IntersectionWrapper>
          <TrackWrapper>
            <TrackItem ref={ref}>01</TrackItem>
            <RedSeperator height={50} />
            <Seperator height={50} />
            <TrackItem ref={refTwo}>02</TrackItem>
            <RedSeperator height={0} />
            <Seperator height={100} />
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

interface ISeperator {
  height: number;
}
export const Seperator = styled.div<ISeperator>`
  width: 1px;
  margin: 0 12px;
  background-color: var(--grey-500);
  height: ${({ height }) => height}%;
`;

export const RedSeperator = styled(Seperator)`
  background-color: var(--red);
`;
