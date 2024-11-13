import { BookHeartIcon } from "lucide-react";
import React from "react";

import Select from "@/components/ui/select";
import {
  GroupedOption,
  Option,
  SelectComponentProps,
} from "@/components/ui/select/Select";

const defaultOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Transsexual", value: "trans" },
];

interface GenderSelectProps extends Omit<SelectComponentProps, "options"> {
  options?: Option[] | GroupedOption[];
}

const GenderSelect = ({
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
        icon={<BookHeartIcon height={15} width={15} />}
        options={localOptions}
        placeholder="Gender"
        value={value}
      />
    </div>
  );
};

export default GenderSelect;
