import { cn } from "@/utils/styleUtils";

export type GradientBorderProps = React.ComponentPropsWithoutRef<"div"> & {
  hoverEffect?: boolean;
};

export function GradientBorder({ children, hoverEffect = false, className, ...props }: GradientBorderProps) {
  return (
    <div
      className={cn(
        "group relative w-fit overflow-hidden rounded-2xl bg-white bg-clip-border p-1 shadow-xl",
        className,
      )}
      {...props}
    >
      {/* this span is the gradient. it is its own element so that we can animate it on hover */}
      <span
        className={`absolute left-[-50%] top-[-50%] z-0 h-[200%] w-[200%] bg-gradient-to-br from-transparent from-40% via-grey-400 via-50% to-60% transition-transform before:content-[''] ${
          hoverEffect && "group-hover:rotate-180"
        }`}
      />
      <div className="relative overflow-hidden rounded-xl border border-grey-50 bg-white">{children}</div>
    </div>
  );
}
