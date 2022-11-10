import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Clock from "public/assets/clock.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { formatDateTimeFromUTC } from "./utils";
import useInterval from "hooks/helpers/useInterval";
import { BREAKPOINTS, QUERIES } from "constants/breakpoints";
import { useWindowSize } from "hooks";

type TickerThemes = "light" | "dark";

interface Props {
  theme: TickerThemes;
  numVotes: number;
  phase: "commit" | "reveal";
}

interface Theme {
  section: {
    bg: string;
    pt: string;
  };
  wrapper: {
    bg: string;
    url: string;
  };
  clock: {
    br: string;
    fill: string;
  };
  voteText: {
    color: string;
    spanColor: string;
    borderRight: string;
  };
  numVotes: {
    bg: string;
    color: string;
  };
  moreDetails: {
    color: string;
    stroke: string;
  };
}

interface TickerTheme {
  light: Theme;
  dark: Theme;
}

// styled theme
const styledTheme: TickerTheme = {
  light: {
    section: {
      bg: "var(--grey-700)",
      pt: "48px",
    },
    wrapper: {
      bg: "var(--grey-800)",
      url: "/assets/white-lines.png",
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
      url: "/assets/black-lines.png",
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
  const { timeRemaining, width } = useVoteTicker();
  return (
    <ThemeProvider theme={styledTheme[theme]}>
      <Section>
        <Wrapper>
          <VoteBlock>
            <ClockBG>
              <Clock />
            </ClockBG>
            <VoteText>
              {width > BREAKPOINTS.tb ? `Time to ${phase} vote: ` : `${phase} vote: `}
              <span>{timeRemaining}</span>
            </VoteText>
            {width > BREAKPOINTS.tb ? (
              <NumVotes>
                <div>{numVotes === 1 ? "1 vote" : `${numVotes} votes`}</div>{" "}
              </NumVotes>
            ) : null}
          </VoteBlock>
          <MoreDetailsBlock>
            <a href="https://vote.umaproject.org/" target="_blank" rel="noreferrer">
              {width > BREAKPOINTS.tb ? <span>More details</span> : null}
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

  const { width } = useWindowSize();
  return { timeRemaining, width };
}

const Section = styled.div`
  width: 100%;
  background: ${({ theme }: { theme: Theme }) => theme.section.bg};
  padding-top: ${({ theme }: { theme: Theme }) => theme.section.pt};
  background-size: cover;
  background-repeat: no-repeat;
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
  background: ${({ theme }: { theme: Theme }) => theme.wrapper.bg};
  background-image: ${({ theme }: { theme: Theme }) => `url(${theme.wrapper.url})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  width: calc(100% - 24px);
  @media ${QUERIES.lg.andDown} {
    width: calc(100% - 80px);
  }
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
  border-radius: ${({ theme }: { theme: Theme }) => theme.clock.br};
  g {
    fill: ${({ theme }: { theme: Theme }) => theme.clock.fill};
  }
`;

const VoteText = styled.div`
  font: var(--body-sm);
  color: ${({ theme }: { theme: Theme }) => theme.voteText.color};
  span {
    display: inline-block;
    color: ${({ theme }: { theme: Theme }) => theme.voteText.spanColor};
    margin-left: 4px;
    letter-spacing: 0.02em;
    min-width: 96px; // 96px is the width of the clock to prevent spacing changing on numbers.
  }
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
  background: ${({ theme }: { theme: Theme }) => theme.numVotes.bg};
  border-radius: 12px;
  > div {
    font: var(--body-sm);
    color: ${({ theme }: { theme: Theme }) => theme.numVotes.color};
  }
`;

const MoreDetailsBlock = styled.div`
  a {
    text-decoration: none;
    font: var(--body-sm);
    color: ${({ theme }: { theme: Theme }) => theme.moreDetails.color};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    path {
      stroke: ${({ theme }: { theme: Theme }) => theme.moreDetails.stroke};
    }
    &:hover {
      opacity: 0.5;
    }
  }
`;
