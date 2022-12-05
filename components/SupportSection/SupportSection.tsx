import { Title as BaseTitle, Wrapper as BaseWrapper } from "components/Widgets";
import { largeAndUnder, mediumAndUnder, tabletAndUnder } from "constant/breakpoints";
import UpRightArrowLg from "public/assets/up-right-arrow-lg.svg";
import styled from "styled-components";

const SupportSection = () => {
  return (
    <Section>
      <BackgroundLayer autoPlay loop muted>
        <source src={"/assets/uma.xyz.mp4"} type="video/mp4" />
      </BackgroundLayer>
      <OverlayText />
      <Overlay />
      <Wrapper>
        <TextColumn>
          <Title>Supported by the Risk Labs Foundation</Title>
          <Subtitle>
            Risk Labs is the foundation and team behind UMA. Risk Labs’ mission is to make global markets universally
            fair, accessible, secure and decentralized.
          </Subtitle>
        </TextColumn>
        <ButtonColumn>
          <ButtonGroup>
            <div>
              <ButtonLink href="https://jobs.lever.co/umaproject" target="_blank" rel="noreferrer">
                <UpRightArrowLg />
              </ButtonLink>
              <ButtonText>Careers</ButtonText>
            </div>
          </ButtonGroup>
          <ButtonGroup>
            <div>
              <ButtonLink href="https://docs.umaproject.org/" target="_blank" rel="noreferrer">
                <UpRightArrowLg />
              </ButtonLink>
              <ButtonText>About</ButtonText>
            </div>
          </ButtonGroup>
        </ButtonColumn>
      </Wrapper>
    </Section>
  );
};

export default SupportSection;

const Section = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  position: relative;
`;

const Wrapper = styled(BaseWrapper)`
  z-index: 100;
  pointer-events: all;
  padding: 261px 0 234px;
  background: transparent;
  @media ${largeAndUnder} {
    padding: 160px 64px 200px;
  }

  @media ${tabletAndUnder} {
    padding: 130px 24px 118px;
  }
`;

const Title = styled(BaseTitle)`
  max-width: 562px;
  font: var(--header-md);
  border-bottom: none;
  z-index: 100;
  @media ${mediumAndUnder} {
    max-width: 400px;
    font: var(--header-sm);
  }
`;

const Subtitle = styled.h3`
  font: var(--body-lg);
  max-width: 466px;
  margin-left: 0;
  margin-right: 0;
  z-index: 100;

  @media ${tabletAndUnder} {
    margin-left: 15px;
    margin-right: 15px;
  }
  @media ${mediumAndUnder} {
    max-width: 400px;
    font: var(--body-md);
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 0;
  margin-right: 0;
  @media ${tabletAndUnder} {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  gap: 24px;
  margin-left: 0;
  margin-right: 0;
  @media ${tabletAndUnder} {
    margin-top: 36px;
    margin-left: 15px;
    margin-right: 15px;
    gap: 23px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  @media ${tabletAndUnder} {
    margin-left: 15px;
    margin-right: 15px;
  }
  div,
  span,
  a,
  path {
    transition: all 0.3s ease-in-out;
  }
  > div {
    display: inline-flex;
    gap: 20px;
    align-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    left: 0;
    &:hover {
      gap: 16px;
      span {
        color: var(--red);
      }
      a {
        background: var(--red);
        border-color: var(--red);
      }
      path {
        stroke: var(--white);
      }
    }
  }
`;

const ButtonLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--grey-200);
  border-radius: 10px;
  path {
    stroke: var(--grey-200);
  }
`;

const ButtonText = styled.span`
  font: var(--header-sm);
  color: var(--grey-200);
  line-height: 115%;
  @media ${mediumAndUnder} {
    font-size: 32px;
  }
`;

const BackgroundLayer = styled.video`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin-left: auto;
  z-index: 0 !important;
  mix-blend-mode: luminosity !important;
  pointer-events: none;
  object-fit: cover;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
`;

const Overlay = styled.div`
  background: linear-gradient(0deg, #f0f0f0 0%, rgba(255, 255, 255, 0.45) 50%, #ffffff 100%);
  max-width: var(--max-width);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  margin-left: auto;
  margin-right: auto;
`;

const OverlayText = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  left: 0;
  top: 0;
  width: 60%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  max-width: calc(var(--max-width) - 40%);
`;
