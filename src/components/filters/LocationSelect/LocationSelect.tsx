import { Map } from "lucide-react";
import React from "react";

import Select, {
  GroupedOption,
  Option,
  SelectComponentProps,
} from "@/components/ui/select";

const defaultOptions = [
  {
    label: "Belgium",
    items: [
      { label: "Antwerp", value: "antwerp" },
      { label: "Brussels", value: "brussels" },
      { label: "Ghent", value: "ghent" },
    ],
  },
  {
    label: "Netherlands",
    items: [
      { label: "Amsterdam", value: "amsterdam" },
      { label: "Rotterdam", value: "rotterdam" },
    ],
  },
];

interface LocationSelectProps extends Omit<SelectComponentProps, "options"> {
  options?: Option[] | GroupedOption[];
}

const LocationSelect = ({
  defaultValue,
  value,
  options,
  ...other
}: LocationSelectProps) => {
  const localOptions = options || defaultOptions;

  return (
    <div className="w-full">
      <Select
        {...other}
        defaultValue={defaultValue}
        hideChevronIcon
        icon={<Map height={15} width={15} />}
        options={localOptions}
        placeholder="Place"
        value={value}
      />
    </div>
  );
};

export default LocationSelect;
