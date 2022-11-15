import { useContext, useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import OOLogo from "public/assets/oo-logo.svg";
import OOMobileLogo from "public/assets/oo-mobile.svg";
import DownArrow from "public/assets/down-arrow.svg";
import { useIsMounted } from "hooks";
import { HeaderContext } from "contexts";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize } from "hooks";
const Hero = () => {
  const { sectionRef, isMounted, width } = useHero();
  return (
    <Section ref={isMounted ? sectionRef : null}>
      <Wrapper>
        <Title>A decentralized</Title>
        <Title>
          truth
          <div>{width >= BREAKPOINTS.md ? <OOLogo /> : <OOMobileLogo />}</div>
          machine
        </Title>
        <Subheader>
          UMA’s optimistic oracle (OO) can record any {width >= BREAKPOINTS.md ? <br /> : null} verifiable truth or data
          onto a blockchain.
        </Subheader>
        <ArrowButton>
          <DownArrow />
        </ArrowButton>
      </Wrapper>
    </Section>
  );
};

export default Hero;

function useHero() {
  const { updateRef, lightRefs } = useContext(HeaderContext);
  const isMounted = useIsMounted();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [revealText, setRevealText] = useState(false);
  const [revealHeader, setRevealHeader] = useState(false);

  // Run reveal animation on mount
  useEffect(() => {
    setTimeout(() => {
      setRevealText(true);
    }, 4000);
    setTimeout(() => {
      setRevealHeader(true);
    }, 5500);
  }, []);

  useEffect(() => {
    if (isMounted() && !lightRefs.heroSection.current) {
      updateRef(sectionRef, "heroSection");
    }
  }, [isMounted, updateRef, lightRefs]);
  const { width } = useWindowSize();
  return {
    updateRef,
    sectionRef,
    isMounted: isMounted(),
    width,
    revealText,
    revealHeader,
  };
}

const animateBackground = keyframes`
  0% {bottom: -75%; left: -75%; }
  100% {bottom: 0%; left: 0%; }
`;

const Section = styled.div`
  background: var(--grey-200);
  width: 100%;
  background-color: #1e1e1e;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/assets/hero-bg-img.svg");
    background-repeat: no-repeat;
    background-position: center bottom;
    z-index: 100;
    bottom: 0;
    left: 0;
    animation: ${animateBackground} 3s ease-in-out;
  }
`;

const Wrapper = styled.div`
  background: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-section-width);
  margin: 0 auto;
  padding-top: 153px;
  padding-bottom: 96px;
`;

const Title = styled.div`
  font: var(--header-lg);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  letter-spacing: -0.01em;
  line-height: 100%;
  @media ${QUERIES.tb.andDown} {
    font-size: 8.5vw;
    line-height: 115%;
    margin: 0 17px;
  }
  @media ${QUERIES.md.andDown} {
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
    @media ${QUERIES.md.andDown} {
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
  @media ${QUERIES.md.andDown} {
    margin: 32px 16px 0;
  }
`;

const ArrowButton = styled.button`
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
`;
