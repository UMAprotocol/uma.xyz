import { GradientBorder, GradientBorderProps } from "@/components/GradientBorder";
import { totalValueSecured } from "@/constant";
import { ONE_DAY_SECONDS, duneActive } from "@/lib/constants";
import { getOsnapTvs } from "@/lib/dune";
import { roundToNearestMillion } from "@/utils";

export const revalidate = ONE_DAY_SECONDS;

type TvsChipProps = GradientBorderProps;

export async function OsnapTvsChip({ className, ...props }: TvsChipProps) {
  const tvs = duneActive ? roundToNearestMillion(await getOsnapTvs()) : parseInt(totalValueSecured);

  return (
    <GradientBorder className={className} {...props}>
      <div className="flex items-baseline gap-[0.20em] px-2 py-1 text-lg lg:text-xl">
        <span className="font-bold text-primary-500">${tvs}M</span>
        Total Value Secured
      </div>
    </GradientBorder>
  );
}
