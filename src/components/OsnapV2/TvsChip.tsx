import { GradientBorder, GradientBorderProps } from "../GradientBorder";

type TvsChipProps = GradientBorderProps & {
  amount: number; // eg. 83_000_000
};

export function TvsChip({ amount, className, ...props }: TvsChipProps) {
  const formattedAmount = (amount / 10 ** 6).toLocaleString();

  return (
    <GradientBorder className={className} {...props}>
      <div className="flex items-baseline gap-[0.20em] px-2 py-1 text-lg lg:text-xl">
        <span className="font-bold text-primary-500">+${formattedAmount}M</span>
        Total Value Secured
      </div>
    </GradientBorder>
  );
}
