"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
import CreditsUpgradeNav from "./nav-credits-upgrade";

function DashboardNavBar() {
  return (
    <nav className="px-6 sm:px-20 py-4 flex justify-between items-center w-full relative">
      <Link href="/dashboard">
        <Image
          src="/logo.png"
          alt="Denu"
          className="block w-auto h-[50px]"
          width={100}
          height={100}
        />
      </Link>

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
          {/*  */}
          {/* Credit Link */}
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

          {/* Upgrade Link */}
          <div className="rounded-xl px-3 py-2.5 flex gap-1.5 justify-center items-center relative bg-gradient-to-r from-[#b349f5] to-[#de4bea] bg-[linear-gradient(0.25912486890784375deg, #b349f5 0.00%, #de4bea 100.00%)] hover:cursor-pointer flex">
            <StaticDiamond />
            <CreditsDialog>
              <small className="text-sm leading-[14px] text-white">
                <span className="text-white text-sm font-medium">Upgrade</span>
              </small>
            </CreditsDialog>
          </div>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="rounded-xl shadow-inner p-[14px] flex gap-2 justify-center items-center  w-10 h-10 bg-white/10 hover:cursor-pointer relative lg:flex"
            >
              <p className=" font-medium text-lg leading-[22px] text-white">
                M
              </p>
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
                  className="block w-full px-4 py-2 text-start text-sm leading-5 text-white hover:bg-gray-100/10 focus:outline-none focus:bg-gray-100/10 transition duration-150 ease-in-out"
                  href="/user/profile"
                >
                  Profile
                </Link>

                <Link
                  className="block w-full px-4 py-2 text-start text-sm leading-5 text-white hover:bg-gray-100/10 focus:outline-none focus:bg-gray-100/10 transition duration-150 ease-in-out"
                  href="/user/api-tokens"
                >
                  API Tokens
                </Link>

                <div className="border-t border-gray-200/10"></div>
                <form method="POST" action="#">
                  <Link
                    className="block w-full px-4 py-2 text-start text-sm leading-5 text-white hover:bg-gray-100/10 focus:outline-none focus:bg-gray-100/10 transition duration-150 ease-in-out"
                    href="/login"
                  >
                    Log Out
                  </Link>
                </form>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <VerticalLinesIcon />
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
                href="/affiliate"
                className="block px-4 py-4 text-sm text-white w-full rounded-xl"
              >
                <div className="flex justify-between">
                  <span>Affiliate</span>
                  <span>→</span>
                </div>
              </Link>

              <Link
                href="/user/profile"
                className="block px-4 py-4 text-sm text-white w-full rounded-xl"
              >
                <div className="flex justify-between">
                  <span>Profile</span>
                  <span>→</span>
                </div>
              </Link>

              <Link
                href="/user/api-tokens"
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

              <CreditsUpgradeNav />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavBar;
