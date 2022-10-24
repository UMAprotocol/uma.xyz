import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Clock from "public/assets/clock.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { formatDateTimeFromUTC } from "./utils";
import useInterval from "hooks/helpers/useInterval";
type TickerThemes = "light" | "dark";

interface Props {
  theme: TickerThemes;
  numVotes: number;
  phase: "commit" | "reveal";
}

// styled theme
const styledTheme = {
  light: {
    section: {
      bg: "var(--grey-700)",
      pt: "48px",
    },
    wrapper: {
      bg: "var(--grey-800)",
    },
    clock: {
      br: "4px",
      fill: "var(--red-510-opacity-15)",
    },
    voteText: {
      color: "var(--grey-100)",
      spanColor: "var(--red)",
      borderRight: "1px solid var(--grey-100-opacity-20)",
    },
    numVotes: {
      bg: "var(--grey-600)",
      color: "var(--grey-100)",
    },
    moreDetails: {
      color: "var(--grey-100)",
      stroke: "var(--grey-100)",
    },
  },
  dark: {
    section: {
      bg: "inherit",
      pt: "16px",
    },
    wrapper: {
      bg: "var(--grey-300)",
    },
    clock: {
      br: "16px",
      fill: "var(--red-550)",
    },
    voteText: {
      color: "var(--grey-500)",
      spanColor: "var(--white)",
      borderRight: "1px solid var(--grey-400-opacity-20)",
    },
    numVotes: {
      color: "var(--grey-500)",
      bg: "var(--grey-100)",
    },
    moreDetails: {
      color: "var(--grey-500)",
      stroke: "var(--grey-500)",
    },
  },
};

const VoteTicker: React.FC<Props> = ({ theme, numVotes, phase }) => {
  const { timeRemaining } = useVoteTicker();
  return (
    <ThemeProvider theme={styledTheme[theme]}>
      <Section>
        <Wrapper>
          <VoteBlock>
            <ClockBG>
              <Clock />
            </ClockBG>
            <VoteText>
              Time to {phase} vote:
              <span>{timeRemaining}</span>
            </VoteText>
            <NumVotes>
              <div>{numVotes === 1 ? "1 vote" : `${numVotes} votes`}</div>{" "}
            </NumVotes>
          </VoteBlock>
          <MoreDetailsBlock>
            <span>More details</span>
            <a href="https://vote.umaproject.org/" target="_blank" rel="noreferrer">
              <UpRightArrow />
            </a>
          </MoreDetailsBlock>
        </Wrapper>
      </Section>
    </ThemeProvider>
  );
};

export default VoteTicker;

function useVoteTicker() {
  const [timeRemaining, setTimeRemaining] = useState("--:--:--");
  // Set time remaining depending if it's the Commit or Reveal
  // Note: the requests are all slightly differently in there final vote time. I'll use the last
  // Vote added.
  useInterval(() => {
    setTimeRemaining(formatDateTimeFromUTC());
  }, 1000);

  return { timeRemaining };
}

const Section = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.section.bg};
  padding-top: ${({ theme }) => theme.section.pt}; ;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 8px;
  gap: 16px;
  isolation: isolate;
  max-width: var(--max-section-width);
  margin: 0 auto;
  height: 48px;
  background: ${({ theme }) => theme.wrapper.bg};
  border-radius: 8px;
`;

const VoteBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

const ClockBG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 32px;
  height: 32px;
  background: var(--red-510-opacity-15);
  border-radius: ${({ theme }) => theme.clock.br};
  g {
    fill: ${({ theme }) => theme.clock.fill};
  }
`;

const VoteText = styled.div`
  font: var(--body-sm);
  color: ${({ theme }) => theme.voteText.color};
  span {
    color: ${({ theme }) => theme.voteText.spanColor};
    margin-left: 4px;
  }
  padding-right: 16px;
  border-right: ${({ theme }) => theme.voteText.borderRight};
`;

const NumVotes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 12px;
  gap: 2px;
  width: 63px;
  height: 24px;
  background: ${({ theme }) => theme.numVotes.bg};
  border-radius: 12px;
  > div {
    font: var(--body-sm);
    color: ${({ theme }) => theme.numVotes.color};
  }
`;

const MoreDetailsBlock = styled.div`
  font: var(--body-sm);
  color: ${({ theme }) => theme.moreDetails.color};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  path {
    stroke: ${({ theme }) => theme.moreDetails.stroke};
  }
`;
