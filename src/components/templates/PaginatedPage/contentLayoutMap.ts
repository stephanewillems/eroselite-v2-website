// Our paginated content only shows these two components for now
enum PaginatedPageComponentType {
  Banner = "banner",
  CardGrid = "cardGrid",
}

export enum ContentType {
  DefaultLayout = "default",
  CardGridLayout = "cardGridLayout",
}

export const contentLayoutMap: Record<
  ContentType,
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
  cardGridLayout: [
    // Only cards page, i,e "Now available page"
    { type: PaginatedPageComponentType.CardGrid, itemsPerPage: 28 },
  ],
};
