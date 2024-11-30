"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const imagesList = [
  {
    thumbnail: "/EE_LOGO_SMALL.webp",
    fullSize: "/EE_LOGO_BIG.webp",
  },
  {
    thumbnail: "/girl.svg",
    fullSize: "/girl.svg",
  },
  {
    thumbnail: "/EE_LOGO_SMALL.webp",
    fullSize: "/EE_LOGO_BIG.webp",
  },
  {
    thumbnail: "/girl.svg",
    fullSize: "/girl.svg",
  },
  {
    thumbnail: "/EE_LOGO_SMALL.webp",
    fullSize: "/EE_LOGO_BIG.webp",
  },
  {
    thumbnail: "/girl.svg",
    fullSize: "/girl.svg",
  },
];

export const ImageGallery = ({ images = imagesList }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse w-full h-full gap-two lg:min-h-[900px] lg:flex-row">
      <div
        className={clsx(
          "flex gap-half hide-scrollbar overflow-x-scroll p-half justify-center lg:flex-col lg:justify-start"
        )}
      >
        {images.map((image, index) => (
          <button
            className={clsx(
              "box-border rounded-banner overflow-hidden transition-transform min-w-fit border border-transparent",
              {
                "scale-105 border !border-primary": selectedImage === image,
              }
            )}
            key={index}
            onClick={() => setSelectedImage(image)}
            type="button"
          >
            <Image
              alt={`Thumbnail ${index + 1}`}
              className="min-h-[100px] min-w-[100px] object-cover"
              height={100}
              src={image.thumbnail}
              width={100}
            />
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-[300px] max-h-fit flex items-center justify-center">
        <div className="relative flex w-full aspect-square">
          <Image
            alt="Selected"
            className="w-full h-full object-cover rounded-banner"
            fill
            priority
            src={selectedImage.fullSize}
          />
        </div>
      </div>
    </div>
  );
};
