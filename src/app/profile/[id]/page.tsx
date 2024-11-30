import { ImageGallery } from "@/components/application/profile/ImageGallery";
import { InfoWidget } from "@/components/application/profile/InfoWidget";

const UserProfilePage = () => {
  return (
    <div className="flex flex-col w-full py-one gap-three basis-3/5 lg:flex-row">
      <ImageGallery />
      <InfoWidget />
    </div>
  );
};

export default UserProfilePage;
