"use client";

import React, { useCallback, useEffect, useMemo } from "react";

import useDualInfiniteScroll from "@/hooks/useDualInfiniteScroll";

import { CardsGrid } from "../application/advertisements/cardsGrid";
import { Banner } from "../application/banner";
import { LoadingSpinner } from "../ui/loadingSpinner";

const MAXIMUM_BANNERS_PER_CAROUSEL = 10;
const MAXIMUM_ADDS_PER_GRID = 8;

export const InfiniteScrollPageContent = () => {
  const {
    homepageItems,
    categoryItems,
    isLoadingMore,
    isReachingEnd,
    loadMore,
  } = useDualInfiniteScroll();

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

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollHeight - scrollTop - clientHeight < 100 &&
      !isLoadingMore &&
      !isReachingEnd
    ) {
      loadMore();
    }
  }, [isLoadingMore, isReachingEnd, loadMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      {sections}
      {isLoadingMore ? (
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      ) : null}
      {isReachingEnd ? (
        <p className="flex justify-center animate-pulse text-primary text-md">
          You have reached the end!
        </p>
      ) : null}
    </div>
  );
};
