"use client";

import {
  grey200,
  grey400,
  grey500,
  grey700,
  grey900,
  heroVideoBackground,
  laptopAndUnder,
  mobileAndUnder,
  red,
  red510Opacity15,
  red550,
  white,
} from "@/constant";
import { useVotingInfo } from "@/hooks";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Clock from "public/assets/clock.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { CSSProperties, useState } from "react";
import styled from "styled-components";
import { useInterval } from "usehooks-ts";

export default function VoteTicker({ isLightTheme = false }) {
  const { data } = useVotingInfo();
  const [timeRemaining, setTimeRemaining] = useState("--:--:--");
  const isActive = !!data && data.activeRequests > 0;
  const pathname = usePathname();
  const isHomePage = pathname?.split("#")[0] === "/";

  useInterval(() => {
    setTimeRemaining(formatMillisecondsUntilMidnight());
  }, 1000);

  if (!isHomePage && !isLightTheme) return null;

  function getMillisecondsUntilMidnight() {
    const now = new Date();
    const midnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
    return midnight.getTime() - now.getTime();
  }

  function formatMillisecondsUntilMidnight() {
    const milliseconds = getMillisecondsUntilMidnight();
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours.toString().padStart(2, "0")}:${(minutes % 60).toString().padStart(2, "0")}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <OuterWrapper
      initial={{ opacity: 0, y: "-20px" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.3, delay: 0.8 }}
      style={
        {
          "--background": isLightTheme ? "transparent" : heroVideoBackground,
          "--color": isLightTheme ? grey900 : grey500,
        } as CSSProperties
      }
    >
      <InnerWrapper
        style={
          {
            "--background": isLightTheme ? grey200 : grey700,
            "--url": isLightTheme ? `url("/assets/white-lines.png")` : `url("/assets/black-lines.png")`,
          } as CSSProperties
        }
      >
        <VoteDetails>
          <ClockWrapper
            style={
              {
                "--border-radius": isLightTheme ? "4px" : "16px",
                "--fill": isLightTheme ? red510Opacity15 : red550,
              } as CSSProperties
            }
          >
            <ClockIcon />
          </ClockWrapper>
          {isActive ? (
            <>
              <TextWrapper>
                <DesktopText>Time to {data.phase} vote: </DesktopText>
                <MobileText>{data.phase} vote: </MobileText>
                <TimeRemaining
                  style={
                    {
                      "--color": isLightTheme ? red : white,
                    } as CSSProperties
                  }
                >
                  {timeRemaining}
                </TimeRemaining>
              </TextWrapper>
              <NumVotes
                style={
                  {
                    "--color": isLightTheme ? grey900 : grey500,
                    "--background": isLightTheme ? grey400 : grey900,
                  } as CSSProperties
                }
              >
                {data.activeRequests === 1 ? "1 vote" : `${data.activeRequests} votes`}
              </NumVotes>
            </>
          ) : (
            <TextWrapper>
              <DesktopText>No active votes</DesktopText>
              <MobileText>No votes</MobileText>
            </TextWrapper>
          )}
        </VoteDetails>
        <MoreDetailsWrapper
          style={
            {
              "--color": isLightTheme ? grey900 : grey500,
              "--stroke": isLightTheme ? grey900 : grey500,
            } as CSSProperties
          }
        >
          <Link href="https://vote.uma.xyz/" target="_blank" aria-label="Link to voter dapp">
            <MoreDetailsText>More details</MoreDetailsText>
            <ArrowIcon />
          </Link>
        </MoreDetailsWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled(motion.div)`
  display: grid;
  place-items: center;
  height: var(--vote-ticker-height);
  background: var(--background);
  padding-top: 16px;
  padding-bottom: 4px;
  padding-inline: var(--page-padding);
  background-size: cover;
  background-repeat: no-repeat;

  @media ${laptopAndUnder} {
    padding-inline: 0;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--page-width);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 8px;
  gap: 16px;
  isolation: isolate;
  background: var(--background);
  background-image: var(--url);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
`;

const VoteDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

const ClockIcon = styled(Clock)`
  g {
    fill: var(--fill);
  }
`;

const ArrowIcon = styled(UpRightArrow)`
  path {
    stroke: var(--stroke);
  }
`;

const ClockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 32px;
  height: 32px;
  background: var(--red-510-opacity-15);
  border-radius: var(--border-radius);
`;

const TextWrapper = styled.div`
  font: var(--body-sm);
  color: var(--color);
`;

const TimeRemaining = styled.span`
  display: inline-block;
  color: var(--color);
  margin-left: 4px;
  letter-spacing: 0.02em;
  min-width: 96px; // 96px is the width of the clock to prevent spacing changing on numbers.
`;

const DesktopText = styled.span`
  @media ${mobileAndUnder} {
    display: none;
  }
`;

const MobileText = styled.span`
  display: none;
  @media ${mobileAndUnder} {
    display: inline;
  }
`;

const NumVotes = styled.div`
  height: fit-content;
  white-space: nowrap;
  padding-inline: 8px;
  padding-block: 4px;
  background: var(--background);
  border-radius: 12px;
  font: var(--body-sm);
  color: var(--color);

  @media ${mobileAndUnder} {
    display: none;
  }
`;

const MoreDetailsWrapper = styled.div``;

const MoreDetailsText = styled.span`
  @media ${mobileAndUnder} {
    display: none;
  }
`;

const Link = styled(NextLink)`
  text-decoration: none;
  font: var(--body-sm);
  color: var(--color);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  transition: opacity var(--animation-duration);
  &:hover {
    opacity: 0.5;
  }
`;
