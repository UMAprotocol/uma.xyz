import { cn } from "@/utils/styleUtils";
import { ExternalLink } from "./ExternalLink";
import { Animation } from "./Animation";

export type BuildSaferProps = {
  className?: string;
};

export const BuildSafer = ({ className }: BuildSaferProps) => {
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
            Build safer
          </h2>
          <p className="text-center text-xl text-[#B3B5B4] xl:text-left">
            Oval is not an oracle - it wraps existing oracles.
          </p>
          <p className="text-center  text-xl text-[#B3B5B4] xl:text-left">
            Get prices from the oracle you trust most, add others as fallbacks, or take the latest prices from any
            source.
          </p>
          <ExternalLink href="https://docs.uma.xyz/">learn more in docs</ExternalLink>
        </div>
      </div>
    </section>
  );
};
