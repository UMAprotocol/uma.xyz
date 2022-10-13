import styled from "styled-components";
import StakeBlock from "public/assets/stake-block.svg";
import VoteBlock from "public/assets/vote-block.svg";
import EarnBlock from "public/assets/earn-block.svg";
const VoteParticipation = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          Participate as <span>Voter</span>
        </Title>
        <Header>Stake, vote &amp; earn up to 30% APY</Header>
        <ImageBlockRow>
          <ImageBlockWrapper>
            <ImageBlockWhite>
              <StakeBlock />
              <ImageTitleRed>Stake</ImageTitleRed>
              <ImageText>
                As an UMA voter you receive token rewards, consectetur adipiscing elit. Purus egestas odio.
              </ImageText>
            </ImageBlockWhite>
          </ImageBlockWrapper>
          <ImageBlockWrapper>
            <ImageBlock>
              <VoteBlock />
              <ImageTitle>Vote</ImageTitle>
              <ImageText>
                As an UMA voter you receive token rewards, consectetur adipiscing elit. Purus egestas odio.
              </ImageText>
            </ImageBlock>
          </ImageBlockWrapper>
          <ImageBlockWrapper>
            <ImageBlock>
              <EarnBlock />
              <ImageTitle>Earn</ImageTitle>
              <ImageText>
                As an UMA voter you receive token rewards, consectetur adipiscing elit. Purus egestas odio.
              </ImageText>
            </ImageBlock>
          </ImageBlockWrapper>
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
`;

const ImageBlockWrapper = styled.div`
  flex-basis: 33%;
  background: var(--white-50);
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ImageBlock = styled.div`
  padding: 40px;
`;

const ImageBlockWhite = styled(ImageBlock)`
  background-color: var(--white);
  border: 1px solid var(--grey-150);
`;

const ImageTitle = styled.div`
  color: var(--black);
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 115%;
`;

const ImageTitleRed = styled(ImageTitle)`
  color: var(--red-500);
`;

const ImageText = styled.div`
  font: var(--text-md-20);
  color: var(--black);
`;

export default VoteParticipation;
