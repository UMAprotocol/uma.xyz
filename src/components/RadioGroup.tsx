import { ChangeEventHandler, ReactNode, useId, useMemo, useState } from "react";
import { cn } from "@/utils/styleUtils";
import { VariantProps, cva } from "class-variance-authority";

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

// this is only for the legend
const radioGroupVariants = cva("mb-1 font-medium", {
  variants: {
    theme: {
      osnap: "text-grey-900",
      oval: "text-white", // Base styles for oval
    },
  },
  defaultVariants: {
    theme: "osnap",
  },
});

type RadioGroupProps = ReturnType<typeof useRadioGroup> & VariantProps<typeof radioGroupVariants>;

export function RadioGroup({ theme = "osnap", ...props }: RadioGroupProps) {
  const cols = theme === "osnap" ? "4" : "2";
  return (
    <fieldset>
      <legend className={cn(radioGroupVariants({ theme }))}>{props.title}</legend>
      <div className={`grid grid-cols-1 gap-2 sm:grid-cols-${cols}`}>
        {props.values.map((value) => (
          <RadioInput
            theme={theme}
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
const commonStyles = "flex cursor-pointer items-center gap-2 rounded-xl  capitalize transition-all";
// for the label around the radio
const radioInputVariants = cva(commonStyles, {
  variants: {
    theme: {
      osnap:
        "p-4 border bg-white border-grey-200 text-grey-700 has-[:checked]:bg-primary-50 has-[:checked]:border-primary-600 has-[:checked]:text-primary-600", // Base styles for osnap
      oval: "px-4 py-3 border border-white/50 text-white/50 has-[:checked]:border-[#FB5858] has-[:checked]:shadow-[inset_0px_0px_0px_1px_#FB5858] has-[:checked]:text-white", // Base styles for oval
    },
  },
  defaultVariants: {
    theme: "osnap",
  },
});

type RadioInputProps = {
  name: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: ReactNode;
} & VariantProps<typeof radioInputVariants>;

function RadioInput(props: RadioInputProps) {
  const id = useId();
  const notCheckedInputBorderStyle = "border-grey-300";
  const checkedInputBorderStyle = "border-primary-600";
  const inputBorderStyle = props.checked ? checkedInputBorderStyle : notCheckedInputBorderStyle;
  const checkedInputStyle = "scale-50 transform bg-primary-600";
  const notCheckedInputStyle = "bg-transparent";
  const inputStyle = props.checked ? checkedInputStyle : notCheckedInputStyle;
  return (
    <label htmlFor={id} className={cn(radioInputVariants(props))}>
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
