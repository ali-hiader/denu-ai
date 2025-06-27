import React from "react";
import DiamondIcon from "./icons/diamond";

function ProTabItem() {
  return (
    <div className=" px-5 py-2.5 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-md hover:cursor-pointer">
      <small className="text-sm leading-5 text-white">
        <span className="text-white text-sm font-medium">
          <div className="flex gap-1 items-center font-bold text-white">
            PRO
            <DiamondIcon />
          </div>
        </span>
      </small>
    </div>
  );
}

export default ProTabItem;
