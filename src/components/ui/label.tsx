"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/utils/styleUtils";

const baseStyles = "block font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  validity?: "valid" | "invalid";
};

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, validity = "valid", ...props }, ref) => {
    const validityStyles = validity === "valid" ? "text-black" : "text-error-900";

    return <LabelPrimitive.Root ref={ref} className={cn(baseStyles, validityStyles, className)} {...props} />;
  },
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
