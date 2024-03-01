import { GradientBorder, GradientBorderProps } from "@/components/GradientBorder";
import { totalValueSecured } from "@/constant";
import { duneActive } from "@/lib/constants";
import { getOsnapTvs } from "@/lib/dune";
import { roundToNearestMillion } from "@/utils";

type TvsChipProps = GradientBorderProps;

export async function TvsChip({ className, ...props }: TvsChipProps) {
  const tvs = duneActive ? roundToNearestMillion((await getOsnapTvs()).amount_usd) : parseInt(totalValueSecured);

  return (
    <GradientBorder className={className} {...props}>
      <div className="flex items-baseline gap-[0.20em] px-2 py-1 text-lg lg:text-xl">
        <span className="font-bold text-primary-500">${tvs}M</span>
        Total Value Secured
      </div>
    </GradientBorder>
  );
}
