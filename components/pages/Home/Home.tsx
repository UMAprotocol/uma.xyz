import { useState } from "react";
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
  return (
    <Layout>
      <Wrapper>
        <Header />
        <Hero />
        <HowItWorks />
        <VoteParticipation />
        <Builder />
        <Projects />
        <SupportSection />
        <Footer />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: var(--grey-200);
`;
