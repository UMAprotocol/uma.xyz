import { useRef, useState, useCallback, useEffect } from "react";
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
import { useIntersectionObserver, useScrollPosition, useIsMounted } from "hooks";
import useVoteTickerData from "hooks/queries/useVoteTickerData";
import { VoteTickerData } from "queries/getVoteTickerData";

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
  const isMounted = useIsMounted();

  // Make sure to scroll to top on page load
  useEffect(() => {
    if (isMounted()) {
      window.scrollTo(0, 0);
    }
  }, [isMounted]);

  const result = useVoteTickerData();
  const data: VoteTickerData = result.data;
  console.log("data", data);
  return (
    <Layout>
      <Wrapper>
        <Header
          activeLink={currentActiveLink()}
          phase={data ? data.phase : null}
          numVotes={data ? Number(data.activeRequests) : 0}
        />
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
            <VoteParticipation apy={data ? data.apy : ""} />
          </div>
          <div ref={builderRef}>
            <Builder />
          </div>
          <Projects />
          <SupportSection />
          <Footer phase={data ? data.phase : null} numVotes={data ? Number(data.activeRequests) : 0} />
        </div>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: var(--grey-200);
`;
