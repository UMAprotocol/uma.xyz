import styled from "styled-components";
import Clock from "public/assets/clock.svg";
const VoteTicker = () => {
  return (
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
    </Wrapper>
  );
};

export default VoteTicker;

const Wrapper = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 8px;
  gap: 16px;
  isolation: isolate;

  position: absolute;
  width: 1144px;
  height: 48px;
  left: 148px;
  top: 16px;

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

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
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
`;

const VoteText = styled.div`
  font: var(--body-sm);
  color: var(--grey-150);
  span {
    color: var(--white);
  }
`;
