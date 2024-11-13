import * as React from "react";

import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";

interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
  size?: Size;
}

const getInputSizeClassname = (size: Size | undefined, hasIcon: boolean) => {
  const inputSizeMap: Record<Size, string> = {
    sm: cn("h-7 file:text-sm md:text-sm", {
      "pl-8": hasIcon,
    }),
    md: cn("h-9 file:text-md md:text-md", {
      "pl-10": hasIcon,
    }),
    lg: cn("h-11 file:text-lg md:text-lg", {
      "pl-12": hasIcon,
    }),
  };

  return size ? inputSizeMap[size] : inputSizeMap["md"];
};

const getIconSizeClassname = (size: Size | undefined) => {
  const iconSizeMap: Record<Size, string> = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  };

  return size ? iconSizeMap[size] : iconSizeMap["md"];
};

interface CustomInputProps extends InputProps {
  icon?: React.ComponentType<{
    className?: string;
  }>;
}

const Input = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ icon: IconComponent, className, type, size, ...props }, ref) => {
    const inputSizeClass = getInputSizeClassname(size, !!IconComponent);
    const iconSizeClass = getIconSizeClassname(size);

    return (
      <div className="relative h-full w-full max-w-sm items-center">
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
        {IconComponent ? (
          <span className="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <IconComponent
              className={cn(iconSizeClass, "text-muted-foreground")}
            />
          </span>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
