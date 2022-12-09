import { mobileAndUnder, tabletAndUnder } from "constant";
import { useVotingInfo } from "hooks";
import NextLink from "next/link";
import earn from "public/assets/lottie/earn.json";
import stake from "public/assets/lottie/stake.json";
import vote from "public/assets/lottie/vote.json";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { useState } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

export function VoteParticipation() {
  const {
    data: { apy },
  } = useVotingInfo();
  const [stakePlaying, setStakePlaying] = useState(false);
  const [votePlaying, setVotePlaying] = useState(false);
  const [earnPlaying, setEarnPlaying] = useState(false);

  const activities = [
    {
      title: "Stake",
      text: "Stake your $UMA to help secure UMA’s Optimistic Oracle.",
      animationData: stake,
      isPlaying: stakePlaying,
      setIsPlaying: setStakePlaying,
    },
    {
      title: "Vote",
      text: "Token holders who vote correctly and consistently earn higher APYs.",
      animationData: vote,
      isPlaying: votePlaying,
      setIsPlaying: setVotePlaying,
    },
    {
      title: "Earn",
      text: `Successful voters will gradually own a higher percentage of the protocol than unsuccessful or inactive
      voters.`,
      animationData: earn,
      isPlaying: earnPlaying,
      setIsPlaying: setEarnPlaying,
    },
  ];

  return (
    <OuterWrapper id="voter">
      <InnerWrapper>
        <Title>
          Participate as a <RedEmphasis>Voter</RedEmphasis>
        </Title>
        <Header>Stake, vote &amp; earn up to {apy}% APY</Header>

        <ActivitiesWrapper>
          {activities.map(({ title, text, animationData, isPlaying, setIsPlaying }) => (
            <Activity key={title} onMouseEnter={() => setIsPlaying(true)} onMouseLeave={() => setIsPlaying(false)}>
              <LottieWrapper>
                <Lottie
                  isStopped={!isPlaying}
                  options={{
                    loop: false,
                    autoplay: false,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </LottieWrapper>
              <ActivityDescription>
                <ActivityTitle>{title}</ActivityTitle>
                <ActivityText>{text}</ActivityText>
              </ActivityDescription>
            </Activity>
          ))}
        </ActivitiesWrapper>
        <Divider />
        <VoterAppLinkWrapper>
          <VoterAppLink href="https://vote.umaproject.org" target="_blank">
            Link to voter app
            <ArrowIconWrapper>
              <ArrowIcon />
            </ArrowIconWrapper>
          </VoterAppLink>
        </VoterAppLinkWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.section`
  padding-top: var(--header-blur-height);
  scroll-snap-align: start;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
`;

const InnerWrapper = styled.div`
  max-width: var(--page-width);
  margin-inline: auto;
`;

const Title = styled.h1`
  font: var(--header-sm);
  color: var(--grey-100);

  @media ${mobileAndUnder} {
    font: var(--body-lg);
  }
`;

const Header = styled.h2`
  font: var(--header-lg);
  color: var(--grey-100);
  max-width: max(70%, 720px);
  @media ${mobileAndUnder} {
    font: var(--header-sm);
  }
`;

const ActivitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 96px;
  @media ${tabletAndUnder} {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 1fr);
  }
  @media ${mobileAndUnder} {
    margin-top: 40px;
  }
`;

const Activity = styled.div`
  display: grid;
  justify-content: start;
  padding: 40px;
  @media ${tabletAndUnder} {
    grid-template-columns: auto 1fr;
    align-items: start;
    gap: 32px;
  }
  @media ${mobileAndUnder} {
    padding: 24px;
  }
`;

const ActivityDescription = styled.div``;

const ActivityTitle = styled.h3`
  font: var(--header-md);
  @media ${mobileAndUnder} {
    font: var(--header-sm);
  }
`;

const ActivityText = styled.p`
  font: var(--body-lg);
  max-width: 288px;
  @media ${tabletAndUnder} {
    max-width: 100%;
  }
  @media ${mobileAndUnder} {
    font: var(--body-sm);
  }
`;

const LottieWrapper = styled.div`
  max-width: var(--width);
  margin-left: -24px;
  --desktop-width: 154px;
  --tablet-width: 92px;
  --mobile-width: 62px;
  --width: var(--desktop-width);
  @media ${tabletAndUnder} {
    --width: var(--tablet-width);
    margin-left: 0;
  }
  @media ${mobileAndUnder} {
    --width: var(--mobile-width);
  }
`;

const VoterAppLinkWrapper = styled.div`
  display: grid;
  place-items: center;
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
