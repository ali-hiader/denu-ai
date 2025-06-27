"use client";

import Image from "next/image";
import React, { useState } from "react";

function ImagePicker() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-full w-full backdrop-blur-[20px] rounded-[40px] bg-white/[2%] max-w-[950px] hover:cursor-pointer shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)] overflow-hidden ring-inset ring-[1px] ring-white/20 flex flex-col items-center justify-center relative p-4 ">
      {preview && (
        <div className="w-full overflow-hidden object-contain">
          <Image
            src={preview}
            alt="Preview"
            className="absolute top-1/2 pointer-events-none -z-10 -translate-y-1/2  w-full h-40 object-contain rounded shadow"
            width={200}
            height={200}
          />
        </div>
      )}

      <input
        type="file"
        id="picker"
        className="hidden"
        onChange={handleImageChange}
        accept="image/jpeg,image/png,image/webp"
      />
      <div
        className={`${
          preview ? "opacity-0 hover:opacity-80" : ""
        } transition-all duration-500 w-full`}
      >
        <label
          htmlFor="picker"
          className="transition-all flex-1 flex flex-col items-center justify-center w-full cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <svg
              className="mb-3 w-10 h-10 text-[#B349F5]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              ></path>
            </svg>
            <p className="text-base leading-[22px] tracking-[-0.02em] text-center flex flex-col">
              <span className="text-white/40 text-xl tracking-[-0.02em] font-medium">
                Drag and drop your image or
              </span>
              <span className="text-white text-xl tracking-[-0.02em] font-medium underline cursor-pointer">
                Browse Now
              </span>
            </p>
          </div>
        </label>

        <div className="mt-auto" x-show="!imagePreview">
          <small className="text-sm leading-5 tracking-[-0.02em] text-center text-white/[32%] flex flex-col gap-1 mb-5">
            <span className="text-white/[32%] text-md tracking-[-0.02em] font-normal">
              Max. Image Size: <b>5 MB</b>
            </span>
            <span className="text-white/[32%] text-md tracking-[-0.02em] font-normal">
              File Format: <b>JPEG, PNG or WebP</b>
            </span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default ImagePicker;
