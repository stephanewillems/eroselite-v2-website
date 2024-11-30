import React from "react";

import { Skeleton } from "./skeleton";

export const BannerSkeleton = () => {
  return (
    <div className="w-full">
      <Skeleton className="h-[325px]" />
    </div>
  );
};
