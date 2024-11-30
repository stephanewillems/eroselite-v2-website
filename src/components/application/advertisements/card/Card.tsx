import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Advertisement } from "@/types/api";

const placeholderImageSrc = "/girl.svg";

interface CardProps {
  advertisement: Advertisement;
}

export const Card = ({ advertisement }: CardProps) => {
  return (
    <Link
      className="relative min-w-[250px] min-h-[250px] w-full h-full overflow-hidden aspect-square rounded-banner shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary"
      href={`/profile/${advertisement.id}`}
    >
      <Image
        alt="Card background"
        className="object-cover"
        fill
        src={placeholderImageSrc}
      />
      <div className="absolute flex flex-col gap-2 bottom-0 left-0 w-full bg-background opacity-75 text-white p-one">
        <div className="flex justify-between text-base">
          <span>{advertisement.title}</span>
          <span>{advertisement.cta}</span>
        </div>
        <div className="flex justify-between text-base">
          <span>{advertisement.cta}</span>
          <span>{advertisement.place}</span>
        </div>
      </div>
    </Link>
  );
};
