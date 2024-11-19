import { advertisements } from "@/data/advertisements";
import { Advertisement } from "@/types/api";

export type AdvertisementType = "homepage" | "category";

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
