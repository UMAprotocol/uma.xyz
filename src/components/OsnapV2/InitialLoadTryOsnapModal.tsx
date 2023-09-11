"use client";

import { useSearchParams } from "next/navigation";
import { useEffectOnce } from "usehooks-ts";
import { TryOsnapModal, useTryOsnapModal } from "../Osnap/TryOsnapModal";

export function InitialLoadTryOsnapModal() {
  const modalProps = useTryOsnapModal();
  const searchParams = useSearchParams();
  const hasModalInUrl = searchParams?.get("modal") === "try-osnap";

  useEffectOnce(() => {
    if (hasModalInUrl) modalProps.showModal();
  });

  return <TryOsnapModal {...modalProps} />;
}
