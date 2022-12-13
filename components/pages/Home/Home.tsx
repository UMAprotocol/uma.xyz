import { Builder, Hero, HowItWorks, Layout, Projects, SupportSection, VoteParticipation } from "components";

export function Home() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <VoteParticipation />
      <Builder />
      <Projects />
      <SupportSection />
    </Layout>
  );
}
