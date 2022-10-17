import { Layout, Header, Hero, VoteParticipation, Footer } from "components";
import styled from "styled-components";

export function Home() {
  return (
    <Layout>
      <Wrapper>
        <Header />
        <Hero />
        <VoteParticipation />
        <Footer />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: var(--black);
`;
