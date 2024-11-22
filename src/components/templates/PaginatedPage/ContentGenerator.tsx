import React from "react";

import { Advertisement } from "@/types/api";

interface ContentGeneratorProps {
  bannerItems: Advertisement[];
  categoryItems: Advertisement[];
}

export const ContentGenerator = ({
  bannerItems = [],
  categoryItems = [],
}: ContentGeneratorProps) => {
  return <div>ContentGenerator</div>;
};
