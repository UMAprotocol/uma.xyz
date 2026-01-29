"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/utils/styleUtils";
import { Icon } from "../Icon";

const baseStyles =
  "border-primary group bg-transparent focus-visible:ring-ring data-[state=checked]:border-red data-[state=checked]:text-red peer h-4 w-4 shrink-0 rounded-[4px] border border-grey-300 text-grey-600 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

type CheckboxProps = React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root>;
type CheckedState = NonNullable<CheckboxProps["checked"]>;

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root ref={ref} className={cn(baseStyles, className)} {...props}>
      <CheckboxPrimitive.Indicator className={cn("text-inherit flex items-center justify-center")}>
        <Icon name="check" className="text-inherit h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, type CheckboxProps, type CheckedState };
