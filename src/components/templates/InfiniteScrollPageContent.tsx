"use client";

import React, { useCallback, useEffect, useMemo } from "react";

import { advertisementsFetcher } from "@/api/fetcher";
import { CardsGrid } from "@/components/application/advertisements/cardsGrid";
import { Banner } from "@/components/application/banner";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { Advertisement } from "@/types/api";

const MAXIMUM_BANNERS_PER_CAROUSEL = 10;
const MAXIMUM_ADDS_PER_GRID = 8;

export const InfiniteScrollPageContent = () => {
  const {
    items: homepageItems,
    isLoadingMore: homepageItemsAreLoading,
    hasReachedEnd: homepageItemsReachedEnd,
    loadMore: loadMoreHomepageItems,
  } = useInfiniteScroll<Advertisement[]>(
    "/api/advertisements?type=homepage",
    advertisementsFetcher
  );

  const {
    items: categoryItems,
    isLoadingMore: categoryItemsAreLoading,
    hasReachedEnd: categoryItemsReachedEnd,
    loadMore: loadMoreCategoryItems,
  } = useInfiniteScroll<Advertisement[]>(
    "/api/advertisements?type=category",
    advertisementsFetcher
  );

  const isLoadingMore = homepageItemsAreLoading || categoryItemsAreLoading;
  const hasReachedEnd = homepageItemsReachedEnd && categoryItemsReachedEnd;

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
    const touchedBottom = scrollHeight - scrollTop - clientHeight < 100;

    const shouldLoadMoreCategoryAdds =
      touchedBottom && !categoryItemsReachedEnd && !categoryItemsAreLoading;
    const shouldLoadMoreHomepageBanners =
      touchedBottom && !homepageItemsReachedEnd && !homepageItemsAreLoading;

    if (shouldLoadMoreCategoryAdds) {
      loadMoreCategoryItems();
    }

    if (shouldLoadMoreHomepageBanners) {
      loadMoreHomepageItems();
    }
  }, [
    categoryItemsAreLoading,
    categoryItemsReachedEnd,
    homepageItemsAreLoading,
    homepageItemsReachedEnd,
    loadMoreCategoryItems,
    loadMoreHomepageItems,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <div className="flex flex-col gap-8 xl:gap-12">{sections}</div>
      {isLoadingMore ? (
        <div className="flex py-one justify-center md:py-two">
          <LoadingSpinner />
        </div>
      ) : null}
      {hasReachedEnd ? (
        <p className="py-one flex justify-center animate-pulse text-primary text-md md:py-two">
          You have reached the end!
        </p>
      ) : null}
    </div>
  );
};
