import { useRef, useState, useCallback } from "react";
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
  const builderRef = useRef<HTMLDivElement | null>(null);
  const eHotItWorks = useIntersectionObserver(howItWorksRef, {
    threshold: 0.27,
  });
  const eVoteParticipation = useIntersectionObserver(voteParticipationRef, {
    threshold: 0.47,
  });
  const eBuilder = useIntersectionObserver(builderRef, {
    threshold: 0.47,
  });
  const isIntersectingHowItWorksSection = !!eHotItWorks?.isIntersecting;
  const isIntersectingVoteParticipationSection = !!eVoteParticipation?.isIntersecting;
  const isIntersectingBuilderSection = !!eBuilder?.isIntersecting;

  const [cp, setCp] = useState(0);
  useScrollPosition(({ currPos }) => {
    setCp(Math.abs(currPos.y));
  }, []);

  const currentActiveLink = useCallback(() => {
    if (isIntersectingHowItWorksSection) return 0;
    if (isIntersectingVoteParticipationSection) return 1;
    if (isIntersectingBuilderSection) return 2;
    return -1;
  }, [isIntersectingHowItWorksSection, isIntersectingVoteParticipationSection, isIntersectingBuilderSection]);

  return (
    <Layout>
      <Wrapper>
        <Header activeLink={currentActiveLink()} />
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
          <div ref={builderRef}>
            <Builder />
          </div>
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
