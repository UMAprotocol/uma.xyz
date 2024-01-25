"use client";

import { cn } from "@/utils/styleUtils";
import { IntegrateOvalModal, useIntegrateOvalModal } from "./IntegrateOvalModal";
import { Icon } from "@/components/Icon";

type Props = {
  className?: string;
};

export function IntegrateOvalButton({ className }: Props) {
  const modalProps = useIntegrateOvalModal();

  return (
    <>
      <button
        onClick={modalProps.showModal}
        className={cn(
          "w-fit whitespace-nowrap rounded-lg bg-red px-6 py-4 text-lg text-background transition hover:opacity-75",
          className,
        )}
      >
        Integrate Oval
      </button>
      <IntegrateOvalModal {...modalProps} />
    </>
  );
}

// looks like a footer link
export function IntegrateOvalLink({ className }: Props) {
  const modalProps = useIntegrateOvalModal();

  return (
    <>
      <button
        onClick={modalProps.showModal}
        className={cn("group flex items-center gap-1 transition-all hover:text-red", className)}
      >
        Contact us
        <Icon name="arrow" className=" h-4 w-4 -rotate-45 transition-transform group-hover:-translate-x-[2px]" />
      </button>
      <IntegrateOvalModal {...modalProps} />
    </>
  );
}
