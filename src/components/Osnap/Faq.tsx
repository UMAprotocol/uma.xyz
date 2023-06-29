import Link from "next/link";

export function Faq() {
  return (
    <section className="bg-grey-25 px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[400px] md:max-w-[1216px]">
        <h2 className="mb-12 text-3xl text-grey-900 md:text-6xl">FAQs</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-x-8 gap-y-10 lg:gap-y-16">
          <div className="max-w-[min(400px,100%)]">
            <h3 className="mb-2 text-lg text-grey-900">How does UMA secure the governance process?</h3>
            <p className=" text-grey-600">
              oSnap proposes successful governance votes to UMA, along with a bond. Anyone can dispute statements
              submitted to UMA by posting their own bond. This will trigger a vote, and if the dispute is successful,
              they will claim half the proposer&apos;s bond.
            </p>
          </div>
          <div className="max-w-[min(400px,100%)]">
            <h3 className="mb-2 text-lg text-grey-900">
              What&apos;s the difference between the voting period and the challenge period?
            </h3>
            <p className="text-grey-600">
              During the voting period members of your community are able to vote on the proposal in Snapshot. During
              the challenge period UMA token holders are able to dispute false proposals in exchange for claiming their
              bonds.
            </p>
          </div>
          <div className="max-w-[min(400px,100%)]">
            <h3 className="mb-2 text-lg text-grey-900">What happens if Snapshot is compromised?</h3>
            <p className="text-grey-600">
              UMA&apos;s oracle design ensures that false or malicious proposals not based on successful governance
              votes will be disputed and will not execute.
            </p>
          </div>
          <div className="max-w-[min(400px,100%)]">
            <h3 className="mb-2 text-lg text-grey-900">What chains does oSnap support?</h3>
            <p className="text-grey-600">
              Since oSnap uses UMA as its oracle, it supports the same chains as UMA. See them all{" "}
              <Link
                className="text-red underline"
                href="https://docs.uma.xyz/resources/network-addresses"
                target="_blank"
              >
                here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
