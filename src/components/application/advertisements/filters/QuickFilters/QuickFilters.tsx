import { Circle, Map, MessageCircleHeart, UserRoundPlus } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

import {
  LocationSelect,
  GenderSelect,
} from "@/components/application/advertisements/filters";
import { Input } from "@/components/ui/input";

import { FilterPopover } from "../FilterPopover";

export const QuickFilters = () => {
  const translate = useTranslations();

  return (
    <div className="bg-background flex gap-4 border-b border-border-light p-one">
      <div className="text-base flex flex-1 overflow-hidden gap-three items-center lg:container lg:px-one">
        <div className="flex flex-1 items-center gap-one overflow-x-scroll hide-scrollbar lg:gap-two">
          <FilterPopover />
          <LocationSelect placeholder={translate("place")} size="sm" />
          <Input icon={Map} placeholder={translate("distance")} size="sm" />
          <Input icon={MessageCircleHeart} placeholder={translate("type")} size="sm" />
          <GenderSelect icon={Circle} placeholder={translate("gender")} size="sm" />
          <Input
            icon={UserRoundPlus}
            placeholder={translate("ageStartingFrom")}
            size="sm"
            type="number"
          />
          <Input
            icon={UserRoundPlus}
            placeholder={translate("ageEndingAt")}
            size="sm"
            type="number"
          />
        </div>
      </div>
    </div>
  );
};
