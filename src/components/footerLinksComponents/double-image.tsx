import Image from "next/image";
import React from "react";

interface Props {
  beforeImg: string;
  afterImg: string;
}

function DoubleImageDiv({ beforeImg, afterImg }: Props) {
  return (
    <div className="relative carousel-item block" data-index="0">
      <div className="relative">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative rounded-lg overflow-hidden bg-[#050A14] border border-gray-800 aspect-[3/4]">
            <Image
              src={beforeImg}
              alt="Before transformation"
              className="w-full h-full object-cover"
              width={400}
              height={800}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#050A14]/70 backdrop-blur-sm py-1 px-2 text-xs text-center text-white font-medium">
              Before
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden bg-[#050A14] border border-gray-800 aspect-[3/4]">
            <Image
              src={afterImg}
              alt="After transformation"
              className="w-full h-full object-cover"
              width={400}
              height={800}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#ff17a1]/70 backdrop-blur-sm py-1 px-2 text-xs text-center text-white font-medium">
              After
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoubleImageDiv;
