import { cn } from "@/utils/styleUtils";
import Image from "next/image";
import earnOevIMage from "public/assets/oval-earn-oev.webp";
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
        <div className="max-w-[500px] flex-1">
          <Image src={earnOevIMage} alt="decorative section image" />
        </div>

        <div className="relative flex max-w-[500px] flex-1 flex-col items-center gap-8 xl:items-start">
          <Ellipse size="md" className="right-[-50%] top-[-50%] rotate-45" />
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
          <IntegrateOvalButton />
        </div>
      </div>
    </section>
  );
};
