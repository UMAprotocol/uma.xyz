"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/styleUtils";

const commonStyles = "block font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

const labelVariants = cva(commonStyles, {
  variants: {
    theme: {
      osnap: "base-styles-for-themeA", // Base styles for osnap
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
      class: "text-black",
    },
    {
      theme: "osnap",
      validity: "invalid",
      class: "text-error-900",
    },
  ],
  defaultVariants: {
    theme: "osnap",
    validity: "valid",
  },
});

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(props), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
