import { GradientBorder, GradientBorderProps } from "@/components/GradientBorder";

type TvsChipProps = GradientBorderProps & {
  amount: string; // eg. $ 83M
};

export function TvsChip({ amount, className, ...props }: TvsChipProps) {
  return (
    <GradientBorder hoverEffect className={className} {...props}>
      <div className="flex items-baseline gap-[0.20em] px-2 py-1 text-lg lg:text-xl">
        <span className="font-bold text-primary-500">${amount}+</span>
        Total Value Secured
      </div>
    </GradientBorder>
  );
}
