import { ChangeEventHandler, ReactNode, useId, useMemo, useState } from "react";
import { cn } from "@/utils/styleUtils";

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

export function RadioGroup({ ...props }: RadioGroupProps) {
  return (
    <fieldset>
      <legend className={cn("mb-1 font-medium text-grey-900")}>{props.title}</legend>
      <div className={cn("grid grid-cols-1 gap-2 sm:grid-cols-4")}>
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

const radioInputStyles =
  "flex cursor-pointer items-center gap-2 rounded-xl capitalize transition-all p-4 border bg-white border-grey-200 text-grey-700 has-[:checked]:bg-primary-50 has-[:checked]:border-primary-600 has-[:checked]:text-primary-600";

type RadioInputProps = {
  name: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: ReactNode;
};

function RadioInput(props: RadioInputProps) {
  const id = useId();
  const notCheckedInputBorderStyle = "border-grey-300";
  const checkedInputBorderStyle = "border-primary-600";
  const inputBorderStyle = props.checked ? checkedInputBorderStyle : notCheckedInputBorderStyle;
  const checkedInputStyle = "scale-50 transform bg-primary-600";
  const notCheckedInputStyle = "bg-transparent";
  const inputStyle = props.checked ? checkedInputStyle : notCheckedInputStyle;
  return (
    <label htmlFor={id} className={cn(radioInputStyles)}>
      <span
        className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border bg-transparent ${inputBorderStyle}`}
      >
        <input
          type="radio"
          id={id}
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
          className={cn("h-full w-full appearance-none rounded-full transition-all", inputStyle)}
        />
      </span>
      {props.label}
    </label>
  );
}
