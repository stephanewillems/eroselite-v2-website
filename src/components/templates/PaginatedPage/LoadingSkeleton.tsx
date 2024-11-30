import { BannerSkeleton, CardsGridSkeleton } from "../../ui/skeleton";

export const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 xl:gap-12">
      <div className="flex flex-col gap-8 xl:gap-12">
        <BannerSkeleton />
        <CardsGridSkeleton />
      </div>
      <div className="flex flex-col gap-8 xl:gap-12">
        <BannerSkeleton />
        <CardsGridSkeleton />
      </div>
    </div>
  );
};
