import { Accordion } from "../Accordion";

export const Faq = () => {
  const faqs = [
    {
      question: "What elements are offchain?",
      answer: (
        <ul>
          <li>Chainlink data feeds push prices to the Ethereum mempool</li>
          <li>Oval ingests those prices and shields them from MEV searchers who want to extract OEV from them</li>
          <li>Oval uses Flashbots MEV Share to auction off the OEV created by that price update</li>
          <li>
            Oval sends the revenue earned from the auction to the protocol that created the OEV, then releases the
            Chainlink price
          </li>
        </ul>
      ),
    },
    {
      question: "What elements are offchains?",
      answer: (
        <ul>
          <li>Chainlink data feeds push prices to the Ethereum mempool</li>
          <li>Oval ingests those prices and shields them from MEV searchers who want to extract OEV from them</li>
          <li>Oval uses Flashbots MEV Share to auction off the OEV created by that price update</li>
          <li>
            Oval sends the revenue earned from the auction to the protocol that created the OEV, then releases the
            Chainlink price
          </li>
        </ul>
      ),
    },
    {
      question: "What elements are offchainx?",
      answer: (
        <ul>
          <li>Chainlink data feeds push prices to the Ethereum mempool</li>
          <li>Oval ingests those prices and shields them from MEV searchers who want to extract OEV from them</li>
          <li>Oval uses Flashbots MEV Share to auction off the OEV created by that price update</li>
          <li>
            Oval sends the revenue earned from the auction to the protocol that created the OEV, then releases the
            Chainlink price
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section
      className={
        "relative mx-auto mt-12 flex max-w-[700px] flex-col items-center gap-8 px-[--page-padding] text-center align-top xl:max-w-[1300px] xl:gap-[96px]"
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
