"use client";

import { cn } from "@/utils/styleUtils";
import { IntegrateOvalModal, useIntegrateOvalModal } from "./IntegrateOvalModal";

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
