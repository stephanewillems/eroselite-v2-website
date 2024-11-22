"use client";

import { useSearchParams } from "next/navigation";

import { advertisementsFetcher } from "@/api/fetcher"; // Your fetcher implementation
import { CardsGrid } from "@/components/application//advertisements/cardsGrid";
import { Banner } from "@/components/application/banner";
import { Pagination } from "@/components/ui/pagination";
import usePaginatedData from "@/hooks/usePaginatedData";

import { ContentGenerator } from "./ContentGenerator";
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

  return (
    <div className="py-two flex flex-col gap-four">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ContentGenerator
            bannerItems={bannerItems}
            categoryItems={categoryItems}
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
