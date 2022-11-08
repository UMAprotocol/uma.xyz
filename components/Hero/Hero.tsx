import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
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
  };
}

const Section = styled.div`
  background: var(--grey-200);
  width: 100%;
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
  @media ${QUERIES.tb.andDown} {
    font-size: 8.5vw;
    line-height: 115%;
    margin: 0 17px;
  }
  @media ${QUERIES.md.andDown} {
    font-size: 8.5vw;
    line-height: 115%;
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
  margin-top: 193px;
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
  width: 40px;
  height: 40px;
`;
