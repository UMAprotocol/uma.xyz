import styled from "styled-components";
import StakeBlock from "public/assets/stake-block.svg";
import VoteBlock from "public/assets/vote-block.svg";
import EarnBlock from "public/assets/earn-block.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
const VoteParticipation = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          Participate as <span>Voter</span>
        </Title>
        <HeaderWrapper>
          {/* <RedCircleFilter /> */}
          <Header>
            Stake, vote &amp; earn <br /> up to 30% APY
          </Header>
        </HeaderWrapper>

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
        <VoterAppLinkRow>
          <VoterAppLinkBlock>
            Link to voter app
            <VoterAppLink href="https://vote.umaproject.org" target="_blank" rel="noreferrer">
              <div>
                <UpRightArrow />
              </div>
            </VoterAppLink>
          </VoterAppLinkBlock>
        </VoterAppLinkRow>
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
  position: relative;
  background: -webkit-radial-gradient(center, 50% 50%, red, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* background: radial-gradient(circle at 50% 100%, #e66465 50%, black 50%); */
`;

// WIP for filter effect. Not working yet.
// const RedCircleFilter = styled.div`
//   position: absolute;
//   width: 249px;
//   height: 249px;
//   left: 168px;
//   top: 50px;
//   border-radius: 50%;
//   border: 1px solid var(--red-500);
//   background: -webkit-radial-gradient(center, 50% 50%, red, yellow);
//   background-clip: text;
// `;

const HeaderWrapper = styled.div`
  position: relative;
`;

const ImageBlockRow = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
  svg {
    fill: var(--white);
  }
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

const VoterAppLinkRow = styled.div`
  margin-top: 102px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const VoterAppLinkBlock = styled.div`
  color: var(--red-500);
  font: var(--text-md-20);
  margin-left: 40px;
`;

const VoterAppLink = styled.a`
  display: inline-block;
  margin-left: 12px;
  font: var(--text-md-20);
  > div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;

    border: 1px solid var(--red-500);
    border-radius: 8px;
  }
`;

export default VoteParticipation;
