import { Draft } from "immer";
import { ChangeEventHandler, ReactNode, useId } from "react";
import { Updater } from "use-immer";

type GroupProps<TValues extends Record<string, boolean>> = {
  values: TValues;
  setValues: Updater<TValues>;
};
export function RadioGroup<TValues extends Record<string, boolean>>(props: GroupProps<TValues>) {
  function onChange<TValue extends keyof Draft<TValues>>(value: TValue) {
    props.setValues((draft) => {
      return Object.fromEntries(
        Object.entries(draft).map(([k]) => (k === value ? [k, true] : [k, false])),
      ) as Draft<TValues>;
    });
  }

  return (
    <fieldset>
      <legend className="font-medium mb-1">Preferred communication channel</legend>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        {Object.entries(props.values).map(([value, checked]) => (
          <RadioInput
            key={value}
            name="contact method"
            checked={checked}
            onChange={() => {
              onChange(value);
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
      className={`rounded-xl p-4 transition-all flex items-center gap-2 capitalize cursor-pointer ${labelStyle}`}
    >
      <span className={`rounded-full border w-4 h-4 grid place-items-center ${inputBorderStyle}`}>
        <input
          type="radio"
          id={id}
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
          className={`appearance-none rounded-full  transition-all w-full h-full ${inputStyle}`}
        />
      </span>
      {props.label}
    </label>
  );
}
