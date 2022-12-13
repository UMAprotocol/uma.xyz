import { BaseOuterWrapper } from "components/style/Wrappers";
import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "constant";
import NextLink from "next/link";
import DownArrow from "public/assets/down-arrow.svg";
import heroAnimation from "public/assets/lottie/hero_animation.json";
import OOLogo from "public/assets/oo-logo.svg";
import Lottie from "react-lottie";
import styled from "styled-components";

export function Hero() {
  return (
    <OuterWrapper>
      <Background>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: heroAnimation,
          }}
        />
      </Background>
      <InnerWrapper>
        <Title>
          A decentralized <br /> truth
          <OOIconWrapper>
            <OOLogoIcon />
          </OOIconWrapper>
          machine
        </Title>
        <Subheader>
          UMA&apos; s optimistic oracle (OO) can record any verifiable truth or data onto a blockchain.
        </Subheader>
        <ArrowButton href="#how-it-works">
          <DownArrow />
        </ArrowButton>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.15;

  @media ${mobileAndUnder} {
    top: 20%;
  }
`;

const OuterWrapper = styled(BaseOuterWrapper)`
  padding-top: 0;
  height: calc(100% - var(--header-height) - var(--vote-ticker-height));
  position: relative;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: var(--page-width);
  margin: 0 auto;
  padding-top: 153px;
  padding-bottom: 96px;
`;

const Title = styled.div`
  z-index: 1;
  font: var(--header-lg);
  color: var(--white);
  @media ${tabletAndUnder} {
    font-size: 8.5vw;
    line-height: 115%;
    margin: 0 17px;
  }
  @media ${mobileAndUnder} {
    font-size: 8.5vw;
    line-height: 115%;
  }
`;

const Subheader = styled.div`
  z-index: 1;
  margin: 32px 0 0;
  font: var(--body-xl);
  color: var(--grey-500);
  text-align: center;
  @media ${mobileAndUnder} {
    margin: 32px 16px 0;
  }
`;

const ArrowButton = styled(NextLink)`
  margin-top: 179px;
  background-color: var(--grey-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  isolation: isolate;
  border: 1px solid var(--red);
  border-radius: 8px;
  width: 48px;
  height: 48px;
  opacity: 1;
`;

const OOIconWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-inline: 16px;
  @media ${mobileAndUnder} {
    margin-inline: 8px;
  }
`;

const OOLogoIcon = styled(OOLogo)`
  path {
    fill: var(--white);
  }
  width: var(--width);
  height: var(--height);
  --desktop-width: 164px;
  --desktop-height: 82px;
  --laptop-width: 124px;
  --laptop-height: 62px;
  --tablet-width: 114px;
  --tablet-height: 57px;
  --mobile-width: 64px;
  --mobile-height: 32px;
  --width: var(--desktop-width);
  --height: var(--desktop-height);

  @media ${laptopAndUnder} {
    --width: var(--laptop-width);
    --height: var(--laptop-height);
  }

  @media ${tabletAndUnder} {
    --width: var(--tablet-width);
    --height: var(--tablet-height);
  }

  @media ${mobileAndUnder} {
    --width: var(--mobile-width);
    --height: var(--mobile-height);
  }
`;
