import Image from "next/image";
import fancyCheck from "public/assets/fancy-check.png";
import { ReactNode } from "react";
export function Features() {
  const features = [
    {
      title: "Secured by UMA",
      description:
        "Transaction data is validated by UMA's oracle which has been live for three years, securing more than 10,000 assertions. ",
    },
    {
      title: "Built-in monitoring",
      description: "Use the UMA dapp to monitor proposals at each stage. Tenderly support under active development. ",
    },
    {
      title: "Fully decentralized",
      description:
        "Make your DAO more censorship resistant by reducing your reliance on centralized multisigs for every transaction.",
    },
    {
      title: "Stay in control",
      description:
        "Use your existing multisig to approve urgent transactions or to reject proposals as a final layer of security.",
    },
  ];
  return (
    <section className="bg-grey-25 px-4 py-8 sm:px-8 sm:py-12 md:px-16 lg:py-[96px] xl:px-[214px] xl:pb-[112px]">
      <div className="mx-auto max-w-[1024px]">
        <h1 className="mb-8 text-3xl text-grey-500 sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl">
          Leverage the combined security of <span className="text-primary-500">UMA</span>,<br />
          <span className="text-primary-500">Snapshot</span> and <span className="text-primary-500">Safe</span> to
          protect your treasury
        </h1>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-6 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[88px] lg:gap-y-12">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature(props: { title: ReactNode; description: ReactNode }) {
  return (
    <div className="">
      <Image src={fancyCheck} alt="check icon" width={40} height={40} className="mb-4" />
      <h2 className="mb-2 text-2xl font-medium text-grey-900">{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
