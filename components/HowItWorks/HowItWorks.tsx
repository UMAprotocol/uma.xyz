import { Title as BaseTitle, Wrapper as BaseWrapper } from "components/Widgets";
import { grey500, grey800, laptop, laptopAndUnder, mobileAndUnder, red, tabletAndUnder, white } from "constant";
import { useIntersectionObserver, useIsMounted, useTrackRefCrossed, useWindowSize } from "hooks";
import sceneOne from "public/assets/lottie/scene-1.json";
import sceneTwo from "public/assets/lottie/scene-2.json";
import sceneThree from "public/assets/lottie/scene-3.json";
import sceneFour from "public/assets/lottie/scene-4.json";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import styled, { CSSProperties } from "styled-components";

interface Props {
  currentPosition: number;
}
export function HowItWorks({ currentPosition }: Props) {
  const {
    sectionRef,
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

  function makeTrackStyle(percentCrossed: number) {
    const isIntersecting = percentCrossed > 0;

    return {
      "--border-color": isIntersecting ? "transparent" : grey500,
      "--background": isIntersecting ? red : grey800,
      "--color": isIntersecting ? white : grey500,
    } as CSSProperties;
  }

  function makeSeparatorStyle(heightPercent: number, additionalMaxHeight = 0) {
    // todo: magic number
    const separatorHeight = 680;
    const height = separatorHeight + additionalMaxHeight;

    return {
      "--height": `${(heightPercent / 100) * height}px`,
      "--height-percent": `${heightPercent}%`,
    } as CSSProperties;
  }

  return (
    <Section
      id="how-it-works"
      ref={sectionRef}
      style={
        {
          "--visibility": showHeader ? "visible" : "hidden",
        } as CSSProperties
      }
    >
      <Wrapper>
        <HeaderWrapper ref={headerWrapperRef}>
          <Title>How it works</Title>
          <Header>The Optimistic Oracle verifies data in stages</Header>
        </HeaderWrapper>
        <IntersectionWrapper>
          <TrackWrapper>
            <TrackItem style={makeTrackStyle(refOnePercentCrossed)}>01</TrackItem>
            <RedSeparator style={makeSeparatorStyle(refOnePercentCrossed)} />
            <Separator style={makeSeparatorStyle(100 - refOnePercentCrossed)} />
            <TrackItem style={makeTrackStyle(refTwoPercentCrossed)}>02</TrackItem>
            <RedSeparator style={makeSeparatorStyle(refTwoPercentCrossed, -36)} />
            <Separator style={makeSeparatorStyle(100 - refTwoPercentCrossed, -36)} />
            <TrackItem style={makeTrackStyle(refThreePercentCrossed)}>03</TrackItem>
            <RedSeparator style={makeSeparatorStyle(refThreePercentCrossed, 124)} />
            <Separator style={makeSeparatorStyle(100 - refThreePercentCrossed, 124)} />
            <TrackItem style={makeTrackStyle(refFourPercentCrossed)}>04</TrackItem>
            <RedSeparator style={makeSeparatorStyle(refFourPercentCrossed, -50)} />
            <Separator style={makeSeparatorStyle(100 - refFourPercentCrossed, -50)} />
          </TrackWrapper>
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
                  <TrackWrapper>
                    <TrackItem style={makeTrackStyle(refOnePercentCrossed)}>01</TrackItem>
                    <RedSeparator style={makeSeparatorStyle(refOnePercentCrossed)} />
                    <Separator style={makeSeparatorStyle(100 - refOnePercentCrossed)} />
                  </TrackWrapper>
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
                  <TrackWrapper>
                    <TrackItem style={makeTrackStyle(refTwoPercentCrossed)}>02</TrackItem>
                    <RedSeparator style={makeSeparatorStyle(refTwoPercentCrossed)} />
                    <Separator style={makeSeparatorStyle(100 - refTwoPercentCrossed)} />
                  </TrackWrapper>
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
                  <TrackWrapper>
                    <TrackItem style={makeTrackStyle(refThreePercentCrossed)}>03</TrackItem>
                    <RedSeparator style={makeSeparatorStyle(refThreePercentCrossed)} />
                    <Separator style={makeSeparatorStyle(100 - refThreePercentCrossed)} />
                  </TrackWrapper>
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
                  <TrackWrapper>
                    <TrackItem style={makeTrackStyle(refFourPercentCrossed)}>04</TrackItem>
                    <RedSeparator style={makeSeparatorStyle(refFourPercentCrossed)} />
                    <Separator style={makeSeparatorStyle(100 - refFourPercentCrossed)} />
                  </TrackWrapper>
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
}

function useHowItWorks(currentPosition: number) {
  const isMounted = useIsMounted();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();

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

  const [offsetTrackRefOne, setOffsetTrackRefOne] = useState(0);
  const refTrackOne = useRef<HTMLDivElement | null>(null);
  const entryTrackOne = useIntersectionObserver(refTrackOne, {
    threshold: 1,
    rootMargin: width > laptop ? "-250px 0px 0px 0px" : "0px",
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
    rootMargin: width > laptop ? "-250px 0px 0px 0px" : "0px",
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
    rootMargin: width > laptop ? "-250px 0px 0px 0px" : "0px",
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
    rootMargin: width > laptop ? "-250px 0px 0px 0px" : "0px",
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
  @media ${laptopAndUnder} {
    padding-bottom: 200px;
  }
  @media ${tabletAndUnder} {
    padding-bottom: 100px;
  }
  @media ${mobileAndUnder} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const HeaderWrapper = styled.div``;

const Title = styled(BaseTitle)`
  border-bottom: 1px solid var(--grey-600);
  padding-bottom: 16px;
  visibility: var(--visibility);
  @media ${laptopAndUnder} {
    margin: 0 16px;
  }
`;

const Header = styled.div`
  padding-top: 48px;
  font: var(--header-lg);
  color: var(--grey-100);
  // todo: magic number
  max-width: 1020px;
  @media ${laptopAndUnder} {
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
  @media ${laptopAndUnder} {
    margin-top: 96px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const TopWrapper = styled(AnimationWrapper)`
  margin-bottom: 270px;
  margin-top: 0;
  @media ${laptopAndUnder} {
    margin-top: 128px;
    margin-bottom: 0;
  }
  @media ${mobileAndUnder} {
    margin-top: 24px;
  }
`;

const AnimationRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  @media ${laptopAndUnder} {
    flex-direction: column;
  }
  @media ${tabletAndUnder} {
    gap: 58px;
  }
  @media ${mobileAndUnder} {
    flex-direction: column-reverse;
  }
`;

const AnimationTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  @media ${laptopAndUnder} {
    max-width: 100%;
  }
  @media ${tabletAndUnder} {
  }
`;

const AnimationHeader = styled.div`
  color: var(--red);
  font: var(--body-sm);
  text-transform: uppercase;
  @media ${laptopAndUnder} {
    margin: 0 16px;
  }
`;

const AnimationBody = styled.div`
  margin-top: 24px;
  color: var(--grey-100);
  font: var(--header-md);
  max-width: 465px;
  letter-spacing: -0.01em;

  @media ${laptopAndUnder} {
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
  @media ${laptopAndUnder} {
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
  @media ${laptopAndUnder} {
    padding-top: 0;
  }
`;

const TrackWrapper = styled.div`
  display: none;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;
  position: absolute;
  top: 200px;
  left: -100px;
  height: 120%;
  z-index: 0;
  @media ${laptopAndUnder} {
    display: flex;
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
  @media ${mobileAndUnder} {
    display: none;
  }
`;

const TrackItem = styled.div`
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
  border-color: var(--border-color);
  background: var(--background);
  color: var(--color);
  font: var(--body-sm);
  letter-spacing: 0.09em;
`;

const Separator = styled.div`
  width: 1px;
  margin: 0 12px;
  background: var(--grey-500);
  height: var(--height);

  @media ${laptopAndUnder} {
    height: var(--height-percent);
  }
`;

const RedSeparator = styled(Separator)`
  background: var(--red);
`;

const TrackAndIllustrationRow = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: space-between;
  @media ${laptopAndUnder} {
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

  @media ${laptopAndUnder} {
    position: relative;
    width: 70%;
    height: inherit;
  }
  @media ${mobileAndUnder} {
    width: 100%;
  }
`;
