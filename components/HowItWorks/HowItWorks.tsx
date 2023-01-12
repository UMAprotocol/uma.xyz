import { SectionHeader } from "components/SectionHeader/SectionHeader";
import { BaseOuterWrapper } from "components/style/Wrappers";
import { grey500, laptopAndUnder, mobileAndUnder, red, tabletAndUnder, white } from "constant";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useHeaderContext } from "hooks/contexts/useHeaderContext";
import { useAddHashToUrl } from "hooks/helpers/useAddHashToUrl";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const LottieAnimation = dynamic(() => import("components/LottieAnimation/LottieAnimation"));

export function HowItWorks() {
  const { setColorChangeSectionRef } = useHeaderContext();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { amount: "some" });
  const id = "how-it-works";
  const [step1Data, setStep1Data] = useState<object>();
  const [step2Data, setStep2Data] = useState<object>();
  const [step3Data, setStep3Data] = useState<object>();
  const [step4Data, setStep4Data] = useState<object>();

  useEffect(() => {
    if (inView) {
      void import("public/assets/lottie/step-1.json").then(setStep1Data);
      void import("public/assets/lottie/step-2.json").then(setStep2Data);
      void import("public/assets/lottie/step-3.json").then(setStep3Data);
      void import("public/assets/lottie/step-4.json").then(setStep4Data);
    }
  }, [inView]);

  useAddHashToUrl(id, wrapperRef);

  useEffect(() => {
    setColorChangeSectionRef(wrapperRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef.current]);

  const steps = [
    {
      header: "Statement",
      text: "A statement is proposed as true",
      subText:
        "A natural-language statement is submitted along with a bond. The bond acts as a bounty for anyone to dispute it if they have evidence to the contrary.",
      animationData: step1Data,
    },
    {
      header: "Challenge period",
      text: "Most statements go undisputed",
      subText:
        "Anyone can propose an answer to a data request, and it is accepted as true if it is not disputed during the challenge period.",
      animationData: step2Data,
    },
    {
      header: "Dispute",
      text: "Anyone can dispute a statement",
      subText: `Each statement submitted for validation is an opportunity for anyone to earn a reward by disputing it
      successfully. As the game theory would predict, disputes are rare in practice because the incentives are
      always to be honest. That makes the OO “optimistic”.`,
      animationData: step3Data,
    },
    {
      header: "Voting",
      text: "Tokenholders vote on disputes and earn rewards",
      subText: `The UMA token provides economic guarantees to the Optimistic Oracle. The community of tokenholders provide
      the human component, as voters, for the OO's final resolution on disputes or queries. Those who vote
      with the majority earn rewards.`,
      animationData: step4Data,
    },
  ];

  return (
    <OuterWrapper id={id}>
      <InnerWrapper ref={wrapperRef}>
        <SectionHeader title="How it works" header="The Optimistic Oracle verifies data in stages" />
        {steps.map(({ header, text, subText, animationData }, index) => (
          <Step
            key={header}
            header={header}
            text={text}
            subText={subText}
            animationData={animationData}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
}

interface StepProps {
  header: string;
  text: string;
  subText: string;
  animationData: object | undefined;
  index: number;
  isLast: boolean;
}
function Step({ header, text, subText, animationData, index, isLast }: StepProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["-100%", "start"],
  });
  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <StepWrapper ref={wrapperRef} key={header}>
      <StepNumberWrapper>
        <StepNumber
          initial={{
            backgroundColor: white,
            color: grey500,
            border: `1px solid ${grey500}`,
          }}
          whileInView={{
            backgroundColor: red,
            color: white,
            border: `1px solid ${red}`,
          }}
          transition={spring}
        >
          0{index + 1}
        </StepNumber>
        {!isLast && (
          <StepLineOuter ref={lineRef}>
            <StepLineInner style={{ scaleY: spring }} />
          </StepLineOuter>
        )}
      </StepNumberWrapper>
      <StepDescription>
        <StepHeader>{header}</StepHeader>
        <StepText>{text}</StepText>
        <StepSubText>{subText}</StepSubText>
      </StepDescription>
      <LottieWrapper>{inView && <LottieAnimation animationData={animationData} play={inView} />}</LottieWrapper>
    </StepWrapper>
  );
}

const OuterWrapper = styled(BaseOuterWrapper)`
  background: linear-gradient(180deg, var(--white) 0%, var(--white-200) 50%, var(--white) 100%);
`;

const InnerWrapper = styled.div`
  max-width: var(--page-width);
  margin-inline: auto;
`;

const StepWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  grid-template-areas: "number description lottie";
  padding-bottom: var(--step-padding-bottom);
  --step-padding-bottom-desktop: 148px;
  --step-padding-bottom-laptop-tablet: 96px;
  --step-padding-bottom-mobile: 22px;
  --step-padding-bottom: var(--step-padding-bottom-desktop);
  @media ${laptopAndUnder} {
    --step-padding-bottom: var(--step-padding-bottom-laptop-tablet);
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "description description"
      "number lottie";
    grid-column-gap: 52px;
  }
  @media ${mobileAndUnder} {
    --step-padding-bottom: var(--step-padding-bottom-mobile);
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "description"
      "lottie";
    grid-column-gap: unset;
  }
`;

const LottieWrapper = styled.div`
  max-width: var(--width);
  border: 1px solid var(--grey-600);
  grid-area: lottie;
  --width-desktop: 562px;
  --width-laptop-tablet: 754px;
  --width-mobile: 100%;
  --width: var(--width-desktop);
  @media ${laptopAndUnder} {
    --width: var(--width-laptop-tablet);
  }
  @media ${mobileAndUnder} {
    --width: var(--width-mobile);
  }
`;

const StepDescription = styled.div`
  grid-area: description;
  max-width: var(--width);
  margin-top: 16px;
  --width-laptop-desktop: 464px;
  --width-tablet: 720px;
  --width-mobile: 100%;
  --width: var(--width-laptop-desktop);
  @media ${laptopAndUnder} {
    margin-top: 0;
    margin-bottom: 96px;
  }
  @media ${tabletAndUnder} {
    --width: var(--width-tablet);
  }
  @media ${mobileAndUnder} {
    --width: var(--width-mobile);
    margin-bottom: 42px;
  }
`;

const StepHeader = styled.h3`
  text-transform: capitalize;
  font: var(--sub-header);
  color: var(--red);

  @media ${mobileAndUnder} {
    font: var(--sub-header-sm);
  }
`;

const StepText = styled.p`
  margin-block: 24px;
  font: var(--header-md);
  @media ${mobileAndUnder} {
    font: var(--header-xs);
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;

const StepSubText = styled.p`
  font: var(--body-lg);

  @media ${mobileAndUnder} {
    font: var(--body-sm);
  }
`;

const StepNumberWrapper = styled.div`
  grid-area: number;
  --step-number-offset: -56px;
  --step-number-size: 48px;
  margin-left: calc(var(--step-number-offset) - var(--step-number-size));

  @media ${laptopAndUnder} {
    margin-left: 0;
    justify-self: end;
  }

  @media ${mobileAndUnder} {
    display: none;
  }
`;

const StepNumber = styled(motion.p)`
  display: grid;
  place-items: center;
  width: var(--step-number-size);
  height: var(--step-number-size);
  border-radius: 8px;
  font: var(--body-sm);
  margin: 0;
  padding: 0;
  transition: background-color var(--animation-duration), color var(--animation-duration),
    border-color var(--animation-duration);
`;

const StepLineOuter = styled.div`
  background: var(--grey-500);
  height: calc(100% + var(--step-padding-bottom));
  width: 1px;
  margin-left: calc(var(--step-number-size) / 2);

  @media ${laptopAndUnder} {
    height: 100%;
    background: linear-gradient(180deg, var(--grey-500) 0%, rgba(176, 175, 179, 0) 100%);
  }
`;

const StepLineInner = styled(motion.div)`
  height: 100%;
  width: 1px;
  background: var(--red);
  transform-origin: top;
  @media ${laptopAndUnder} {
    background: linear-gradient(180deg, var(--red) 0%, rgba(176, 175, 179, 0) 100%);
  }
`;
