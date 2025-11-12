"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/utils/styleUtils";
import { Icon } from "../Icon";
import { VariantProps, cva } from "class-variance-authority";

type CheckboxProps = React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>;
type CheckedState = NonNullable<CheckboxProps["checked"]>;

const checkboxVariants = cva(
  "border-primary group bg-transparent focus-visible:ring-ring data-[state=checked]:border-red data-[state=checked]:text-red peer h-4 w-4 shrink-0 rounded-[4px] border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      theme: {
        osnap: " border-grey-300 text-grey-600", // Base styles for osnap
      },
    },
    defaultVariants: {
      theme: "osnap",
    },
  },
);

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root ref={ref} className={cn(checkboxVariants(props), className)} {...props}>
      <CheckboxPrimitive.Indicator className={cn("text-inherit flex items-center justify-center")}>
        <Icon name="check" className="text-inherit h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, type CheckboxProps, type CheckedState };
