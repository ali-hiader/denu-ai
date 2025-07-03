"use client";

import React from "react";
import Image from "next/image";

type BeforeAfterRevealCardProps = {
  beforeSrc: string;
  afterSrc: string;
  overlayColor?: string;
  animationSpeed?: string; // e.g. "8s"
};

export const BeforeAfterRevealCard: React.FC<BeforeAfterRevealCardProps> = ({
  beforeSrc,
  afterSrc,
}) => {
  return (
    <div className="flex-1 w-full max-w-[280px] sm:max-w-md mx-auto relative ">
      {/* Outer glows */}
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg blur-xl"></div>
      <div className="absolute -inset-1.5 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-2xl animate-pulse"></div>

      {/* Main content */}
      <div className="relative bg-[#050A14] rounded-lg backdrop-blur-sm border border-primary/10">
        <div
          className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group"
          role="img"
          aria-label="Before and after image comparison"
        >
          {/* Base image */}
          <Image
            src={beforeSrc}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover z-0"
            width={500}
            height={1000}
            loading="eager"
            decoding="async"
          />

          {/* Overlay with reveal animation */}
          <div
            className="absolute inset-0 z-10 animate-[revealClip_var(--tw-duration)_ease-in-out_infinite] [clip-path:inset(0_100%_0_0)] before:content-start before:w-1 before:absolute before:z-[1000] before:top-0 before:h-full before:bg-gradient-to-t before:from-white/5 before:via-primary before:to-white/5 before:animate-[moveLeftRight_3s_ease-in-out_infinite]"
            style={
              {
                "--tw-duration": "3s",
              } as React.CSSProperties
            }
          >
            {/* Color overlay */}
            {/* <div
              className="absolute inset-0 z-0"
              style={
                {
                  //  backgroundColor: overlayColor,
                }
              }
            /> */}

            {/* After image */}
            <Image
              src={afterSrc}
              alt="After"
              className="relative w-full h-full object-cover z-10 mix-blend-lighten "
              width={500}
              height={1000}
              loading="eager"
              decoding="sync"
            />

            {/* Scanning line that moves R➝L then L➝R */}
            {/* <div className="w-full h-full absolute z-20 bg-amber-900 top-0"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
