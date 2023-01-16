import { Hero } from "components/Hero";
import { Layout } from "components/Layout";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HowItWorks = dynamic(() => import("components/HowItWorks"));
const VoteParticipation = dynamic(() => import("components/VoteParticipation"));
const Builder = dynamic(() => import("components/Builder"));
const Projects = dynamic(() => import("components/Projects"));
const SupportSection = dynamic(() => import("components/SupportSection"));
const Footer = dynamic(() => import("components/Footer"));

export function Home() {
  const howItWorksWrapperRef = useRef<HTMLDivElement>(null);
  const howItWorksInView = useInView(howItWorksWrapperRef, { amount: 0.1 });
  const [loadRestOfPage, setLoadRestOfPage] = useState(false);

  useEffect(() => {
    if (howItWorksInView) {
      setLoadRestOfPage(true);
    }
  }, [howItWorksInView]);

  return (
    <Layout>
      <Hero />
      <div ref={howItWorksWrapperRef}>
        <HowItWorks />
      </div>
      {loadRestOfPage && (
        <>
          <VoteParticipation />
          <Builder />
          <Projects />
          <SupportSection />
          <Footer />
        </>
      )}
    </Layout>
  );
}
