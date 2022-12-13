import { AnimatedLink, Divider } from "components";
import { BaseOuterWrapper } from "components/style/Wrappers";
import { mobileAndUnder, tabletAndUnder } from "constant";
import { useVotingInfo } from "hooks";
import earn from "public/assets/lottie/earn.json";
import stake from "public/assets/lottie/stake.json";
import vote from "public/assets/lottie/vote.json";
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
    <OuterWrapper>
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
        <DividerWrapper>
          <Divider />
        </DividerWrapper>
        <AnimatedLink href="https://vote.umaproject.org">Link to voter app</AnimatedLink>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled(BaseOuterWrapper)`
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
  align-items: start;
  padding: 40px;
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

const DividerWrapper = styled.div`
  margin-top: 84px;
  margin-bottom: 24px;
`;

const RedEmphasis = styled.span`
  color: var(--red);
`;
