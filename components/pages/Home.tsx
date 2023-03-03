import { Layout } from "components/Layout";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("components/Hero"));
const HowItWorks = dynamic(() => import("components/HowItWorks"));
const VoteParticipation = dynamic(() => import("components/VoteParticipation"));
const Builder = dynamic(() => import("components/Builder"));
const Projects = dynamic(() => import("components/Projects"));
const SupportSection = dynamic(() => import("components/SupportSection"));
const Footer = dynamic(() => import("components/Footer"));

export function Home() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <VoteParticipation />
      <Builder />
      <Projects />
      <SupportSection />
      <Footer />
    </Layout>
  );
}
