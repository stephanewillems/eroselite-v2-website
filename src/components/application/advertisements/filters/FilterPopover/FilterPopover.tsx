import { FilterIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover } from "@/components/ui/popover";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

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
      className="rounded-r-lg p-one lg:min-w-[350px]"
      trigger={
        <Button className="min-w-[35px]" size="icon" variant="primary">
          <FilterIcon height={35} width={35} />
        </Button>
      }
    >
      <form className="space-y-6 p-one">
        <fieldset>
          <h3 className="text-md font-medium mb-2">Sexual Orientation</h3>
          <div>
            {sexualOrientation.map((option, index) => (
              <Checkbox className="py-quarter" key={index} label={option} />
            ))}
          </div>
        </fieldset>

        <fieldset>
          <h3 className="text-md font-medium mb-2">Extra</h3>
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
          <h3 className="text-md font-medium mb-2">Rates</h3>
          <div className="text-base flex justify-between pb-half">
            <span>€50</span>
            <span>€1000</span>
          </div>
          <Slider defaultValue={[50, 1000]} max={1000} step={50} />
        </div>

        <div>
          <h3 className="text-md font-medium mb-2">Age</h3>
          <div className="text-base flex justify-between pb-half">
            <span>18</span>
            <span>100</span>
          </div>
          <Slider
            defaultValue={[18, 100]}
            max={100}
            minStepsBetweenThumbs={1}
            step={1}
          />
        </div>

        <div>
          <h3 className="text-md font-medium mb-2">Services</h3>
          <Select
            options={[
              { value: "massage", label: "Massage" },
              { value: "preplay", label: "Preplay" },
            ]}
            placeholder="Select"
          />
        </div>
      </form>
    </Popover>
  );
};
