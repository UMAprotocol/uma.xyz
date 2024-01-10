import { ContactDetailsInput } from "../ContactDetailsInput";
import { Icon } from "../Icon";
import { LoadingSpinner } from "../LoadingSpinner";
import { Modal } from "../Modal";
import { TextInput } from "../TextInput";
import { RadioGroup } from "../RadioGroup";
import { useLeadCaptureModal, MODALS, useLeadCaptureForm } from "@/hooks/leadCapture/useLeadCaptureModal";

export function useIntegrateOvalModal() {
  return useLeadCaptureModal(MODALS["integrate-oval"]);
}

type IntegrateOvalModal = ReturnType<typeof useIntegrateOvalModal>;

export function IntegrateOvalModal(props: IntegrateOvalModal) {
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

    const response = await fetch("/api/airtable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
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

  const idleSubmitButtonContent = "Send";

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
      <div id="try-osnap-modal" className="h-fit w-[min(80vw,540px)] bg-white p-6">
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
            <TextInput {...nameInputProps} />
            <TextInput {...organizationInputProps} />
          </div>
          <RadioGroup {...radioGroupProps} />
          <div className="my-6">
            <ContactDetailsInput {...contactDetailsInputProps} />
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
