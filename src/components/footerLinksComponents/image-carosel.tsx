"use client";

import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import DoubleImageDiv from "./double-image";
import { usePathname } from "next/navigation";
import {
  FooterLinksHowItWorksImages,
  ImageData,
} from "@/lib/footer-links-how-works-img";

export default function FooterLinksImageCarosel({}) {
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

  const path = usePathname();
  const pageData = FooterLinksHowItWorksImages.filter(
    (data) => data[0] === path
  )[0];

  const imageData = pageData.slice(1) as ImageData[];
  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-md"
      opts={{ loop: true, align: "start", active: true }}
    >
      <CarouselContent>
        {imageData.map((item, index) => (
          <CarouselItem key={index}>
            <DoubleImageDiv beforeImg={item.clothes} afterImg={item.nudes} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
