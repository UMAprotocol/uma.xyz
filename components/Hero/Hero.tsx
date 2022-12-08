import { mobileAndUnder, tabletAndUnder } from "constant";
import NextLink from "next/link";
import DownArrow from "public/assets/down-arrow.svg";
import heroAnimation from "public/assets/lottie/hero_animation.json";
import OOLogo from "public/assets/oo-logo.svg";
import OOLogoMobile from "public/assets/oo-mobile.svg";
import Lottie from "react-lottie";
import styled, { keyframes } from "styled-components";

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
  height: calc(100% - var(--header-height) - var(--vote));
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

const textReveal = keyframes`
  0% {opacity: 0; transform: translateY(30px);}
  100% {opacity: 1; transform: translateY(0px);}
`;

const animateText = keyframes`
  0% {transform: rotate(10deg) }
  100% {transform: rotate(0deg)  }
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
  animation: ${textReveal} 1s ease-in-out;
  animation-delay: 400ms;
  opacity: 1;
  > span {
    animation: ${animateText} 1s ease-in-out;
    animation-delay: 400ms;
  }
  @media ${tabletAndUnder} {
    font-size: 8.5vw;
    line-height: 115%;
    margin: 0 17px;
  }
  @media ${mobileAndUnder} {
    font-size: 8.5vw;
    line-height: 115%;
  }
  path {
    fill: var(--color-white);
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
  margin: 32px 0 0;
  font: var(--body-xl);
  color: var(--grey-500);
  text-align: center;
  animation: ${textReveal} 1s ease-in-out;
  animation-delay: 200ms;
  @media ${mobileAndUnder} {
    margin: 32px 16px 0;
  }
`;

const svgAnimation = keyframes`
  0% {transform: translateY(0); opacity: 1;}
  10% {transform: translateY(5px); opacity: .5;}
  20% {transform: translateY(10px); opacity: 0;}
  30% {transform: translateY(-10px); opacity: 0;}
  35% {transform: translateY(-10px); opacity: .25;}
  40% {transform: translateY(-5px); opacity: .5;}
  50% {transform: translateY(0); opacity: 1;}
  100% {transform: translateY(0); opacity: 1;}
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
  animation: ${textReveal} 1s ease-in-out;
  animation-delay: 400ms;
  opacity: 1;
  > svg {
    animation: ${svgAnimation} 2s linear infinite;
    animation-delay: 600ms;
  }
`;

const OOLogoIcon = styled(OOLogo)`
  @media ${mobileAndUnder} {
    display: none;
  }
`;

const OOLogoIconMobile = styled(OOLogoMobile)`
  display: none;

  @media ${mobileAndUnder} {
    display: block;
  }
`;
