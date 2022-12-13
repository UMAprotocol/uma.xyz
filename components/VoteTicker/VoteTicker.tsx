import { BaseOuterWrapper } from "components/style/Wrappers";
import {
  grey100,
  grey300,
  grey500,
  grey600,
  grey700,
  grey800,
  mobileAndUnder,
  red,
  red510Opacity15,
  red550,
  white,
} from "constant";
import { useVotingInfo } from "hooks";
import useInterval from "hooks/helpers/useInterval";
import NextLink from "next/link";
import Clock from "public/assets/clock.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { formatDateTimeFromUTC } from "./utils";

export function VoteTicker({ isLightTheme = false }) {
  const {
    data: { activeRequests, phase },
  } = useVotingInfo();
  const [timeRemaining, setTimeRemaining] = useState("--:--:--");
  const isActive = activeRequests > 0;

  useInterval(() => {
    setTimeRemaining(formatDateTimeFromUTC());
  }, 1000);

  return (
    <OuterWrapper
      style={
        {
          "--background": isLightTheme ? grey700 : "inherit",
          "--color": isLightTheme ? grey100 : grey500,
        } as CSSProperties
      }
    >
      <InnerWrapper
        style={
          {
            "--background": isLightTheme ? grey800 : grey300,
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
                <DesktopText>Time to {phase} vote: </DesktopText>
                <MobileText>{phase} vote: </MobileText>
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
                    "--color": isLightTheme ? grey100 : grey500,
                    "--background": isLightTheme ? grey600 : grey100,
                  } as CSSProperties
                }
              >
                {activeRequests === 1 ? "1 vote" : `${activeRequests} votes`}
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
              "--color": isLightTheme ? grey100 : grey500,
              "--stroke": isLightTheme ? grey100 : grey500,
            } as CSSProperties
          }
        >
          <Link href="https://vote.umaproject.org/" target="_blank">
            <MoreDetailsText>More details</MoreDetailsText>
            <ArrowIcon />
          </Link>
        </MoreDetailsWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled(BaseOuterWrapper)`
  display: grid;
  place-items: center;
  height: var(--vote-ticker-height);
  background: var(--background);
  padding-top: 16px;
  padding-bottom: 4px;
  background-size: cover;
  background-repeat: no-repeat;
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
