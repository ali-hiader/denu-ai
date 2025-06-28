import React from "react";

function GenerateBtn({ isFree }: { isFree?: boolean }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full z-10 p-4 lg:p-1 bg-[#250541] lg:relative lg:flex lg:bg-transparent lg:justify-start lg:items-start">
      <div className="rounded-lg px-6 mx-auto py-4 flex gap-2.5 justify-self-start  justify-center items-center self-stretch relative w-full max-w-[900px] cursor-pointer shadow-lg bg-gradient-to-r from-[#b349f5] to-[#de4bea] bg-white/0 bg-[linear-gradient(0.25912486890784375deg, #b349f5 0.00%, #de4bea 100.00%)]">
        {/* <div
          x-show="loading"
          className="flex items-center justify-center"
          style={{ display: "none" }}
        >
          <svg
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
          </svg>
        </div> */}
        <div x-show="!loading">
          <p className="leading-4 text-center text-white">
            <span
              className="text-white font-semibold text-2xl"
              style={{
                textShadow: "rgba(15, 3, 31, 0.8) 0px 0px 6px",
              }}
            >
              Generate Now
            </span>
          </p>
        </div>
        {!isFree && (
          <div
            className="flex gap-0.5 items-center relative"
            //  x-bind:className="{ 'hidden': !isPro || loading }"
          >
            <span className="text-white text-md font-medium"> 1 </span>
            <svg
              // x-bind:className="{ 'animate-bounce': isPro, 'animate-none hidden': !isPro }"
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <path
                d="M3.50033 2.58325H10.5003L12.8337 5.55694L7.00033 11.9999L1.16699 5.55694L3.50033 2.58325Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.41699 2.58325L4.66699 5.55694L7.00032 11.9999L9.33366 5.55694L7.58366 2.58325"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M1.16699 5.55688H12.8337"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenerateBtn;
