"use client";
import { useScrollContext } from "@/hooks/contexts/useScrollContext";
import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowSize } from "usehooks-ts";
import { SectionHeader } from "../SectionHeader";

export default function HowItWorks() {
  const { setColorChangeSectionRef } = useScrollContext();
  const ref = useRef<HTMLDivElement>(null);
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
    <section
      className="px-[--page-padding] pt-[--header-blur-height] md:pb-[96px]"
      id={id}
      style={{
        background: "linear-gradient(180deg, var(--white) 0%, var(--grey-50) 50%, var(--white) 100%)",
      }}
    >
      <div className="mx-auto max-w-[--page-width]" ref={ref}>
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
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

type StepProps = {
  header: string;
  text: string;
  subText: string;
  index: number;
  isLast: boolean;
};
function Step({ header, text, subText, index, isLast }: StepProps) {
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
    <div
      className="mb-[96px] grid gap-x-[52px] last:mb-0 sm:grid-cols-[1fr,auto] lg:grid-cols-[auto,1fr,auto] lg:grid-rows-[auto]"
      key={header}
    >
      <div className="col-span-1 col-start-1 row-start-2 hidden sm:block lg:row-start-1 xl:-ml-12">
        <motion.p
          className="grid h-[48px] w-[48px] place-items-center rounded-lg transition duration-300"
          initial={{
            backgroundColor: "var(--white)",
            border: `1px solid var(--grey-500)`,
          }}
          whileInView={{
            backgroundColor: "var(--primary-500)",
            border: `1px solid var(--primary-500)`,
          }}
          viewport={{ amount: "all", margin: width > 1024 ? "-48px" : "0px" }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            initial={{ color: "var(--grey-700)" }}
            whileInView={{ color: "var(--white)" }}
            viewport={{ amount: "all", margin: width > 1024 ? "-48px" : "0px" }}
          >
            0{stepNumber}
          </motion.span>
        </motion.p>
        {!isLast && (
          <div
            className="-z-10 ml-6 h-full w-[1px] bg-[linear-gradient(180deg,var(--grey-500)_0%,rgba(176,175,179,0)_100%)] lg:h-[calc(100%+96px)]"
            ref={lineRef}
          >
            <motion.div
              className="h-full w-[1px] origin-top bg-[linear-gradient(180deg,var(--red)_0%,rgba(176,175,179,0)_100%)] lg:bg-red"
              style={{ scaleY: spring }}
            />
          </div>
        )}
      </div>
      <div className="row-span-1 row-start-1 mb-11 w-full max-w-[720px] sm:col-span-2 sm:mb-[96px] lg:col-span-1 lg:col-start-2 lg:mb-0 lg:mt-4 lg:max-w-[464px]">
        <h3 className="text-xs capitalize text-red sm:text-base">{header}</h3>
        <p className="mb-4 mt-2 text-3xl sm:my-6 sm:text-6xl">{text}</p>
        <p className="sm: text-xl">{subText}</p>
      </div>
      <div className="min-h-[400px] border border-grey-400 md:max-w-[754px] lg:col-start-3 lg:row-start-1 lg:max-w-[520px]">
        <video className="h-full w-full object-cover" autoPlay loop muted playsInline disableRemotePlayback>
          <source src={`/assets/step-${stepNumber}.mp4`} type="video/mp4" />
          <source src={`/assets/step-${stepNumber}.webm`} type="video/webm" />
        </video>
      </div>
    </div>
  );
}
