"use client";

import { Modal } from "../../Modal";
import { useLeadCaptureModal, MODALS, useLeadCaptureForm } from "@/hooks/leadCapture/useLeadCaptureModal";
import { AirtableRequestBody } from "@/app/api/airtable/utils";
import { IntegrateOvalContent } from "./IntegrateOvalContent";
import { IntegrateOvalSuccessContent } from "./IntegrateOvalSuccessModal";
import { PropsWithChildren } from "react";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export function useIntegrateOvalModal() {
  return useLeadCaptureModal(MODALS["integrate-oval"]);
}

type IntegrateOvalModal = ReturnType<typeof useIntegrateOvalModal>;

export function IntegrateOvalModalTrigger({ className, children }: PropsWithChildren<{ className?: string }>) {
  const router = useRouter();
  const pathname = usePathname();
  function handleClick() {
    if (pathname) {
      router.push(`${pathname}?modal=${MODALS["integrate-oval"]}`, { scroll: false });
    }
  }
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export function IntegrateOvalModal() {
  const formProps = useLeadCaptureForm();
  const modalProps = useIntegrateOvalModal();

  async function onSubmit() {
    if (!formProps.isFormValid) return;

    formProps.setFormState("busy");
    const body: AirtableRequestBody = { ...formProps.fields, integration: "oval" };

    const response = await fetch("/api/airtable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      formProps.setFormState("error");
      setTimeout(() => {
        formProps.setFormState("idle");
      }, 3000);
      return;
    }

    formProps.setFormState("success");
  }

  return (
    <Modal
      className="bg-background"
      style={
        {
          "--close-icon-color": "var(--white)",
        } as React.CSSProperties
      }
      {...modalProps}
    >
      {formProps.formState === "success" && <IntegrateOvalSuccessContent />}
      {formProps.formState !== "success" && <IntegrateOvalContent onSubmit={onSubmit} {...formProps} />}
    </Modal>
  );
}
