import Image from "next/image";
import fancyOsnapLogo from "public/assets/fancy-osnap-logo.png";
import { ContactDetailsInput } from "../ContactDetailsInput";
import { Icon } from "../Icon";
import { LoadingSpinner } from "../LoadingSpinner";
import { Modal } from "../Modal";
import { RadioGroup } from "../RadioGroup";
import { TextInput } from "../TextInput";
import { useLeadCaptureModal, MODALS, useLeadCaptureForm } from "@/hooks/leadCapture/useLeadCaptureModal";
import { AirtableRequestBody } from "@/app/api/airtable/route";

export function useTryOsnapModal() {
  return useLeadCaptureModal(MODALS["try-osnap"]);
}

type Props = ReturnType<typeof useTryOsnapModal>;

export function TryOsnapModal(props: Props) {
  const {
    formState,
    setFormState,
    radioGroupProps,
    nameInputProps,
    organizationInputProps,
    contactDetailsInputProps,
    fields,
    isFormValid,
  } = useLeadCaptureForm();

  async function onSubmit() {
    if (!isFormValid) return;

    setFormState("busy");
    const body: AirtableRequestBody = { ...fields, integration: "oval" };

    const response = await fetch("/api/airtable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      setFormState("error");
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
      return;
    }

    setFormState("success");
  }

  const idleSubmitButtonContent = "Submit";

  const busyButtonContent = (
    <span className="flex items-center gap-1">
      Submitting... <LoadingSpinner variant="white" width={12} height={12} />
    </span>
  );

  const successSubmitButtonContent = (
    <span className="flex items-center gap-1">
      Submitted! <Icon name="check-circle" className="h-3 w-3" />
    </span>
  );

  const errorSubmitButtonContent = (
    <span className="flex items-center gap-1">
      Failed <Icon name="info" className="h-3 w-3" />
    </span>
  );

  return (
    <Modal {...props}>
      <div
        id="try-osnap-modal"
        className="relative h-16"
        style={{
          backgroundImage: "url(/assets/handshake.png)",
          backgroundSize: "120%",
          backgroundPosition: "60% 50%",
        }}
      >
        <div className="absolute isolate h-full w-full bg-gradient-to-b from-white to-grey-50 opacity-60"></div>
        <Image
          src={fancyOsnapLogo}
          alt="Fancy Osnap Logo"
          className="absolute -bottom-[30%] left-[50%] h-14 w-14 translate-x-[-50%] object-contain"
        />
      </div>
      <div className="w-[min(80vw,540px)] bg-white p-6">
        <h1 className="mb-4 text-center text-4xl font-medium text-grey-950">Dedicated DAO support</h1>
        <p className="mb-6 text-center text-grey-700">
          Our DevRel team offers dedicated support to every DAO that integrates oSnap. Complete the form below and
          we&apos;ll reach out ASAP
        </p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            void onSubmit();
          }}
        >
          <div className="mb-6 grid gap-x-2 gap-y-3 sm:grid-cols-2">
            <TextInput theme="osnap" {...nameInputProps} />
            <TextInput theme="osnap" {...organizationInputProps} />
          </div>
          <RadioGroup theme="osnap" {...radioGroupProps} />
          <div className="my-6">
            <ContactDetailsInput theme="osnap" {...contactDetailsInputProps} />
          </div>
          <button
            disabled={!isFormValid}
            type="submit"
            className="grid h-11 w-full place-items-center rounded-lg bg-grey-900 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {formState === "idle" && idleSubmitButtonContent}
            {formState === "busy" && busyButtonContent}
            {formState === "success" && successSubmitButtonContent}
            {formState === "error" && errorSubmitButtonContent}
          </button>
        </form>
      </div>
    </Modal>
  );
}
