"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { TryOsnapModal, useTryOsnapModal } from "../Osnap/TryOsnapModal";
import { PlusMinus } from "./PlusMinus";

export function Faq() {
  const modalProps = useTryOsnapModal();

  const faqs = [
    {
      question: "How does UMA secure the governance process?",
      answer:
        "oSnap proposes successful governance votes to UMA, along with a bond. Anyone can dispute statements submitted to UMA by posting their own bond. This will trigger a vote, and if the dispute is successful, they will claim half the proposer's bond.",
    },
    {
      question: "What's the difference between the voting period and the challenge period?",
      answer:
        "During the voting period members of your community are able to vote on the proposal in Snapshot. During the challenge period UMA token holders are able to dispute false proposals in exchange for claiming their bonds.",
    },
    {
      question: "What happens if Snapshot is compromised?",
      answer:
        "UMA's oracle design ensures that false or malicious proposals not based on successful governance votes will be disputed and will not execute.",
    },
    {
      question: "What chains does oSnap support?",
      answer: (
        <>
          oSnap is live on Arbitrum, Ethereum, Optimism and Polygon. If you want oSnap support on other EVM chains,
          speak to our{" "}
          <span
            className="cursor-pointer text-red underline"
            onClick={() => {
              modalProps.showModal();
            }}
          >
            integrations team.
          </span>
        </>
      ),
    },
  ];
  return (
    <section className="bg-white px-4 py-8 sm:px-8 sm:py-12 md:p-16 lg:py-[96px]">
      <div className="mx-auto max-w-[768px]">
        <h1 className="mb-8 text-center text-3xl font-medium text-grey-500 sm:mb-12 sm:text-4xl md:py-16 md:text-5xl lg:text-6xl xl:text-start">
          Frequently asked questions
        </h1>
        <Accordion.Root type="single" defaultValue="0">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={faq.question}
              value={index.toString()}
              className="border-b border-grey-200 py-6 first:pt-0 last:border-none data-[state=closed]:cursor-pointer sm:py-8"
            >
              <Accordion.Header asChild>
                <Accordion.Trigger
                  asChild
                  className="group mb-2 flex w-full items-start justify-between gap-3 text-start text-lg font-medium text-grey-900 sm:text-2xl"
                >
                  <h2>
                    {faq.question}
                    <PlusMinus color="var(--grey-400)" />
                  </h2>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                className="overflow-hidden text-grey-600 data-[state=closed]:animate-accordion-slide-up data-[state=open]:animate-accordion-slide-down sm:text-lg"
                asChild
              >
                <p>{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
      <TryOsnapModal {...modalProps} />
    </section>
  );
}
