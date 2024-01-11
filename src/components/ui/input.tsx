import * as React from "react";

import { cn } from "@/utils/styleUtils";
import { VariantProps, cva } from "class-variance-authority";

const commonStyles = "peer h-11 w-full rounded-lg border px-3 py-2 shadow-xs outline-none";

const inputVariants = cva(commonStyles, {
  variants: {
    theme: {
      osnap: "text-black bg-white border-grey-300 text-grey-600", // Base styles for osnap
      oval: "text-white bg-white/5 border-white/5 focus:border-white rounded-[10px]", // Base styles for oval
    },
    validity: {
      valid: "", // Common valid styles
      invalid: "", // Common invalid styles
    },
  },
  compoundVariants: [
    {
      theme: "osnap",
      validity: "invalid",
      class: "border-error-200 bg-error-50 text-error-700 placeholder:text-error-500", // Specific invalid styles for osnap
    },
    {
      theme: "oval",
      validity: "invalid",
      class: "text-error-600 border-error-600", // Specific invalid styles for oval
    },
  ],
  defaultVariants: {
    theme: "osnap",
    validity: "valid",
  },
});

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(inputVariants(props), className)}
      ref={ref}
      placeholder={`E.g. “${props.placeholder}”`}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
