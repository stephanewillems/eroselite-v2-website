import React from "react";

import { Card } from "../card";

interface CardsGridProps {
  numberOfCards?: number;
}

export const CardsGrid = ({ numberOfCards = 8 }: CardsGridProps) => {
  return (
    <div className="py-two grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:py-three xl:gap-12 xl:grid-cols-4">
      {Array.from({ length: numberOfCards }).map((_, idx) => (
        <React.Fragment key={idx}>
          <Card />
        </React.Fragment>
      ))}
    </div>
  );
};
