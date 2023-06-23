"use client";

import Builder from "../Builder";
import Footer from "../Footer";
import Hero from "../Hero";
import HowItWorks from "../HowItWorks";
import Projects from "../Projects";
import SupportSection from "../SupportSection";
import VoteParticipation from "../VoteParticipation";

export function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <VoteParticipation />
      <Builder />
      <Projects />
      <SupportSection />
      <Footer />
    </>
  );
}
