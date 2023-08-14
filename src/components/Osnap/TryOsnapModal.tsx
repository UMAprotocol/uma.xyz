import { ContactDetailsInput, useContactDetailsInput } from "../ContactDetailsInput";
import { LoadingSpinner } from "../LoadingSpinner";
import { Modal, useModal } from "../Modal";
import { RadioGroup, useRadioGroup } from "../RadioGroup";
import { TextInput, useTextInput } from "../TextInput";

export function useTryOsnapModal() {
  const modalProps = useModal();

  return modalProps;
}

type Props = ReturnType<typeof useTryOsnapModal>;

const communicationChannels = ["discord", "email", "telegram", "other"];

export type CommunicationChannels = typeof communicationChannels;

export type CommunicationChannel = CommunicationChannels[number];

export function TryOsnapModal(props: Props) {
  const radioGroupProps = useRadioGroup("Preferred communication channel", communicationChannels);
  const nameInputProps = useTextInput({
    label: "Name",
    required: true,
    placeholder: "Jane Doe",
  });
  const organizationInputProps = useTextInput({
    label: "Organization",
    required: true,
    placeholder: "Crypto Inc.",
  });
  const contactDetailsInputProps = useContactDetailsInput(radioGroupProps.checkedValue);

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

  function onSubmit() {
    console.log("submit");
    if (!isFormValid) return;

    console.log(fields);

    props.closeModal();
  }

  const submitButtonContent = "Submit";

  const submittingButtonContent = (
    <span className="flex gap-1 items-center">
      Submit... <LoadingSpinner variant="white" width={16} height={16} />
    </span>
  );

  const failedToSubmitButtonContent = (
    <span className="flex gap-1 items-center">
      Failed <LoadingSpinner variant="white" width={16} height={16} />
    </span>
  );

  const buttonContent = submitButtonContent;

  return (
    <Modal {...props}>
      <div className="p-6 bg-white">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <TextInput {...nameInputProps} />
          <TextInput {...organizationInputProps} />
          <RadioGroup {...radioGroupProps} />
          <ContactDetailsInput {...contactDetailsInputProps} />
          <button
            disabled={!isFormValid}
            type="submit"
            className="bg-grey-900 grid place-items-center w-full h-11 text-white"
          >
            {buttonContent}
          </button>
        </form>
      </div>
    </Modal>
  );
}
