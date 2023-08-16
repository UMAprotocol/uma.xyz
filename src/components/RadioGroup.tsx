import { ChangeEventHandler, ReactNode, useId, useMemo, useState } from "react";

export function useRadioGroup<TValue extends string>(title: string, values: TValue[]) {
  const [checkedValue, setCheckedValue] = useState<TValue>(values[0]);

  return useMemo(
    () => ({
      title,
      values,
      checkedValue,
      setCheckedValue,
    }),
    [title, values, checkedValue, setCheckedValue],
  );
}

type RadioGroupProps = ReturnType<typeof useRadioGroup>;

export function RadioGroup(props: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="mb-1 font-medium text-grey-900">{props.title}</legend>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
        {props.values.map((value) => (
          <RadioInput
            key={value}
            name={props.title}
            checked={props.checkedValue === value}
            onChange={() => {
              props.setCheckedValue(value);
            }}
            label={value}
          />
        ))}
      </div>
    </fieldset>
  );
}

type InputProps = {
  name: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: ReactNode;
};
function RadioInput(props: InputProps) {
  const id = useId();
  const checkedLabelStyle = "border bg-primary-50 border-primary-600 text-primary-600";
  const notCheckedLabelStyle = "border bg-white border-grey-200 text-grey-700";
  const labelStyle = props.checked ? checkedLabelStyle : notCheckedLabelStyle;
  const notCheckedInputBorderStyle = "border-grey-300";
  const checkedInputBorderStyle = "border-primary-600 bg-primary-600";
  const inputBorderStyle = props.checked ? checkedInputBorderStyle : notCheckedInputBorderStyle;
  const checkedInputStyle = "bg-primary-600 border- border-primary-50 border-4";
  const notCheckedInputStyle = "bg-none";
  const inputStyle = props.checked ? checkedInputStyle : notCheckedInputStyle;
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center gap-2 rounded-xl p-4 capitalize transition-all ${labelStyle}`}
    >
      <span className={`grid h-4 w-4 place-items-center rounded-full border ${inputBorderStyle}`}>
        <input
          type="radio"
          id={id}
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
          className={`h-full w-full  appearance-none rounded-full transition-all ${inputStyle}`}
        />
      </span>
      {props.label}
    </label>
  );
}
