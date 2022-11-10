import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Wrapper as BaseWrapper, Title as BaseTitle } from "components/Widgets";
import { useIntersectionObserver, useIsMounted } from "hooks";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize } from "hooks";
import Image from "next/image";
import useTrackRefCrossed from "./useTrackRefCrossed";

interface Props {
  heightFromTop: number;
  currentPosition: number;
}
const HowItWorks: React.FC<Props> = ({ currentPosition }) => {
  const {
    sectionRef,
    isMounted,
    width,
    refTrackOne,
    refTrackTwo,
    refTrackThree,
    refTrackFour,
    refOnePercentCrossed,
    refTwoPercentCrossed,
    refThreePercentCrossed,
    refFourPercentCrossed,
  } = useHowItWorks(currentPosition);
  return (
    <Section id="howItWorks" ref={isMounted ? sectionRef : null}>
      <Wrapper>
        <Title>How it works</Title>
        <Header>The Optimistic Oracle verifies data in stages </Header>
        <IntersectionWrapper>
          {width > BREAKPOINTS.lg && (
            <TrackWrapper>
              <TrackItem tracked={refOnePercentCrossed > 0}>01</TrackItem>
              <RedSeperator height={refOnePercentCrossed} />
              <Seperator height={100 - refOnePercentCrossed} />
              <TrackItem tracked={refTwoPercentCrossed > 0}>02</TrackItem>
              <RedSeperator height={refTwoPercentCrossed} />
              <Seperator height={100 - refTwoPercentCrossed} />
              <TrackItem tracked={refThreePercentCrossed > 0}>03</TrackItem>
              <RedSeperator height={refThreePercentCrossed} />
              <Seperator height={100 - refThreePercentCrossed} />
              <TrackItem tracked={refFourPercentCrossed > 0}>04</TrackItem>
              <RedSeperator height={refFourPercentCrossed} />
              <Seperator height={100 - refFourPercentCrossed} />
            </TrackWrapper>
          )}
          <TopWrapper>
            <AnimationRow>
              <AnimationTextBlock>
                <AnimationHeader>Statement</AnimationHeader>
                <AnimationBody>A statement is proposed as true</AnimationBody>
                <AnimationSubBody>
                  A natural-language statement is submitted along with a bond. The bond acts as a bounty for anyone to
                  dispute it if they have evidence to the contrary.
                </AnimationSubBody>
              </AnimationTextBlock>
              <IllustrationColumn ref={refTrackOne}>
                <TrackAndIllustrationRow>
                  {width <= BREAKPOINTS.lg && (
                    <TrackWrapper>
                      <TrackItem tracked={refOnePercentCrossed > 0}>01</TrackItem>
                      <RedSeperator height={refOnePercentCrossed} />
                      <Seperator height={100 - refOnePercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <Image
                      height="100%"
                      width="100%"
                      layout="responsive"
                      objectFit="contain"
                      src="/assets/scene-one.svg"
                      alt="logo"
                    />
                  </IllustrationWrapper>
                </TrackAndIllustrationRow>
              </IllustrationColumn>
            </AnimationRow>
          </TopWrapper>
          <AnimationWrapper>
            <AnimationRow>
              <AnimationTextBlock>
                <AnimationHeader>Challenge period</AnimationHeader>
                <AnimationBody>Most statements goes undisputed</AnimationBody>
                <AnimationSubBody>
                  Anyone can propose an answer to a data request, and it is accepted as true if it is not disputed
                  during the challenge period.
                </AnimationSubBody>
              </AnimationTextBlock>
              <IllustrationColumn ref={refTrackTwo}>
                <TrackAndIllustrationRow>
                  {width <= BREAKPOINTS.lg && (
                    <TrackWrapper>
                      <TrackItem tracked={refTwoPercentCrossed > 0}>02</TrackItem>
                      <RedSeperator height={refTwoPercentCrossed} />
                      <Seperator height={100 - refTwoPercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <Image
                      height="100%"
                      width="100%"
                      layout="responsive"
                      objectFit="contain"
                      src="/assets/scene-two.svg"
                      alt="logo"
                    />
                  </IllustrationWrapper>
                </TrackAndIllustrationRow>
              </IllustrationColumn>
            </AnimationRow>
          </AnimationWrapper>
          <AnimationWrapper>
            <AnimationRow>
              <AnimationTextBlock>
                <AnimationHeader>Dispute</AnimationHeader>
                <AnimationBody>Anyone can dispute a statement</AnimationBody>
                <AnimationSubBody>
                  Each statement submitted for validation is an opportunity for anyone to earn a reward by disputing it
                  successfully. As the game theory would predict, disputes are rare in practice because the incentives
                  are always to be honest. That makes the OO “optimistic”.
                </AnimationSubBody>
              </AnimationTextBlock>
              <IllustrationColumn ref={refTrackThree}>
                <TrackAndIllustrationRow>
                  {width <= BREAKPOINTS.lg && (
                    <TrackWrapper>
                      <TrackItem tracked={refThreePercentCrossed > 0}>03</TrackItem>
                      <RedSeperator height={refThreePercentCrossed} />
                      <Seperator height={100 - refThreePercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <Image
                      height="100%"
                      width="100%"
                      layout="responsive"
                      objectFit="contain"
                      src="/assets/scene-one.svg"
                      alt="logo"
                    />
                  </IllustrationWrapper>
                </TrackAndIllustrationRow>
              </IllustrationColumn>
            </AnimationRow>
          </AnimationWrapper>
          <AnimationWrapper>
            <AnimationRow>
              <AnimationTextBlock>
                <AnimationHeader>Voting</AnimationHeader>
                <AnimationBody>Tokenholders vote on disputes and earn rewards</AnimationBody>
                <AnimationSubBody>
                  The UMA token provides economic guarantees to the Optimistic Oracle. The community of tokenholders
                  provide the human component, as voters, for the OO&apos;s final resolution on disputes or queries.
                  Those who vote with the majority earn rewards.
                </AnimationSubBody>
              </AnimationTextBlock>
              <IllustrationColumn ref={refTrackFour}>
                <TrackAndIllustrationRow>
                  {width <= BREAKPOINTS.lg && (
                    <TrackWrapper>
                      <TrackItem tracked={refFourPercentCrossed > 0}>04</TrackItem>
                      <RedSeperator height={refFourPercentCrossed} />
                      <Seperator height={100 - refFourPercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <Image
                      height="100%"
                      width="100%"
                      layout="responsive"
                      objectFit="contain"
                      src="/assets/scene-two.svg"
                      alt="logo"
                    />
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

  const [offsetTrackRefOne, setOffsetTrackRefOne] = useState(0);
  const refTrackOne = useRef<HTMLDivElement | null>(null);
  const entryTrackOne = useIntersectionObserver(refTrackOne, {
    threshold: width > BREAKPOINTS.lg ? 1 : 0.9,
    rootMargin: width > BREAKPOINTS.lg ? "-200px 0px 0px 0px" : "0px",
  });

  const refOnePercentCrossed = useTrackRefCrossed(refTrackOne, entryTrackOne, offsetTrackRefOne, currentPosition);

  useEffect(() => {
    if (isMounted() && refTrackOne.current && offsetTrackRefOne === 0) {
      setTimeout(() => {
        if (refTrackOne.current) {
          setOffsetTrackRefOne(refTrackOne.current.getBoundingClientRect().top);
        }
      }, 1000);
    }
  }, [refTrackOne, isMounted]);

  const [offsetTrackRefTwo, setOffsetTrackRefTwo] = useState(0);
  const refTrackTwo = useRef<HTMLDivElement | null>(null);
  const entryTrackTwo = useIntersectionObserver(refTrackTwo, {
    threshold: width > BREAKPOINTS.lg ? 1 : 0.9,
    rootMargin: width > BREAKPOINTS.lg ? "-225px 0px 0px 0px" : "0px",
  });

  const refTwoPercentCrossed = useTrackRefCrossed(refTrackTwo, entryTrackTwo, offsetTrackRefTwo, currentPosition);
  useEffect(() => {
    if (isMounted() && refTrackTwo.current && offsetTrackRefTwo === 0) {
      setTimeout(() => {
        if (refTrackTwo.current) {
          setOffsetTrackRefTwo(refTrackTwo.current.getBoundingClientRect().top);
        }
      }, 1000);
    }
  }, [refTrackTwo, isMounted]);

  const [offsetTrackRefThree, setOffsetTrackRefThree] = useState(0);
  const refTrackThree = useRef<HTMLDivElement | null>(null);
  const entryTrackThree = useIntersectionObserver(refTrackTwo, {
    threshold: width > BREAKPOINTS.lg ? 1 : 0.9,
    rootMargin: width > BREAKPOINTS.lg ? "-225px 0px 0px 0px" : "0px",
  });

  const refThreePercentCrossed = useTrackRefCrossed(
    refTrackThree,
    entryTrackThree,
    offsetTrackRefThree,
    currentPosition
  );
  useEffect(() => {
    if (isMounted() && refTrackThree.current && offsetTrackRefThree === 0) {
      setTimeout(() => {
        if (refTrackThree.current) {
          setOffsetTrackRefThree(refTrackThree.current.getBoundingClientRect().top);
        }
      }, 1000);
    }
  }, [refTrackTwo, isMounted]);

  const [offsetTrackRefFour, setOffsetTrackRefFour] = useState(0);
  const refTrackFour = useRef<HTMLDivElement | null>(null);
  const entryTrackFour = useIntersectionObserver(refTrackTwo, {
    threshold: width > BREAKPOINTS.lg ? 1 : 0.9,
    rootMargin: width > BREAKPOINTS.lg ? "-225px 0px 0px 0px" : "0px",
  });

  const refFourPercentCrossed = useTrackRefCrossed(refTrackFour, entryTrackFour, offsetTrackRefFour, currentPosition);
  useEffect(() => {
    if (isMounted() && refTrackFour.current && offsetTrackRefFour === 0) {
      setTimeout(() => {
        if (refTrackFour.current) {
          setOffsetTrackRefFour(refTrackFour.current.getBoundingClientRect().top);
        }
      }, 1000);
    }
  }, [refTrackTwo, isMounted]);

  return {
    sectionRef,
    isMounted: isMounted(),
    width,
    refTrackOne,
    refTrackTwo,
    refTrackThree,
    refTrackFour,
    refOnePercentCrossed,
    refTwoPercentCrossed,
    refThreePercentCrossed,
    refFourPercentCrossed,
  };
}

const Section = styled.section`
  width: 100%;
  background: linear-gradient(180deg, var(--white) 0%, var(--white-200) 100%);
`;

const Wrapper = styled(BaseWrapper)`
  padding-top: 100px;
  padding-bottom: 426px;
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
  margin: 392px 0 0;
  @media ${QUERIES.lg.andDown} {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const TopWrapper = styled(AnimationWrapper)`
  margin-bottom: 270px;
  margin-top: 0;
  @media ${QUERIES.lg.andDown} {
    margin-top: 128px;
  }
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
  letter-spacing: -0.01em;

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
  padding-top: 231px;
`;

const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;
  position: absolute;
  top: 200px;
  left: -100px;
  height: 115%;
  @media ${QUERIES.lg.andDown} {
    position: relative;
    top: 0;
    left: 0;
    margin-left: auto;
    height: inherit;
    margin-top: -40px;
  }
  @media ${QUERIES.tb.andDown} {
    height: inherit;
    margin-top: 0px;
    margin-left: 0;
  }
`;

interface TrackProps {
  tracked?: boolean;
}
const TrackItem = styled.div<TrackProps>`
  flex: 0 0 48px;
  z-index: 5;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid transparent;
  border-color: ${(p) => (p.tracked ? "transparent" : "var(--grey-500)")};
  background: ${(p) => (p.tracked ? "var(--red)" : "var(--grey-800)")};
  color: ${(p) => (p.tracked ? "var(--white)" : "var(--grey-500)")};
  font: var(--body-sm);
  letter-spacing: 0.09em;
`;

interface ISeperator {
  height: number;
}
const Seperator = styled.div<ISeperator>`
  width: 1px;
  margin: 0 12px;
  background: var(--grey-500); // #B0AFB3
  height: ${({ height }) => 672 * (height / 100)}px;
  @media ${QUERIES.lg.andDown} {
    height: ${({ height }) => height}%;
  }
`;

const RedSeperator = styled(Seperator)`
  background: var(--red);
`;

const TrackAndIllustrationRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
  justify-content: space-between;
`;

const IllustrationWrapper = styled.div`
  width: 562px;
  height: inherit;
  position: absolute;
  right: 0;
  top: 0;
  @media ${QUERIES.lg.andDown} {
    position: relative;
    width: 70%;
    height: inherit;
  }
`;
