import styled from "styled-components";

import UpRightArrow from "public/assets/up-right-arrow.svg";
import { Title, Header as BaseHeader } from "components/Widgets";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize } from "hooks";

const VoteParticipation = () => {
  const { width } = useVoteParticipation();
  return (
    <Section>
      <Wrapper>
        <Title>
          Participate as <span>Voter</span>
        </Title>
        <HeaderWrapper>
          {/* <RedCircleFilter /> */}
          <Header>Stake, vote &amp; earn {width >= BREAKPOINTS.md ? <br /> : null} up to 30% APY</Header>
        </HeaderWrapper>

        <ImageBlockRow>
          <ImageBlockWrapper>
            <ImageBlockWhite>
              <img src="/assets/stake-block.svg" alt="stake-block" />
              <ImageTitleRed>Stake</ImageTitleRed>
              <ImageText>Stake your $UMA to help secure UMA’s Optimistic Oracle. </ImageText>
            </ImageBlockWhite>
          </ImageBlockWrapper>
          <ImageBlockWrapper>
            <ImageBlock>
              <img src="/assets/vote-block.svg" alt="vote-block" />
              <ImageTitle>Vote</ImageTitle>
              <ImageText>Token holders who vote correctly and consistently earn higher APYs. </ImageText>
            </ImageBlock>
          </ImageBlockWrapper>
          <ImageBlockWrapper>
            <ImageBlock>
              <img src="/assets/earn-block.svg" alt="earn-block" />
              <ImageTitle>Earn</ImageTitle>
              <ImageText>
                Successful voters will gradually own a higher percentage of the protocol than unsuccessful or inactive
                voters.{" "}
              </ImageText>
            </ImageBlock>
          </ImageBlockWrapper>
        </ImageBlockRow>
        <VoterAppLinkRow>
          <VoterAppLinkBlock>
            <VoterAppLink href="https://vote.umaproject.org" target="_blank" rel="noreferrer">
              Link to voter app
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

function useVoteParticipation() {
  const { width } = useWindowSize();
  return { width };
}

const Section = styled.section`
  background: var(--grey-800);
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

const Header = styled(BaseHeader)`
  margin-top: 65px;
  max-width: 921px;
  @media ${QUERIES.md.andDown} {
    margin: 0 16px;
    max-width: 100%;
  }
  @media ${QUERIES.md.andDown} {
    font: var(--header-sm);
  }
`;

// WIP for filter effect. Not working yet.
// const RedCircleFilter = styled.div`
//   position: absolute;
//   width: 249px;
//   height: 249px;
//   left: 168px;
//   top: 50px;
//   border-radius: 50%;
//   border: 1px solid var(--red);
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
  @media ${QUERIES.md.andDown} {
    flex-direction: column;
    align-self: center;
    width: 100%;
  }
`;

const ImageBlockWrapper = styled.div`
  flex-basis: 33%;
  background: var(--grey-800);
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media ${QUERIES.md.andDown} {
    width: inherit;
  }
`;

const ImageBlock = styled.div`
  padding: 40px;
`;

const ImageBlockWhite = styled(ImageBlock)`
  background-color: var(--white);
  border: 1px solid var(--grey-600);
  @media ${QUERIES.md.andDown} {
    border-right: 0;
    border-left: 0;
  }
`;

const ImageTitle = styled.div`
  color: var(--grey-200);
  font: var(--header-md);
  line-height: 115%;
  margin-top: 40px;
  @media ${QUERIES.md.andDown} {
    font: var(--header-sm);
    margin-top: 48px;
  }
`;

const ImageTitleRed = styled(ImageTitle)`
  color: var(--red);
`;

const ImageText = styled.div`
  font: var(--body-lg);
  color: var(--grey-200);
  margin-top: 16px;
  @media ${QUERIES.md.andDown} {
    font: var(--body-sm);
    margin-top: 12px;
  }
`;

const VoterAppLinkRow = styled.div`
  margin-top: 102px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media ${QUERIES.md.andDown} {
    justify-content: center;

    margin-top: 24px;
  }
`;

const VoterAppLinkBlock = styled.div`
  color: var(--red);
  font: var(--body-lg);
  margin-left: 40px;
  display: inline-block;
`;

const VoterAppLink = styled.a`
  font: var(--body-lg);
  text-decoration: none;
  div {
    margin-left: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 1px solid var(--red);
    border-radius: 8px;
  }
  &:visited {
    color: var(--red);
  }
  &:hover {
    color: var(--grey-100);
    div {
      border-color: var(--grey-100);
      path {
        stroke: var(--grey-100);
      }
    }
  }
`;

export default VoteParticipation;
