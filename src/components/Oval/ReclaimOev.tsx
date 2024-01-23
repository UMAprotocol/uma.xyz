import { cn } from "@/utils/styleUtils";
import { IntegrateOvalButton } from "./IntegrateOvalModal/IntegrateOvalButton";
import { Ellipse } from "./Ellipsis";

export type ReclaimOevProps = {
  className?: string;
};

export const ReclaimOev = ({ className }: ReclaimOevProps) => {
  return (
    <section
      className={cn(
        "relative mx-auto mt-[128px] max-w-[1200px] flex-col items-center overflow-visible px-[--page-padding] ",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:justify-center xl:gap-24">
        <video autoPlay loop muted playsInline className="max-w-[500px] flex-1">
          <source src="assets/captureOev.mp4" type="video/mp4" />
        </video>

        <div className="relative flex max-w-[500px] flex-1 flex-col items-center gap-8 xl:items-start">
          <Ellipse size="md" className="right-[-50%] top-[-50%] rotate-45" />
          <h2 className="text-gradient-oval whitespace-nowrap text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid xl:text-left">
            Capture OEV
          </h2>
          <p className="text-gradient-oval text-center text-xl opacity-75 xl:text-left">
            Oval wraps Chainlink Data Feeds allowing lending protocols to capture OEV.
          </p>
          <p className="text-gradient-oval  text-center text-xl opacity-75 xl:text-left">
            Oval uses Flashbots&apos; MEV-Share to auction the right to conduct liquidations.
          </p>
          <p className="text-gradient-oval  text-center text-xl opacity-75 xl:text-left">
            This allows you to capture as much as 90% of all the OEV your protocol creates.
          </p>
          <IntegrateOvalButton />
        </div>
      </div>
    </section>
  );
};
