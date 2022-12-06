import { Header as BaseHeader, Title as BaseTitle } from "components/Widgets";
import { defaultApy, largeAndUnder, mediumAndOver, mediumAndUnder, tabletAndOver, tabletAndUnder } from "constant";
import { useIntersectionObserver } from "hooks";
import NextLink from "next/link";
import earn from "public/assets/lottie/earn.json";
import stake from "public/assets/lottie/stake.json";
import vote from "public/assets/lottie/vote.json";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { useRef, useState } from "react";
import Lottie from "react-lottie";
import styled, { css, CSSProperties } from "styled-components";

interface Props {
  apy: string;
}

export function VoteParticipation({ apy }: Props) {
  const {
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
      <MobileVoterRow
        style={
          {
            "--display": isIntersectingSection ? "flex" : "none",
          } as CSSProperties
        }
      >
        <MobileVoterAppLinkBlock>
          <VoterAppLink href="https://vote.umaproject.org" target="_blank">
            Link to voter app
            <ArrowIconWrapper>
              <ArrowIcon />
            </ArrowIconWrapper>
          </VoterAppLink>
        </MobileVoterAppLinkBlock>
      </MobileVoterRow>
      <Wrapper>
        <Title>
          Participate as <RedEmphasis>Voter</RedEmphasis>
        </Title>
        <HeaderWrapper>
          <Header>Stake, vote &amp; earn up to {apy || defaultApy}% APY</Header>
        </HeaderWrapper>

        <ImageBlockRow>
          <ImageBlockWrapper
            onMouseEnter={() => setPlayStake(true)}
            onMouseLeave={() => setPlayStake(false)}
            ref={stakeRef}
            isIntersecting={isIntersectingStake}
          >
            <ImageBlock>
              <ImageWrapper>
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
                <ImageTitle isIntersecting={isIntersectingStake}>Stake</ImageTitle>
                <ImageText>Stake your $UMA to help secure UMA&apos; s Optimistic Oracle.</ImageText>
              </ImageTextWrapper>
            </ImageBlock>
          </ImageBlockWrapper>
          <ImageBlockWrapper
            onMouseEnter={() => setPlayVote(true)}
            onMouseLeave={() => setPlayVote(false)}
            ref={voteRef}
            isIntersecting={isIntersectingVote}
          >
            <ImageBlock>
              <ImageWrapper>
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
                <ImageTitle isIntersecting={isIntersectingVote}>Vote</ImageTitle>
                <ImageText>Token holders who vote correctly and consistently earn higher APYs.</ImageText>
              </ImageTextWrapper>
            </ImageBlock>
          </ImageBlockWrapper>
          <ImageBlockWrapper
            onMouseEnter={() => setPlayEarn(true)}
            onMouseLeave={() => setPlayEarn(false)}
            ref={earnRef}
            isIntersecting={isIntersectingEarn}
          >
            <ImageBlock>
              <ImageWrapper>
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
                <ImageTitle isIntersecting={isIntersectingEarn}>Earn</ImageTitle>
                <ImageText>
                  Successful voters will gradually own a higher percentage of the protocol than unsuccessful or inactive
                  voters.{" "}
                </ImageText>
              </ImageTextWrapper>
            </ImageBlock>
          </ImageBlockWrapper>
        </ImageBlockRow>
        <Divider />
        <VoterAppLinkRow>
          <VoterAppLinkBlock>
            <VoterAppLink href="https://vote.umaproject.org" target="_blank">
              Link to voter app
              <ArrowIconWrapper>
                <ArrowIcon />
              </ArrowIconWrapper>
            </VoterAppLink>
          </VoterAppLinkBlock>
        </VoterAppLinkRow>
      </Wrapper>
    </Section>
  );
}

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

  return {
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
  @media ${largeAndUnder} {
    padding-bottom: 64px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${mediumAndUnder} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Header = styled(BaseHeader)`
  margin-top: 65px;
  max-width: 921px;
  margin-bottom: 128px;
  @media ${mediumAndUnder} {
    margin: 0 16px;
    max-width: 100%;
    font: var(--header-sm);
  }
`;

const Title = styled(BaseTitle)`
  @media ${largeAndUnder} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  @media ${largeAndUnder} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const ImageBlockRow = styled.div`
  margin-top: 96px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
  justify-content: stretch;
  width: 100%;
  height: 420px;
  svg {
    fill: var(--white);
  }
  @media ${tabletAndUnder} {
    flex-direction: column;
    align-self: center;
    width: 100%;
    height: 100%;
  }
  @media ${mediumAndUnder} {
    flex-direction: column;
    align-self: center;
    width: 100%;
    gap: 28px;
  }
`;

const notIntersectingStyle = css`
  background: var(--grey-800);
  border-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
`;

const isIntersectingStyle = css`
  @media ${tabletAndUnder} {
    background: var(--white);
    border-color: var(--grey-600);
    border-top-color: var(--grey-600);
    border-bottom-color: var(--grey-600);
  }

  @media ${mediumAndOver} {
    border-color: transparent;
    border-top-color: transparent;
  }
`;

const ImageBlockWrapper = styled.div<{ isIntersecting: boolean }>`
  flex-basis: 33%;
  ${({ isIntersecting }) => (isIntersecting ? isIntersectingStyle : notIntersectingStyle)}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;
  &:hover {
    @media ${tabletAndOver} {
      margin-top: -36px;
      background-color: var(--white);
      border: 1px solid var(--grey-600);
      padding-top: 20px;
    }

    h3 {
      @media ${tabletAndOver} {
        color: var(--red);
        margin-top: 48px;
      }
    }
    h4 {
      @media ${tabletAndOver} {
        padding-bottom: 20px;
      }
    }
  }
  @media ${tabletAndUnder} {
    width: 100%;
    padding: 40px;
    margin: 0 auto;
    max-height: 196px;
    gap: 48px;
  }
  @media ${mediumAndUnder} {
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

  @media ${tabletAndUnder} {
    display: inline-flex;
    gap: 48px;
    padding: 0;
    width: 100%;
  }
  @media ${mediumAndUnder} {
    border-right: 0;
    border-left: 0;
    gap: 32px;
  }
`;

const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${mediumAndUnder} {
    max-width: 400px;
    width: 100%;
  }
`;

const ImageTitle = styled.h3<{ isIntersecting: boolean }>`
  color: var(--grey-200);
  font: var(--header-md);
  line-height: 115%;
  margin-top: 40px;
  transition: all 0.2s ease-in-out;
  position: relative;
  top: 0;
  @media ${mediumAndUnder} {
    font: var(--header-sm);
    margin-top: 24px;
  }
  @media ${tabletAndUnder} {
    ${({ isIntersecting }) => isIntersecting && `color: var(--red);`}
  }
`;

const ImageText = styled.h4`
  font: var(--body-lg);
  color: var(--grey-200);
  transition: all 0.2s ease-in-out;
  position: relative;
  top: 0;
  @media ${tabletAndUnder} {
    font: var(--body-sm);
    max-width: 675px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 154px;
  max-height: 160px;
  @media ${tabletAndUnder} {
    flex: 1 1 96px;
    align-items: center;
    align-self: center;
    max-width: 92px;
    max-height: 96px;
  }
  @media ${tabletAndUnder} {
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
  @media ${tabletAndUnder} {
    display: none;
  }
  @media ${largeAndUnder} {
    justify-content: center;
  }
  @media ${mediumAndUnder} {
    margin-top: 24px;
  }
`;

const VoterAppLinkBlock = styled.div`
  color: var(--red);
  font: var(--body-lg);
  margin-left: 40px;
  display: inline-block;
`;

const VoterAppLink = styled(NextLink)`
  display: flex;
  align-items: baseline;
  font: var(--body-lg);
  color: var(--red);
  text-decoration: none;
  &:hover {
    color: var(--grey-100);
  }
`;

const ArrowIcon = styled(UpRightArrow)`
  path: {
    transition: stroke 0.3s ease;
  }
`;

const ArrowIconWrapper = styled.div`
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
  transition: margin 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;

  ${VoterAppLink}:hover & {
    border-color: var(--grey-100);
    background-color: var(--grey-100);
    margin-left: 12px;

    ${ArrowIcon} {
      path {
        stroke: var(--white);
      }
    }
  }
`;

const MobileVoterRow = styled(VoterAppLinkRow)`
  position: fixed;
  width: 100%;
  margin-left: 0;
  bottom: 0;
  padding: 0 1.5rem;
  display: var(--display);
  backdrop-filter: blur(6px);
  background: linear-gradient(90deg, #efefef 0%, rgba(239, 239, 239, 0) 100%);
  @media ${tabletAndOver} {
    display: none;
  }
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

const RedEmphasis = styled.span`
  color: var(--red);
`;
