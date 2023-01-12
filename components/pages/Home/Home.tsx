import { Builder, Footer, Hero, HowItWorks, Layout, Projects, SupportSection, VoteParticipation } from "components";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
