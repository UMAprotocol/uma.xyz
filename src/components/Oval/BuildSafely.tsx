import { cn } from "@/utils/styleUtils";
import { IntegrateOvalButton } from "./IntegrateOvalModal/IntegrateOvalButton";
import { Ellipse } from "./Ellipsis";

export type BuildSafelyProps = {
  className?: string;
};

export const BuildSafely = ({ className }: BuildSafelyProps) => {
  return (
    <section
      className={cn(
        "relative mx-auto my-[128px] mt-[100px] max-w-[1200px] flex-col items-center overflow-visible px-[--page-padding]",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-8 xl:flex-row-reverse xl:justify-center xl:gap-24">
        <div className="-z-1 relative mb-[10%] aspect-[2] h-fit max-h-[300px] w-full max-w-[600px] flex-1 shrink-0">
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            disableRemotePlayback
            className="object-contain object-center"
          >
            <source src="assets/buildSafely.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex-3 relative flex max-w-[500px] flex-col items-center gap-8 xl:items-start">
          <Ellipse size="lg" className="left-[-100%] top-0 rotate-[140deg]" />
          <h2 className="text-gradient-oval whitespace-nowrap text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid xl:text-left">
            Build safely
          </h2>
          <p className="text-gradient-oval text-center text-xl opacity-75 xl:text-left">Oval is not an oracle.</p>
          <p className="text-gradient-oval text-center text-xl opacity-75 xl:text-left">
            Oval wraps price feeds and delivers prices to your protocol.
          </p>
          <p className="text-gradient-oval text-center text-xl opacity-75 xl:text-left">
            Flashbots&apos; trusted MEV-Share infrastructure is used to safely conduct offchain Order Flow Auctions.
          </p>
          <p className="text-gradient-oval text-center text-xl opacity-75 xl:text-left">
            Profit from OEV without taking any unnecessary risks.
          </p>
          <IntegrateOvalButton />
        </div>
      </div>
    </section>
  );
};
