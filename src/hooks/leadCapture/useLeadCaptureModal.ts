import { useModal } from "@/components/Modal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { communicationChannels } from "@/constant";
import { useEffect, useState } from "react";
import { useRadioGroup } from "@/components/RadioGroup";
import { useTextInput } from "@/components/TextInput";
import { useContactDetailsInput } from "@/components/ContactDetailsInput";
import { useEffectOnce } from "usehooks-ts";

export const MODALS = {
  "try-osnap": "try-osnap",
  "integrate-oval": "integrate-oval",
} as const;

type Modal = keyof typeof MODALS;

export function useLeadCaptureModal(modalLabel: Modal) {
  const modalProps = useModal();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function showModal() {
    const newSearchParams = new URLSearchParams(searchParams ?? "");
    newSearchParams.set("modal", modalLabel);
    router.replace(`${pathname}/?${newSearchParams.toString()}`, { scroll: false });
    modalProps.showModal();
  }

  function closeModal() {
    const newSearchParams = new URLSearchParams(searchParams ?? "");
    newSearchParams.delete("modal");
    modalProps.closeModal();
    router.replace(`${pathname}/?${newSearchParams.toString()}`, { scroll: false });
  }
  return { ...modalProps, showModal, closeModal };
}

export type LeadCaptureFormProps = ReturnType<typeof useLeadCaptureForm>;

export function useLeadCaptureForm() {
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
  };
}

export function useInitialLoadModal(modalLabel: Modal) {
  const props = useLeadCaptureModal(modalLabel);
  const searchParams = useSearchParams();
  const hasModalInUrl = searchParams?.get("modal") === modalLabel;

  useEffectOnce(() => {
    if (hasModalInUrl) props.showModal();
  });

  return props;
}
