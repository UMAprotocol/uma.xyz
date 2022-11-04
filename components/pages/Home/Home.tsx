import { useRef, useState } from "react";
import {
  Layout,
  Header,
  Hero,
  HowItWorks,
  VoteParticipation,
  Projects,
  Builder,
  SupportSection,
  Footer,
} from "components";
import styled from "styled-components";
import { useIntersectionObserver, useScrollPosition } from "hooks";

export function Home() {
  const headerThemeChangeRef = useRef<HTMLDivElement | null>(null);
  const howItWorksRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const voteParticipationRef = useRef<HTMLDivElement | null>(null);
  const eHotItWorks = useIntersectionObserver(howItWorksRef, {
    threshold: 0.47,
  });
  const isIntersectingHowItWorksSection = !!eHotItWorks?.isIntersecting;
  const [cp, setCp] = useState(0);
  useScrollPosition(({ currPos }) => {
    setCp(Math.abs(currPos.y));
  }, []);
  return (
    <Layout>
      <Wrapper>
        <Header activeLink={isIntersectingHowItWorksSection ? 0 : -1} />
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={headerThemeChangeRef}>
          <div ref={howItWorksRef}>
            <HowItWorks
              currentPosition={cp}
              heightFromTop={heroRef.current ? heroRef.current.getBoundingClientRect().height : 0}
            />
          </div>
          <div ref={voteParticipationRef}>
            <VoteParticipation />
          </div>
          <Builder />
          <Projects />
          <SupportSection />
          <Footer />
        </div>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: var(--grey-200);
`;
