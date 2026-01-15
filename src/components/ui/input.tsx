import * as React from "react";

import { cn } from "@/utils/styleUtils";

const baseStyles =
  "peer h-11 w-full rounded-lg border px-3 py-2 shadow-xs outline-none text-black bg-white border-grey-300 text-grey-600";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  validity?: "valid" | "invalid";
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, validity = "valid", ...props }, ref) => {
    const invalidStyles =
      validity === "invalid" ? "border-error-200 bg-error-50 text-error-700 placeholder:text-error-500" : "";

    return (
      <input
        type={type}
        className={cn(baseStyles, invalidStyles, className)}
        ref={ref}
        placeholder={`E.g. "${props.placeholder}"`}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
