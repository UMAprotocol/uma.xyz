import { useHeaderContext } from "hooks/contexts/useHeaderContext";
import sceneOne from "public/assets/lottie/scene-1.json";
import sceneTwo from "public/assets/lottie/scene-2.json";
import sceneThree from "public/assets/lottie/scene-3.json";
import sceneFour from "public/assets/lottie/scene-4.json";
import { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

export function HowItWorks() {
  const { setColorChangeSectionRef } = useHeaderContext();
  const howItWorksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setColorChangeSectionRef(howItWorksRef);
  }, [howItWorksRef.current]);

  const steps = [
    {
      header: "Statement",
      text: "A statement is proposed as true",
      subText:
        "A natural-language statement is submitted along with a bond. The bond acts as a bounty for anyone to dispute it if they have evidence to the contrary.",
      animationData: sceneOne,
    },
    {
      header: "Challenge period",
      text: "Most statements go undisputed",
      subText:
        "Anyone can propose an answer to a data request, and it is accepted as true if it is not disputed during the challenge period.",
      animationData: sceneTwo,
    },
    {
      header: "Dispute",
      text: "Anyone can dispute a statement",
      subText: `Each statement submitted for validation is an opportunity for anyone to earn a reward by disputing it
      successfully. As the game theory would predict, disputes are rare in practice because the incentives are
      always to be honest. That makes the OO “optimistic”.`,
      animationData: sceneThree,
    },
    {
      header: "Voting",
      text: "Tokenholders vote on disputes and earn rewards",
      subText: `              The UMA token provides economic guarantees to the Optimistic Oracle. The community of tokenholders provide
      the human component, as voters, for the OO&apos;s final resolution on disputes or queries. Those who vote
      with the majority earn rewards.`,
      animationData: sceneFour,
    },
  ];

  return (
    <Section ref={howItWorksRef} id="how-it-works">
      <HeaderWrapper>
        <Title>How it works</Title>
        <Header>The Optimistic Oracle verifies data in stages</Header>
      </HeaderWrapper>
      {steps.map(({ header, text, subText, animationData }, index) => (
        <StepWrapper key={header}>
          <StepNumberWrapper>
            <StepNumber>{index + 1}</StepNumber>
            <StepLine />
          </StepNumberWrapper>
          <StepDescription>
            <StepHeader>{header}</StepHeader>
            <StepText>{text}</StepText>
            <StepSubText>{subText}</StepSubText>
          </StepDescription>
          <Lottie
            options={{
              animationData,
              loop: true,
              autoplay: true,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </StepWrapper>
      ))}
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(180deg, var(--white) 0%, var(--white-200) 100%);
  scroll-snap-align: start;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const HeaderWrapper = styled.div``;

const Title = styled.h1``;

const Header = styled.h2``;

const StepWrapper = styled.div`
  scroll-snap-align: start;
`;

const StepDescription = styled.div``;

const StepHeader = styled.div``;

const StepText = styled.div``;

const StepSubText = styled.div``;

const StepNumberWrapper = styled.div``;

const StepNumber = styled.div``;

const StepLine = styled.div``;
