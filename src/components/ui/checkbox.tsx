import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/utils/classnames";

interface CustomCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: React.ReactNode;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CustomCheckboxProps
>(({ id, className, label, ...props }, ref) => (
  <div className={cn("flex items-center space-x-2", className)}>
    <CheckboxPrimitive.Root
      className="peer h-4 w-4 shrink-0 rounded-sm border border-gray shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-eros-purple data-[state=checked]:text-primary-foreground"
      id={id}
      ref={ref}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>

    {typeof label === "string" ? (
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor={id}
      >
        {label}
      </label>
    ) : (
      label
    )}
  </div>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
