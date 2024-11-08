import * as React from "react";

import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";

interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
  size?: Size;
}

const inputSizeMap: Record<Size, string> = {
  sm: "h-7 file:text-sm md:text-sm",
  md: "h-9 file:text-md md:text-md",
  lg: "h-11 file:text-lg md:text-lg",
};
const defaultSize = inputSizeMap["md"];

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, ...props }, ref) => {
    const inputSizeClass = size ? inputSizeMap[size] : defaultSize;

    return (
      <input
        className={cn(
          "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          inputSizeClass,
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
