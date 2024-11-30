import { BannerSkeleton, CardsGridSkeleton } from "../../ui/skeleton";

export const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-four">
      <div className="flex flex-col gap-two">
        <BannerSkeleton />
        <CardsGridSkeleton />
      </div>
      <div className="flex flex-col gap-two">
        <BannerSkeleton />
        <CardsGridSkeleton />
      </div>
    </div>
  );
};
