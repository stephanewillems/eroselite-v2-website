import useSWRInfinite from "swr/infinite";

import { advertisements } from "@/data/advertisements";
import { Advertisement } from "@/types/api";

type AdvertisementType = "homepage" | "category";

const HOMEPAGE_BANNER_PAGINATION_SIZE = 20;
const CATEGORY_PAGINATION_SIZE = 16;

// TODO: replace dummy data with real api
export const advertisementsFetcher = (path: string) => {
  const [, queryParams] = path.split("?");
  const [typeParam, pageParam] = queryParams.split("&");
  const type = typeParam.split("=")[1];
  const page = parseInt(pageParam.split("=")[1], 10) || 1;

  const PAGE_SIZE =
    type === "homepage"
      ? HOMEPAGE_BANNER_PAGINATION_SIZE
      : CATEGORY_PAGINATION_SIZE;
  const filteredData = advertisements.filter((ad) => ad.place === type);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return new Promise((resolve) =>
    setTimeout(() => resolve(filteredData.slice(start, end)), 500)
  ) as Promise<Advertisement[]>;
};

const useInfiniteScroll = (type: AdvertisementType) => {
  const key = (index: number) =>
    `/api/advertisements?type=${type}&page=${index + 1}`;

  const { data, isValidating, isLoading, setSize } = useSWRInfinite<
    Advertisement[]
  >(key, advertisementsFetcher);

  const items = data ? data.flat() : [];
  const hasReachedEnd = data?.[data.length - 1]?.length === 0;

  const loadMore = () => {
    setSize((prev) => prev + 1);
  };

  return {
    items,
    isLoadingMore: isLoading || isValidating,
    hasReachedEnd,
    loadMore,
  };
};

export default useInfiniteScroll;
