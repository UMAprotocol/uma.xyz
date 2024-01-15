"use client";

import { IntegrateOvalModal } from "./IntegrateOvalModal/IntegrateOvalModal";
import { MODALS, useInitialLoadModal } from "@/hooks/leadCapture/useLeadCaptureModal";

export function InitialLoadIntegrateOvalModal() {
  const modalProps = useInitialLoadModal(MODALS["integrate-oval"]);

  return <IntegrateOvalModal {...modalProps} />;
}
