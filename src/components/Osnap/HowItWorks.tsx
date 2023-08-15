import { Icon } from "../Icon";

export function HowItWorks() {
  const steps = [
    {
      title: "Deploy oSnap model",
      description: "Integrate oSnap with your Snapshot Space and Safe smart wallet in minutes",
      icon: "rocket",
    },
    {
      title: "Set parameters",
      description:
        "Customize your integration by setting the bond currency and size, challenge period duration, voting period duration and required quorum.",
      icon: "settings",
    },
    {
      title: "Snapshot proposal submitted",
      description: "Community members submit proposals. The DAO votes gas free in Snapshot.",
      icon: "flash",
    },
    {
      title: "Outcome validated",
      description: "The outcome is sent to UMA, where for a limited time anyone can dispute it.",
      icon: "arrows",
    },
    {
      title: "Dispute & voting",
      description: "If disputed, UMA token holders will vote on whether the outcome passed to the oracle is true.",
      icon: "cube",
    },
    {
      title: "Transactions execute",
      description: "If the vote passes, the transaction is approved and can be executed by anyone.",
      icon: "message-heart",
    },
  ];
  return (
    <section className="bg-grey-25 px-4 py-8 pl-8 lg:px-8 lg:pb-14 lg:pt-24">
      <div className="w-fit max-w-[1280px] lg:mx-auto">
        <h2 className="mb-2 w-fit text-3xl text-grey-900 lg:text-6xl">A new era of DAO governance</h2>
        <p className="mb-12 w-fit text-lg text-grey-600">
          Explore oSnap&apos;s process and harness Optimistic Execution
        </p>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2">
          {steps.map(({ title, description, icon }) => (
            <div
              key={title}
              className="relative border-l border-dashed border-red/40 p-7 pl-10 pt-2 last:border-none lg:border-none"
            >
              <div className="absolute -left-[24px] top-0 w-[48px]">
                <Icon name={icon} className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-lg text-grey-900">{title}</h3>
                <p className="max-w-[600px] text-grey-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
