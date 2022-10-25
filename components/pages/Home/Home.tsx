import { useRef } from "react";
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

export function Home() {
  // Ref for when the navbar should change to a different color.
  const headerRef = useRef<HTMLDivElement | null>(null);
  return (
    <Layout>
      <Wrapper>
        <Header headerRef={headerRef} />
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
