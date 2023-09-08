"use client";

import { useCallback, useId, useMemo, useState, type ChangeEventHandler, type ReactNode } from "react";

type Props = {
  label: ReactNode;
  initialValue?: string;
  onChange?: (value: string) => void;
  id?: string;
  placeholder?: string;
  required?: boolean;
  validate?: (value: string) => boolean;
  isEmail?: boolean;
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

type TextInputProps = ReturnType<typeof useTextInput>;

export function TextInput(props: TextInputProps) {
  const validLabelStyle = "text-black";
  const invalidLabelStyle = "text-error-900";
  const labelStyle = props.valid ? validLabelStyle : invalidLabelStyle;
  const validStyleInputStyle = "border-grey-300 bg-white text-grey-900 placeholder:text-grey-500";
  const invalidInputStyle = "border-error-200 bg-error-50 text-error-700 placeholder:text-error-500";
  const inputStyle = props.valid ? validStyleInputStyle : invalidInputStyle;
  return (
    <div>
      <label htmlFor={props.id} className={`mb-1 block font-medium ${labelStyle}`}>
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={`E.g. “${props.placeholder}”`}
        className={`h-11 w-full rounded-lg border px-3 py-2 shadow-xs ${inputStyle}`}
      />
    </div>
  );
}
