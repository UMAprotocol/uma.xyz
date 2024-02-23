import { cn } from "@/utils/styleUtils";
import { TryOsnapModalTrigger } from "../Osnap/TryOsnapModal";

type Props = {
  className?: string;
};

export function TryOsnapButton({ className }: Props) {
  return (
    <TryOsnapModalTrigger
      className={cn("mx-auto block w-fit rounded-xl bg-grey-900 px-4 py-3 text-lg font-medium text-white", className)}
    >
      Try oSnap
    </TryOsnapModalTrigger>
  );
}
