import Link from "next/link";
import { Accordion } from "../Accordion";

export const Faq = () => {
  const faqs = [
    {
      question: "Is Oval an oracle?",
      answer: "No, Oval is an MEV capture technology that acts as a layer between price oracles and DeFi protocols.",
    },
    {
      question: "How is Oval different from a Chainlink Data Feed?",
      answer:
        "Protocols use Oval in addition to their Chainlink Data Feed. Oval wraps Chainlink Data Feeds and delivers Chainlink signed price updates to protocols. By adding Oval to the oracle stack, Oval is able to shield price updates from MEV-searchers and force searchers to pay the protocol for the right to extract the OEV it creates.",
    },
    {
      question: "Is there a risk that prices won't show up or will be delayed?",
      answer:
        "Any price update delivered by a Chainlink Data Feed will get delivered by Oval. Chainlink Data Feeds push price updates at fixed intervals or whenever the price crosses a deviation threshold. On most mainnet feeds that's every one hour, or when the price changes by more than 1%. When Oval receives prices from Chainlink it holds them for the minimum possible period for OEV extraction – 60 seconds. If searchers do not attempt to extract the OEV within that period, the Oval contract will automatically release the price after that period, with no effect on end-user experience.",
    },
    {
      question: "Can the price be manipulated?",
      answer:
        "No, Oval simply delivers the price it received from Chainlink. Oval has been successfully audited by OpenZeppelin to ensure that prices can't be manipulated. Oval is subject to the same security bounty as UMA's Optimistic Oracle and the Across Bridge.",
    },
    {
      question: "What risks does Oval introduce?",
      answer: (
        <p>
          Oval has been designed to wrap and relay prices from Chainlink Data Feeds without introducing risks not
          present in the underlying feed. For a full explanation of this please consult the{" "}
          <Link
            className="items-center text-red transition hover:opacity-50"
            target="_blank"
            aria-label="Link to UMA docs"
            href="https://uma-1.gitbook.io/oevshare/mechanism-design/trust-assumptions"
          >
            trust assumptions
          </Link>{" "}
          section in the Oval docs.
        </p>
      ),
    },
    {
      question: "Where does OEV captured by Oval go?",
      answer:
        "OEV captured by Oval is divided between three parties. The majority of the OEV is directed to an address set by the protocol that created the revenue. The remainder is directed evenly to the oracle provider and UMA as a fee for providing the oracle infrastructure and MEV capture infrastructure respectively.",
    },
  ];

  return (
    <section
      className={
        "relative mx-auto mt-[200px] flex max-w-[700px] flex-col items-center gap-8 px-[--page-padding] text-center align-top xl:max-w-[1300px] xl:gap-[96px]"
      }
    >
      <h2 className="text-gradient-oval px-[10%] text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid">
        Frequently asked Questions
      </h2>
      <Accordion
        className="mx-auto w-full max-w-[768px]"
        style={
          {
            "--color-trigger": "var(--grey-100)",
            "--color-content": "var(--grey-400)",
            "--color-icon": "var(--grey-400)",
            "--color-border": "var(--grey-700)",
          } as React.CSSProperties
        }
        data={faqs}
        type="single"
        defaultValue="0"
      />
    </section>
  );
};
