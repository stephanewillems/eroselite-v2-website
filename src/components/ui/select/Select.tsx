import * as React from "react";
import {
  SelectComponent,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectValue,
} from "./components";
import { SelectProps } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

export interface Option {
  value: string;
  label: string;
}

export interface GroupedOption {
  label: string;
  items: Option[];
}

export type SelectSize = "sm" | "md" | "lg";

interface SelectComponentProps extends SelectProps {
  options: Option[] | GroupedOption[];
  placeholder?: string;
  icon?: React.ReactNode;
  hideChevronIcon?: boolean;
  size?: SelectSize;
}

const sizeClasses: Record<SelectSize, string> = {
  sm: "h-7 text-sm min-w-[100px]",
  md: "h-9 text-sm min-w-[150px]",
  lg: "h-11 text-sm min-w-[200px]",
};

const Select: React.FC<SelectComponentProps> = ({
  options,
  placeholder = "Select...",
  icon,
  hideChevronIcon = false,
  size = "md",
  ...other
}) => {
  const isGrouped = "items" in options[0];

  return (
    <SelectComponent {...other}>
      <SelectTrigger
        className={cn(
          "!w-full",
          {
            "[&>svg]:hidden": hideChevronIcon,
          },
          sizeClasses[size]
        )}
      >
        {icon ? (
          <div className="flex items-center">
            <span className="mr-2 max-h-fit">{icon}</span>
            <SelectValue placeholder={placeholder} />
          </div>
        ) : (
          <SelectValue placeholder={placeholder} />
        )}
      </SelectTrigger>
      <SelectContent>
        {isGrouped
          ? (options as GroupedOption[]).map((group, index) => (
              <SelectGroup key={index}>
                <SelectLabel>{group.label}</SelectLabel>
                {group.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))
          : (options as Option[]).map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
      </SelectContent>
    </SelectComponent>
  );
};

export default Select;
