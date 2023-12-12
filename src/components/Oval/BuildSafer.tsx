import { cn } from "@/utils/styleUtils";
import Image from "next/image";
import buildSaferImage from "public/assets/oval-build-safer.webp";
import { ExternalLink } from "./ExternalLink";

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
        <div className="flex-4 max-w-[600px]">
          <Image src={buildSaferImage} alt="decorative section image" />
        </div>

        <div className="flex-3 flex max-w-[500px] flex-col items-center gap-8 xl:items-start">
          <h2 className="text-gradient-oval whitespace-nowrap text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid xl:text-left">
            Build safer
          </h2>
          <p className="text-center text-xl text-[#B3B5B4] xl:text-left">
            OVAL is not an oracle - it wraps existing oracles.
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
