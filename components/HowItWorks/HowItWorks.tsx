import { Title as BaseTitle, Wrapper as BaseWrapper } from "components/Widgets";
import { large, largeAndUnder, medium, mediumAndUnder, tablet, tabletAndUnder } from "constant/breakpoints";
import { useIntersectionObserver, useIsMounted, useWindowSize } from "hooks";
import sceneOne from "public/assets/lottie/scene-1.json";
import sceneTwo from "public/assets/lottie/scene-2.json";
import sceneThree from "public/assets/lottie/scene-3.json";
import sceneFour from "public/assets/lottie/scene-4.json";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import styled, { keyframes } from "styled-components";
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
    showHeader,
    headerWrapperRef,
    refTrackOne,
    refTrackTwo,
    refTrackThree,
    refTrackFour,
    refOnePercentCrossed,
    refTwoPercentCrossed,
    refThreePercentCrossed,
    refFourPercentCrossed,
    startSceneOne,
    startSceneTwo,
    startSceneThree,
    startSceneFour,
  } = useHowItWorks(currentPosition);
  return (
    <Section id="howItWorks" ref={isMounted ? sectionRef : null}>
      <Wrapper>
        <HeaderWrapper show={showHeader} ref={isMounted ? headerWrapperRef : null}>
          <Title show={showHeader}>How it works</Title>
          <Header show={showHeader}>
            {width > large && (
              <>
                <div>The Optimistic Oracle</div> <div>verifies data in stages</div>
              </>
            )}
            {width <= large && width > tablet && (
              <>
                <div>The Optimistic</div> <div>Oracle verifies</div> <div>data in stages</div>
              </>
            )}
          </Header>
        </HeaderWrapper>
        <IntersectionWrapper>
          {width > large && (
            <TrackWrapper>
              <TrackItem tracked={refOnePercentCrossed > 0}>01</TrackItem>
              <RedSeperator heightPercent={refOnePercentCrossed} />
              <Seperator heightPercent={100 - refOnePercentCrossed} />
              <TrackItem tracked={refTwoPercentCrossed > 0}>02</TrackItem>
              <RedSeperator additionalMaxHeight={-36} heightPercent={refTwoPercentCrossed} />
              <Seperator additionalMaxHeight={-36} heightPercent={100 - refTwoPercentCrossed} />
              <TrackItem tracked={refThreePercentCrossed > 0}>03</TrackItem>
              <RedSeperator additionalMaxHeight={124} heightPercent={refThreePercentCrossed} />
              <Seperator additionalMaxHeight={124} heightPercent={100 - refThreePercentCrossed} />
              <TrackItem tracked={refFourPercentCrossed > 0}>04</TrackItem>
              <RedSeperator additionalMaxHeight={-50} heightPercent={refFourPercentCrossed} />
              <Seperator additionalMaxHeight={-50} heightPercent={100 - refFourPercentCrossed} />
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
                  {width <= large && width > medium && (
                    <TrackWrapper>
                      <TrackItem tracked={refOnePercentCrossed > 0}>01</TrackItem>
                      <RedSeperator heightPercent={refOnePercentCrossed} />
                      <Seperator heightPercent={100 - refOnePercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <Lottie
                      isStopped={!startSceneOne}
                      options={{
                        loop: true,
                        autoplay: false,
                        animationData: sceneOne,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      }}
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
                  {width <= large && width > medium && (
                    <TrackWrapper>
                      <TrackItem tracked={refTwoPercentCrossed > 0}>02</TrackItem>
                      <RedSeperator heightPercent={refTwoPercentCrossed} />
                      <Seperator heightPercent={100 - refTwoPercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <Lottie
                      isStopped={!startSceneTwo}
                      options={{
                        loop: true,
                        autoplay: false,
                        animationData: sceneTwo,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      }}
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
                  {width <= large && width > medium && (
                    <TrackWrapper>
                      <TrackItem tracked={refThreePercentCrossed > 0}>03</TrackItem>
                      <RedSeperator heightPercent={refThreePercentCrossed} />
                      <Seperator heightPercent={100 - refThreePercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <Lottie
                      isStopped={!startSceneThree}
                      options={{
                        loop: true,
                        autoplay: false,
                        animationData: sceneThree,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                          progressiveLoad: true,
                        },
                      }}
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
                  {width <= large && width > medium && (
                    <TrackWrapper>
                      <TrackItem tracked={refFourPercentCrossed > 0}>04</TrackItem>
                      <RedSeperator heightPercent={refFourPercentCrossed} />
                      <Seperator heightPercent={100 - refFourPercentCrossed} />
                    </TrackWrapper>
                  )}
                  <IllustrationWrapper>
                    <Lottie
                      isStopped={!startSceneFour}
                      options={{
                        loop: true,
                        autoplay: false,
                        animationData: sceneFour,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      }}
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

  const headerWrapperRef = useRef<HTMLDivElement | null>(null);
  const headerWrapperEntry = useIntersectionObserver(headerWrapperRef, {
    threshold: 1,
  });
  const [showHeader, setShowHeader] = useState(false);
  const hasEnteredSection = !!headerWrapperEntry?.isIntersecting;
  useEffect(() => {
    if (hasEnteredSection && !showHeader) {
      headerWrapperEntry.target?.classList.add("fade-in");
      setShowHeader(true);
    }
  }, [hasEnteredSection]);

  const { width } = useWindowSize();

  const [offsetTrackRefOne, setOffsetTrackRefOne] = useState(0);
  const refTrackOne = useRef<HTMLDivElement | null>(null);
  const entryTrackOne = useIntersectionObserver(refTrackOne, {
    threshold: 1,
    rootMargin: width > large ? "-250px 0px 0px 0px" : "0px",
  });

  const [startSceneOne, setStartSceneOne] = useState(false);
  useEffect(() => {
    if (entryTrackOne?.isIntersecting && !startSceneOne) {
      setStartSceneOne(true);
    }
  }, [startSceneOne, entryTrackOne]);

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
    threshold: 1,
    rootMargin: width > large ? "-250px 0px 0px 0px" : "0px",
  });

  const [startSceneTwo, setStartSceneTwo] = useState(false);
  useEffect(() => {
    if (entryTrackTwo?.isIntersecting && !startSceneTwo) {
      setStartSceneTwo(true);
    }
  }, [startSceneTwo, entryTrackTwo]);

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
    threshold: 1,
    rootMargin: width > large ? "-250px 0px 0px 0px" : "0px",
  });

  const [startSceneThree, setStartSceneThree] = useState(false);
  useEffect(() => {
    if (entryTrackThree?.isIntersecting && !startSceneThree) {
      setStartSceneThree(true);
    }
  }, [startSceneThree, entryTrackThree]);

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
    threshold: 1,
    rootMargin: width > large ? "-250px 0px 0px 0px" : "0px",
  });

  const [startSceneFour, setStartSceneFour] = useState(false);
  useEffect(() => {
    if (entryTrackFour?.isIntersecting && !startSceneFour) {
      setStartSceneFour(true);
    }
  }, [startSceneFour, entryTrackFour]);

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
    showHeader,
    headerWrapperRef,
    startSceneOne,
    startSceneTwo,
    startSceneThree,
    startSceneFour,
  };
}

const Section = styled.section`
  width: 100%;
  background: linear-gradient(180deg, var(--white) 0%, var(--white-200) 100%);
`;

const Wrapper = styled(BaseWrapper)`
  padding-top: 100px;
  padding-bottom: 426px;
  padding-left: 32px;
  padding-right: 32px;
  @media ${largeAndUnder} {
    padding-bottom: 200px;
  }
  @media ${tabletAndUnder} {
    padding-bottom: 100px;
  }
  @media ${mediumAndUnder} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

interface IShowHeader {
  show: boolean;
}
const titleReveal = keyframes`
  0% {opacity: 0; transform: translateY(-20px);}
  100% {opacity: 1; transform: translateY(0px);}
`;

const topHeaderReveal = keyframes`
  0% {opacity: 0; transform: rotate(2deg);}
  50% {opacity:.5; transform: rotate(1deg);}
  100% {opacity: 1; transform: rotate(0deg);}
  `;

const bottomHeaderReveal = keyframes`
  0% {opacity: 0; transform: rotate(-2deg);}
  50% {opacity: .5; transform: rotate(-1deg);}
  100% {opacity: 1; transform: rotate(0deg);}
`;

const HeaderWrapper = styled.div<IShowHeader>`
  &.fade-in {
    div:first-of-type {
      animation: ${titleReveal} 1.25s ease-in-out;
    }
    div:nth-of-type(2) {
      div:first-of-type {
        animation: ${topHeaderReveal} 1.25s linear;
      }
      div:nth-of-type(2),
      div:nth-of-type(3) {
        animation: ${bottomHeaderReveal} 1.25s linear;
      }
    }
  }
`;
const Title = styled(BaseTitle)<IShowHeader>`
  border-bottom: 1px solid var(--grey-600);
  padding-bottom: 16px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  @media ${largeAndUnder} {
    margin: 0 16px;
  }
`;

const Header = styled.div<IShowHeader>`
  padding-top: 48px;
  font: var(--header-lg);
  color: var(--grey-100);
  max-width: 1020px;
  div {
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    opacity: 1;
    &:first-of-type {
      margin-bottom: 24px;
    }
    &:nth-of-type(2) {
      @media ${largeAndUnder} {
        margin-bottom: 24px;
      }
    }
  }
  @media ${largeAndUnder} {
    max-width: 720px;
    margin-left: 16px;
    margin-right: 16px;
  }
  @media ${tabletAndUnder} {
    font: var(--header-sm);
  }
`;

const AnimationWrapper = styled.div`
  position: relative;
  margin: 392px 0 0;
  @media ${largeAndUnder} {
    margin-top: 96px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const TopWrapper = styled(AnimationWrapper)`
  margin-bottom: 270px;
  margin-top: 0;
  @media ${largeAndUnder} {
    margin-top: 128px;
    margin-bottom: 0;
  }
  @media ${mediumAndUnder} {
    margin-top: 24px;
  }
`;

const AnimationRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  @media ${largeAndUnder} {
    flex-direction: column;
  }
  @media ${tabletAndUnder} {
    gap: 58px;
  }
  @media ${mediumAndUnder} {
    flex-direction: column-reverse;
  }
`;

const AnimationTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  @media ${largeAndUnder} {
    max-width: 100%;
  }
  @media ${tabletAndUnder} {
  }
`;

const AnimationHeader = styled.div`
  color: var(--red);
  font: var(--body-sm);
  text-transform: uppercase;
  @media ${largeAndUnder} {
    margin: 0 16px;
  }
`;

const AnimationBody = styled.div`
  margin-top: 24px;
  color: var(--grey-100);
  font: var(--header-md);
  max-width: 465px;
  letter-spacing: -0.01em;

  @media ${largeAndUnder} {
    max-width: 640px;
    margin-left: 16px;
    margin-right: 16px;
  }
  @media ${tabletAndUnder} {
    font: var(--header-xs);
    max-width: 100%;
  }
`;

const AnimationSubBody = styled.div`
  margin-top: 24px;
  color: var(--grey-100);
  font: var(--body-lg);
  max-width: 367px;
  @media ${largeAndUnder} {
    max-width: 640px;
    margin-left: 16px;
    margin-right: 16px;
  }
  @media ${tabletAndUnder} {
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
  @media ${largeAndUnder} {
    padding-top: 0;
  }
`;

const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;
  position: absolute;
  top: 200px;
  left: -100px;
  height: 120%;
  z-index: 0;
  @media ${largeAndUnder} {
    position: relative;
    top: 0;
    left: 0;
    margin-left: auto;
    height: inherit;
    margin-top: 0;
  }
  @media ${tabletAndUnder} {
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
  heightPercent: number;
  additionalMaxHeight?: number;
}

const SEPERATOR_HEIGHT = 680;
const Seperator = styled.div<ISeperator>`
  width: 1px;
  margin: 0 12px;
  background: var(--grey-500);
  height: ${({ heightPercent, additionalMaxHeight }) => {
    const maxHeight = additionalMaxHeight ? SEPERATOR_HEIGHT + additionalMaxHeight : SEPERATOR_HEIGHT;
    return `${maxHeight * (heightPercent / 100)}px`;
  }};
  @media ${largeAndUnder} {
    height: ${({ heightPercent }) => heightPercent}%;
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
  @media ${largeAndUnder} {
    gap: 48px;
  }
`;

const IllustrationWrapper = styled.div`
  width: 562px;
  height: inherit;
  position: absolute;
  right: 0;
  top: 0;
  border: 1px solid var(--grey-700);

  @media ${largeAndUnder} {
    position: relative;
    width: 70%;
    height: inherit;
  }
  @media ${mediumAndUnder} {
    width: 100%;
  }
`;
