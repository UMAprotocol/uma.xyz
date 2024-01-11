import { cn } from "@/utils/styleUtils";
import { ExternalLink } from "./ExternalLink";
import { Animation } from "./Animation";

export type ReclaimOevProps = {
  className?: string;
};

export const ReclaimOev = ({ className }: ReclaimOevProps) => {
  return (
    <section
      className={cn(
        "relative mx-auto mt-[128px] max-w-[1200px] flex-col items-center overflow-clip px-[--page-padding] ",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:justify-center xl:gap-24">
        <Animation
          className="!h-[440px] min-[472px]:!h-[720px]"
          scene="https://prod.spline.design/6fMUQ-8iv1LJxomb/scene.splinecode"
        />

        <div className="flex max-w-[500px] flex-1 flex-col items-center gap-8 xl:items-start">
          <h2 className="text-gradient-oval whitespace-nowrap text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid xl:text-left">
            Reclaim OEV
          </h2>
          <p className="text-gradient-oval text-center text-xl opacity-75 xl:text-left">
            OEV is created when your protocol consumes price updates that open positions to liquidation.
          </p>
          <p className="text-gradient-oval  text-center text-xl opacity-75 xl:text-left">
            MEV searchers compete to extract that OEV as risk free profit.
          </p>
          <p className="text-gradient-oval  text-center text-xl opacity-75 xl:text-left">
            Oval wraps your Chainlink Data Feed and forces searchers to pay you to extract the OEV.
          </p>
          <ExternalLink href="https://docs.oval.xyz/">learn more in docs</ExternalLink>
        </div>
      </div>
    </section>
  );
};
