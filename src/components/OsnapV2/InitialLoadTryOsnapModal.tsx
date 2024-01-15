"use client";

import { MODALS, useInitialLoadModal } from "@/hooks/leadCapture/useLeadCaptureModal";
import { TryOsnapModal } from "../Osnap/TryOsnapModal";

export function InitialLoadTryOsnapModal() {
  const modalProps = useInitialLoadModal(MODALS["try-osnap"]);

  return <TryOsnapModal {...modalProps} />;
}
