import React from "react";

import { Advertisement } from "@/types/api";

import { Card } from "../card";

interface CardsGridProps {
  items?: Advertisement[];
}

export const CardsGrid = ({ items = [] }: CardsGridProps) => {
  return (
    <div className="py-two grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:py-three xl:gap-12 xl:grid-cols-4">
      {items.map((_, idx) => (
        <React.Fragment key={idx}>
          <Card />
        </React.Fragment>
      ))}
    </div>
  );
};
