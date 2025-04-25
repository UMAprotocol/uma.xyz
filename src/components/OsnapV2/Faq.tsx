"use client";

import { Accordion } from "../Accordion";
import NextLink from "next/link";
import { TryOsnapModalTrigger } from "../Osnap/TryOsnapModal";

export function Faq() {
  const faqs = [
    {
      question: "What is the relationship between oSnap and UMA?",
      answer:
        "oSnap is built by UMA and secured by UMA's Optimistic Oracle. oSnap submits transactions from successful proposals to the Optimistic Oracle to be validated onchain where they will automatically execute from your Safe.",
    },
    {
      question: "How secure is oSnap?",
      answer: (
        <>
          For a transaction to be executed by oSnap it first has to be validated by UMA&apos;s Optimistic Oracle.
          Assertions made to the OO are monitored by UMA&apos;s decentralized validator network along with a network of
          open-source monitoring bots. Your community can get involved by running their own bots and monitoring oSnap
          directly through the{" "}
          <NextLink
            className="inline items-center text-red transition hover:opacity-50"
            href="https://vote.uma.xyz/"
            target="_blank"
            aria-label="Launch voter dapp"
          >
            UMA Voter dapp.
          </NextLink>
        </>
      ),
    },
    {
      question: "How is offchain voting in Snapshot better than onchain voting?",
      answer: (
        <>
          Voting offchain in Snapshot is gasless, making it free to use and much easier for your community to
          participate. Offchain proposals get approximately{" "}
          <NextLink
            className="inline items-center text-red transition hover:opacity-50"
            href="https://dune.com/risk_labs/onchain-vs-offchain-voting"
            target="_blank"
            aria-label="Link to dune analytics dashboard"
          >
            4x more voters
          </NextLink>{" "}
          than onchain proposals.
        </>
      ),
    },
    {
      question: "Do we still need a multisig if we use oSnap?",
      answer:
        "Approval from the multisig is necessary to integrate oSnap and grant it access to the treasury. After that point governance is fully automated and decentralized. Community members submit proposals and if they pass oSnap initiates the transactions automatically.",
    },
    {
      question: "How are transactions from oSnap executed onchain?",
      answer:
        "oSnap uses bot infrastructure to take transaction data approved by Snapshot votes and submit them to UMA's Optimistic Oracle. The oracle then verifies that the vote is a perfect match for the results published independently by Snapshot. Once verified by UMA, the transaction is passed onchain and another oSnap bot initiates the transaction.",
    },
    {
      question: "What if someone tries to submit a proposal that wasn't approved by Snapshot?",
      answer:
        "These proposals will be identified by either UMA's validator network or one of the many security bots that monitor the oracle. Once identified the proposal will immediately be disputed, at which point the oracle automatically deletes it.",
    },
    {
      question: "What happens if the oSnap automations fail?",
      answer:
        "oSnap still functions even if the bot infrastructure fails. The oSnap bot infrastructure is open source, so you or anyone in your community can deploy your own. If no bots are active when a Snapshot vote succeeds, any user can perform the functions of the bots by submitting the proposal to UMA, disputing malicious proposals and executing transactions onchain.",
    },
    {
      question: "What chains does oSnap support?",
      answer: (
        <>
          oSnap is live on Arbitrum, Ethereum, Optimism and Polygon. If you want oSnap support on other EVM chains,
          speak to our{" "}
          <TryOsnapModalTrigger className="inline items-center text-red transition hover:opacity-50">
            integrations team
          </TryOsnapModalTrigger>
          .
        </>
      ),
    },
  ];
  return (
    <section className="bg-background px-4 py-8 sm:px-8 sm:py-12 md:p-16 lg:py-[96px]">
      <div className="mx-auto max-w-[768px]">
        <h1 className="mb-8 text-center text-3xl font-medium text-grey-500 sm:mb-12 sm:text-4xl md:py-16 md:text-5xl lg:text-6xl xl:text-start">
          Frequently asked questions
        </h1>
        <Accordion
          style={
            {
              "--color-trigger": "var(--grey-900)",
              "--color-content": "var(--grey-600)",
              "--color-icon": "var(--grey-400)",
              "--color-border": "var(--grey-200)",
            } as React.CSSProperties
          }
          data={faqs}
          type="single"
          defaultValue="0"
        />
      </div>
    </section>
  );
}
