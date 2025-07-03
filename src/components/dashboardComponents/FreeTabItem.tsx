import React from "react";

function FreeTabItem() {
  return (
    <div className="rounded-lg flex gap-2.5 justify-center items-center relative h-full bg-transparent px-5 py-2.5 w-full text-md hover:cursor-pointer">
      <div className="">
        <small className="text-sm leading-5 text-white">
          <span className="text-white text-sm font-medium">FREE</span>
        </small>
      </div>
    </div>
  );
}

export default FreeTabItem;
