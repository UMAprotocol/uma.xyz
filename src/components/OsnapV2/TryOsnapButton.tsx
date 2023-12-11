"use client";

import { cn } from "@/utils/styleUtils";
import { TryOsnapModal, useTryOsnapModal } from "../Osnap/TryOsnapModal";

type Props = {
  className?: string;
};
export function TryOsnapButton({ className = "" }: Props) {
  const modalProps = useTryOsnapModal();

  return (
    <>
      <button
        onClick={() => {
          modalProps.showModal();
        }}
        className={cn("mx-auto block rounded-xl bg-grey-900 px-4 py-3 text-lg font-medium text-white", className)}
      >
        Try oSnap
      </button>
      <TryOsnapModal {...modalProps} />
    </>
  );
}
