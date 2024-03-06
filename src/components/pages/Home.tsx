"use client";

import Builder from "../Home/Builder";
import Hero from "../Home/Hero";
import HowItWorks from "../Home/HowItWorks";
import Projects from "../Home/Projects";
import SupportSection from "../Home/SupportSection";
import VoteParticipation from "../Home/VoteParticipation";
import { Osnap } from "../Home/Osnap";
import { PropsWithChildren } from "react";

export function Home({ children }: PropsWithChildren) {
  return (
    <>
      <Hero>{children}</Hero>
      <HowItWorks />
      <VoteParticipation />
      <Builder />
      <Osnap />
      <Projects />
      <SupportSection />
    </>
  );
}
