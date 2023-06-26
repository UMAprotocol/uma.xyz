"use client";

import Footer from "../Footer";
import Builder from "../Home/Builder";
import Hero from "../Home/Hero";
import HowItWorks from "../Home/HowItWorks";
import Projects from "../Home/Projects";
import SupportSection from "../Home/SupportSection";
import VoteParticipation from "../Home/VoteParticipation";

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
