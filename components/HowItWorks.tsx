import { grey300, grey500, laptopAndUnder, mobileAndUnder, red, tabletAndUnder, white } from "constant";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useScrollContext } from "hooks/contexts/useScrollContext";
import { useLoadSectionRefAndId } from "hooks/helpers/useLoadSectionRefAndId";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useWindowSize } from "usehooks-ts";
import { SectionHeader } from "./SectionHeader";
import { BaseOuterWrapper } from "./Wrappers";

export default function HowItWorks() {
  const { setColorChangeSectionRef } = useScrollContext();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: "some" });
  const id = "how-it-works";

  useLoadSectionRefAndId(ref, id);

  useEffect(() => {
    setColorChangeSectionRef(ref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  const steps = [
    {
      header: "Statement",
      text: "A statement is proposed as true",
      subText:
        "A natural-language statement is submitted along with a bond. The bond acts as a bounty for anyone to dispute it if they have evidence to the contrary.",
    },
    {
      header: "Challenge period",
      text: "Most statements go undisputed",
      subText:
        "Anyone can propose an answer to a data request, and it is accepted as true if it is not disputed during the challenge period.",
    },
    {
      header: "Dispute",
      text: "Anyone can dispute a statement",
      subText: `Each statement submitted for validation is an opportunity for anyone to earn a reward by disputing it
      successfully. As the game theory would predict, disputes are rare in practice because the incentives are
      always to be honest. That makes the OO “optimistic”.`,
    },
    {
      header: "Voting",
      text: "Tokenholders vote on disputes and earn rewards",
      subText: `The UMA token provides economic guarantees to the Optimistic Oracle. The community of tokenholders provide
      the human component, as voters, for the OO's final resolution on disputes or queries. Those who vote
      with the majority earn rewards.`,
    },
  ];

  return (
    <OuterWrapper id={id}>
      <InnerWrapper ref={ref}>
        <SectionHeader
          title={
            <>
              How <strong>UMA</strong> works
            </>
          }
          header="The Optimistic Oracle verifies data in stages"
        />
        {steps.map(({ header, text, subText }, index) => (
          <Step
            key={header}
            header={header}
            text={text}
            subText={subText}
            index={index}
            inView={inView}
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
  index: number;
  inView: boolean;
  isLast: boolean;
}
function Step({ header, text, subText, index, inView, isLast }: StepProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["-100%", "start"],
  });
  const spring = useSpring(scrollYProgress, {
    duration: 0.2,
  });
  const { width } = useWindowSize();
  const stepNumber = index + 1;

  return (
    <StepWrapper key={header}>
      <StepNumberWrapper>
        <StepNumber
          initial={{
            backgroundColor: white,
            color: grey300,
            border: `1px solid ${grey500}`,
          }}
          whileInView={{
            backgroundColor: red,
            color: white,
            border: `1px solid ${red}`,
          }}
          viewport={{ amount: "all", margin: width > 1024 ? "-48px" : "0px" }}
          transition={{ duration: 0.3 }}
        >
          0{stepNumber}
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
      <LottieWrapper>
        <Video autoPlay loop muted playsInline>
          {inView && (
            <>
              <source src={`/assets/step-${stepNumber}.mp4`} type="video/mp4" />
              <source src={`/assets/step-${stepNumber}.webm`} type="video/webm" />
            </>
          )}
        </Video>
      </LottieWrapper>
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
  --step-padding-bottom-desktop: 96px;
  --step-padding-bottom-mobile: 22px;
  --step-padding-bottom: var(--step-padding-bottom-desktop);
  @media ${laptopAndUnder} {
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
  &:is(:last-child) {
    padding-bottom: 0;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  z-index: -1;
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
