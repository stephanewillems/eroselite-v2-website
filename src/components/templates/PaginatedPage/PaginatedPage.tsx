"use client";

import { useSearchParams } from "next/navigation";

import { advertisementsFetcher } from "@/api/fetcher";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { Pagination } from "@/components/ui/pagination";
import usePaginatedData from "@/hooks/usePaginatedData";

import { ContentGenerator } from "./ContentGenerator";
import { LayoutType } from "./contentLayoutMap";

interface PaginatedPageProps {
  layoutType?: LayoutType;
}

export const PaginatedPage = ({ layoutType }: PaginatedPageProps) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const shouldFetchBannerItems = layoutType !== "grid";
  const {
    data: bannerItems,
    isLoading: bannerItemsAreLoading,
    totalPages: bannerTotalPages,
  } = usePaginatedData(
    "/api/advertisements?type=homepage",
    advertisementsFetcher,
    { pageNumber: currentPage, pageSize: 30, enabled: shouldFetchBannerItems }
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

  return (
    <div className="py-two flex flex-col gap-four">
      {isLoading ? (
        <div className="flex min-h-screen justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <ContentGenerator
            bannerItems={bannerItems}
            categoryItems={categoryItems}
            layoutType={layoutType}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalNumberOfPages}
          />
        </>
      )}
    </div>
  );
};
