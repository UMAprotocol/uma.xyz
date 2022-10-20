import styled from "styled-components";
import Clock from "public/assets/clock.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
const VoteTicker = () => {
  return (
    <Section>
      <Wrapper>
        <VoteBlock>
          <ClockBG>
            <Clock />
          </ClockBG>
          <VoteText>
            Time to commit vote:
            <span>7h 32m 21s</span>
          </VoteText>
        </VoteBlock>
        <MoreDetailsBlock>
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
const Section = styled.div`
  width: 100%;
  background: inherit;
  padding-top: 16px;
`;
const Wrapper = styled.div`
  /* Auto layout */

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

  /* Gray/Gray-200 */

  background: #322f33;
  border-radius: 8px;
`;

const VoteBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  /* Inside auto layout */

  /* flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1; */
`;

const ClockBG = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 3px 4px; */
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Red-15 */

  background: rgba(255, 74, 74, 0.15);
  border-radius: 28px;
  g {
    fill: #503236;
  }
`;

const VoteText = styled.div`
  font: var(--body-sm);
  color: #b0afb3;
  span {
    color: var(--white);
    margin-left: 4px;
  }
  padding-right: 16px;
  border-right: 1px solid hsl(255, 2%, 64%, 0.2);
`;

const MoreDetailsBlock = styled.div`
  font: var(--body-sm);
  color: #b0afb3;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  path {
    stroke: #b0afb3;
  }
`;
