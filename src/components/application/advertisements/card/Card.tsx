import Image from "next/image";
import React from "react";

const placeholderImageSrc = "/girl.svg";

export const Card = () => {
  return (
    <div className="relative min-w-[250px] min-h-[250px] w-full h-full overflow-hidden aspect-square rounded-banner shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary">
      <Image
        alt="Card background"
        className="object-cover"
        fill
        src={placeholderImageSrc}
      />
      <div className="absolute flex flex-col gap-2 bottom-0 left-0 w-full bg-background opacity-75 text-white p-one">
        <div className="flex justify-between text-base">
          <span>Ginger 10</span>
          <span>Private</span>
        </div>
        <div className="flex justify-between text-base">
          <span>29 Years</span>
          <span>Antwerp</span>
        </div>
      </div>
    </div>
  );
};
