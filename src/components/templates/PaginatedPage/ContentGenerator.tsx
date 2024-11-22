import { Advertisement } from "@/types/api";

import { LayoutType } from "./contentLayoutMap";

interface ContentGeneratorProps {
  layoutType?: LayoutType;
  bannerItems: Advertisement[];
  categoryItems: Advertisement[];
}

export const ContentGenerator = ({
  layoutType = LayoutType.DefaultLayout,
  bannerItems = [],
  categoryItems = [],
}: ContentGeneratorProps) => {
  return <div>ContentGenerator</div>;
};
