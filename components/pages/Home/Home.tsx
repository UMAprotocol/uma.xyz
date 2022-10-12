import { Layout, Header } from "components";
import styled from "styled-components";

export function Home() {
  return (
    <Layout>
      <Wrapper>
        <Header />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: var(--black);
`;
