import { BaseOuterWrapper } from "components/style/Wrappers";
import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "constant";
import { useHeaderContext } from "hooks/contexts/useHeaderContext";
import Lottie from "lottie-react";
import sceneOne from "public/assets/lottie/scene-1.json";
import sceneTwo from "public/assets/lottie/scene-2.json";
import sceneThree from "public/assets/lottie/scene-3.json";
import sceneFour from "public/assets/lottie/scene-4.json";
import { useEffect, useRef } from "react";
import styled, { CSSProperties } from "styled-components";

export function HowItWorks() {
  const { setColorChangeSectionRef } = useHeaderContext();
  const howItWorksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setColorChangeSectionRef(howItWorksRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const style = {
    "--lottie-width-desktop": "562px",
    "--lottie-width-laptop-tablet": "754px",
    "--lottie-width-mobile": "538px",
  } as CSSProperties;

  return (
    <OuterWrapper ref={howItWorksRef} id="how-it-works" style={style}>
      <InnerWrapper>
        <HeaderWrapper>
          <Title>How it works</Title>
          <Header>The Optimistic Oracle verifies data in stages</Header>
        </HeaderWrapper>
        {steps.map(({ header, text, subText, animationData }, index) => (
          <StepWrapper key={header}>
            <StepNumberWrapper>
              <StepNumber>0{index + 1}</StepNumber>
              <StepLine />
            </StepNumberWrapper>
            <StepDescription>
              <StepHeader>{header}</StepHeader>
              <StepText>{text}</StepText>
              <StepSubText>{subText}</StepSubText>
            </StepDescription>
            <LottieWrapper>
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                }}
              />
            </LottieWrapper>
          </StepWrapper>
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled(BaseOuterWrapper)`
  background: linear-gradient(180deg, var(--white) 0%, var(--white-200) 100%);
`;

const InnerWrapper = styled.div`
  max-width: var(--page-width);
  margin-inline: auto;
`;

const HeaderWrapper = styled.div``;

const Title = styled.h1`
  font: var(--header-sm);
  padding-bottom: 16px;
  border-bottom: 1px solid var(--grey-600);
  @media ${mobileAndUnder} {
    padding-bottom: 12px;
  }
`;

const Header = styled.h2`
  --width-desktop-tablet: 1020px;
  --width-laptop: 720px;
  --width-mobile: 100%;
  --width: var(--width-desktop-tablet);
  max-width: var(--width);
  margin-top: 48px;
  margin-bottom: 128px;
  font: var(--header-lg);
  @media ${laptopAndUnder} {
    --width: var(--width-laptop);
  }
  @media ${tabletAndUnder} {
    --width: var(--width-desktop-tablet);
  }
  @media ${mobileAndUnder} {
    --width: var(--width-mobile);
    font: var(--header-sm);
    margin-top: 24px;
    margin-bottom: 40px;
  }
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
  --width-mobile: 538px;
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
  margin-top: 8px;
  --width-desktop: 464px;
  --width-laptop: 640px;
  --width-tablet: 720px;
  --width-mobile: 100%;
  --width: var(--width-desktop);
  @media ${laptopAndUnder} {
    --width: var(--width-laptop);
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

const StepNumber = styled.p`
  display: grid;
  place-items: center;
  width: var(--step-number-size);
  height: var(--step-number-size);
  background-color: var(--red);
  border-radius: 8px;
  font: var(--body-sm);
  color: var(--white);
  margin: 0;
  padding: 0;
`;

const StepLine = styled.div`
  background: var(--red);
  height: calc(100% + var(--step-padding-bottom));
  width: 1px;
  margin-left: calc(var(--step-number-size) / 2);

  @media ${laptopAndUnder} {
    height: 100%;
    background: linear-gradient(180deg, var(--red) 0%, rgba(176, 175, 179, 0) 100%);
  }
`;
