import {
  Circle,
  FilterIcon,
  Map,
  MessageCircleHeart,
  UserRoundPlus,
} from "lucide-react";
import React from "react";

import { LocationSelect, GenderSelect } from "@/components/application/filters";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const QuickFilters = () => {
  return (
    <div className="bg-background flex gap-4 border-b border-border-light p-one">
      <div className="text-base flex flex-1 overflow-hidden gap-three items-center lg:container px-one">
        <div className="flex flex-1 items-center gap-one overflow-x-scroll hide-scrollbar lg:gap-two">
          <Button className="min-w-[35px]" size="icon" variant="primary">
            <FilterIcon height={35} width={35} />
          </Button>
          <LocationSelect size="sm" />
          <Input icon={Map} placeholder="Distance" size="sm" />
          <Input icon={MessageCircleHeart} placeholder="Type" size="sm" />
          <GenderSelect icon={Circle} size="sm" />
          <Input
            icon={UserRoundPlus}
            placeholder="Age starting from"
            size="sm"
            type="number"
          />
          <Input
            icon={UserRoundPlus}
            placeholder="Age ending at"
            size="sm"
            type="number"
          />
        </div>
      </div>
    </div>
  );
};
