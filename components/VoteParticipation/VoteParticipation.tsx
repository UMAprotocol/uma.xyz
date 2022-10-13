import styled from "styled-components";

const VoteParticipation = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          Participate as <span>Voter</span>
        </Title>
        <Header>Stake, vote &amp; earn up to 30% APY</Header>
        <ImageBlockRow>
          <ImageBlock></ImageBlock>
          <ImageBlock></ImageBlock>
          <ImageBlock></ImageBlock>
        </ImageBlockRow>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  background: var(--white-50);
  width: 100%;
`;
const Wrapper = styled.div`
  background-color: inherit;
  width: 100%;
  max-width: var(--max-section-width);
  margin: 0 auto;
  padding-top: 85px;
  padding-bottom: 130px;
`;

const Title = styled.div`
  font: var(--text-xl);
  color: var(--black);
  > span {
    color: var(--red-500);
  }
`;

const Header = styled.div`
  margin-top: 65px;
  font: var(--text-xxl);
  width: 921px;
  letter-spacing: -0.01em;
`;

const ImageBlockRow = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
`;

const ImageBlock = styled.div`
  padding: 40px;
  background: var(--white-50);
  border: 1px solid transparent;
  &:first-of-type {
    background-color: var(--white);
    border: 1px solid var(--grey-150);
  }
`;

export default VoteParticipation;
