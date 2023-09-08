"use client";

import { TryOsnapModal, useTryOsnapModal } from "../Osnap/TryOsnapModal";

type Props = {
  isFullWidth?: boolean;
};
export function TryOsnapButton({ isFullWidth = false }: Props) {
  const modalProps = useTryOsnapModal();

  return (
    <>
      <button
        onClick={() => {
          modalProps.showModal();
        }}
        className={`mx-auto block rounded-xl bg-grey-900 px-4 py-3 text-lg font-medium text-white ${
          isFullWidth ? "w-full" : ""
        }`}
      >
        Try oSnap
      </button>
      <TryOsnapModal {...modalProps} />
    </>
  );
}
