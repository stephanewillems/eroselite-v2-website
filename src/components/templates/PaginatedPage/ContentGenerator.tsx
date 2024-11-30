import { Banner } from "@/components/application/advertisements/banner";
import { CardsGrid } from "@/components/application/advertisements/cardsGrid";
import { Advertisement } from "@/types/api";

import {
  contentLayoutMap,
  LayoutType,
  PaginatedPageComponentType,
} from "./contentLayoutMap";

interface ContentGeneratorProps {
  layoutType?: LayoutType;
  bannerItems: Advertisement[];
  categoryItems: Advertisement[];
}

export const ContentGenerator = ({
  layoutType = "default",
  bannerItems = [],
  categoryItems = [],
}: ContentGeneratorProps) => {
  const layout = contentLayoutMap[layoutType];
  let bannerIndex = 0;
  let categoryIndex = 0;

  return (
    <div className="flex flex-col gap-8 xl:gap-12">
      {layout.map((slot, index) => {
        let items: Advertisement[] = [];

        if (slot.type === PaginatedPageComponentType.Banner) {
          items = bannerItems.slice(
            bannerIndex,
            bannerIndex + slot.itemsPerPage
          );

          bannerIndex += slot.itemsPerPage;
        } else if (slot.type === PaginatedPageComponentType.CardGrid) {
          items = categoryItems.slice(
            categoryIndex,
            categoryIndex + slot.itemsPerPage
          );

          categoryIndex += slot.itemsPerPage;
        }

        if (items.length === 0) {
          return null;
        }

        if (
          items.length !== 0 &&
          slot.type === PaginatedPageComponentType.Banner
        ) {
          return <Banner items={items} key={index} />;
        }
        if (
          items.length !== 0 &&
          slot.type === PaginatedPageComponentType.CardGrid
        ) {
          return <CardsGrid items={items} key={index} />;
        }

        return null;
      })}
    </div>
  );
};
