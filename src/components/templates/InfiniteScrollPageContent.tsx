"use client";

import React, { useMemo } from "react";

import useDualInfiniteScroll from "@/hooks/useDualInfiniteScroll";

import { CardsGrid } from "../application/advertisements/cardsGrid";
import { Banner } from "../application/banner";

const MAXIMUM_BANNERS_PER_CAROUSEL = 10;
const MAXIMUM_ADDS_PER_GRID = 8;

export const InfiniteScrollPageContent = () => {
  const { homepageItems, categoryItems } = useDualInfiniteScroll();

  const sections = useMemo(() => {
    const newSections: JSX.Element[] = [];
    let homepageIndex = 0;
    let categoryIndex = 0;

    while (
      homepageIndex < homepageItems.length ||
      categoryIndex < categoryItems.length
    ) {
      if (homepageIndex < homepageItems.length) {
        newSections.push(
          <Banner
            items={homepageItems.slice(
              homepageIndex,
              homepageIndex + MAXIMUM_BANNERS_PER_CAROUSEL
            )}
            key={`banner-${homepageIndex}`}
          />
        );
        homepageIndex += MAXIMUM_BANNERS_PER_CAROUSEL;
      }

      if (categoryIndex < categoryItems.length) {
        newSections.push(
          <CardsGrid
            items={categoryItems.slice(
              categoryIndex,
              categoryIndex + MAXIMUM_ADDS_PER_GRID
            )}
            key={`cards-${categoryIndex}`}
          />
        );
        categoryIndex += MAXIMUM_ADDS_PER_GRID;
      }
    }

    return newSections;
  }, [homepageItems, categoryItems]);

  return <div>{sections}</div>;
};
