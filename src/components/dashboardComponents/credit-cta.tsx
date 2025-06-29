import React from "react";
import { DialogClose } from "../ui/dialog";

function CreditCTA() {
  return (
    <>
      <div className="self-stretch inline-flex justify-center items-center gap-3">
        <DialogClose>
          <div className="flex-1 px-5 py-4 bg-white/5 min-w-32 rounded-xl shadow-[inset_0px_0px_16px_0px_rgba(179,83,235,0.60)] outline-1 outline-offset-[-1px] flex justify-center items-center gap-1.5 hover:cursor-pointer">
            <div className="justify-start text-white text-sm font-medium font-sans leading-none">
              Cancel
            </div>
          </div>
        </DialogClose>
        <div className=" min-w-40 sm:w-64  px-5 py-4 bg-gradient-to-b from-[#B349F5] to-[#DE4BEA] rounded-xl shadow-[inset_-4px_-4px_10px_0px_rgba(103,0,162,0.40)]  outline-1 outline-offset-[-1px] outline-white/10 flex justify-center items-center gap-1.5 hover:cursor-pointer">
          <div className="text-center justify-start text-white text-sm font-medium font-sans leading-none ">
            Next
          </div>
          <div>
            {/* <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreditCTA;
