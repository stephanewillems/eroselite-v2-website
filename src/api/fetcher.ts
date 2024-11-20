import { advertisements } from "@/data/advertisements";
import { Advertisement } from "@/types/api";

export type Fetcher<T> = (path: string) => Promise<T>;

export type AdvertisementType = "homepage" | "category";

// TODO: replace dummy data with real api
export const advertisementsFetcher = (path: string) => {
  // Extract query parameters manually
  const queryParams = path.split("?")[1] || "";
  const params = Object.fromEntries(
    queryParams.split("&").map((param) => param.split("="))
  );

  const type = params.type || "";
  const pageNumber = parseInt(params.page || "1");
  const pageSize = parseInt(params.size || "10");

  const filteredData = advertisements.filter((ad) => ad.place === type);
  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;

  return new Promise<Advertisement[]>((resolve) =>
    setTimeout(() => resolve(filteredData.slice(start, end)), 500)
  );
};
