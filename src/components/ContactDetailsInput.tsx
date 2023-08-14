import { useCallback, useMemo } from "react";
import { TextInput, useTextInput } from "./TextInput";

export type Props = {
  channel: "discord" | "email" | "telegram" | "other";
};

export function useContactDetailsInput(props: Props) {
  const getPlaceholderForChannel = useCallback((channel: Props["channel"]) => {
    switch (channel) {
      case "discord":
        return "OracleWizard#1234";
      case "email":
        return "oracle@delphi.com";
      case "telegram":
        return "@oraclewizard";
      case "other":
        return "Your PO box";
    }
  }, []);

  const validateEmailInput = useCallback((value: string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const valid = emailRegex.test(value);

    return valid;
  }, []);

  const validateDiscordInput = useCallback((value: string) => {
    const discordUsernameRegex = /^\S+#\d{4}$/;
    const valid = discordUsernameRegex.test(value);

    return valid;
  }, []);

  const validateTelegramInput = useCallback((value: string) => {
    const telegramUsernameRegex = /^@[^\s]+$/i;
    const valid = telegramUsernameRegex.test(value);
    return valid;
  }, []);

  function validateOtherInput() {
    return true;
  }

  const getValidateFunctionForChannel = useCallback(
    (channel: Props["channel"]) => {
      switch (channel) {
        case "discord":
          return validateDiscordInput;
        case "email":
          return validateEmailInput;
        case "telegram":
          return validateTelegramInput;
        case "other":
          return validateOtherInput;
      }
    },
    [validateDiscordInput, validateEmailInput, validateTelegramInput],
  );

  const inputProps = useTextInput({
    label: "Contact details",
    isEmail: props.channel === "email",
    required: true,
    validate: getValidateFunctionForChannel(props.channel),
    placeholder: getPlaceholderForChannel(props.channel),
  });

  return useMemo(
    () => ({
      ...inputProps,
    }),
    [inputProps],
  );
}

type ContactDetailsInputProps = ReturnType<typeof useContactDetailsInput>;
export function ContactDetailsInput(props: ContactDetailsInputProps) {
  return (
    <div>
      <TextInput {...props} />
    </div>
  );
}
