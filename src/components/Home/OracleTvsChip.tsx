import { ONE_DAY_SECONDS } from "@/lib/constants";
import { getOracleTvs } from "@/lib/dune";
import { roundToNearestMillion } from "@/utils";
import { cn } from "@/utils/styleUtils";

export const revalidate = ONE_DAY_SECONDS;

type TvsChipProps = {
  className?: string;
};

export async function OracleTvsChip({ className }: TvsChipProps) {
  const tvs = await getOracleTvs();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-b from-transparent to-white/10 shadow-sm",
        className,
      )}
    >
      <div className="rounded-2xl border border-white/5 p-1">
        <div className="flex items-baseline gap-[0.20em] rounded-xl border border-white/5 bg-transparent px-3 py-2 text-xl text-white lg:text-2xl">
          <span className="font-normal text-primary-500">${roundToNearestMillion(tvs)}</span>
          Total Value Secured
        </div>
      </div>

      <span className="z-2 absolute -right-6 -top-5 h-10 w-10 bg-grey-400 opacity-50 blur-md" />
      <span className="z-2 absolute -bottom-8 -left-7 h-10 w-10 bg-grey-400 opacity-50 blur-md" />
    </div>
  );
}
