import * as React from "react";
import {
  SelectComponent,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
} from "./components";
import { SelectGroup, SelectValue } from "./components";
import { SelectProps } from "@radix-ui/react-select";

type Option = {
  value: string;
  label: string;
};

type GroupedOption = {
  label: string;
  items: Option[];
};

interface SelectComponentProps extends SelectProps {
  options: Option[] | GroupedOption[];
  placeholder?: string;
}

const Select: React.FC<SelectComponentProps> = ({
  options,
  placeholder = "Select...",
  ...other
}) => {
  const isGrouped = "items" in options[0];

  return (
    <SelectComponent {...other}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={placeholder} />
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
