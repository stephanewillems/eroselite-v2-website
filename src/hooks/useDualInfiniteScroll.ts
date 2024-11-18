import useSWRInfinite from "swr/infinite";

import { advertisements } from "@/data/advertisements";
import { Advertisement } from "@/types/api";

const homepageData = advertisements.filter((ad) => ad.place === "homepage");
const categoryData = advertisements.filter((ad) => ad.place === "category");

const BANNER_PAGINATION_SIZE = 20;
export const bannerAdvertisementsFetcher = (path: string) => {
  const [, queryParams] = path.split("?");
  const [, page] = queryParams.split("&");
  const pageNum = parseInt(page.split("=")[1]) || 1;

  const start = (pageNum - 1) * BANNER_PAGINATION_SIZE;
  const end = start + BANNER_PAGINATION_SIZE;

  return new Promise((resolve) =>
    setTimeout(() => resolve(homepageData.slice(start, end)), 500)
  ) as Promise<Advertisement[]>;
};

const CATEGORY_PAGINATION_SIZE = 16;
export const categoryAdvertisementsFetcher = (path: string) => {
  const [, queryParams] = path.split("?");
  const [, page] = queryParams.split("&");
  const pageNum = parseInt(page.split("=")[1]) || 1;

  const start = (pageNum - 1) * CATEGORY_PAGINATION_SIZE;
  const end = start + CATEGORY_PAGINATION_SIZE;

  return new Promise((resolve) =>
    setTimeout(() => resolve(categoryData.slice(start, end)), 500)
  ) as Promise<Advertisement[]>;
};

const useDualInfiniteScroll = () => {
  const homepageKey = (index: number) =>
    `/api/advertisements?type=homepage&page=${index + 1}`;
  const categoryKey = (index: number) =>
    `/api/advertisements?type=category&page=${index + 1}`;

  const {
    data: homepageData,
    isValidating: isFetchingBanners,
    isLoading: isLoadingBanners,
    setSize: setHomepageSize,
  } = useSWRInfinite<Advertisement[]>(homepageKey, bannerAdvertisementsFetcher);

  const {
    data: categoryData,
    isValidating: isFetchingCategories,
    isLoading: isLoadingCategories,
    setSize: setCategorySize,
  } = useSWRInfinite<Advertisement[]>(
    categoryKey,
    categoryAdvertisementsFetcher
  );

  const isLoadingMore =
    isLoadingBanners ||
    isLoadingCategories ||
    isFetchingBanners ||
    isFetchingCategories;

  const homepageItems = homepageData ? homepageData.flat() : [];
  const categoryItems = categoryData ? categoryData.flat() : [];

  const isReachingEnd =
    homepageData?.[homepageData.length - 1]?.length === 0 &&
    categoryData?.[categoryData.length - 1]?.length === 0;

  const loadMore = () => {
    setHomepageSize((prev) => prev + 1);
    setCategorySize((prev) => prev + 1);
  };

  return {
    homepageItems,
    categoryItems,
    isLoadingMore,
    isReachingEnd,
    loadMore,
  };
};

export default useDualInfiniteScroll;
