import { useRef, useState } from "react";
import styled from "styled-components";

import UpRightArrow from "public/assets/up-right-arrow.svg";
import { Title as BaseTitle, Header as BaseHeader } from "components/Widgets";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize, useIntersectionObserver } from "hooks";
import Image from "next/image";
import Lottie from "react-lottie";
import earn from "public/assets/lottie/earn.json";
import vote from "public/assets/lottie/vote.json";
import stake from "public/assets/lottie/stake.json";

interface Props {
  apy: string;
}

// If API errors, show a default guess APY.
export const DEFAULT_APY = process.env.NEXT_PUBLIC_DEFAULT_APY || "30.1";
const VoteParticipation: React.FC<Props> = ({ apy }) => {
  const {
    width,
    earnRef,
    voteRef,
    stakeRef,
    sectionRef,
    isIntersectingEarn,
    isIntersectingStake,
    isIntersectingVote,
    isIntersectingSection,
  } = useVoteParticipation();
  const [playEarn, setPlayEarn] = useState(false);
  const [playVote, setPlayVote] = useState(false);
  const [playStake, setPlayStake] = useState(false);

  return (
    <Section ref={sectionRef} id="voter">
      {width <= BREAKPOINTS.tb && (
        <MobileVoterRow isIntersecting={isIntersectingSection}>
          <MobileVoterAppLinkBlock>
            <VoterAppLink href="https://vote.umaproject.org" target="_blank" rel="noreferrer">
              Link to voter app
              <div>
                <UpRightArrow />
              </div>
            </VoterAppLink>
          </MobileVoterAppLinkBlock>
        </MobileVoterRow>
      )}
      <Wrapper>
        <Title>
          Participate as <span>Voter</span>
        </Title>
        <HeaderWrapper>
          <Header>
            Stake, vote &amp; earn {width >= BREAKPOINTS.tb ? <br /> : null} up to {apy || DEFAULT_APY}% APY
          </Header>
        </HeaderWrapper>

        <ImageBlockRow>
          <ImageBlockWrapper
            onMouseEnter={() => setPlayStake(true)}
            onMouseLeave={() => setPlayStake(false)}
            ref={stakeRef}
            width={width}
            isIntersecting={isIntersectingStake}
          >
            <ImageBlock>
              <ImageWrapper width={width} isIntersecting={isIntersectingStake}>
                <Lottie
                  isStopped={!playStake}
                  options={{
                    loop: false,
                    autoplay: false,
                    animationData: stake,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </ImageWrapper>
              <ImageTextWrapper>
                <ImageTitle width={width} isIntersecting={isIntersectingStake}>
                  Stake
                </ImageTitle>
                <ImageText>Stake your $UMA to help secure UMA’s Optimistic Oracle. </ImageText>
              </ImageTextWrapper>
            </ImageBlock>
          </ImageBlockWrapper>
          <ImageBlockWrapper
            onMouseEnter={() => setPlayVote(true)}
            onMouseLeave={() => setPlayVote(false)}
            ref={voteRef}
            width={width}
            isIntersecting={isIntersectingVote}
          >
            <ImageBlock>
              <ImageWrapper width={width} isIntersecting={isIntersectingVote}>
                <Lottie
                  isStopped={!playVote}
                  options={{
                    loop: false,
                    autoplay: false,
                    animationData: vote,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </ImageWrapper>
              <ImageTextWrapper>
                <ImageTitle width={width} isIntersecting={isIntersectingVote}>
                  Vote
                </ImageTitle>
                <ImageText>Token holders who vote correctly and consistently earn higher APYs. </ImageText>
              </ImageTextWrapper>
            </ImageBlock>
          </ImageBlockWrapper>
          <ImageBlockWrapper
            onMouseEnter={() => setPlayEarn(true)}
            onMouseLeave={() => setPlayEarn(false)}
            ref={earnRef}
            width={width}
            isIntersecting={isIntersectingEarn}
          >
            <ImageBlock>
              <ImageWrapper width={width} isIntersecting={isIntersectingEarn}>
                <Lottie
                  isStopped={!playEarn}
                  options={{
                    loop: false,
                    autoplay: false,
                    animationData: earn,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </ImageWrapper>
              <ImageTextWrapper>
                <ImageTitle width={width} isIntersecting={isIntersectingEarn}>
                  Earn
                </ImageTitle>
                <ImageText>
                  Successful voters will gradually own a higher percentage of the protocol than unsuccessful or inactive
                  voters.{" "}
                </ImageText>
              </ImageTextWrapper>
            </ImageBlock>
          </ImageBlockWrapper>
        </ImageBlockRow>
        <Divider />
        {width > BREAKPOINTS.tb ? (
          <VoterAppLinkRow>
            <VoterAppLinkBlock>
              <VoterAppLink href="https://vote.umaproject.org" target="_blank" rel="noreferrer">
                Link to voter app
                <div>
                  <UpRightArrow />
                </div>
              </VoterAppLink>
            </VoterAppLinkBlock>
          </VoterAppLinkRow>
        ) : null}
      </Wrapper>
    </Section>
  );
};

export default VoteParticipation;

function useVoteParticipation() {
  const stakeRef = useRef<HTMLDivElement | null>(null);
  const voteRef = useRef<HTMLDivElement | null>(null);
  const earnRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const ioStake = useIntersectionObserver(stakeRef, {
    threshold: 1,
    rootMargin: "-400px 0px -100px 0px",
  });
  const ioVote = useIntersectionObserver(voteRef, {
    threshold: 1,
    rootMargin: "-400px 0px -100px 0px",
  });
  const ioEarn = useIntersectionObserver(earnRef, {
    threshold: 1,
    rootMargin: "-400px 0px -100px 0px",
  });

  const ioSection = useIntersectionObserver(sectionRef, {
    threshold: 0.5,
    rootMargin: "-200px 0px -25px 0px",
  });

  const isIntersectingStake = !!ioStake?.isIntersecting;
  const isIntersectingVote = !!ioVote?.isIntersecting;
  const isIntersectingEarn = !!ioEarn?.isIntersecting;
  const isIntersectingSection = !!ioSection?.isIntersecting;
  const { width } = useWindowSize();

  return {
    width,
    earnRef,
    voteRef,
    stakeRef,
    sectionRef,
    isIntersectingStake,
    isIntersectingVote,
    isIntersectingEarn,
    isIntersectingSection,
  };
}

const Section = styled.section`
  background: var(--grey-800);
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  background-color: inherit;
  width: 100%;
  max-width: var(--max-section-width);
  margin: 0 auto;
  padding-top: 85px;
  padding-bottom: 130px;
  @media ${QUERIES.lg.andDown} {
    padding-bottom: 64px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${QUERIES.md.andDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Header = styled(BaseHeader)`
  margin-top: 65px;
  max-width: 921px;
  margin-bottom: 128px;
  @media ${QUERIES.md.andDown} {
    margin: 0 16px;
    max-width: 100%;
    font: var(--header-sm);
  }
`;

const Title = styled(BaseTitle)`
  @media ${QUERIES.lg.andDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  @media ${QUERIES.lg.andDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const ImageBlockRow = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
  justify-content: stretch;
  width: 100%;
  height: 420px;
  svg {
    fill: var(--white);
  }
  @media ${QUERIES.tb.andDown} {
    flex-direction: column;
    align-self: center;
    width: 100%;
    height: 100%;
  }
  @media ${QUERIES.md.andDown} {
    flex-direction: column;
    align-self: center;
    width: 100%;
    gap: 28px;
  }
`;

interface ScrollProps {
  width: number;
  isIntersecting: boolean;
}

const ImageBlockWrapper = styled.div<ScrollProps>`
  flex-basis: 33%;
  background: ${({ width, isIntersecting }) => {
    if (width <= BREAKPOINTS.tb && isIntersecting) return "var(--white)";
    return "var(--grey-800)";
  }};
  border: 1px solid transparent;
  border-color: ${({ width, isIntersecting }) => {
    if (width <= BREAKPOINTS.tb && width > BREAKPOINTS.md && isIntersecting) return "var(--grey-600)";
    return "transparent";
  }};
  border-top-color: ${({ width, isIntersecting }) => {
    if (width <= BREAKPOINTS.tb && width > BREAKPOINTS.md && isIntersecting) return "var(--grey-600)";
    return "transparent";
  }};
  border-bottom-color: ${({ width, isIntersecting }) => {
    if (width <= BREAKPOINTS.tb && isIntersecting) return "var(--grey-600)";
    return "transparent";
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;
  > div {
    position: relative;
    top: 0;
    > div:first-of-type {
      position: relative;
      top: 0;
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover {
    @media ${QUERIES.tb.andUp} {
      margin-top: -36px;
      background-color: var(--white);
      border: 1px solid var(--grey-600);
      padding-top: 20px;
    }
    > div {
      > div:first-of-type {
        transition: all 0.2s ease-in-out;
      }
    }
    img {
      filter: ${({ width }) => {
        if (width > BREAKPOINTS.tb)
          return "invert(47%) sepia(65%) saturate(5018%) hue-rotate(336deg) brightness(111%) contrast(103%)";
        return "none";
      }};
    }
    h3 {
      @media ${QUERIES.tb.andUp} {
        color: var(--red);
        margin-top: 48px;
      }
    }
    h4 {
      @media ${QUERIES.tb.andUp} {
        padding-bottom: 20px;
      }
    }
  }
  @media ${QUERIES.tb.andDown} {
    width: 100%;
    padding: 40px;
    margin: 0 auto;
    max-height: 196px;
    gap: 48px;
  }
  @media ${QUERIES.md.andDown} {
    width: 100%;
    padding: 24px;
    max-height: 196px;
    gap: 48px;
  }
`;

const ImageBlock = styled.div`
  padding: 0 40px;
  transition: all 0.2s ease-in-out;
  position: relative;
  top: 0;
  align-self: stretch;

  @media ${QUERIES.tb.andDown} {
    display: inline-flex;
    gap: 48px;
    padding: 0;
    width: 100%;
  }
  @media ${QUERIES.md.andDown} {
    border-right: 0;
    border-left: 0;
    gap: 32px;
  }
`;

const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${QUERIES.md.andDown} {
    max-width: 400px;
    width: 100%;
  }
`;

const ImageTitle = styled.h3<ScrollProps>`
  color: ${({ width, isIntersecting }) => {
    if (width <= BREAKPOINTS.tb && isIntersecting) return "var(--red)";
    return "var(--grey-200)";
  }};
  font: var(--header-md);
  line-height: 115%;
  margin-top: 40px;
  transition: all 0.2s ease-in-out;
  position: relative;
  top: 0;
  @media ${QUERIES.md.andDown} {
    font: var(--header-sm);
    margin-top: 24px;
  }
`;

const ImageText = styled.h4`
  font: var(--body-lg);
  color: var(--grey-200);
  transition: all 0.2s ease-in-out;
  position: relative;
  top: 0;
  @media ${QUERIES.tb.andDown} {
    font: var(--body-sm);
    max-width: 675px;
  }
`;

const ImageWrapper = styled.div<ScrollProps>`
  max-width: 154px;
  max-height: 160px;
  img {
    filter: invert(47%) sepia(65%) saturate(5018%) hue-rotate(336deg) brightness(111%) contrast(103%);
    filter: ${({ width, isIntersecting }) => {
      if (width <= BREAKPOINTS.tb && isIntersecting)
        return "invert(47%) sepia(65%) saturate(5018%) hue-rotate(336deg) brightness(111%) contrast(103%)";
      return "none";
    }};
  }
  > div {
    cursor: default;
  }
  @media ${QUERIES.tb.andDown} {
    flex: 1 1 96px;
    align-items: center;
    align-self: center;
    max-width: 92px;
    max-height: 96px;
  }
  @media ${QUERIES.tb.andDown} {
    align-items: center;
    align-self: center;
    max-width: 64px;
    max-height: 64px;
  }
`;

const VoterAppLinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media ${QUERIES.lg.andDown} {
    justify-content: center;
  }
  @media ${QUERIES.md.andDown} {
    margin-top: 24px;
  }
`;

const VoterAppLinkBlock = styled.div`
  color: var(--red);
  font: var(--body-lg);
  margin-left: 40px;
  display: inline-block;
`;

const VoterAppLink = styled.a`
  font: var(--body-lg);
  text-decoration: none;
  color: var(--red);
  div {
    position: relative;
    left: 0;
    margin-left: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--red);
    border-radius: 8px;
    transition: margin 0.3s ease, border-color 0.3s ease;
  }
  &:visited {
    color: var(--red);
  }
  &:hover {
    color: var(--grey-100);
    div {
      border-color: var(--grey-100);
      background-color: var(--grey-100);
      margin-left: 12px;

      path {
        stroke: var(--white);
      }
    }
  }
`;

interface IMobileVoterRow {
  isIntersecting: boolean;
}

const MobileVoterRow = styled(VoterAppLinkRow)<IMobileVoterRow>`
  position: fixed;
  width: 100%;
  margin-left: 0;
  bottom: 0;
  padding: 0 1.5rem;
  display: ${({ isIntersecting }) => {
    return isIntersecting ? "flex" : "none";
  }};
  backdrop-filter: blur(6px);
  background: linear-gradient(90deg, #efefef 0%, rgba(239, 239, 239, 0) 100%);
`;

const MobileVoterAppLinkBlock = styled(VoterAppLinkBlock)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, #efefef 0%, rgba(239, 239, 239, 0) 100%);
  width: 100%;
  margin-top: 84px;
  margin-bottom: 24px;
`;
