import { mobileAndUnder, tabletAndUnder } from "constant";
import NextLink from "next/link";
import DownArrow from "public/assets/down-arrow.svg";
import heroAnimation from "public/assets/lottie/hero_animation.json";
import OOLogo from "public/assets/oo-logo.svg";
import OOLogoMobile from "public/assets/oo-mobile.svg";
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
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </Background>
      <InnerWrapper>
        <Title>
          <span>A decentralized</span>
        </Title>
        <Title>
          <span>truth</span>
          <OOLogoIcon />
          <OOLogoIconMobile />
          <span>machine</span>
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
`;

const OuterWrapper = styled.section`
  height: calc(100% - var(--header-height) - var(--vote-ticker-height));
  position: relative;
  scroll-snap-align: start;
  scroll-margin-top: calc(var(--header-height) + var(--vote-ticker-height));
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
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  letter-spacing: -0.01em;
  line-height: 100%;
  opacity: 1;
  @media ${tabletAndUnder} {
    font-size: 8.5vw;
    line-height: 115%;
    margin: 0 17px;
  }
  @media ${mobileAndUnder} {
    font-size: 8.5vw;
    line-height: 115%;
  }
  div {
    margin: 20px 12px 0;
    display: flex;
    align-items: center;
    align-self: center;
    @media ${mobileAndUnder} {
      height: auto;
      width: 100%;
      margin: 0 10px 0;
      svg {
        width: 100%;
        height: auto;
      }
    }
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

const OOLogoIcon = styled(OOLogo)`
  margin-inline: 12px;
  path {
    fill: var(--white);
  }
  @media ${mobileAndUnder} {
    display: none;
  }
`;

const OOLogoIconMobile = styled(OOLogoMobile)`
  display: none;
  path {
    fill: var(--white);
  }
  @media ${mobileAndUnder} {
    display: block;
  }
`;
