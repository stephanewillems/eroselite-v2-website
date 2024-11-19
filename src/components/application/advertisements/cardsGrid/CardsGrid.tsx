import React from "react";

import { Advertisement } from "@/types/api";

import { Card } from "../card";

interface CardsGridProps extends React.HTMLAttributes<HTMLElement> {
  items?: Advertisement[];
}

export const CardsGrid = ({ items = [] }: CardsGridProps) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:gap-12 xl:grid-cols-4">
      {items.map((_, idx) => (
        <React.Fragment key={idx}>
          <Card />
        </React.Fragment>
      ))}
    </div>
  );
};
