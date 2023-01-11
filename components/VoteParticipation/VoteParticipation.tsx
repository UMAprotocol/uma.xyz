import { AnimatedLink, Divider } from "components";
import { SectionHeader } from "components/SectionHeader/SectionHeader";
import { BaseOuterWrapper } from "components/style/Wrappers";
import { mobileAndUnder, tabletAndUnder } from "constant";
import { useVotingInfo } from "hooks";
import earn from "public/assets/lottie/earn.json";
import stake from "public/assets/lottie/stake.json";
import vote from "public/assets/lottie/vote.json";
import { useState } from "react";
import Lottie from "react-lottie-player";
import styled from "styled-components";

export function VoteParticipation() {
  const {
    data: { apy },
  } = useVotingInfo();
  const [playStake, setPlayStake] = useState(false);
  const [playVote, setPlayVote] = useState(false);
  const [playEarn, setPlayEarn] = useState(false);
  // lottie uses 1 and -1 to indicate direction
  const forward = 1;
  const backward = -1;
  type Direction = typeof forward | typeof backward;
  const [stakeDirection, setStakeDirection] = useState<Direction>(forward);
  const [voteDirection, setVoteDirection] = useState<Direction>(forward);
  const [earnDirection, setEarnDirection] = useState<Direction>(forward);

  const activities = [
    {
      title: "Stake",
      text: "Stake your $UMA to help secure UMA's Optimistic Oracle.",
      animationData: stake,
      play: playStake,
      setPlay: setPlayStake,
      direction: stakeDirection,
      setDirection: setStakeDirection,
    },
    {
      title: "Vote",
      text: "Token holders who vote correctly and consistently earn higher APYs.",
      animationData: vote,
      play: playVote,
      setPlay: setPlayVote,
      direction: voteDirection,
      setDirection: setVoteDirection,
    },
    {
      title: "Earn",
      text: `Successful voters will gradually own a higher percentage of the protocol than unsuccessful or inactive
      voters.`,
      animationData: earn,
      play: playEarn,
      setPlay: setPlayEarn,
      direction: earnDirection,
      setDirection: setEarnDirection,
    },
  ];

  return (
    <OuterWrapper id="voter">
      <InnerWrapper>
        <SectionHeader
          title={{ text: "Participate as a", redSuffix: "Voter" }}
          header={<>Stake, vote &amp; earn up to {apy}% APY</>}
          constrainWidth
        />

        <ActivitiesWrapper>
          {activities.map(({ title, text, animationData, play, setPlay, direction, setDirection }) => (
            <Activity
              key={title}
              onMouseOver={() => {
                setDirection(forward);
                setPlay(true);
              }}
              onMouseOut={() => {
                setDirection(backward);
                setPlay(true);
              }}
            >
              <LottieWrapper>
                <LottieAnimation
                  loop={false}
                  play={play}
                  direction={direction}
                  animationData={animationData}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
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
        <DividerWrapper>
          <Divider />
        </DividerWrapper>
        <AnimatedLinkWrapper>
          <AnimatedLink href="https://vote.umaproject.org">Link to voter app</AnimatedLink>
        </AnimatedLinkWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled(BaseOuterWrapper)`
  background: var(--white);
`;

const InnerWrapper = styled.div`
  max-width: var(--page-width);
  margin-inline: auto;
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
  --color: var(--grey-100);
  --background: transparent;
  --border-color: transparent;
  --translate-y: 0;
  display: grid;
  justify-content: start;
  align-items: start;
  padding: 40px;
  background: var(--background);
  border: 1px solid var(--border-color);
  transform: translateY(var(--translate-y));
  transition: background var(--animation-duration), border-color var(--animation-duration),
    transform var(--animation-duration);
  &:hover {
    --color: var(--red);
    --background: var(--white);
    --border-color: var(--grey-600);
    --translate-y: -8px;
  }
  @media ${tabletAndUnder} {
    grid-template-columns: auto 1fr;
    gap: 32px;
  }
  @media ${mobileAndUnder} {
    padding: 24px;
  }
`;

const ActivityDescription = styled.div``;

const ActivityTitle = styled.h3`
  color: var(--color);
  font: var(--header-md);
  margin-bottom: 16px;
  transform: translateY(var(--translate-y));
  transition: color var(--animation-duration), transform var(--animation-duration);
  @media ${mobileAndUnder} {
    font: var(--header-sm);
    margin-bottom: 12px;
  }
`;

const ActivityText = styled.p`
  font: var(--body-lg);
  max-width: 288px;
  transform: translateY(var(--translate-y));
  transition: transform var(--animation-duration);
  @media ${tabletAndUnder} {
    max-width: 100%;
  }
  @media ${mobileAndUnder} {
    font: var(--body-sm);
  }
`;

const LottieAnimation = styled(Lottie)``;

const LottieWrapper = styled.div`
  max-width: var(--width);
  margin-left: -32px;
  --desktop-width: 228px;
  --tablet-width: 128px;
  --mobile-width: 92px;
  --width: var(--desktop-width);
  transform: translateY(var(--translate-y));
  transition: transform var(--animation-duration);
  @media ${tabletAndUnder} {
    --width: var(--tablet-width);
    margin-left: 0;
  }
  @media ${mobileAndUnder} {
    --width: var(--mobile-width);
  }

  path {
    stroke: var(--color);
    transition: stroke var(--animation-duration);
  }
`;

const DividerWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const AnimatedLinkWrapper = styled.div`
  padding-left: 40px;
`;
