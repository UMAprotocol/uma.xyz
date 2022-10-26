import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import OOLogo from "public/assets/oo-logo.svg";
import DownArrow from "public/assets/down-arrow.svg";
import { useIsMounted } from "hooks";
import { HeaderContext } from "contexts";

const Hero = () => {
  const { sectionRef, isMounted } = useHero();
  return (
    <Section ref={isMounted ? sectionRef : null}>
      <Wrapper>
        <Title>A decentralized</Title>
        <Title>
          truth
          <span>
            <OOLogo />
          </span>
          machine
        </Title>
        <Subheader>
          The Optimistic Oracle (OO) provides decentralized truth in a world where people <br /> have to rely on
          questionable third-parties for centralized truth.
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
  const { updateRef } = useContext(HeaderContext);
  const isMounted = useIsMounted();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isMounted()) {
      updateRef(sectionRef, "heroSection");
    }
  }, [isMounted()]);
  return {
    updateRef,
    sectionRef,
    isMounted: isMounted(),
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
  span {
    margin: 20px 12px 0;
    display: flex;
    align-items: center;
  }
`;

const Subheader = styled.div`
  margin-top: 32px;
  font: var(--body-lg);
  color: var(--grey-500);
  text-align: center;
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
