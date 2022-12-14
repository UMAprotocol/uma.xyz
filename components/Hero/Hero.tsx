import { LottieAnimation } from "components/LottieAnimation/LottieAnimation";
import { BaseOuterWrapper } from "components/style/Wrappers";
import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "constant";
import { motion, useInView } from "framer-motion";
import { useAddHashToUrl } from "hooks/helpers/useAddHashToUrl";
import NextLink from "next/link";
import DownArrow from "public/assets/down-arrow.svg";
import OOLogo from "public/assets/oo-logo.svg";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  useAddHashToUrl("", ref);
  const [animationData, setAnimationData] = useState<object>();

  useEffect(() => {
    void import("public/assets/lottie/hero.json").then(setAnimationData);
  }, []);

  const headerAnimation = {
    initial: {
      opacity: 0,
      translateY: "20%",
    },
    animate: {
      opacity: 1,
      translateY: "0%",
    },
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  };

  function makeHeaderRotateAnimation(degrees: number) {
    return {
      initial: {
        rotate: `${degrees}deg`,
      },
      animate: {
        rotate: "0deg",
      },
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    };
  }

  return (
    <OuterWrapper ref={ref}>
      <Background
        initial={{ opacity: 0, translateX: "-10%", translateY: "10%" }}
        animate={{ opacity: 0.15, translateX: "0%", translateY: "0%" }}
        transition={{ duration: 0.5 }}
      >
        <LottieHeroAnimation play={isInView} animationData={animationData} />
      </Background>
      <InnerWrapper>
        <HeaderWrapper {...headerAnimation}>
          <Header>
            <motion.div {...makeHeaderRotateAnimation(-3)}>A decentralized </motion.div>
            <motion.span {...makeHeaderRotateAnimation(-6)}>truth</motion.span>
            <OOIconWrapper {...makeHeaderRotateAnimation(8)}>
              <OOLogoIcon />
            </OOIconWrapper>
            <motion.span {...makeHeaderRotateAnimation(4)}>machine</motion.span>
          </Header>
          <Subheader>
            UMA&apos; s optimistic oracle (OO) can record any verifiable truth or data onto a blockchain.
          </Subheader>
        </HeaderWrapper>
        <ArrowButtonWrapper
          initial={{
            opacity: 0,
            translateY: "50%",
          }}
          animate={{
            opacity: 1,
            translateY: "0%",
          }}
          transition={{
            duration: 0.3,
            delay: 1.5,
          }}
        >
          <ArrowButton href="#how-it-works">
            <ArrowIcon />
          </ArrowButton>
        </ArrowButtonWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const Background = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.15;
`;

const OuterWrapper = styled(BaseOuterWrapper)`
  display: grid;
  place-items: center;
  padding-top: 0;
  height: calc(100vh - var(--header-height) - var(--vote-ticker-height));
  width: 100%;
  position: relative;
  background: var(--grey-200);
  background-image: url("assets/hero-bg-lines.svg");
  overflow: clip;
`;

const InnerWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 20%;
  max-width: var(--page-width);
  height: 100%;
  margin-inline: auto;
`;

const HeaderWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media ${mobileAndUnder} {
    font: var(--header-sm);
    margin-bottom: 12px;
  }
`;

const Header = styled(motion.h1)`
  font: var(--header-lg);
  color: var(--white);
  text-align: center;
  z-index: 1;
  @media ${tabletAndUnder} {
    font: var(--header-md);
  }
`;

const Subheader = styled(motion.h2)`
  z-index: 1;
  margin-inline: auto;
  max-width: min(562px, 80%);
  font: var(--body-xl);
  color: var(--grey-500);
  text-align: center;
  @media ${tabletAndUnder} {
    font: var(--body-lg);
  }
  @media ${mobileAndUnder} {
    font: var(--body-md);
  }
`;

const arrowAnimation = keyframes`
  0%, 80%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  20% {
    opacity: 0;
    transform: translateY(100%);
  }
  60% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const ArrowIcon = styled(DownArrow)`
  animation: ${arrowAnimation} 2s infinite ease-in-out;
  animation-delay: 3s;
`;

const ArrowButtonWrapper = styled(motion.div)`
  align-self: start;
`;

const ArrowButton = styled(NextLink)`
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
  transition: box-shadow var(--animation-duration), background-color var(--animation-duration);

  &:hover {
    background: var(--red-510-opacity-15);
    box-shadow: 0px 0px 50px 0px var(--red);
  }
`;

const OOIconWrapper = styled(motion.span)`
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
  --desktop-width: 166px;
  --desktop-height: 83px;
  --laptop-width: 126px;
  --laptop-height: 64px;
  --tablet-width: 116px;
  --tablet-height: 58px;
  --mobile-width: 66px;
  --mobile-height: 36px;
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

const LottieHeroAnimation = styled(LottieAnimation)`
  width: 80%;
  margin-inline: auto;
`;
