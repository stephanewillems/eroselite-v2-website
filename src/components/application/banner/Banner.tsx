"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Advertisement } from "@/types/api";

interface BannerProps extends React.HTMLAttributes<HTMLElement> {
  items: Advertisement[];
}

export const Banner = ({ items = [], ...other }: BannerProps) => {
  return (
    <div className="relative flex" {...other}>
      <Carousel
        className="w-full static [&>div]:rounded-banner flex-1"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              className="flex flex-col md:flex-row lg:max-h-[325px] lg:min-h-[325px]"
              key={item.id}
            >
              <div
                className="flex min-h-[250px] md:w-[60%] lg:w-[70%]"
                id="images-container"
              >
                <div className="relative flex-1">
                  <Image
                    alt={item.image1.alt}
                    className="object-cover"
                    fill
                    priority
                    src={item.image1.src}
                  />
                </div>
                <div className="hidden sm:block relative flex-1">
                  <Image
                    alt={item.image2.alt}
                    className="object-cover"
                    fill
                    priority
                    src={item.image2.src}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8 bg-eros-black p-one sm:pr-two md:gap-4 md:w-[40%] md:pr-three lg:p-two lg:pr-four lg:w-[30%]">
                <h3 className="text-md text-foreground">{item.title}</h3>
                <p className="text-base">{item.description}</p>
                <div className="flex flex-wrap gap-half items-center justify-between">
                  <span>{item.phone}</span>
                  <Button variant="primary">{item.cta}</Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent left-quarter border-2 w-[25px] h-[25px] top-1/4 sm:[&_svg]:size-8 sm:w-[40px] sm:h-[40px] md:top-1/2 lg:left-one" />
        <CarouselNext className="bg-transparent right-quarter border-2 w-[25px] h-[25px] top-1/4 sm:[&_svg]:size-8 sm:w-[40px] sm:h-[40px] md:top-1/2 lg:right-one " />
      </Carousel>
    </div>
  );
};
