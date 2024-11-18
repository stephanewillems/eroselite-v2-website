import useSWRInfinite from "swr/infinite";

import { Advertisement } from "@/types/api";

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
  } = useSWRInfinite<Advertisement[]>(homepageKey, () => {});

  const {
    data: categoryData,
    isValidating: isFetchingCategories,
    isLoading: isLoadingCategories,
    setSize: setCategorySize,
  } = useSWRInfinite<Advertisement[]>(categoryKey, () => {});

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
