import {
  headerLgFluid,
  headerLgFluidFontSize,
  headerMdFluid,
  headerMdFluidFontSize,
  headerSmFluid,
  headerSmFluidFontSize,
  mobileAndUnder,
  tabletAndUnder,
} from "constant";
import { motion } from "framer-motion";
import { useLoadSectionRefAndId } from "hooks/helpers/useLoadSectionRefAndId";
import NextLink from "next/link";
import DownArrow from "public/assets/down-arrow.svg";
import OOLogo from "public/assets/oo-logo.svg";
import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { BaseOuterWrapper } from "./Wrappers";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, "");

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
      duration: 0.3,
      delay: 0.1,
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
        duration: 0.3,
        delay: 0.3,
      },
    };
  }

  return (
    <OuterWrapper ref={ref}>
      <Background
        initial={{ opacity: 0, translateX: "-10%", translateY: "10%" }}
        animate={{ opacity: 1, translateX: "0%", translateY: "0%" }}
        transition={{ duration: 0.3 }}
      >
        <Video autoPlay loop muted playsInline>
          <source src="/assets/hero.mp4" type="video/mp4" />
          <source src="/assets/hero.webm" type="video/webm" />
        </Video>
      </Background>
      <BackgroundLines />
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
            duration: 0.1,
            delay: 1.3,
          }}
        >
          <ArrowButton href="#how-it-works" aria-label="Go to next section">
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
`;

const BackgroundLines = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: url("/assets/hero-bg-lines.svg");
`;

const Video = styled.video`
  width: 80%;
  margin-inline: auto;
  object-fit: cover;
  mix-blend-mode: luminosity;

  @media ${mobileAndUnder} {
    width: 100%;
  }
`;

const OuterWrapper = styled(BaseOuterWrapper)`
  position: relative;
  display: grid;
  place-items: center;
  padding-top: 0;
  height: calc(100vh - var(--header-height) - var(--vote-ticker-height));
  width: 100%;
  position: relative;
  background: var(--grey-200);
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
  ${headerLgFluid}
  color: var(--white);
  text-align: center;
  z-index: 1;
  @media ${tabletAndUnder} {
    ${headerMdFluid}
  }
  @media ${mobileAndUnder} {
    ${headerSmFluid}
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
  width: calc(var(--height) * 2);
  height: var(--height);
  --desktop-height: ${headerLgFluidFontSize};
  --tablet-height: ${headerMdFluidFontSize};
  --mobile-height: ${headerSmFluidFontSize};
  --height: var(--desktop-height);

  @media ${tabletAndUnder} {
    --height: var(--tablet-height);
  }

  @media ${mobileAndUnder} {
    --height: var(--mobile-height);
  }
`;
