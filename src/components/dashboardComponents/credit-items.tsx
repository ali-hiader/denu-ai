import React from "react";

function CreditItems() {
  return (
    <>
      <div className="w-full font-sans px-5 py-4 bg-gradient-to-b rounded-xl inline-flex justify-between items-center hover:cursor-pointer from-gray-950 to-slate-950 shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.14)] border-1 border-transparent">
        <div className="inline-flex flex-col justify-start items-start gap-1.5">
          <div className="justify-start text-white text-sm font-normal leading-none">
            Pro starter
          </div>
          <div className="inline-flex justify-center items-center gap-1.5">
            <div className="justify-start text-white text-lg lg:text-xl font-semibold font-sans leading-normal">
              $ 12.00
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6">
          <div className="inline-flex flex-col justify-start items-end gap-1.5">
            <div className="inline-flex justify-center items-center gap-1">
              <div data-svg-wrapper="" className="relative">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.50033 2.5835H10.5003L12.8337 5.55718L7.00033 12.0002L1.16699 5.55718L3.50033 2.5835Z"
                    stroke="white"
                    strokeWidth="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6.41699 2.5835L4.66699 5.55718L7.00032 12.0002L9.33366 5.55718L7.58366 2.5835"
                    stroke="white"
                    strokeWidth="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.16699 5.55713H12.8337"
                    stroke="white"
                    strokeWidth="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="justify-start text-white text-normal font-sans leading-none">
                60 Credits
              </div>
            </div>
            <div className="justify-start text-white text-opacity-50 text-normal font-normal font-sans leading-3">
              $0.20 per credit
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch relative">
        <template x-if="selectedPlan == 'basic'">
          <div className="w-full h-20  absolute bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-2xl blur-sm hover:cursor-pointer"></div>
        </template>

        <div className="w-full font-sans px-5 py-4 bg-gradient-to-b rounded-xl inline-flex justify-between items-center hover:cursor-pointer from-gray-950 to-slate-950 shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.14)]  border-1 border-transparent">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <div className="justify-start text-white text-sm font-normal font-sans leading-none">
              Pro Basic
            </div>
            <div className="inline-flex justify-center items-center gap-1.5">
              <div className="justify-start text-white text-lg lg:text-xl font-semibold font-sans leading-normal">
                $ 15.00
              </div>
              <div className="absolute top-2 -mt-4 right-4 px-2 py-1 bg-gradient-to-b from-purple-600 to-fuchsia-600 rounded-[60px] outline outline-1 outline-offset-[-1px] outline-purple-400 flex justify-center items-center gap-1.5">
                <div className="justify-start text-white text-[13px] font-medium font-sans leading-[10px]">
                  +9<b> Free Credits</b>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="inline-flex flex-col justify-start items-end gap-1.5">
              <div className="inline-flex justify-center items-center gap-1">
                <div data-svg-wrapper="" className="relative">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.50033 2.5835H10.5003L12.8337 5.55718L7.00033 12.0002L1.16699 5.55718L3.50033 2.5835Z"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.41699 2.5835L4.66699 5.55718L7.00032 12.0002L9.33366 5.55718L7.58366 2.5835"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16699 5.55713H12.8337"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="justify-start text-white text-normal font-sans leading-none">
                  85 Credits
                </div>
              </div>
              <div className="justify-start text-white text-opacity-50 text-normal font-normal font-sans leading-3">
                $0.18 per credit
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 py-1.5 left-[20px] top-[-10px] absolute bg-gradient-to-b from-[#B349F5] to-[#DE4BEA] rounded-[60px] shadow-[inset_-4px_-4px_8px_0px_rgba(103,0,162,0.40)] shadow-[inset_4px_4px_8px_0px_rgba(255,255,255,0.40)] outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-1.5">
          <div className="text-center justify-start text-white text-[10px] font-medium font-sans leading-[10px]">
            Most Popular
          </div>
        </div>
      </div>

      {/* Pro Plus */}

      <div className="self-stretch relative">
        <template x-if="selectedPlan == 'plus'">
          <div className="w-full h-20 absolute bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-2xl blur-sm hover:cursor-pointer"></div>
        </template>
        <div
          className="w-full h-20 absolute bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-2xl blur-sm hover:cursor-pointer"
          data-has-alpine-state="true"
        ></div>

        <div className="w-full px-5 py-4 bg-gradient-to-b rounded-xl inline-flex justify-between items-center hover:cursor-pointer from-gray-950/40 to-slate-950/40 shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.40)] border border-1 border-purple-500">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <div className="justify-start text-white text-sm font-normal font-sans leading-none">
              Pro Plus
            </div>
            <div className="inline-flex justify-center items-center gap-1.5">
              <div className="justify-start text-white text-lg lg:text-xl font-semibold font-sans leading-normal">
                $ 28.00
              </div>
              <div className="absolute top-2 -mt-4 right-4 px-2 py-1 bg-gradient-to-b from-purple-600 to-fuchsia-600 rounded-[60px] outline outline-1 outline-offset-[-1px] outline-purple-400 flex justify-center items-center gap-1.5">
                <div className="justify-start text-white text-[13px] font-medium font-sans leading-[10px]">
                  +35<b> Free Credits</b>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="inline-flex flex-col justify-start items-end gap-1.5">
              <div className="inline-flex justify-center items-center gap-1">
                <div data-svg-wrapper="" className="relative">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.50033 2.5835H10.5003L12.8337 5.55718L7.00033 12.0002L1.16699 5.55718L3.50033 2.5835Z"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.41699 2.5835L4.66699 5.55718L7.00032 12.0002L9.33366 5.55718L7.58366 2.5835"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16699 5.55713H12.8337"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="justify-start text-white text-normal font-sans leading-none">
                  175 Credits
                </div>
              </div>
              <div className="justify-start text-white text-opacity-50 text-normal font-normal font-sans leading-3">
                $0.16 per credit
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Advanced */}

      <div className="self-stretch relative">
        <template x-if="selectedPlan == 'pro'">
          <div className="w-full h-20 absolute bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-2xl blur-sm hover:cursor-pointer"></div>
        </template>

        <div className="w-full px-5 py-4 bg-gradient-to-b rounded-xl inline-flex justify-between items-center hover:cursor-pointer from-gray-950 to-slate-950 shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.14)] border border-1 border-transparent">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <div className="justify-start text-white text-sm font-normal font-sans leading-none">
              Pro Advanced
            </div>
            <div className="inline-flex justify-center items-center gap-1.5">
              <div className="justify-start text-white text-lg lg:text-xl font-semibold font-sans leading-normal">
                $ 65.00
              </div>
              <div className="absolute top-2 -mt-4 right-4 px-2 py-1 bg-gradient-to-b from-purple-600 to-fuchsia-600 rounded-[60px] outline outline-1 outline-offset-[-1px] outline-purple-400 flex justify-center items-center gap-1.5">
                <div className="justify-start text-white text-[13px] font-medium font-sans leading-[10px]">
                  +113<b> Free Credits</b>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="inline-flex flex-col justify-start items-end gap-1.5">
              <div className="inline-flex justify-center items-center gap-1">
                <div data-svg-wrapper="" className="relative">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.50033 2.5835H10.5003L12.8337 5.55718L7.00033 12.0002L1.16699 5.55718L3.50033 2.5835Z"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.41699 2.5835L4.66699 5.55718L7.00032 12.0002L9.33366 5.55718L7.58366 2.5835"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16699 5.55713H12.8337"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="justify-start text-white text-normal font-sans leading-none">
                  450 Credits
                </div>
              </div>
              <div className="justify-start text-white text-opacity-50 text-normal font-normal font-sans leading-3">
                $0.14 per credit
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro enterprise */}

      <div className="self-stretch relative">
        <template x-if="selectedPlan == 'enterprise'">
          <div className="w-full h-20 absolute bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-2xl blur-sm hover:cursor-pointer"></div>
        </template>

        <div className="w-full px-5 py-4 bg-gradient-to-b rounded-xl inline-flex justify-between items-center hover:cursor-pointer from-gray-950 to-slate-950 shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.14)] border border-1 border-transparent">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <div className="justify-start text-white text-sm font-normal font-sans leading-none">
              Pro Enterprise
            </div>
            <div className="inline-flex justify-center items-center gap-1.5">
              <div className="justify-start text-white text-lg lg:text-xl font-semibold font-sans leading-normal">
                $ 130.00
              </div>
              <div className="absolute top-2 -mt-4 right-4 px-2 py-1 bg-gradient-to-b from-purple-600 to-fuchsia-600 rounded-[60px] outline outline-1 outline-offset-[-1px] outline-purple-400 flex justify-center items-center gap-1.5">
                <div className="justify-start text-white text-[13px] font-medium font-sans leading-[10px]">
                  +350<b> Free Credits</b>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="inline-flex flex-col justify-start items-end gap-1.5">
              <div className="inline-flex justify-center items-center gap-1">
                <div data-svg-wrapper="" className="relative">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.50033 2.5835H10.5003L12.8337 5.55718L7.00033 12.0002L1.16699 5.55718L3.50033 2.5835Z"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.41699 2.5835L4.66699 5.55718L7.00032 12.0002L9.33366 5.55718L7.58366 2.5835"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16699 5.55713H12.8337"
                      stroke="white"
                      strokeWidth="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="justify-start text-white text-normal font-sans leading-none">
                  1000 Credits
                </div>
              </div>
              <div className="justify-start text-white text-opacity-50 text-normal font-normal font-sans leading-3">
                $0.13 per credit
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreditItems;
