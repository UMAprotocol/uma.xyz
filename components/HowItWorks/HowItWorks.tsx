import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Wrapper as BaseWrapper, Title as BaseTitle } from "components/Widgets";
import { useIntersectionObserver, useScrollPosition, useIsMounted } from "hooks";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize } from "hooks";

interface Props {
  heightFromTop: number;
}
const HowItWorks: React.FC<Props> = () => {
  const { sectionRef, isMounted, width, ref, topRedHeight, refTrackOne, refPercentCrossed } = useHowItWorks();
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
                      <RedSeperator height={refPercentCrossed} />
                      <Seperator height={100 - refPercentCrossed} />
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
                    <TrackWrapper>
                      <TrackItem>02</TrackItem>
                      <RedSeperator height={50} />
                      <Seperator height={40} />
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

function useHowItWorks() {
  const isMounted = useIsMounted();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();
  const ref = useRef<HTMLDivElement | null>(null);

  const [topRedHeight, setRedTopHeight] = useState(0);
  const refTrackOne = useRef<HTMLDivElement | null>(null);
  const entryTrackOne = useIntersectionObserver(refTrackOne, {
    threshold: 0.2,
  });

  // console.log("entryTrackOne", entryTrackOne);
  const isTrackOneVisible = !!entryTrackOne?.isIntersecting;
  const [cp, setCp] = useState(0);
  const [offsetTopRefOne, setOffsetTopRefOne] = useState(0);
  useEffect(() => {
    if (isMounted() && refTrackOne.current && offsetTopRefOne === 0) {
      setTimeout(() => {
        if (refTrackOne.current) {
          setOffsetTopRefOne(refTrackOne.current.getBoundingClientRect().top);
        }
      }, 1000);
    }
  }, [refTrackOne, isMounted]);
  useScrollPosition(
    ({ currPos }) => {
      setCp(Math.abs(currPos.y));
    },
    [isTrackOneVisible]
  );
  const [refPercentCrossed, setRefPercentCrossed] = useState(0);
  useEffect(() => {
    if (refTrackOne.current && entryTrackOne) {
      setRefPercentCrossed(
        calculatePercentCrossed(
          offsetTopRefOne,
          cp,
          entryTrackOne.rootBounds ? entryTrackOne.rootBounds.height : 0,
          refTrackOne.current?.getBoundingClientRect().height
        )
      );
    }
  }, [cp, offsetTopRefOne, refTrackOne, entryTrackOne]);

  function calculatePercentCrossed(
    distanceFromTop: number,
    scrollPosition: number,
    distance: number,
    heightOfElement: number
  ) {
    if (scrollPosition + distance < distanceFromTop) return 0;
    if (scrollPosition + distance >= heightOfElement + distanceFromTop) return 100;
    const percentCrossed = ((scrollPosition + distance - distanceFromTop) / heightOfElement) * 100 - 10;
    return percentCrossed < 0 ? 0 : percentCrossed;
  }
  return {
    sectionRef,
    isMounted: isMounted(),
    width,
    topRedHeight,
    cp,
    ref,
    refTrackOne,
    refPercentCrossed,
    offsetTopRefOne,
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
`;

const Header = styled.div`
  padding-top: 48px;
  font: var(--header-lg);
  color: var(--grey-100);
  max-width: 1020px;
  @media ${QUERIES.tb.andDown} {
    margin: 0 16px;
  }
  @media ${QUERIES.tb.andDown} {
    font: var(--header-sm);
  }
`;

const AnimationWrapper = styled.div`
  position: relative;
  margin-top: 31px 0 0;
  @media ${QUERIES.tb.andDown} {
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
`;

const AnimationBody = styled.div`
  margin-top: 24px;
  color: var(--grey-100);
  font: var(--header-md);
  max-width: 465px;
  @media ${QUERIES.lg.andDown} {
    max-width: 640px;
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
  flex-basis: 66%;
`;
