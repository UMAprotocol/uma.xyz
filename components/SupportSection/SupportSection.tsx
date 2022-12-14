import { BaseOuterWrapper } from "components/style/Wrappers";
import { mobileAndUnder, tabletAndUnder } from "constant";
import UpRightArrowLg from "public/assets/up-right-arrow-lg.svg";
import styled from "styled-components";

export function SupportSection() {
  return (
    <OuterWrapper>
      <Background>
        <Video autoPlay loop muted playsInline>
          <source src="/assets/uma.xyz.mp4" type="video/mp4" />
        </Video>
        <RearOverlay />
        <FrontOverlay />
      </Background>
      <InnerWrapper>
        <TextWrapper>
          <Title>Supported by the Risk Labs Foundation</Title>
          <Subtitle>
            Risk Labs is the foundation and team behind UMA. Risk Labs&apos; mission is to make global markets
            universally fair, accessible, secure and decentralized.
          </Subtitle>
        </TextWrapper>
        <LinksWrapper>
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
        </LinksWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const Background = styled.div`
  isolation: isolate;
`;

const FrontOverlay = styled.div`
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
  pointer-events: none;
  max-width: calc(var(--max-width) - 40%);
`;

const RearOverlay = styled.div`
  background: linear-gradient(0deg, #f0f0f0 0%, rgba(255, 255, 255, 0.45) 50%, #ffffff 100%);
  max-width: var(--max-width);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Video = styled.video`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: luminosity;
  pointer-events: none;
  object-fit: cover;
`;

const OuterWrapper = styled(BaseOuterWrapper)`
  background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  min-height: calc(100vh - var(--header-blur-height));
  position: relative;
`;

const InnerWrapper = styled.div`
  position: relative;
  pointer-events: all;
  max-width: var(--page-width);
  margin-inline: auto;
  z-index: 1;
`;

const Title = styled.h1`
  margin-bottom: 24px;
  font: var(--header-md);
  @media ${mobileAndUnder} {
    font: var(--header-sm);
  }
`;

const TextWrapper = styled.div`
  max-width: 562px;
  font: var(--header-md);
  @media ${mobileAndUnder} {
    max-width: 400px;
  }
`;

const Subtitle = styled.h2`
  font: var(--body-lg);
  margin-bottom: 74px;
  @media ${mobileAndUnder} {
    font: var(--body-md);
  }
`;

const LinksWrapper = styled.div`
  margin-top: 64px;
  gap: 24px;
  @media ${tabletAndUnder} {
    margin-top: 36px;
    gap: 23px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-bottom: 24px;
  div,
  span,
  a,
  path {
    transition: all var(--animation-duration) ease-in-out;
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
  @media ${mobileAndUnder} {
    font-size: 32px;
  }
`;
