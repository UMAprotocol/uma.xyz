import { defaultApr, mobileAndUnder, overrideApr, tabletAndUnder } from "@/constant";
import { useVotingInfo } from "@/hooks";
import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AnimatedLink from "../AnimatedLink";
import { Divider } from "../Divider";
import LottieAnimation from "../LottieAnimation";
import { SectionHeader } from "../SectionHeader";
import { BaseOuterWrapper } from "../Wrappers";

export default function VoteParticipation() {
  const id = "voter";
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: "some" });
  const { data } = useVotingInfo();
  const [stakeData, setStakeData] = useState<object>();
  const [voteData, setVoteData] = useState<object>();
  const [earnData, setEarnData] = useState<object>();
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

  useLoadSectionRefAndId(ref, id);

  useEffect(() => {
    if (inView && !stakeData) {
      void import("public/assets/lottie/stake.json").then(setStakeData);
      void import("public/assets/lottie/vote.json").then(setVoteData);
      void import("public/assets/lottie/earn.json").then(setEarnData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const activities = [
    {
      title: "Stake",
      text: "Stake your $UMA to help secure UMA's Optimistic Oracle.",
      animationData: stakeData,
      play: playStake,
      setPlay: setPlayStake,
      direction: stakeDirection,
      setDirection: setStakeDirection,
    },
    {
      title: "Vote",
      text: "Token holders who vote correctly and consistently earn higher APYs.",
      animationData: voteData,
      play: playVote,
      setPlay: setPlayVote,
      direction: voteDirection,
      setDirection: setVoteDirection,
    },
    {
      title: "Earn",
      text: `Successful voters will gradually own a higher percentage of the protocol than unsuccessful or inactive
      voters.`,
      animationData: earnData,
      play: playEarn,
      setPlay: setPlayEarn,
      direction: earnDirection,
      setDirection: setEarnDirection,
    },
  ];

  return (
    <OuterWrapper ref={ref} id={id}>
      <InnerWrapper>
        <SectionHeader
          title={
            <>
              Participate as a <strong>Voter</strong>
            </>
          }
          header={<>Stake, vote &amp; earn up to {overrideApr ?? data?.apy ?? defaultApr}% APR</>}
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
                {animationData && (
                  <LottieAnimation loop={false} play={play} direction={direction} animationData={animationData} />
                )}
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
          <AnimatedLink href="https://vote.uma.xyz">Link to voter app</AnimatedLink>
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
  --color: var(--grey-900);
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
    --border-color: var(--grey-400);
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

const AnimatedLinkWrapper = styled.div``;
