import React from "react";

function FreeFeatures() {
  return (
    <div className="xl:order-none order-2 flex flex-col text-white bg-red mt-6 xl:mt-0 ml-4 xl:ml-0 text-center">
      <div className="flex flex-col gap-5 md:justify-center md:items-center relative">
        <div className="flex gap-1 items-center relative">
          <h5 className="text-xl leading-5 bg-gradient-to-r from-[#b349f5] to-[#de4bea] bg-clip-text text-transparent">
            <span
              className="text-xl font-medium text-gray-200"
              //   x-bind:className="{
              //           'bg-gradient-to-r from-[#B349F5] to-[#DE4BEA] bg-clip-text text-transparent': isPro,
              //           'text-gray-200':
              //               isPro
              //       }"
            >
              DenuAI <span x-text="isPro ? 'PRO' : 'FREE'">FREE</span>
            </span>
          </h5>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden"
          >
            <path
              d="M9.99935 17.6192C14.6017 17.6192 18.3327 13.8882 18.3327 9.28582C18.3327 4.68344 14.6017 0.952484 9.99935 0.952484C5.39698 0.952484 1.66602 4.68344 1.66602 9.28582C1.66602 13.8882 5.39698 17.6192 9.99935 17.6192Z"
              stroke="url(#paint0_linear_2016_601)"
              strokeWidth="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7.49902 9.28581L9.16569 10.9525L12.499 7.61914"
              stroke="url(#paint1_linear_2016_601)"
              strokeWidth="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_2016_601"
                x1="4.40039"
                y1="0.952484"
                x2="16.1357"
                y2="1.00556"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B349F5"></stop>
                <stop offset="1" stop-color="#DE4BEA"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_2016_601"
                x1="8.31934"
                y1="7.61914"
                x2="11.8398"
                y2="7.64302"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B349F5"></stop>
                <stop offset="1" stop-color="#DE4BEA"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col md:items-center md:justify-center self-stretch relative w-full">
          <div className="md:grid md:grid-cols-2 xl:grid-cols-1 gap-x-12 gap-y-3">
            <div className="flex gap-3 items-start self-stretch relative w-full">
              <div className="rounded-[60px] p-3 flex flex-col gap-2.5 justify-center items-center relative w-10 h-10 bg-white/[6%]">
                <h5 className="text-xl leading-5 tracking-[-0.02em] text-white">
                  <span className="text-white text-xl tracking-[-0.02em] font-normal">
                    🌫️
                  </span>
                </h5>
              </div>
              <p className="text-base leading-4 tracking-[-0.02em] text-white text-left">
                <span className="text-white text-base tracking-[-0.02em] font-normal">
                  <b>LOW</b> Quality
                </span>
              </p>
            </div>
            <div className="flex gap-3 items-start self-stretch relative w-full">
              <div className="rounded-[60px] p-3 flex flex-col gap-2.5 justify-center items-center relative w-10 h-10 bg-white/[6%]">
                <h5 className="text-xl leading-5 tracking-[-0.02em] text-white">
                  <span className="text-white text-xl tracking-[-0.02em] font-normal">
                    ❗
                  </span>
                </h5>
              </div>
              <p className="text-base leading-4 tracking-[-0.02em] text-white text-left">
                <span className="text-white text-base tracking-[-0.02em] font-normal">
                  <b>WATERMARKED</b>
                </span>
              </p>
            </div>
            <div className="flex gap-3 items-start self-stretch relative w-full">
              <div className="rounded-[60px] p-3 flex flex-col gap-2.5 justify-center items-center relative w-10 h-10 bg-white/[6%]">
                <h5 className="text-xl leading-5 tracking-[-0.02em] text-white">
                  <span className="text-white text-xl tracking-[-0.02em] font-normal">
                    🐢
                  </span>
                </h5>
              </div>
              <p className="text-base leading-4 tracking-[-0.02em] text-white text-left">
                <span className="text-white text-base tracking-[-0.02em] font-normal">
                  <b>SLOW</b> Queue
                </span>
              </p>
            </div>
            <div className="flex gap-3 items-start self-stretch relative w-full">
              <div className="rounded-[60px] p-3 flex flex-col gap-2.5 justify-center items-center relative w-10 h-10 bg-white/[6%]">
                <h5 className="text-xl leading-5 tracking-[-0.02em] text-white">
                  <span className="text-white text-xl tracking-[-0.02em] font-normal">
                    💸
                  </span>
                </h5>
              </div>
              <p className="text-base leading-4 tracking-[-0.02em] text-white text-left">
                <span className="text-white text-base tracking-[-0.02em] font-normal">
                  100% Free
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeFeatures;
