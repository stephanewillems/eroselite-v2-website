// Our paginated content only shows these two components for now
export enum PaginatedPageComponentType {
  Banner = "banner",
  CardGrid = "cardGrid",
}

export type LayoutType = "default" | "grid";

export const contentLayoutMap: Record<
  LayoutType,
  { type: PaginatedPageComponentType; itemsPerPage: number }[]
> = {
  default: [
    // Default layout contains three banners and two card grids
    { type: PaginatedPageComponentType.Banner, itemsPerPage: 12 },
    { type: PaginatedPageComponentType.CardGrid, itemsPerPage: 8 },
    { type: PaginatedPageComponentType.Banner, itemsPerPage: 12 },
    { type: PaginatedPageComponentType.CardGrid, itemsPerPage: 8 },
    { type: PaginatedPageComponentType.Banner, itemsPerPage: 12 },
  ],
  grid: [
    // Only cards page, i,e "Now available page"
    { type: PaginatedPageComponentType.CardGrid, itemsPerPage: 28 },
  ],
};
