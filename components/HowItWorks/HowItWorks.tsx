import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Wrapper as BaseWrapper, Title as BaseTitle } from "components/Widgets";
import { useIntersectionObserver, useIsMounted } from "hooks";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize } from "hooks";

interface Props {
  heightFromTop: number;
  currentPosition: number;
}
const HowItWorks: React.FC<Props> = ({ currentPosition }) => {
  const {
    sectionRef,
    isMounted,
    width,
    ref,
    topRedHeight,
    refTrackOne,
    refTrackTwo,
    refOnePercentCrossed,
    refTwoPercentCrossed,
  } = useHowItWorks(currentPosition);
  return (
    <Section ref={isMounted ? sectionRef : null}>
      <Wrapper>
        <Title>How it works</Title>
        <Header>The Optimistic Oracle verifies data in stages </Header>
        <IntersectionWrapper>
          {width > BREAKPOINTS.lg && (
            <TrackWrapper ref={ref}>
              <TrackItem>01</TrackItem>
              <RedSeperator height={topRedHeight} />
              <Seperator height={100 - topRedHeight} />
              <TrackItem>02</TrackItem>
              <RedSeperator height={0} />
              <Seperator height={100} />
            </TrackWrapper>
          )}
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
              <IllustrationColumn ref={refTrackOne}>
                <TrackAndIllustrationRow>
                  {width <= BREAKPOINTS.lg && (
                    <TrackWrapper>
                      <TrackItem>01</TrackItem>
                      <RedSeperator height={refOnePercentCrossed} />
                      <Seperator height={100 - refOnePercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <IllustrationImg src="/assets/illustration.svg" alt="illustration" />
                  </IllustrationWrapper>
                </TrackAndIllustrationRow>
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
                <TrackAndIllustrationRow>
                  {width <= BREAKPOINTS.lg && (
                    <TrackWrapper ref={refTrackTwo}>
                      <TrackItem>02</TrackItem>
                      <RedSeperator height={refTwoPercentCrossed} />
                      <Seperator height={100 - refTwoPercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <IllustrationImg src="/assets/illustration.svg" alt="illustration" />
                  </IllustrationWrapper>
                </TrackAndIllustrationRow>
              </IllustrationColumn>
            </AnimationRow>
          </AnimationWrapper>
        </IntersectionWrapper>
      </Wrapper>
    </Section>
  );
};

export default HowItWorks;

function useHowItWorks(currentPosition: number) {
  const isMounted = useIsMounted();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();
  const ref = useRef<HTMLDivElement | null>(null);

  const [topRedHeight, setRedTopHeight] = useState(0);
  const [offsetTrackRefOne, setOffsetTrackRefOne] = useState(0);
  const refTrackOne = useRef<HTMLDivElement | null>(null);
  const entryTrackOne = useIntersectionObserver(refTrackOne, {
    threshold: 0.2,
  });

  useEffect(() => {
    if (isMounted() && refTrackOne.current && offsetTrackRefOne === 0) {
      setTimeout(() => {
        if (refTrackOne.current) {
          setOffsetTrackRefOne(refTrackOne.current.getBoundingClientRect().top);
        }
      }, 1000);
    }
  }, [refTrackOne, isMounted]);

  const [refOnePercentCrossed, setRefOnePercentCrossed] = useState(0);
  useEffect(() => {
    if (refTrackOne.current && entryTrackOne) {
      setRefOnePercentCrossed(
        calculatePercentCrossed(
          offsetTrackRefOne,
          currentPosition,
          entryTrackOne.rootBounds ? entryTrackOne.rootBounds.height : 0,
          refTrackOne.current?.getBoundingClientRect().height
        )
      );
    }
  }, [currentPosition, offsetTrackRefOne, refTrackOne, entryTrackOne]);

  const [refTwoPercentCrossed, setRefTwoPercentCrossed] = useState(0);
  const [offsetTrackRefTwo, setOffsetTrackRefTwo] = useState(0);
  const refTrackTwo = useRef<HTMLDivElement | null>(null);
  const entryTrackTwo = useIntersectionObserver(refTrackTwo, {
    threshold: 0.2,
  });

  useEffect(() => {
    if (refTrackTwo.current && entryTrackTwo) {
      setRefTwoPercentCrossed(
        calculatePercentCrossed(
          offsetTrackRefTwo,
          currentPosition,
          entryTrackTwo.rootBounds ? entryTrackTwo.rootBounds.height : 0,
          refTrackTwo.current?.getBoundingClientRect().height
        )
      );
    }
  }, [currentPosition, offsetTrackRefTwo, refTrackTwo, entryTrackTwo]);

  useEffect(() => {
    if (isMounted() && refTrackTwo.current && offsetTrackRefTwo === 0) {
      setTimeout(() => {
        if (refTrackTwo.current) {
          setOffsetTrackRefTwo(refTrackTwo.current.getBoundingClientRect().top);
        }
      }, 1000);
    }
  }, [refTrackTwo, isMounted]);

  function calculatePercentCrossed(
    distanceFromTop: number,
    scrollPosition: number,
    distance: number,
    heightOfElement: number
  ) {
    if (scrollPosition + distance < distanceFromTop) return 0;
    const REDUCE_SCROLL_IN_VIEW = 20;
    const percentCrossed =
      ((scrollPosition + distance - distanceFromTop) / heightOfElement) * 100 - REDUCE_SCROLL_IN_VIEW;
    return percentCrossed < 0 ? 0 : percentCrossed >= 100 ? 100 : percentCrossed;
  }

  return {
    sectionRef,
    isMounted: isMounted(),
    width,
    topRedHeight,
    ref,
    refTrackOne,
    refTrackTwo,
    refOnePercentCrossed,
    refTwoPercentCrossed,
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
  @media ${QUERIES.lg.andDown} {
    margin: 0 16px;
  }
`;

const Header = styled.div`
  padding-top: 48px;
  font: var(--header-lg);
  color: var(--grey-100);
  max-width: 1020px;
  @media ${QUERIES.lg.andDown} {
    margin-left: 16px;
    margin-right: 16px;
  }
  @media ${QUERIES.tb.andDown} {
    font: var(--header-sm);
  }
`;

const AnimationWrapper = styled.div`
  position: relative;
  margin-top: 31px 16px 0;
  @media ${QUERIES.lg.andDown} {
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
  @media ${QUERIES.lg.andDown} {
    flex-direction: column;
  }
  @media ${QUERIES.tb.andDown} {
    flex-direction: column-reverse;
    gap: 58px;
  }
`;

const AnimationTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  @media ${QUERIES.lg.andDown} {
    max-width: 100%;
  }
  @media ${QUERIES.tb.andDown} {
  }
`;

const AnimationHeader = styled.div`
  color: var(--red);
  font: var(--body-sm);
  text-transform: uppercase;
  @media ${QUERIES.lg.andDown} {
    margin: 0 16px;
  }
`;

const AnimationBody = styled.div`
  margin-top: 24px;
  color: var(--grey-100);
  font: var(--header-md);
  max-width: 465px;

  @media ${QUERIES.lg.andDown} {
    max-width: 640px;
    margin-left: 16px;
    margin-right: 16px;
  }
  @media ${QUERIES.tb.andDown} {
    font: var(--header-xs);
    max-width: 100%;
  }
`;

const AnimationSubBody = styled.div`
  margin-top: 24px;
  color: var(--grey-100);
  font: var(--body-lg);
  max-width: 367px;
  @media ${QUERIES.lg.andDown} {
    max-width: 640px;
    margin-left: 16px;
    margin-right: 16px;
  }
  @media ${QUERIES.tb.andDown} {
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

const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;
  position: absolute;
  top: -30px;
  left: -100px;
  height: 102.5%;
  @media ${QUERIES.lg.andDown} {
    position: relative;
    top: 0;
    left: 0;
    margin-left: auto;
    height: inherit;
    margin-top: -40px;
  }
`;

const TrackItem = styled.div`
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
const Seperator = styled.div<ISeperator>`
  width: 1px;
  margin: 0 12px;
  background: linear-gradient(180deg, var(--grey-500) 0%, rgba(176, 175, 179, 0) 100%);
  height: ${({ height }) => height}%;
`;

const RedSeperator = styled(Seperator)`
  background: var(--red);
`;

const IllustrationImg = styled.img`
  @media ${QUERIES.md.andDown} {
    margin-top: 58px;
  }
`;

const TrackAndIllustrationRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
  justify-content: space-between;
`;

const IllustrationWrapper = styled.div`
  flex-basis: 70%;
`;
