"use client";

import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BeforeAfterRevealCard } from "./before-after-reveal-card";

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
  const [api, setApi] = React.useState<CarouselApi>();
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (!api) return;

    intervalRef.current = setInterval(() => {
      if (!api) return;
      const current = api.selectedScrollSnap();
      const total = api.scrollSnapList().length;
      api.scrollTo((current + 1) % total);
    }, 3000); // autoplay every 3 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
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
