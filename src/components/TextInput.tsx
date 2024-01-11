"use client";

import { useCallback, useId, useMemo, useState, type ChangeEventHandler, type ReactNode } from "react";
import { Label } from "./ui/label";
import { Input, InputProps } from "./ui/input";

type Props = {
  label: ReactNode;
  initialValue?: string;
  onChange?: (value: string) => void;
  id?: string;
  placeholder?: string;
  required?: boolean;
  validate?: (value: string) => boolean;
  isEmail?: boolean;
  autoFocus?: boolean;
};

export function useTextInput(props: Props) {
  const [value, setValue] = useState(props.initialValue ?? "");
  const [dirty, setDirty] = useState(false);

  const reactId = useId();
  const id = props.id ?? reactId;
  const placeholder = props.placeholder ?? "Enter value";
  const valid = isValid();
  const type = props.isEmail ? "email" : "text";

  const { onChange: onChangeProp } = props;
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const value = event.target.value;
      onChangeProp?.(value);
      setValue(value);
      setDirty(true);
    },
    [onChangeProp],
  );

  function isValid() {
    if (!dirty) return true;

    if (props.required && value === "") {
      return false;
    }
    if (props.validate && !props.validate(value)) {
      return false;
    }
    return true;
  }

  return useMemo(
    () => ({
      ...props,
      value,
      setValue,
      dirty,
      setDirty,
      onChange,
      valid,
      id,
      placeholder,
      type,
    }),
    [props, value, dirty, onChange, valid, id, placeholder, type],
  );
}

export type TextInputProps = ReturnType<typeof useTextInput> & InputProps;

export function TextInput({ valid, label, id, theme, ...props }: TextInputProps) {
  const validity = valid ? "valid" : "invalid";

  return (
    // order label after input so we can use "peer" selector for label styles based on input
    <div className="flex flex-col-reverse gap-1">
      <Input validity={validity} theme={theme} {...props} />
      <Label htmlFor={id} theme={theme} validity={validity}>
        {label}
      </Label>
    </div>
  );
}
