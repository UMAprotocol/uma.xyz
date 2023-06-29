import Arrows from "public/assets/arrows.svg";
import Cube from "public/assets/cube.svg";
import Flash from "public/assets/flash.svg";
import MessageHeart from "public/assets/message-heart.svg";
import Rocket from "public/assets/rocket.svg";
import Settings from "public/assets/settings.svg";

export function HowItWorks() {
  return (
    <section className="bg-grey-25 px-4 py-8 lg:px-8 lg:pb-14 lg:pt-24">
      <div className="mx-auto w-fit max-w-[1280px]">
        <h2 className="mb-2 w-fit text-3xl text-grey-900 lg:text-6xl">A new era of DAO governance</h2>
        <p className="mb-12 w-fit text-lg text-grey-600">
          Explore oSnap&apos;s process and harness Optimistic Execution
        </p>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8">
          <div className="ml-4 grid max-w-[384px] grid-cols-[calc(48px/2),auto] gap-4 border-l border-dashed border-red/40 pb-10 lg:border-none">
            <div className="w-[48px]">
              <Rocket className="-ml-[50%] -mt-[25%]" />
            </div>
            <div>
              <h3 className="text-lg text-grey-900">Deploy oSnap Model</h3>
              <p className="text-grey-600">Integrate oSnap with your Snapshot Space and Safe smart wallet in minutes</p>
            </div>
          </div>
          <div className="ml-4 grid max-w-[384px] grid-cols-[calc(48px/2),auto] gap-4 border-l border-dashed border-red/40 pb-10 lg:border-none">
            <div className="w-[48px]">
              <Settings className="-ml-[50%] -mt-[25%]" />
            </div>
            <div>
              <h3 className="text-lg text-grey-900">Set parameters</h3>
              <p className="text-grey-600">
                Customize your integration by setting the bond currency and size, challenge period duration, voting
                period duration and required quorum.
              </p>
            </div>
          </div>
          <div className="ml-4 grid max-w-[384px] grid-cols-[calc(48px/2),auto] gap-4 border-l border-dashed border-red/40 pb-10 lg:border-none">
            <div className="w-[48px]">
              <Flash className="-ml-[50%] -mt-[25%]" />
            </div>
            <div>
              <h3 className="text-lg text-grey-900">Snapshot proposal submitted</h3>
              <p className="text-grey-600">Community members submit proposals. The DAO votes gas free in Snapshot.</p>
            </div>
          </div>
          <div className="ml-4 grid max-w-[384px] grid-cols-[calc(48px/2),auto] gap-4 border-l border-dashed border-red/40 pb-10 lg:border-none">
            <div className="w-[48px]">
              <Arrows className="-ml-[50%] -mt-[25%]" />
            </div>
            <div>
              <h3 className="text-lg text-grey-900">Outcome validated</h3>
              <p className="text-grey-600">
                The outcome is sent to UMA, where for a limited time anyone can dispute it.
              </p>
            </div>
          </div>
          <div className="ml-4 grid max-w-[384px] grid-cols-[calc(48px/2),auto] gap-4 border-l border-dashed border-red/40 pb-10 lg:border-none">
            <div className="w-[48px]">
              <Cube className="-ml-[50%] -mt-[25%]" />
            </div>
            <div>
              <h3 className="text-lg text-grey-900">Dispute &amp; voting</h3>
              <p className="text-grey-600">
                If disputed, UMA token holders will vote on whether the outcome passed to the oracle is true.
              </p>
            </div>
          </div>
          <div className="ml-4 grid max-w-[384px] grid-cols-[calc(48px/2),auto] gap-4 pb-10">
            <div className="w-[48px]">
              <MessageHeart className="-ml-[50%] -mt-[25%]" />
            </div>
            <div>
              <h3 className="text-lg text-grey-900">Transactions execute</h3>
              <p className="text-grey-600">
                If the vote passes, the transaction is approved and can be executed by anyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
