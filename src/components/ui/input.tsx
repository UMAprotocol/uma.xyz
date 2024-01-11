import * as React from "react";

import { cn } from "@/utils/styleUtils";
import { VariantProps, cva } from "class-variance-authority";

const commonStyles = "peer h-11 w-full rounded-lg border px-3 py-2 shadow-xs";

const inputVariants = cva(commonStyles, {
  variants: {
    theme: {
      osnap: "base-styles-for-themeA", // Base styles for osnap
      oval: "base-styles-for-themeB", // Base styles for oval
    },
    validity: {
      valid: "valid-styles", // Common valid styles
      invalid: "invalid-styles", // Common invalid styles
    },
  },
  compoundVariants: [
    {
      theme: "osnap",
      validity: "valid",
      class: "border-grey-300 bg-white text-grey-900 placeholder:text-grey-500",
    },
    {
      theme: "osnap",
      validity: "invalid",
      class: "border-error-200 bg-error-50 text-error-700 placeholder:text-error-500",
    },
    {
      theme: "oval",
      validity: "valid",
      class: "text-white", // Specific valid styles for themeB
    },
    {
      theme: "oval",
      validity: "invalid",
      class: "text-error-600", // Specific invalid styles for themeB
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
