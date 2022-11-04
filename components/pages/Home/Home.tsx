import { useRef, useState, useEffect, useCallback, MutableRefObject } from "react";
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

export function Home() {
  const headerThemeChangeRef = useRef<HTMLDivElement | null>(null);
  const howItWorksRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const voteParticipationRef = useRef<HTMLDivElement | null>(null);
  const builderRef = useRef<HTMLDivElement | null>(null);
  const eHotItWorks = useIntersectionObserver(howItWorksRef, {
    threshold: 0.37,
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

  const { topOfHowItWorks, topOfVoteParticipation, topOfBuilder } = useHome(
    howItWorksRef,
    voteParticipationRef,
    builderRef
  );
  // console.log("top", topOfHowItWorks, topOfVoteParticipation, topOfBuilder);

  return (
    <Layout>
      <Wrapper>
        <Header
          activeLink={currentActiveLink()}
          topOfHowItWorks={topOfHowItWorks}
          topOfVoteParticipation={topOfVoteParticipation}
          topOfBuilder={topOfBuilder}
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

function useHome(
  howItWorksRef: MutableRefObject<HTMLDivElement | null>,
  voteParticipationRef: MutableRefObject<HTMLDivElement | null>,
  builderRef: MutableRefObject<HTMLDivElement | null>
) {
  const [topOfHowItWorks, setTopOfHowItWorks] = useState(0);
  const [topOfVoteParticipation, setTopOfVoteParticipation] = useState(0);
  const [topOfBuilder, setTopOfBuilder] = useState(0);
  const isMounted = useIsMounted();
  useEffect(() => {
    if (isMounted()) {
      if (howItWorksRef.current && topOfHowItWorks === 0)
        setTopOfHowItWorks(howItWorksRef.current.getBoundingClientRect().top);
      if (voteParticipationRef.current && topOfVoteParticipation === 0)
        setTopOfVoteParticipation(voteParticipationRef.current.getBoundingClientRect().top);
      if (builderRef.current && topOfBuilder === 0) setTopOfBuilder(builderRef.current.getBoundingClientRect().top);
    }
  }, [isMounted]);

  return {
    topOfHowItWorks,
    topOfVoteParticipation,
    topOfBuilder,
    howItWorksRef,
    voteParticipationRef,
    builderRef,
  };
}

const Wrapper = styled.div`
  background: var(--grey-200);
`;
