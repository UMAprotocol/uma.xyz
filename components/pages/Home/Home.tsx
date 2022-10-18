import { Layout, Header, Hero, VoteParticipation, Projects, Footer } from "components";
import styled from "styled-components";

export function Home() {
  return (
    <Layout>
      <Wrapper>
        <Header />
        <Hero />
        <VoteParticipation />
        <Projects />
        <Footer />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: var(--black);
`;
