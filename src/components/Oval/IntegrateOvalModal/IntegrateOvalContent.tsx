import { ContactDetailsInput } from "../../ContactDetailsInput";
import { Icon } from "../../Icon";
import { LoadingSpinner } from "../../LoadingSpinner";
import { TextInput } from "../../TextInput";
import { RadioGroup } from "../../RadioGroup";
import { LeadCaptureFormProps } from "@/hooks/leadCapture/useLeadCaptureModal";
import { Checkbox } from "@/components/ui/checkbox";

type Props = LeadCaptureFormProps & {
  onSubmit: () => Promise<void>;
};

export const IntegrateOvalContent = ({
  fields,
  onSubmit,
  nameInputProps,
  organizationInputProps,
  radioGroupProps,
  contactDetailsInputProps,
  disableSubmit,
  formState,
  signupForNewsletter,
  setSignupForNewsletter,
}: Props) => {
  const idleSubmitButtonContent = "Send";

  const busyButtonContent = (
    <span className="flex items-center gap-1">
      Submitting... <LoadingSpinner variant="black" width={12} height={12} />
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
    <div id="try-osnap-modal" className="h-fit w-[min(90vw,600px)] overflow-x-auto p-6 sm:p-10">
      <h2 className="text-gradient-oval pb-4 text-center text-5xl font-medium">Integrate Oval</h2>
      <p className="text-gradient-oval mb-6 text-center">
        Want to start capturing Oracle Extractable Value? Oval is live on Ethereum mainnet. Complete the form below to
        connect.
      </p>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          void onSubmit();
        }}
      >
        <div className="mb-6 grid gap-x-2 gap-y-3 sm:grid-cols-2">
          <TextInput theme="oval" {...nameInputProps} />
          <TextInput theme="oval" {...organizationInputProps} />
        </div>
        <RadioGroup theme="oval" {...radioGroupProps} />
        <div className="my-6">
          <ContactDetailsInput theme="oval" {...contactDetailsInputProps} />
          {fields.communicationChannel === "email" && (
            <label
              className="mt-2 flex w-fit cursor-pointer items-center gap-1 truncate p-1 text-text"
              htmlFor="signup-checkbox"
            >
              <Checkbox
                id="signup-checkbox"
                checked={signupForNewsletter}
                onCheckedChange={(e) => {
                  setSignupForNewsletter(e);
                }}
              />
              Sign up to our newsletter.
            </label>
          )}
        </div>
        <button
          disabled={disableSubmit}
          type="submit"
          className="grid h-11 w-full place-items-center rounded-lg bg-red text-background disabled:cursor-not-allowed disabled:opacity-50"
        >
          {formState === "idle" && idleSubmitButtonContent}
          {formState === "busy" && busyButtonContent}
          {formState === "success" && successSubmitButtonContent}
          {formState === "error" && errorSubmitButtonContent}
        </button>
      </form>
    </div>
  );
};
