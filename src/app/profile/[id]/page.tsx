import { CardsGrid } from "@/components/application/advertisements/cardsGrid";
import { ImageGallery } from "@/components/application/profile/ImageGallery";
import { InfoWidget } from "@/components/application/profile/InfoWidget";
import { advertisementsDummyData } from "@/data/advertisements";

const UserProfilePage = () => {
  return (
    <div className="flex flex-col gap-two divide-y divide-primary">
      <div className="flex flex-col w-full gap-three basis-3/5 py-two lg:flex-row">
        <ImageGallery />
        <InfoWidget />
      </div>
      <br />
      <div className="flex flex-col gap-two py-two">
        <h2 className="text-2xl font-bold">Related Advertisement</h2>
        <CardsGrid items={advertisementsDummyData.slice(0, 4)} />
      </div>
    </div>
  );
};

export default UserProfilePage;
