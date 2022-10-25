import { useRef, useState, useEffect } from "react";
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
import { useIntersectionObserver } from "hooks";

export function Home() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const howItWorksRef = useRef<HTMLDivElement | null>(null);
  const eHeader = useIntersectionObserver(headerRef, {
    threshold: 0.1328,
  });
  const isIntersectingLightArea = !!eHeader?.isIntersecting;
  const eHotItWorks = useIntersectionObserver(howItWorksRef, {
    threshold: 0.49,
  });
  const isIntersectingHowItWorksSection = !!eHotItWorks?.isIntersecting;
  return (
    <Layout>
      <Wrapper>
        <Header isIntersecting={isIntersectingLightArea} activeLink={isIntersectingHowItWorksSection ? 0 : -1} />
        <Hero />
        <div ref={headerRef}>
          <div ref={howItWorksRef}>
            <HowItWorks />
          </div>
          <VoteParticipation />
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
