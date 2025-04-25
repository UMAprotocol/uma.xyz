import { defaultApr, overrideApr } from "@/constant";
import { useVotingInfo } from "@/hooks";
import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import { useEffect, useRef, useState } from "react";
import AnimatedLink from "../AnimatedLink";
import { Divider } from "../Divider";
import LottieAnimation from "../LottieAnimation";
import { SectionHeader } from "../SectionHeader";

export default function VoteParticipation() {
  const id = "voter";
  const ref = useRef<HTMLDivElement>(null);
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
    if (!stakeData) {
      void import("public/assets/lottie/stake.json").then(setStakeData);
      void import("public/assets/lottie/vote.json").then(setVoteData);
      void import("public/assets/lottie/earn.json").then(setEarnData);
    }
  }, [stakeData]);

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
    <section
      className="bg-white px-[--page-padding] pb-8 pt-[--header-blur-height] md:pb-12 lg:pb-16"
      ref={ref}
      id={id}
    >
      <div className="mx-auto max-w-[--page-width]">
        <SectionHeader
          title={
            <>
              Participate as a <strong>Voter</strong>
            </>
          }
          header={<>Stake, vote &amp; earn up to {overrideApr ? overrideApr : data.apr ? data.apr : defaultApr}% APR</>}
          constrainWidth
        />

        <div className="mt-10 grid grid-cols-1 grid-rows-3 lg:mt-[96px] lg:grid-cols-3 lg:grid-rows-1">
          {activities.map(({ title, text, animationData, play, setPlay, direction, setDirection }) => (
            <div
              className="group grid grid-rows-[auto,1fr] items-start justify-start gap-2 border border-white p-6 text-grey-900 transition duration-300 hover:-translate-y-2 hover:border-grey-400 hover:text-red sm:grid-cols-[auto,1fr] sm:gap-8 sm:p-10 lg:grid-cols-1"
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
              <div className="md:max-w[128px] aspect-square max-w-[92px] transition group-hover:-translate-y-2 lg:-ml-8 xl:max-w-[228px] [&_path]:transition [&_path]:group-hover:stroke-red">
                {animationData && (
                  <LottieAnimation loop={false} play={play} direction={direction} animationData={animationData} />
                )}
              </div>
              <div>
                <h3 className="mb-3 text-4xl transition duration-300 group-hover:-translate-y-2 group-hover:text-red sm:mb-4 sm:text-6xl">
                  {title}
                </h3>
                <p className="text-grey-900 transition duration-300 group-hover:-translate-y-2 sm:text-xl lg:max-w-[288px]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-6">
          <Divider />
        </div>
        <div>
          <AnimatedLink href="https://vote.uma.xyz">Launch voter app</AnimatedLink>
        </div>
      </div>
    </section>
  );
}
