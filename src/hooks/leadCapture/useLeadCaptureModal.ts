"use client";

import { useModal } from "@/components/Modal";
import { communicationChannels } from "@/constant";
import { useEffect, useState } from "react";
import { useRadioGroup } from "@/components/RadioGroup";
import { useTextInput } from "@/components/TextInput";
import { useContactDetailsInput } from "@/components/ContactDetailsInput";
import { CheckedState } from "@/components/ui/checkbox";

export const MODALS = {
  "try-osnap": "try-osnap",
} as const;

type Modal = keyof typeof MODALS;

export function useLeadCaptureModal(modalLabel: Modal) {
  const modalProps = useModal({
    useQueryParams: {
      key: "modal",
      value: modalLabel,
    },
  });

  return modalProps;
}

export type LeadCaptureFormProps = ReturnType<typeof useLeadCaptureForm>;

export function useLeadCaptureForm() {
  const [signupForNewsletter, setSignupForNewsletter] = useState<CheckedState>(false);
  const [formState, setFormState] = useState<"idle" | "busy" | "success" | "error">("idle");
  const radioGroupProps = useRadioGroup("Preferred communication channel", communicationChannels);
  const nameInputProps = useTextInput({
    label: "Name",
    required: true,
    placeholder: "Jane Doe",
    autoFocus: true,
  });
  const organizationInputProps = useTextInput({
    label: "Organization",
    required: true,
    placeholder: "Crypto Inc.",
  });
  const contactDetailsInputProps = useContactDetailsInput(radioGroupProps.checkedValue);

  useEffect(() => {
    contactDetailsInputProps.setValue("");
    contactDetailsInputProps.setDirty(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioGroupProps.checkedValue]);

  const fields = {
    name: nameInputProps.value,
    organization: organizationInputProps.value,
    communicationChannel: radioGroupProps.checkedValue,
    contactDetails: contactDetailsInputProps.value,
  };

  const isFormValid =
    Object.values(fields).filter((value) => value === "").length === 0 &&
    nameInputProps.valid &&
    organizationInputProps.valid &&
    contactDetailsInputProps.valid;

  const disableSubmit = !isFormValid || formState === "busy" || formState === "success";

  return {
    formState,
    setFormState,
    radioGroupProps,
    nameInputProps,
    organizationInputProps,
    contactDetailsInputProps,
    fields,
    isFormValid,
    disableSubmit,
    signupForNewsletter,
    setSignupForNewsletter,
  };
}
