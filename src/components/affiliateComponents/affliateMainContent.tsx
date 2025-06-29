"use client";

import { toast } from "sonner";
import React, { useRef } from "react";

function AffliateMainContent() {
  const inputRef = useRef<null | HTMLInputElement>(null);

  async function copyReferralLink() {
    inputRef.current?.select();
    inputRef.current?.focus();
    await navigator.clipboard.writeText(inputRef.current?.value || "");
    toast("✔︎ Success!", {
      description: "Link copied to clipboard",
      position: "top-right",
      style: {
        background: "#250F39",
        color: "#fff",
        border: "none",
      },
    });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full py-12">
      <div className="mb-8 grid grid-cols-1 gap-5  sm:grid-cols-2 ">
        {/* Total Referrals */}
        <div className="overflow-hidden rounded-[20px] bg-white/[2%]  shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="mr-4 rounded-full bg-[#B353EB]/20 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#B353EB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <dt className="truncate text-sm font-medium text-white/60">
                  Total Referrals
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">0</dd>
              </div>
            </div>
          </div>
        </div>

        {/* Credits Earned  */}
        <div className="overflow-hidden rounded-[20px] bg-white/[2%]  shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="mr-4 rounded-full bg-[#B353EB]/20 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#B353EB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <dt className="truncate text-sm font-medium text-white/60">
                  Credits Earned
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">0</dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 overflow-hidden rounded-[20px] bg-white/[2%]  shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20">
        <div className="px-4 py-5 sm:p-6">
          <div className="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 text-[#B353EB]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
            <h3 className="text-lg font-medium text-white">
              Your Referral Link
            </h3>
          </div>
          <div className="mt-2 flex rounded-md shadow-sm">
            <input
              type="text"
              ref={inputRef}
              readOnly
              value="https://DenuAI.app/ref/C31FEC45"
              className="block w-full min-w-0 flex-1 rounded-l-md border-gray-700 bg-white/5 px-3 py-2 text-white"
              x-ref="referralLink"
              autoFocus
            />
            <button
              type="button"
              onClick={copyReferralLink}
              className="relative inline-flex items-center rounded-r-md border border-l-0 border-gray-700 bg-[#B353EB] px-4 py-2 text-sm font-medium text-white hover:bg-[#9A3CD0] focus:outline-none focus:ring-2 focus:ring-[#B353EB] focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                ></path>
              </svg>
              Copy
            </button>
          </div>
          <div className="mt-4 flex items-start rounded-md bg-[#B353EB]/10 p-4">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-[#B353EB]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-white">How it works</h3>
              <div className="mt-2 text-sm text-white/70">
                <p>
                  Share your unique referral link with friends and colleagues.
                  When someone registers using your link, you&apos;ll
                  automatically earn{" "}
                  <span className="font-semibold text-[#B353EB]">
                    3 credits
                  </span>{" "}
                  once they create their account. These credits can be used
                  immediately for generations!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffliateMainContent;
