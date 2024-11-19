import useSWRInfinite from "swr/infinite";

import { advertisementsFetcher, AdvertisementType } from "@/api/fetcher";
import { Advertisement } from "@/types/api";

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
