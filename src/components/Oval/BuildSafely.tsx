import { cn } from "@/utils/styleUtils";
import { ExternalLink } from "./ExternalLink";
import { Animation } from "./Animation";

export type BuildSafelyProps = {
  className?: string;
};

export const BuildSafely = ({ className }: BuildSafelyProps) => {
  return (
    <section
      className={cn(
        "relative mx-auto my-[128px] max-w-[1200px] flex-col items-center overflow-clip px-[--page-padding]",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-8 xl:flex-row-reverse xl:justify-center xl:gap-24">
        <Animation
          className="!h-[250px] min-[472px]:!h-[400px]"
          scene="https://prod.spline.design/cBDg4wVE4edzD-t1/scene.splinecode"
        />

        <div className="flex-3 flex max-w-[500px] flex-col items-center gap-8 xl:items-start">
          <h2 className="text-gradient-oval whitespace-nowrap text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid xl:text-left">
            Build safely
          </h2>
          <p className="text-gradient-oval text-center text-xl opacity-75 xl:text-left">Oval is not a new oracle.</p>
          <p className="text-gradient-oval text-center text-xl opacity-75 xl:text-left">
            Oval wraps industry standard Chainlink Data Feeds and delivers Chainlink signed prices to your protocol.
          </p>
          <p className="text-gradient-oval text-center text-xl opacity-75 xl:text-left">
            The right to extract OEV from each price update is auctioned offchain using Flashbots&apos; trusted
            MEV-Share infrastructure.
          </p>

          <ExternalLink href="https://docs.oval.xyz/">learn more in docs</ExternalLink>
        </div>
      </div>
    </section>
  );
};
