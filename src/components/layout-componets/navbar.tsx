"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import CreditDiamomdIcon from "../dashboardComponents/icons/credit-diamomd";
import VerticalLinesIcon from "../dashboardComponents/icons/vertical-lines";
import NavLink from "./nav-link";
import CreditsDialog from "../dashboardComponents/credits";
import StaticDiamond from "./icons/static-diamond";

function DashboardNavBar() {
  return (
    <div className="px-6 sm:px-20 py-4 flex justify-between items-center w-full relative">
      <div className="overflow-hidden flex gap-2.5 items-center h-full w-fit">
        <Link href="/dashboard">
          <Image
            src="/logo.png"
            alt="N8ked"
            className="block w-auto h-[50px]"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/* Nav links */}
      <div className="overflow-hidden hidden rounded-xl p-1.5 gap-1.5 justify-center items-center absolute left-1/2 transform -translate-x-1/2 lg:flex mx-auto ">
        <div className="flex gap-1.5 items-center bg-white/[6%] p-1.5 rounded-xl">
          <NavLink link="/dashboard" name="Generator" />
          <NavLink link="/api" name="API (Devs)" />
          <NavLink link="/affiliate" name="Affiliate" />
        </div>
      </div>

      {/* Credits/Upgrade Links */}
      <div className="flex gap-3 justify-end items-center absolute right-10">
        <div className="hidden lg:flex gap-3 items-center">
          <div className="rounded-xl justify-center items-center relative bg-white/[4%] ring-credits hover:cursor-pointer">
            <div className="shadow-[inset_0_0_1px_1px_rgba(179,83,235)] px-3 py-2.5 flex gap-1.5 rounded-xl">
              <CreditsDialog>
                <CreditDiamomdIcon />
                <small className="text-sm leading-[14px] text-white ">
                  <span className="text-white text-sm font-medium">
                    3 Credits
                  </span>
                </small>
              </CreditsDialog>
            </div>
          </div>
          <div className="rounded-xl px-3 py-2.5 flex gap-1.5 justify-center items-center relative bg-gradient-to-r from-[#b349f5] to-[#de4bea] bg-[linear-gradient(0.25912486890784375deg, #b349f5 0.00%, #de4bea 100.00%)] hover:cursor-pointer flex">
            <StaticDiamond />
            <CreditsDialog>
              <small className="text-sm leading-[14px] text-white">
                <span className="text-white text-sm font-medium">Upgrade</span>
              </small>
            </CreditsDialog>
          </div>

          {/* User Profile */}
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <div className="rounded-xl shadow-inner p-[14px] flex gap-2 justify-center items-center relative w-10 h-10 bg-white/10 hover:cursor-pointer  lg:flex">
                    <div className="relative">
                      <p className="text-lg leading-[22px] text-white">
                        <span className="text-white text-lg font-medium">
                          M
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 mt-2 outline-none ring-0 border-none bg-transparent"
                align="end"
              >
                <div className="rounded-md py-1 bg-[#280D57] backdrop-blur-lg">
                  <div className="block px-4 py-2 text-xs text-white">
                    Manage Account
                  </div>
                  <Link
                    className="block w-full px-4 py-2 text-start text-sm leading-5 text-white hover:bg-gray-100/10 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    href="/user/profile"
                  >
                    Profile
                  </Link>

                  <Link
                    className="block w-full px-4 py-2 text-start text-sm leading-5 text-white hover:bg-gray-100/10 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    href="/user/api-tokens"
                  >
                    API Tokens
                  </Link>

                  <div className="border-t border-gray-200/10"></div>
                  <form method="POST" action="#" x-data="">
                    <input
                      type="hidden"
                      name="_token"
                      value="yOeJr1V4m5Y3aEcmsuO4zdZpuAiV8kACpBx2xieg"
                    />
                    <Link
                      className="block w-full px-4 py-2 text-start text-sm leading-5 text-white hover:bg-gray-100/10 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      href="/login"
                    >
                      Log Out
                    </Link>
                  </form>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <VerticalLinesIcon />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col top-[72px] w-screen py-2 bg-[#110422] shadow-lg z-50 px-2 space-y-2 lg:hidden outline-none border-none ">
              <Link
                href="/dashboard"
                className="block px-4 py-4 text-sm text-white w-full rounded-xl"
              >
                <div className="flex justify-between">
                  <span>Generator</span>
                  <span>→</span>
                </div>
              </Link>

              <Link
                href="/api"
                className="block px-4 py-4 text-sm text-white w-full rounded-xl"
              >
                <div className="flex justify-between">
                  <span>API (devs)</span>
                  <span>→</span>
                </div>
              </Link>

              <Link
                href="/affilate"
                className="block px-4 py-4 text-sm text-white w-full rounded-xl"
              >
                <div className="flex justify-between">
                  <span>Affiliate</span>
                  <span>→</span>
                </div>
              </Link>

              <Link
                href="/profile"
                className="block px-4 py-4 text-sm text-white w-full rounded-xl"
              >
                <div className="flex justify-between">
                  <span>Profile</span>
                  <span>→</span>
                </div>
              </Link>

              <Link
                href="/api-token"
                className="block px-4 py-4 text-sm text-white w-full rounded-xl"
              >
                <div className="flex justify-between">
                  <span>Api Token</span>
                  <span>→</span>
                </div>
              </Link>

              <Link
                href="#"
                className="block px-4 py-4 text-sm text-white w-full rounded-xl bg-red-600/50"
              >
                <div className="flex justify-between">
                  <span>Log Out</span>
                  <span>→</span>
                </div>
              </Link>

              <div className="lg:hidden flex justify-center items-center w-full py-3 bg-white/[4%] ">
                <div className="flex gap-3 items-center">
                  <div className="rounded-xl justify-center items-center relative bg-white/[4%] ring-credits hover:cursor-pointer">
                    <div className="shadow-inner-xl shadow-white/20 px-3 py-2.5 flex gap-1.5 rounded-xl">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.9999 8.41851L9.99981 19.9999L0 8.41851L4.62021 4.81161H15.3799L19.9999 8.41851Z"
                          fill="#45B2EF"
                        ></path>
                        <path
                          d="M5.30726 9.25184L0 8.41851L4.62021 4.81161L5.30726 9.25184Z"
                          fill="url(#paint0_linear_28_377)"
                        ></path>
                        <path
                          d="M9.99991 19.9999L0 8.41861L5.30723 9.25194L9.99991 19.9999Z"
                          fill="url(#paint1_linear_28_377)"
                        ></path>
                        <path
                          d="M9.99981 19.9999L5.30713 9.25194H14.6925L9.99981 19.9999Z"
                          fill="url(#paint2_linear_28_377)"
                        ></path>
                        <path
                          d="M14.6927 9.25184H5.30737L9.99993 3.97828L14.6927 9.25184Z"
                          fill="url(#paint3_linear_28_377)"
                        ></path>
                        <path
                          d="M19.9999 8.41851L14.6926 9.25184L15.3799 4.81161L19.9999 8.41851Z"
                          fill="url(#paint4_linear_28_377)"
                        ></path>
                        <path
                          d="M19.9999 8.33331L10 19.9146L14.6927 9.16664L19.9999 8.33331Z"
                          fill="url(#paint5_linear_28_377)"
                        ></path>
                        <path
                          d="M9.99972 3.97828L5.30717 9.25184L4.62012 4.81161L9.99972 3.97828Z"
                          fill="url(#paint6_linear_28_377)"
                        ></path>
                        <path
                          d="M15.3799 4.81161L14.6926 9.25184L9.99976 3.97828L15.3799 4.81161Z"
                          fill="url(#paint7_linear_28_377)"
                        ></path>
                        <path
                          d="M9.99999 2.30749C9.86127 2.30749 9.74878 2.19807 9.74878 2.06314V0.244358C9.74878 0.109423 9.86127 0 9.99999 0C10.1387 0 10.2512 0.109423 10.2512 0.244358V2.06314C10.2512 2.19807 10.1387 2.30749 9.99999 2.30749Z"
                          fill="#C358EE"
                        ></path>
                        <path
                          d="M7.21392 3.2572C7.13489 3.2572 7.05709 3.22103 7.0082 3.15335L5.93293 1.66538C5.85312 1.55495 5.88048 1.40255 5.99398 1.32494C6.10752 1.24731 6.2642 1.27392 6.34396 1.38432L7.41923 2.87229C7.49904 2.98271 7.47168 3.13512 7.35818 3.21272C7.31422 3.24276 7.26381 3.2572 7.21392 3.2572Z"
                          fill="#C358EE"
                        ></path>
                        <path
                          d="M12.7857 3.25718C12.7358 3.25718 12.6854 3.24274 12.6414 3.2127C12.5279 3.1351 12.5006 2.98269 12.5804 2.87227L13.6556 1.3843C13.7354 1.27395 13.8921 1.24734 14.0056 1.32492C14.1191 1.40253 14.1464 1.55493 14.0667 1.66536L12.9914 3.15333C12.9425 3.22097 12.8647 3.25718 12.7857 3.25718Z"
                          fill="#C358EE"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_28_377"
                            x1="2.65363"
                            y1="4.81161"
                            x2="2.65363"
                            y2="9.25184"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#A839D5"></stop>
                            <stop offset="1" stop-color="#D58AF3"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_28_377"
                            x1="4.99996"
                            y1="9.25194"
                            x2="4.99996"
                            y2="21.2499"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#9A21CB"></stop>
                            <stop offset="1" stop-color="#E6B6FA"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_28_377"
                            x1="9.99981"
                            y1="9.25194"
                            x2="9.99981"
                            y2="19.9999"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#A12AD0"></stop>
                            <stop offset="0.795982" stop-color="#EDC0FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_28_377"
                            x1="10.0001"
                            y1="3.97828"
                            x2="10.0001"
                            y2="9.25184"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#A839D5"></stop>
                            <stop offset="1" stop-color="#E7AEFF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_28_377"
                            x1="17.3463"
                            y1="4.81161"
                            x2="17.3463"
                            y2="9.25184"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#A839D5"></stop>
                            <stop offset="1" stop-color="#D58AF3"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_28_377"
                            x1="15"
                            y1="9.16664"
                            x2="15"
                            y2="21.1646"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#9A21CB"></stop>
                            <stop offset="1" stop-color="#E6B6FA"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_28_377"
                            x1="7.30992"
                            y1="3.97828"
                            x2="7.30992"
                            y2="9.25184"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CC6CF3"></stop>
                            <stop offset="1" stop-color="#AC3ED9"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_28_377"
                            x1="12.6898"
                            y1="3.97828"
                            x2="12.6898"
                            y2="9.25184"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CC6CF3"></stop>
                            <stop offset="1" stop-color="#AC3ED9"></stop>
                          </linearGradient>
                        </defs>
                      </svg>

                      <small className="text-sm leading-[14px] text-white">
                        <span className="text-white text-sm font-medium">
                          2 Credits
                        </span>
                      </small>
                    </div>
                  </div>
                  <div className="rounded-xl px-3 py-2.5 flex gap-1.5 justify-center items-center relative bg-gradient-to-r from-[#b349f5] to-[#de4bea] bg-[linear-gradient(0.25912486890784375deg, #b349f5 0.00%, #de4bea 100.00%)] hover:cursor-pointer flex">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.00008 3.69047H15.0001L18.3334 7.93859L10.0001 17.1429L1.66675 7.93859L5.00008 3.69047Z"
                        stroke="white"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.16675 3.69047L6.66675 7.93859L10.0001 17.1429L13.3334 7.93859L10.8334 3.69047"
                        stroke="white"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M1.66675 7.93859H18.3334"
                        stroke="white"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>

                    <small className="text-sm leading-[14px] text-white">
                      <span className="text-white text-sm font-medium">
                        Upgrade
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavBar;
