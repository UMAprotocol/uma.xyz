import Link from "next/link";
import { Accordion } from "../Accordion";

export const Faq = () => {
  const faqs = [
    {
      question: "Is Oval an oracle?",
      answer:
        "No, Oval is an MEV capture mechanism that acts as a layer between Chainlink and lending protocols. Oval enables protocols to be paid for updates from Chainlink.",
    },
    {
      question: "How is Oval different from a Chainlink Data Feed?",
      answer:
        "Oval wraps Chainlink Data Feeds and delivers Chainlink price updates to protocols, wrapped in an OEV auction. By adding Oval to your protocol, Oval requires searchers to pay you for the right to use updated prices. Effectively redirecting OEV to you, instead of to the builders. The underlying Chainlink prices are not changed; Oval simply adds an auction between the update and when its accessible by your protocol.",
    },
    {
      question: "Is there a risk that prices won't show up or will be delayed?",
      answer: (
        <div className="flex w-full flex-col gap-4">
          <p>
            Any price update delivered by Chainlink Data Feed will also be delivered by Oval. Oval has no ability to
            change the prices that come out of Chainlink. Chainlink pushes price updates at fixed intervals or when the
            price crosses a specific deviation threshold. For most mainnet feeds, this occurs every hour or when the
            price changes by more than 1%.
          </p>

          <p>
            Oval receives prices from Chainlink and then auctions off the first access to the updated price. In the
            happy (and normal path for 90% of the time), Oval updates will run in the same block as the source Chainlink
            update. This means that the vast majority of the time there is no delay at all between when Chainlink
            updates and when your protocol gets the updated price. In the unhappy path, due to block inclusion delays or
            spiking gas prices, Oval has a maximum of 3 block (36 seconds) delay added to when Chainlink updates to when
            your protocol receives a price. This interval is added to give time of the OEV auction to run if there is
            inclusion delays on mainnet. This setting is configurable. After this 3 block window Oval is automatically
            disabled and simply acts as a passthrough where your protocol reads directly from Chainlink, adding no
            additional delay or risk to your integration.
          </p>
        </div>
      ),
    },
    {
      question: "Can the price be manipulated?",
      answer: (
        <p>
          No, Oval simply delivers the price it received from the Chainlink Data Feed. Oval has been audited by
          OpenZeppelin to ensure that prices can&apos;t be manipulated. Oval is also subject to the same{" "}
          <Link
            className="items-center text-red transition hover:opacity-50"
            target="_blank"
            aria-label="Link to UMA docs"
            href="https://docs.uma.xyz/resources/audit-and-bug-bounty-programs"
          >
            security bug bounty program
          </Link>{" "}
          as UMA&apos;s Optimistic Oracle and the Across Bridge.
        </p>
      ),
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
            href="https://docs.oval.xyz/mechanism-design/trust-assumptions"
          >
            trust assumptions
          </Link>{" "}
          section in the Oval documentation.
        </p>
      ),
    },
    {
      question: "Where does OEV captured by Oval go?",
      answer: (
        <p>
          50% of the OEV is directed to an address specified by the protocol that originally generated the revenue. The
          remaining 50% is allocated to UMA and its partners. You can learn more about revenue sharing in our{" "}
          <Link
            className="items-center text-red transition hover:opacity-50"
            target="_blank"
            aria-label="Link to UMA docs"
            href="https://docs.oval.xyz/mechanism-details/revenue-sharing"
          >
            documentation.
          </Link>{" "}
        </p>
      ),
    },
  ];

  return (
    <section
      className={
        "relative mx-auto my-[100px] flex flex-col items-center gap-8 px-[--page-padding] text-center align-top xl:max-w-[1300px] xl:gap-[96px]"
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
      <Link
        className=" justify-self-end whitespace-nowrap rounded-lg bg-red px-6 py-4 text-lg text-background no-underline transition hover:opacity-75 xl:w-fit"
        href="https://docs.oval.xyz/"
        target="_blank"
      >
        Learn more
      </Link>
    </section>
  );
};
