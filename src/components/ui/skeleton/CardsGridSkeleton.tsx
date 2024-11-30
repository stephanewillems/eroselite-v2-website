import React from "react";

import { Skeleton } from "./skeleton";

interface CardsGridSkeletonProps {
  numberOfCards?: number;
}

export const CardsGridSkeleton = ({
  numberOfCards = 8,
}: CardsGridSkeletonProps) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:gap-12 xl:grid-cols-4">
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <div className="space-y-2" key={index}>
          <Skeleton className="w-[150px] aspect-square w-full" />
        </div>
      ))}
    </div>
  );
};
