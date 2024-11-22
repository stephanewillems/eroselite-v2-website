"use client";

import { useSearchParams } from "next/navigation";

import { advertisementsFetcher } from "@/api/fetcher"; // Your fetcher implementation
import { CardsGrid } from "@/components/application//advertisements/cardsGrid";
import { Banner } from "@/components/application/banner";
import { Pagination } from "@/components/ui/pagination";
import usePaginatedData from "@/hooks/usePaginatedData";

export const PaginatedPage = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const {
    data: bannerItems,
    isLoading: bannerItemsAreLoading,
    totalPages: bannerTotalPages,
  } = usePaginatedData(
    "/api/advertisements?type=homepage",
    advertisementsFetcher,
    { pageNumber: currentPage, pageSize: 10 }
  );

  const {
    data: categoryItems,
    isLoading: categoryItemsAreLoading,
    totalPages: categoryTotalPages,
  } = usePaginatedData(
    "/api/advertisements?type=category",
    advertisementsFetcher,
    { pageNumber: currentPage, pageSize: 16 }
  );

  const isLoading = bannerItemsAreLoading || categoryItemsAreLoading;
  const totalNumberOfPages = Math.max(bannerTotalPages, categoryTotalPages);

  // Banner items
  const bannerPartSize = Math.ceil(bannerItems.length / 3);
  const firstBannerItems = bannerItems.slice(0, bannerPartSize);
  const secondBannerItems = bannerItems.slice(
    bannerPartSize,
    bannerPartSize * 2
  );
  const thirdBannerItems = bannerItems.slice(bannerPartSize * 2);

  // Category items
  const cardGridPartSize = Math.ceil(categoryItems.length / 2);
  const firstCardGridItems = categoryItems.slice(0, cardGridPartSize);
  const secondCardGridItems = categoryItems.slice(
    cardGridPartSize,
    cardGridPartSize * 2
  );

  return (
    <div className="py-two flex flex-col gap-four">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* // TODO: lets find a way of making this more smart, generating the banners and cards dynamically based on the size we want. */}
          <div className="flex flex-col gap-two">
            <Banner items={firstBannerItems} />
            <CardsGrid items={firstCardGridItems} />
            <Banner items={secondBannerItems} />
            <CardsGrid items={secondCardGridItems} />
            <Banner items={thirdBannerItems} />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalNumberOfPages}
          />
        </>
      )}
    </div>
  );
};
