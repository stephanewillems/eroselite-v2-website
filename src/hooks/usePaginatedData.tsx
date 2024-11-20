import useSWR, { Fetcher } from "swr";

function usePaginatedData<T extends unknown[]>(
  path: string,
  fetcher: Fetcher<T>,
  { pageNumber = 1, pageSize = 10 }: { pageNumber: number; pageSize: number }
) {
  const key = `${path}&page=${pageNumber}&size=${pageSize}`;
  const { data, error, isValidating } = useSWR<T>(key, fetcher, {
    keepPreviousData: true,
    revalidateOnFocus: false,
  });

  const totalItems = 50; // this should be coming from BE as a meta field
  const totalPages = Math.ceil(totalItems / pageSize);

  return {
    data: data || [],
    isLoading: isValidating,
    error,
    totalItems,
    totalPages,
  };
}

export default usePaginatedData;
