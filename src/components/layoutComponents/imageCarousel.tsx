import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BeforeAfterRevealCard } from "./beforeAndAfter";

const imageData = [
  {
    beforeSrc: "/nude1.webp",
    afterSrc: "/clothes1.jpg",
  },
  {
    beforeSrc: "/nude2.webp",
    afterSrc: "/clothes2.jpg",
  },
  {
    beforeSrc: "/nude3.webp",
    afterSrc: "/clothes3.jpg",
  },
];

export default function ImageCarousel() {
  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{ loop: true, align: "start", active: true }}
    >
      <CarouselContent>
        {imageData.map((item, index) => (
          <CarouselItem key={index}>
            <BeforeAfterRevealCard
              beforeSrc={item.beforeSrc}
              afterSrc={item.afterSrc}
              animationSpeed="3s"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
