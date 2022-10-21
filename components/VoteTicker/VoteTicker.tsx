import { useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "public/assets/clock.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { formatDateTimeFromUTC } from "./utils";
import useInterval from "hooks/helpers/useInterval";
type theme = "light" | "dark";

interface Props {
  theme: theme;
}

const VoteTicker: React.FC<Props> = ({ theme }) => {
  const { timeRemaining } = useVoteTicker();
  return (
    <Section theme={theme}>
      <Wrapper theme={theme}>
        <VoteBlock theme={theme}>
          <ClockBG theme={theme}>
            <Clock />
          </ClockBG>
          <VoteText theme={theme}>
            Time to commit vote:
            <span>{timeRemaining}</span>
          </VoteText>
        </VoteBlock>
        <MoreDetailsBlock theme={theme}>
          <span>More details</span>
          <a href="https://vote.umaproject.org/" target="_blank" rel="noreferrer">
            <UpRightArrow />
          </a>
        </MoreDetailsBlock>
      </Wrapper>
    </Section>
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

interface IStyledProps {
  theme: theme;
}

const Section = styled.div<IStyledProps>`
  width: 100%;
  background: ${({ theme }) => (theme === "dark" ? "inherit" : "var(--grey-100)")};
  padding-top: ${({ theme }) => (theme === "dark" ? "16px" : "48px")}; ;
`;

const Wrapper = styled.div<IStyledProps>`
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
  background: ${({ theme }) => (theme === "dark" ? "var(--black-100)" : "var(--white-50)")};
  border-radius: 8px;
`;

const VoteBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

const ClockBG = styled.div<IStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 32px;
  height: 32px;
  background: var(--red-510-opacity-15);
  border-radius: ${({ theme }) => (theme === "dark" ? "16px" : "4px")};
  g {
    fill: var(--red-550);
    fill: ${({ theme }) => (theme === "dark" ? "var(--red-550)" : "var(--red-510-opacity-15)")};
  }
`;

const VoteText = styled.div<IStyledProps>`
  font: var(--body-sm);
  color: ${({ theme }) => (theme === "dark" ? "var(--grey-910)" : "var(--black-150)")};
  span {
    color: ${({ theme }) => (theme === "dark" ? "var(--white)" : "var(--red-550)")};
    color: var(--red-500);
    margin-left: 4px;
  }
  padding-right: 16px;
  border-right: ${({ theme }) =>
    theme === "dark" ? "1px solid var(--grey-opacity-20)" : "1px solid var(--black-150-opacity-20)"};
`;

const MoreDetailsBlock = styled.div<IStyledProps>`
  font: var(--body-sm);
  color: ${({ theme }) => (theme === "dark" ? "var(--grey-910)" : "var(--black-150)")};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  path {
    stroke: ${({ theme }) => (theme === "dark" ? "var(--grey-910)" : "var(--black-150)")};
  }
`;
