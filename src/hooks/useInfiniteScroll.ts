import useSWRInfinite from "swr/infinite";

import { Fetcher } from "@/api/fetcher";

const defaultPageConfig = {
  pageSize: 16,
  initialPageNumber: 1,
};

// TODO: remove fetcher from the future, we should be able to use only the key to fetch the data. The fetcher will be generic for our whole API
function useInfiniteScroll<T extends unknown[]>(
  path: string,
  fetcher: Fetcher<T>,
  pageConfig?: { pageSize: number; initialPageNumber: number }
) {
  const { pageSize, initialPageNumber } = pageConfig || defaultPageConfig;

  const key = (index: number) =>
    `${path}&page=${index + initialPageNumber}&size=${pageSize}`;

  const { data, isValidating, isLoading, setSize } = useSWRInfinite<T>(
    key,
    fetcher
  );

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
}

export default useInfiniteScroll;
