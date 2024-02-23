import { cn } from "@/utils/styleUtils";
import { Icon } from "@/components/Icon";
import { IntegrateOvalModalTrigger } from "./IntegrateOvalModal";

type Props = {
  className?: string;
};

export function IntegrateOvalButton({ className }: Props) {
  return (
    <IntegrateOvalModalTrigger
      className={cn(
        "w-fit whitespace-nowrap rounded-lg bg-red px-6 py-4 text-lg text-background transition hover:opacity-75",
        className,
      )}
    >
      Integrate Oval
    </IntegrateOvalModalTrigger>
  );
}

// looks like a footer link
export function IntegrateOvalLink({ className }: Props) {
  return (
    <IntegrateOvalModalTrigger
      className={cn("group flex items-center gap-1 text-text transition-all hover:text-red", className)}
    >
      Contact us
      <Icon name="arrow" className=" h-4 w-4 -rotate-45 transition-transform group-hover:-translate-x-[2px]" />
    </IntegrateOvalModalTrigger>
  );
}
