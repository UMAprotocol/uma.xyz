import Image from "next/image";
import step1Png from "public/assets/step-1-image.png";
import step1NumberIcon from "public/assets/step-1-number-icon.png";
import step2Png from "public/assets/step-2-image.png";
import step2NumberIcon from "public/assets/step-2-number-icon.png";
import step3Png from "public/assets/step-3-image.png";
import step3NumberIcon from "public/assets/step-3-number-icon.png";
import { ReactNode } from "react";
import { Icon } from "../Icon";

const numberIconsByNumber = [step1NumberIcon, step2NumberIcon, step3NumberIcon];

export function Steps() {
  const stepText = [
    {
      title: (
        <>
          Submit transactions to <span className="text-primary-500">Snapshot</span>
        </>
      ),
      description: "Let your community vote to implement exact transaction data.",
    },
    {
      title: (
        <>
          Transactions are validated by <span className="text-primary-500">UMA</span>
        </>
      ),
      description: "UMA validates that the transaction was approved in Snapshot and writes it onchain.",
    },
    {
      title: (
        <>
          Transaction executes in <span className="text-primary-500">Safe</span>
        </>
      ),
      description: "The transaction is automatically executed via the oSnap module.",
    },
  ];
  const step1Image = (
    <StepImage>
      <StepIcon color="grey" />
      <Image src={step1Png} alt="snapshot logo" width={200} height={200} className="z-10 mx-auto" />
    </StepImage>
  );
  const step2Image = (
    <StepImage>
      <StepIcon color="green" />
      <Image src={step2Png} alt="uma logo" width={200} height={200} className="z-10 mx-auto" />
    </StepImage>
  );

  const step3Image = (
    <StepImage>
      <div className="rounded-3xl bg-white p-4">
        <StepIcon color="green" />
        <p className="mb-1 mt-3 text-center text-sm text-success-900/80">Transaction automatically executed</p>
      </div>
      <Image src={step3Png} alt="safe logo" width={200} height={200} className="z-10 mx-auto" />
    </StepImage>
  );
  const stepImages = [step1Image, step2Image, step3Image];
  return (
    <section className="bg-white px-page-padding py-8 xl:py-12">
      {stepText.map((step, index) => (
        <div
          key={index}
          className="mx-auto mb-8 grid grid-rows-[auto,auto] items-center gap-6 sm:mb-12 sm:gap-10 lg:my-[192px] lg:max-w-[896px] lg:grid-cols-[1fr,1fr] lg:gap-16 xl:max-w-[1024px]"
        >
          <StepDescription {...step} index={index} key={index} />
          {stepImages[index]}
        </div>
      ))}
    </section>
  );
}

function StepIcon(props: { color: "green" | "grey" }) {
  const greyTextStyles = "bg-grey-100 text-grey-900/50";
  const greyCheckStyles = "text-grey-950/10";
  const greenTextStyles = "bg-success-50 text-success-500";
  const greenCheckStyles = "text-success-500";
  const textStyles = props.color === "grey" ? greyTextStyles : greenTextStyles;
  const checkStyles = props.color === "grey" ? greyCheckStyles : greenCheckStyles;
  return (
    <div className="mx-auto h-fit w-[259px] rounded-2xl bg-white p-4 shadow-sm">
      <p className={`flex h-10 items-center justify-start gap-2 rounded-lg pl-3 pr-4 font-medium ${textStyles}`}>
        <Icon name="lines" className="h-5 w-5" /> Transaction data{" "}
        <Icon name="check" className={`ml-auto h-5 w-5 ${checkStyles}`} />
      </p>
    </div>
  );
}

function StepImage(props: { children: ReactNode; reverse?: boolean }) {
  return (
    <div className="relative grid place-items-center items-center rounded-[24px] bg-grey-100 py-8 sm:py-[100px] lg:row-start-1 lg:aspect-square lg:w-[500px] lg:py-0">
      <div className="z-10 grid gap-6">{props.children}</div>
      <div className="absolute left-[50%] h-full w-[1px] bg-grey-950/10"></div>
    </div>
  );
}

function StepDescription(props: { index: number; title: ReactNode; description: ReactNode }) {
  const numberIcon = numberIconsByNumber[props.index];
  const colStart = props.index === 1 ? "lg:col-start-2" : "lg:col-start-1";
  return (
    <div className={`lg:row-start-1 lg:max-w-[332px] lg:justify-self-start xl:max-w-[428px] ${colStart}`}>
      <Image src={numberIcon} alt={`step ${props.index + 1} icon`} width={50} height={50} className="mb-6" />
      <h2 className="mb-3 text-3xl font-medium text-grey-500 sm:text-4xl md:text-5xl lg:text-6xl">{props.title}</h2>
      <p className="text-lg text-grey-600 sm:text-2xl">{props.description}</p>
    </div>
  );
}
