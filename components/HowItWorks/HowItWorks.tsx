import { useRef, useState } from "react";
import styled from "styled-components";
import { Wrapper as BaseWrapper, Title as BaseTitle } from "components/Widgets";
import Illustration from "public/assets/illustration.svg";
import { useIntersectionObserver, useScrollPosition, useIsMounted } from "hooks";
import { QUERIES } from "constants/breakpoints";

const HowItWorks = () => {
  const { sectionRef, isMounted } = useHowItWorks();

  const ref = useRef<HTMLDivElement | null>(null);
  // const refTwo = useRef<HTMLDivElement | null>(null);
  const entryOne = useIntersectionObserver(ref, {});
  // const entryTwo = useIntersectionObserver(ref, {});
  const isOneVisible = !!entryOne?.isIntersecting;

  const [entryScrollY, setEntryScrollY] = useState(0);
  const [topRedHeight, setRedTopHeight] = useState(0);
  // if (entryOne) console.log(entryOne);
  // WIP on animation here.
  useScrollPosition(
    ({ currPos }) => {
      if (isOneVisible && entryOne.rootBounds) {
        if (entryScrollY === 0) {
          setEntryScrollY(Math.abs(currPos.y));
        } else {
          const height = ref.current?.getBoundingClientRect().height;
          if (height) {
            const calc = ((height / 2 + Math.abs(currPos.y) - entryScrollY) / height) * 100;
            setRedTopHeight(calc > 100 ? 100 : calc);
          }
        }
      } else {
        setEntryScrollY(0);
      }
    },
    [entryOne, entryScrollY]
  );
  return (
    <Section ref={isMounted ? sectionRef : null}>
      <Wrapper>
        <Title>How it works</Title>
        <Header>The Optimistic Oracle verifies data in stages </Header>
        <IntersectionWrapper>
          <TrackWrapper ref={ref}>
            <TrackItem>01</TrackItem>
            <RedSeperator height={topRedHeight} />
            <Seperator height={100 - topRedHeight} />
            <TrackItem>02</TrackItem>
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
                <IllustrationImg src="/assets/illustration.svg" alt="illustration" />
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
                <IllustrationImg src="/assets/illustration.svg" alt="illustration" />
              </IllustrationColumn>
            </AnimationRow>
          </AnimationWrapper>
        </IntersectionWrapper>
      </Wrapper>
    </Section>
  );
};

export default HowItWorks;

function useHowItWorks() {
  const isMounted = useIsMounted();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  return {
    sectionRef,
    isMounted: isMounted(),
  };
}

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
  @media ${QUERIES.md.andDown} {
    margin: 0 16px;
  }
`;

const Header = styled.div`
  padding-top: 48px;
  font: var(--header-lg);
  color: var(--grey-100);
  max-width: 1020px;
  @media ${QUERIES.md.andDown} {
    font: var(--header-sm);
    margin: 0 16px;
  }
`;

const AnimationWrapper = styled.div`
  position: relative;
  margin-top: 31px 0 0;
  @media ${QUERIES.md.andDown} {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const TopWrapper = styled(AnimationWrapper)`
  margin-top: 231px;
  @media ${QUERIES.md.andDown} {
    margin-top: 24px;
  }
`;

const AnimationRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  @media ${QUERIES.md.andDown} {
    flex-direction: column-reverse;
    gap: 58px;
  }
`;

const AnimationTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  @media ${QUERIES.md.andDown} {
    max-width: 100%;
  }
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
  @media ${QUERIES.md.andDown} {
    font: var(--header-xs);
    max-width: 100%;
  }
`;

const AnimationSubBody = styled.div`
  margin-top: 24px;
  color: var(--grey-100);
  font: var(--body-lg);
  max-width: 367px;
  @media ${QUERIES.md.andDown} {
    font: var(--body-sm);
    max-width: 100%;
  }
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

const IllustrationImg = styled.img`
  @media ${QUERIES.md.andDown} {
    margin-top: 58px;
  }
`;
