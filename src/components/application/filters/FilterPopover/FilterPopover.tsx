import { FilterIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Popover } from "@/components/ui/popover";
import { Select } from "@/components/ui/select";

const sexualOrientation = [
  "Heterosexual",
  "Homosexual",
  "Bi-sexual",
  "Pansexual",
];

const extra = [
  "Safe sex label",
  "Smoking",
  "Drinking",
  "Tattoos",
  "Piercings",
  "Disability Services",
];

export const FilterPopover = () => {
  return (
    <Popover
      className="rounded-r-lg"
      trigger={
        <Button className="min-w-[35px]" size="icon" variant="primary">
          <FilterIcon height={35} width={35} />
        </Button>
      }
    >
      <form className="space-y-6 p-4">
        <fieldset>
          <h3 className="text-base font-medium mb-2">Sexual Orientation</h3>
          <div>
            {sexualOrientation.map((option, index) => (
              <Checkbox className="py-quarter" key={index} label={option} />
            ))}
          </div>
        </fieldset>

        <fieldset>
          <h3 className="text-base font-medium mb-2">Extra</h3>
          <div>
            {extra.map((extra, index) => (
              <Checkbox className="py-quarter" key={index} label={extra} />
            ))}
          </div>
        </fieldset>

        <div>
          <h3 className="text-md font-medium mb-2">Cupsize</h3>
          <Select
            options={[
              { value: "big", label: "Big" },
              { value: "small", label: "Small" },
            ]}
            placeholder="Select"
          />
        </div>
        <div>
          <h3 className="text-md font-medium mb-2">Hair Color</h3>
          <Select
            options={[
              { value: "blonde", label: "Blonde" },
              { value: "brunette", label: "Brunette" },
              { value: "black", label: "Black" },
              { value: "red", label: "Red" },
              { value: "gray", label: "Gray" },
            ]}
            placeholder="Select"
          />
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Rates</h3>
          <Input
            aria-label="Rates slider"
            defaultValue="50"
            max="100"
            min="0"
            type="range"
          />
        </div>

        <div className="flex flex-end">
          <Button size="lg" variant="outline">
            Apply Filters
          </Button>
        </div>
      </form>
    </Popover>
  );
};
