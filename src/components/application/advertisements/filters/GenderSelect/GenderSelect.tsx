import { BookHeartIcon } from "lucide-react";
import React from "react";

import {
  Select,
  GroupedOption,
  Option,
  SelectComponentProps,
} from "@/components/ui/select";

const defaultOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Transsexual", value: "trans" },
];

interface GenderSelectProps extends Omit<SelectComponentProps, "options"> {
  options?: Option[] | GroupedOption[];
}

export const GenderSelect = ({
  defaultValue,
  value,
  options,
  ...other
}: GenderSelectProps) => {
  const localOptions = options || defaultOptions;

  return (
    <div className="w-full">
      <Select
        {...other}
        defaultValue={defaultValue}
        hideChevronIcon
        icon={BookHeartIcon}
        options={localOptions}
        value={value}
      />
    </div>
  );
};
