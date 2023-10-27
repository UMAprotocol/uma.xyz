import { GradientBorder, GradientBorderProps } from "../GradientBorder";

type TvsChipProps = GradientBorderProps & {
  amountInMillion: number;
};

export function TvsChip({ amountInMillion, className, ...props }: TvsChipProps) {
  return (
    <GradientBorder className={className} {...props}>
      <div className="flex items-baseline gap-[0.20em] px-2 py-1 text-lg">
        <span className="font-bold text-primary-500">+${amountInMillion}M</span>
        Total Value Secured
      </div>
    </GradientBorder>
  );
}
