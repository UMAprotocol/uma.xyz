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
  const entry = useIntersectionObserver(headerRef, {
    threshold: 0.5,
  });
  useEffect(() => {
    console.log("hook firing?");
  }, [entry]);
  const isIntersecting = !!entry?.isIntersecting;
  console.log("isIntersecting", isIntersecting);
  // console.log("entry", entry);
  return (
    <Layout>
      <Wrapper>
        <Header headerRef={headerRef} entry={entry} />
        <Hero />
        <div ref={headerRef}>
          <HowItWorks />
          <VoteParticipation />
          <Builder />
          <Projects />
          <SupportSection />
        </div>
        <Footer />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: var(--grey-200);
`;
