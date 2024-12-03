import { SelectContentProps, SelectProps } from "@radix-ui/react-select";
import * as React from "react";

import { InputSize } from "@/types/input";
import { cn } from "@/utils/classnames";
import { getInputIconSizes } from "@/utils/input";

import {
  SelectComponent,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectValue,
} from "./components";

export interface Option {
  value: string;
  label: string;
}

export interface GroupedOption {
  label: string;
  items: Option[];
}

export interface SelectComponentProps extends SelectProps {
  options: Option[] | GroupedOption[];
  triggerElement?: React.ReactNode;
  placeholder?: string;
  icon?: React.ComponentType<React.SVGAttributes<SVGElement>>;
  hideChevronIcon?: boolean;
  size?: InputSize;
  side?: SelectContentProps["side"];
  align?: SelectContentProps["align"];
}

const sizeClasses: Record<InputSize, string> = {
  sm: "h-7 text-sm min-w-[100px]",
  md: "h-9 text-sm min-w-[150px]",
  lg: "h-11 text-sm min-w-[200px]",
};

export const Select: React.FC<SelectComponentProps> = ({
  options,
  triggerElement,
  placeholder = "Select...",
  icon: IconComponent,
  hideChevronIcon = false,
  size = "md",
  side,
  align,
  ...other
}) => {
  const isGrouped = "items" in options[0];
  const [iconWidth, iconHeight] = getInputIconSizes(size);

  return (
    <SelectComponent {...other}>
      {triggerElement ? (
        triggerElement
      ) : (
        <SelectTrigger
          className={cn(
            "!w-full",
            {
              "[&>svg]:hidden": hideChevronIcon,
            },
            sizeClasses[size]
          )}
        >
          {IconComponent ? (
            <div className="flex items-center">
              <span className="mr-2 max-h-fit">
                <IconComponent height={iconWidth} width={iconHeight} />
              </span>
              <SelectValue placeholder={placeholder} />
            </div>
          ) : (
            <SelectValue placeholder={placeholder} />
          )}
        </SelectTrigger>
      )}

      <SelectContent align={align} side={side}>
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
